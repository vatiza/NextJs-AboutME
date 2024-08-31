"use client";
import Cards from "@/components/blogs/cards/Cards";
import { useEffect, useState } from "react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://portfolio-server-dusky-chi.vercel.app/blogs"
      );
      const data = await res.json();
      setBlogs(data);
    };
    fetchData();
  }, []);

  if (!blogs) return <div>Loading...</div>;

  return (
    <div className="mt-20">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        Blog<span className="text-warning">{"'s"}</span>
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

export default BlogsPage;
