import AdminSection from "@/components/admin/adminsection/adminsection";
import { UserButton } from "@clerk/nextjs";

const layout = ({ children }) => {
  return (
    <div className=" h-screen max-h-svh grid grid-cols-2 ">
      <div className="grid grid-cols-2">
        <div>
          <UserButton />
          {/* <AdminSection /> */}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
