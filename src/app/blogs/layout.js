import BlogNavbar from "../../components/blogs/navbar/BlogNavbar";

export const metadata = {
  title: "Blogs",
  description: "Blogs ",
};

const layouts = ({ children }) => {
  return (
    <div className="h-screen max-h-svh ">
      <BlogNavbar />
      {children}
    </div>
  );
};

export default layouts;
