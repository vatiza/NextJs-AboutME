import { SignOutButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
const AdminSection = async () => {
  const { userId } = auth();
  const user = await currentUser();
  console.log(user.firstName);
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <Image
              height={200}
              width={200}
              src={user.imageUrl}
              alt="user photo"
            ></Image>
          </div>
        </div>
        <h1 className="text-xl font-bold">
          {user.firstName} {user.lastName}
        </h1>
        <p className="badge badge-secondary badge-outline">
          {user?.emailAddress}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <div className="btn btn-sm btn-error">
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
