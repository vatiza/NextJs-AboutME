"use client";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import contactAnimation from "@/assets/img/svg/contact.json";
import { useEffect } from "react";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.fname);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold lg:text-3xl">
        Get In Touch
      </h1>
      <div className="flex justify-center mt-6  ">
        <div className="hidden items-center lg:block">
          <Lottie options={defaultOptions} height={300} width={300}></Lottie>
        </div>
        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered sm:w-auto lg:w-96 my-3 "
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered sm:w-auto lg:w-96 my-3  "
              />
            </div>

            <div>
              <textarea
                className="textarea textarea-bordered sm:w-auto lg:w-96"
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" className="btn btn-secondary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
