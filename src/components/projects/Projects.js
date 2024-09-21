import rafsanMock from "../../assets/img/rafsanmock.png";
import blogsImg from "../../assets/img/blogs.png";
import Image from "next/image";
import RafsanTravels from "../client/RafsanTravels";
import Links from "../../links/Links";

const Projects = () => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-col-reverse px-4">
            <div className=" rounded-lg  mb-4">
              <Image
                priority={false}
                src={rafsanMock}
                className="object-cover transition-transform duration-300 hover:scale-105 "
                alt="rafsan tours and travelsbd"
              ></Image>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Rafsan Tourist & Travel <span className="text-green-700">BD</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Rafsan Tourist & Travel BD is a travel website offering various
              tourist services. It includes information on travel packages,
              booking details, and customer support for travelers in Bangladesh.
              The site aims to provide a comprehensive travel experience for its
              users.
            </p>
            <RafsanTravels></RafsanTravels>
          </div>
        </div>
      </div>
      {/* TODO: --------------Project 2----------------- */}
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className=" rounded-lg  mb-4">
            <Image
              priority={false}
              src={blogsImg}
              className="object-cover transition-transform duration-300 hover:scale-105 "
              alt="rakib blogs"
            ></Image>
          </div>

          <div className=" px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Blog<span className="text-warning">&apos;s</span> Site
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              This is where I share my personal experiences and thoughts on
              technology. From time to time, I post articles about tech trends,
              coding, and development. Explore my blogs to learn more about my
              journey.
            </p>
            <Links />
          </div>
        </div>
      </div>
      {/* TODO: --------------Project 3----------------- */}
    </div>
  );
};

export default Projects;
