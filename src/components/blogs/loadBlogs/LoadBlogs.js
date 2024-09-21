"use client";
import { useEffect, useState } from "react";
import Cards from "../cards/Cards";

const LoadBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [order, setOrder] = useState("latest");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://vatiza-portfolio.vercel.app/blogs?order=${order}`
        );
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, [order]);

  if (!blogs) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div>
      {/* Sort dropdown */}
      <label>Sort By:</label>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>

      <div className="grid grid-flow-row lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Cards key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LoadBlogs;
