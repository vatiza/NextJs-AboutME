"use client";
import { useEffect, useState } from "react";
import Cards from "../cards/Cards";

const LoadBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [order, setOrder] = useState("latest");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://vatiza-portfolio.vercel.app/blogs?order=${order}&search=${search}`
        );
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, [order, search]);

  if (!blogs) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div>
      <div className=" mx-5 lg:mx-0 flex items-center justify-between ">
        <div>
          <label>Sort By:</label>
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div>
          <label className="input input-bordered flex items-center ">
            <input
              type="text"
              className="grow w-28 lg:w-auto"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="grid grid-flow-row lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Cards key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LoadBlogs;
