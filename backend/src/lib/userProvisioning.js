import User from "../models/User.js";
import { upsertStreamUser } from "./stream.js";

export async function ensureUserFromClerk(clerkUser) {
  const clerkId = clerkUser.id;
  const emailAddresses = clerkUser.emailAddresses || clerkUser.email_addresses || [];
  const primaryEmailId =
    clerkUser.primaryEmailAddressId || clerkUser.primary_email_address_id;
  const primaryEmail = emailAddresses.find(
    (address) => address.id === primaryEmailId
  );
  const email =
    primaryEmail?.emailAddress ||
    primaryEmail?.email_address ||
    emailAddresses[0]?.emailAddress ||
    emailAddresses[0]?.email_address;

  if (!clerkId || !email) {
    throw new Error("Clerk user is missing a stable ID or verified email address");
  }

  const firstName = clerkUser.firstName || clerkUser.first_name || "";
  const lastName = clerkUser.lastName || clerkUser.last_name || "";
  const name = `${firstName} ${lastName}`.trim() || email.split("@")[0];
  const profileImage = clerkUser.imageUrl || clerkUser.image_url || "";

  let user;
  try {
    user = await User.findOneAndUpdate(
      { clerkId },
      {
        $setOnInsert: { clerkId, email, name, profileImage },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
  } catch (error) {
    // A concurrent Inngest delivery or authenticated request may win the
    // upsert. Reuse that row instead of creating a duplicate user.
    if (error.code !== 11000) throw error;
    user = await User.findOne({ clerkId });
    if (!user) throw error;
  }

  await upsertStreamUser({
    id: user.clerkId,
    name: user.name,
    image: user.profileImage,
  });

  return user;
}
