"use client";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contactbtn = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        to="contact"
        className="btn btn-warning btn-sm mt-2"
        smooth={true}
        offset={-100}
        duration={500}
      >
        <MdOutlineEmail />
        Contact
      </Link>
      <a
        href="https://www.linkedin.com/in/vatiza/"
        className="btn btn-warning btn-sm mt-2"
        smooth={true}
      >
        <FaLinkedin />
        Linkedin
      </a>

      <a
        href="https://github.com/vatiza"
        className="btn btn-warning btn-sm mt-2"
        smooth={true}
      >
        <FaGithub /> Github
      </a>
    </div>
  );
};

export default Contactbtn;
<FaLinkedin />;
