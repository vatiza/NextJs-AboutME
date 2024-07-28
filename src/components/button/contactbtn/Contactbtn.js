"use client";
import { Link } from "react-scroll";

const Contactbtn = () => {
  return (
    <div>
      <Link
        to="contact"
        className="btn btn-warning btn-sm mt-2"
        smooth={true}
        offset={-100}
        duration={500}
      >
        Contact
      </Link>
    </div>
  );
};

export default Contactbtn;
