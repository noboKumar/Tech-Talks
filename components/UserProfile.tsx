import { getUserSession } from "@/lib/userSession";

const UserProfile = async () => {
  const user = await getUserSession();
  console.log(user);
  return <div></div>;
};

export default UserProfile;
