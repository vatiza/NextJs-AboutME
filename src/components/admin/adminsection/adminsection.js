import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
const AdminSection = async () => {
  const { userId } = auth();
  const user = await currentUser();
  console.log(user.firstName);
  return (
    <div className="mt-32 sticky top-32">
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
          {/* {user?.emailAddresses} */}
        </p>
        <div className="divider"></div>
        <div className="">
          <Link
            className="btn btn-sm btn-outline flex items-center text-warning my-1"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Portfolio
          </Link>
          <Link
            className="btn btn-sm btn-outline flex items-center text-warning my-1"
            href="/admin/addblogs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Post Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
