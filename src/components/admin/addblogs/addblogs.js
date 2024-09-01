"use client";
import getAxios from "@/utils/getAxios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const img_hosting_key = process.env.NEXT_PUBLIC_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
const AddBlogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const axiosPost = getAxios();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    setIsLoading(true);
    const loadingToastId = toast.loading("Progressing...");
    const res = await axiosPost.post(img_hosting_api, imageFile, {
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
      };
      const postBlogs = await axiosPost.post("/blogs", blogsDetails);
      console.log(postBlogs.data);
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
        <textarea
          className="textarea textarea-warning w-full  my-3"
          placeholder="Description "
          {...register("description", { required: "Required" })}
        ></textarea>
        {errors.description?.type === "required" && (
          <p className="text-red-700">Required</p>
        )}
        <input
          type="file"
          className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          {...register("image", { required: "Required" })}
        />
        <div className="mt-7 ">
          <input value="Post" type="submit" className="btn btn-success"></input>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddBlogs;
