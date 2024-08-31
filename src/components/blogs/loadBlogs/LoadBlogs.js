"use client";

import { useEffect, useState } from "react";
import Cards from "../cards/Cards";

const LoadBlogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://vatiza-portfolio.vercel.app/blogs");
      const data = await res.json();
      setBlogs(data);
    };
    fetchData();
  }, []);

  if (!blogs) return <div>Loading...</div>;
  return (
    <div>
      <div className="grid grid-flow-row lg:grid-cols-3 gap-4">
        {blogs?.map((blog) => (
          <Cards key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LoadBlogs;
