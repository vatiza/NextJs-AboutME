"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BlogNavbar = () => {
  const pathname = usePathname();

  const navOption = (
    <>
      <li>
        <Link href="/">
          About <span className="text-warning">Me</span>
        </Link>
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
        {pathname == "/blogs" ? (
          <>
            <a href="/" className="font-bold text-2xl">
              Blog<span className="text-warning">&apos;s</span>
            </a>
          </>
        ) : (
          <>
            <a href="/" className="font-bold text-2xl">
              About<span className="text-warning">Me. </span>
            </a>
          </>
        )}
      </div>
      <div className="navbar-end hidden lg:flex mr-24">
        <ul className="menu menu-horizontal z-[1] px-1"> {navOption}</ul>
      </div>
    </div>
  );
};

export default BlogNavbar;