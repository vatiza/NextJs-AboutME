import LoadBlogs from "@/components/blogs/loadBlogs/LoadBlogs";

const BlogsPage = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        Blog<span className="text-warning">{"'s"}</span>
      </h1>
      <span className="divider"></span>
      <LoadBlogs />
    </div>
  );
};

export default BlogsPage;
