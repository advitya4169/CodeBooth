import { clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { ensureUserFromClerk } from "../lib/userProvisioning.js";

export const protectRoute = [
    async (req,res,next)=>{
        try{
            // clerkMiddleware() is mounted globally. Avoid requireAuth() here:
            // its default behavior redirects browser requests to `/`, which
            // turns an API authentication failure into a misleading root 404.
            const clerkId=req.auth()?.userId;
            if(!clerkId)
                return res.status(401).json({message:"Authentication required"});
            //find user in db
            let user = await User.findOne({clerkId});
            if(!user) {
                // Clerk middleware has already verified this identity. Fetch
                // its canonical profile and provision the local record if the
                // asynchronous Inngest user.created event has not completed.
                const clerkUser = await clerkClient.users.getUser(clerkId);
                user = await ensureUserFromClerk(clerkUser);
            }
            //attach user to request
            req.user=user
            next();
        }
        catch(error){
            console.error("Error in protected Route middleware",error);
            res.status(500).json({message:"Internal Server error"});
        }
    }
]
