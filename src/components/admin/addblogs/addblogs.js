"use client";
import dynamic from "next/dynamic"; 
import getAxios from "@/utils/getAxios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import "../../../../node_modules/react-quill/dist/quill.snow.css";

const img_hosting_key = process.env.NEXT_PUBLIC_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddBlogs = ({ user }) => {
  const axiosPublic = getAxios();
  const [blogs, setBlogs] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://vatiza-portfolio.vercel.app/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const emailAddresses = user.emailAddresses[0].emailAddress;
  const bloggerPhoto = user.imageUrl;
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const toolbarOptions = [
    [{ size: ["small", false, "large", "huge"] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "formula"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = {
    toolbar: toolbarOptions,
  };

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    setIsLoading(true);
    const loadingToastId = toast.loading("Progressing...");
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const blogsDetails = {
        title: data.title,
        description: data.description,
        img: res.data.data.display_url,
        postdate: new Date(),
        bloggerFirstName: user.firstName,
        bloggerLastName: user.lastName,
        emailAddresses: emailAddresses,
        bloggerImg: bloggerPhoto,
      };
      const postBlogs = await axiosPublic.post("/blogs", blogsDetails);

      if (postBlogs.data.insertedId) {
        toast.dismiss(loadingToastId);
        toast.success("Success!");
        setIsLoading(false);
      }
      reset();
    } else {
      toast.error("Something Wrong, Try Again!");
    }
  };

  const handleDeleteBlog = (blog) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/blogs/${blog._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${blog.title} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  const handleRefreshTable = () => {
    fetchData();
  };

  if (!blogs)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered input-warning w-full max-w-xs"
          {...register("title", { required: "Required" })}
        />
        {errors.title?.type === "required" && (
          <p className="text-red-700">Required</p>
        )}

        <div className="my-5 rounded-md  ">
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ReactQuill
                {...field}
                modules={module}
                theme="snow"
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <input
          type="file"
          className="file-input file-input-bordered file-input-warning w-full mt-5 max-w-xs"
          {...register("image", { required: "Required" })}
        />
        <div className="mt-7 ">
          <input value="Post" type="submit" className="btn btn-warning"></input>
        </div>
      </form>
      <div className="divider py-5"></div>
      {/* Table */}
      <div>
        <button
          onClick={() => handleRefreshTable()}
          className="btn btn-sm flex items-center"
        >
          Refresh Table{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>IMG</th>
                <th>Blogger</th>
                <th>Delete</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            src={blog.img}
                            width={20}
                            height={20}
                            alt={blog.title}
                          />
                        </div>
                      </div>
                      <Link
                        href={`/blogs/${blog._id}`}
                        className="hover:text-blue-700 hover:font-semibold"
                      >
                        <div className="font-bold">{blog.title}</div>
                        <div className="text-sm opacity-50">
                          {blog?.postdate}
                        </div>
                      </Link>
                    </div>
                  </td>
                  <td>
                    {blog?.bloggerFirstName} {blog?.bloggerLastName}
                    <br />
                    <span className="badge badge-ghost badge-sm hover:text-amber-500  ">
                      <a href={`mailto:${blog?.emailAddresses}`}>
                        {blog.emailAddresses}
                      </a>
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteBlog(blog)}
                      className="btn btn-sm text-red-500 hover:text-red-700 btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                  <th>
                    <button className="btn-sm btn-ghost btn text-yellow-400 hover:text-yellow-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddBlogs;
