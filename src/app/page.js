import Image from "next/image";
import profileImg from "@/assets/img/portfolio.png";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";

const HomePage = () => {
  return (
    <div className="mx-3 lg:mx-0">
      <div className="mt-10 flex gap-4 justify-between ">
        <div className="w-[466px] lg:mt-14">
          <h1 className="text-warning my-1">Hello,Welcome</h1>
          <h2 className="text-3xl font-bold my-2">I am Rakibur Rahman</h2>
          {/* TODO: Change short bio on before the production */}
          <p className="text-warning">
            ToDO:Change short bio on before the production
          </p>
          <p className="font-light">
            There are many variations of passages ofLorem Ipsum available, but
            the majority havesuffered alteration in some form, by injected
            humour,
          </p>
          <button className="btn btn-warning btn-sm mt-2">Contact Me</button>
        </div>
        <div>
          <Image
            className="bg-white rounded-xl mt-16 lg:mr-8"
            src={profileImg}
            width={300}
            height={250}
            alt="portfolio image"
          ></Image>
        </div>
      </div>
      {/* About me */}
      <div className="mt-10 flex justify-between gap-4 lg:mx-32  ">
        <div>
          <Image
            className="bg-white rounded-xl mt-16 lg:mr-8  border-l-8 border-b-4 border-warning    "
            src={profileImg}
            width={300}
            height={250}
            alt="portfolio image"
          ></Image>
        </div>
        <div className="w-[466px] lg:mt-14">
          <h1 className="text-2xl font-bold my-1">
            About <span className="text-warning">Me</span>
          </h1>

          {/* TODO: Change short bio on before the production */}
          <p className="text-warning">
            ToDO:Change short bio on before the production
          </p>
          <p className="font-light">
            There are many variations of passages ofLorem Ipsum available, but
            the majority havesuffered alteration in some form, by injected
            humour,
          </p>
          <button className="btn btn-warning btn-sm mt-2">Contact Me</button>
        </div>
      </div>
      {/* my skills */}
      <div className="my-5">
        <h1 className="text-center text-xl font-bold lg:text-2xl">
          My <span className="text-warning">Skills</span>
        </h1>
        <Skills></Skills>
      </div>
      {/* Projects */}
      <div className="my-5">
        <h1 className="text-xl font-bold lg:text-2xl text-center">
          My <span className="text-warning">Projects</span>
        </h1>
        <Projects></Projects>
      </div>
    </div>
  );
};

export default HomePage;
