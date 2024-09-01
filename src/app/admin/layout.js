import AdminNavbar from "@/components/admin/adminnav/AdminNavbar";
import AdminSection from "@/components/admin/adminsection/adminsection";

const layout = ({ children }) => {
  return (
    <div className="">
      <AdminNavbar />
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-1">
          <AdminSection />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default layout;
