import AdminNavbar from "../../components/admin/adminnav/AdminNavbar";
import AdminSection from "../../components/admin/adminsection/adminsection";
export const metadata = {
  title: "Admin Page",
  description: "Admin on portfolio ",
};
const layout = ({ children }) => {
  return (
    <div>
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
