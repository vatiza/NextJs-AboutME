import Cards from "@/components/blogs/cards/Cards";
import getBlogs from "@/utils/getBlogs";

const blogsPage = async () => {
  const blogs = await getBlogs();
  return (
    <div className="mt-20">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        Blog<span className="text-warning">&apos;s</span>
      </h1>
      <span className="divider"></span>

      <div className="grid grid-flow-row lg:grid-cols-3 gap-4">
        {blogs?.map((blog) => (
          <Cards key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default blogsPage;
