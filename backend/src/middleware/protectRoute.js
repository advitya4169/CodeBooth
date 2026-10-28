import User from "../models/User.js";

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
            const user = await User.findOne({clerkId});
            if(!user) return res.status(404).json({message:"user not found"});
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
