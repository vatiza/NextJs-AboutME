import BlogNavbar from "@/components/blogs/navbar/BlogNavbar";

const layouts = ({ children }) => {
  return (
    <div className="h-screen max-h-svh ">
      <BlogNavbar />
      {children}
    </div>
  );
};

export default layouts;
