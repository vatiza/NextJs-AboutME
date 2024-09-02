"use client";
import Link from "next/link";
const BlogNavbar = () => {
  const navOption = (
    <>
      <li>
        <Link href="/">Portfolio</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100  fixed top-0 z-10  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOption}
          </ul>
        </div>
        <Link href="/blogs" className="font-bold text-2xl">
          Blog<span className="text-warning">&apos;s</span>
        </Link>
      </div>
      {/* TODO:Search field not working. next time work this field */}
      <label className="input input-bordered flex items-center  w-auto ">
        <input
          type="text"
          className="grow w-28 lg:w-auto"
          placeholder="Search"
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
      <div className="navbar-end hidden lg:flex mr-24">
        <ul className="menu menu-horizontal z-[1] px-1"> {navOption}</ul>
      </div>
    </div>
  );
};

export default BlogNavbar;
