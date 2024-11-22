import { currentUser } from "@clerk/nextjs/server";
const getUser = async () => {
  const user = await currentUser();
  console.log(user.emailAddresses[0].emailAddress);
  return user;
};

export default getUser;
