import Image from "next/image";
import profileImg from "../assets/img/portfolio.png";
import aboutImg from "../assets/img/aboutPhoto.jpg";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import { PiStudent } from "react-icons/pi";
import Contactbtn from "../components/button/contactbtn/Contactbtn";
import { GoGoal } from "react-icons/go";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-3 lg:mx-0" id="hero">
        <div className="mt-10 flex gap-4 justify-between ">
          <div className="w-[466px] lg:mt-14">
            <h1 className="text-warning my-1">Hello,</h1>
            <h2 className="text-3xl font-bold my-2">I Am Rakibur Rahman</h2>
            <p className="font-light">
              I am a dedicated web and app developer with extensive knowledge of
              programming. I specialize in creating innovative and efficient
              solutions for various digital platforms. With a passion for
              technology and a keen eye for detail, I strive to deliver
              high-quality, user-friendly applications that meet the needs of
              clients and end-users alike.
            </p>
            <Contactbtn></Contactbtn>
          </div>
          <div>
            <Image
              priority={false}
              className="bg-white rounded-xl mt-16 lg:mr-8 shadow-md"
              src={profileImg}
              width={300}
              height={250}
              alt="portfolio image"
            ></Image>
          </div>
        </div>
        {/* About me */}
        <div id="about" className="mt-10 flex justify-between gap-4 lg:mx-32  ">
          <div>
            <Image
              priority={false}
              className="bg-white hidden lg:block rounded-xl mt-16 lg:mr-8  border-l-4 border-b-4 border-warning    "
              src={aboutImg}
              width={300}
              height={250}
              alt="portfolio image"
            ></Image>
          </div>
          <div className="w-[466px] lg:mt-14">
            <h1 className="text-2xl text-center font-bold my-1">
              About <span className="text-warning">Me</span>
            </h1>

            <p className="font-semibold  text-warning flex items-center">
              <PiStudent className=" me-1" />
              Education
            </p>
            <p className="font-light">
              I am currently pursuing a BSc in Computer Science and Engineering
              at the Bangladesh University of Business and Technology. My
              academic journey is providing me with a solid foundation in
              programming, software development, and problem-solving skills.
            </p>
            <p className="font-semibold flex items-center text-warning">
              <GoGoal className=" me-1" />
              Personal Interests
            </p>
            <p className="font-light">
              In addition to my professional pursuits, I have a passion for
              traveling. Exploring new places and cultures not only enriches my
              personal life but also inspires my creativity and problem-solving
              abilities in my professional work.
            </p>
            <Link
              href="https://drive.google.com/file/d/1EC-laEEnXHfr42TO8Cj694RR6ECdUNQH/view?usp=sharing"
              className="btn btn-warning btn-sm mt-2"
            >
              Resume
            </Link>
          </div>
        </div>
        {/* my skills */}
        <div id="skills" className="mt-10">
          <h1 className="text-center text-xl font-bold lg:text-2xl mb-5">
            My <span className="text-warning">Skills</span>
          </h1>
          <Skills></Skills>
        </div>
        {/* Projects */}
        <div id="projects" className="mt-10">
          <h1 className="text-xl font-bold lg:text-2xl text-center">
            My <span className="text-warning">Projects</span>
          </h1>
          <Projects></Projects>
        </div>
        {/* Contact */}
        <div id="contact" className="mt-10">
          <h1 className="text-xl font-bold lg:text-2xl text-center">
            Contact <span className="text-warning">Me</span>
          </h1>
          <Contact></Contact>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
