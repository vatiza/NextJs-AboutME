import { currentUser } from "@clerk/nextjs/server";
const getUser = async () => {
  const user = await currentUser();
  return user;
};

export default getUser;
