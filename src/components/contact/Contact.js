"use client";
import contactAnimation from "../../assets/svg/contact.json";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import Lottie from "react-lottie";
import ReactTypingEffect from "react-typing-effect";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true);
      const loadingToastId = toast.loading("Sending message...");
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_KEY,
          process.env.NEXT_PUBLIC_TEMPLATE_KEY,

          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY,
          }
        )
        .then(
          () => {
            toast.dismiss(loadingToastId);

            console.log("SUCCESS!");
            toast.success("Message Sent!");
            setIsLoading(false);
          },
          (error) => {
            toast.dismiss(loadingToastId);
            toast.error("Message Send Fail.");
            setIsLoading(false);
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
          <div className="hidden items-center mt-6 lg:block ">
            <Lottie options={defaultOptions} height={200} width={400}></Lottie>
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
