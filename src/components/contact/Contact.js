"use client";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import Lottie from "react-lottie";
import contactAnimation from "@/assets/img/svg/contact.json";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReactTypingEffect from "react-typing-effect";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_NEXT_SERVICE_KEY,
        process.env.NEXT_PUBLIC_NEXT_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_NEXT_EMAILJS_PUB_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message Send Fail.");
        }
      );
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
        <ReactTypingEffect
          speed={150}
          eraseSpeed={50}
          text={["Get In Touch"]}
        ></ReactTypingEffect>
      </h1>
      <div className="flex justify-center gap-5 mt-6  ">
        <div className="hidden items-center -mt-6 lg:block">
          <Lottie options={defaultOptions} height={400} width={400}></Lottie>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered sm:w-auto lg:w-96 my-3 "
              />
            </div>

            <div>
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered sm:w-auto lg:w-96 my-3  "
              />
            </div>

            <div>
              <textarea
                required
                name="message"
                className="textarea textarea-bordered w-full lg:w-96"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-outline w-full btn-warning mt-4"
            >
              <FiSend />
              Send
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
