import getBlogs from "@/utils/getBlogs";
import Cards from "../cards/Cards";
const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-flow-row lg:grid-cols-3 gap-4">
      {blogs?.map((blog) => (
        <Cards key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
