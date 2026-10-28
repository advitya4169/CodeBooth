import { Inngest } from "inngest";
import {connectDB} from "./db.js";
import { deleteStreamUser } from "./stream.js";
import { ensureUserFromClerk } from "./userProvisioning.js";

export const inngest = new Inngest({id:"mock-interview"});

const syncUser = inngest.createFunction(
  {
    id: "sync-user",
    triggers: [{ event: "clerk/user.created" }],
  },
  async ({ event }) => {
    await connectDB();
    await ensureUserFromClerk(event.data);
  }
);

const deleteUserFromDB = inngest.createFunction(
  {
    id: "delete-user-from-db",
    triggers: [{ event: "clerk/user.deleted" }],
  },
  async ({ event }) => {
    await connectDB();

    const { id } = event.data;

    await User.deleteOne({ clerkId: id });
    await deleteStreamUser(id.toString());
  }
);
export const functions = [syncUser,deleteUserFromDB];
