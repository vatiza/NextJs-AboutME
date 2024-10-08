import getSingleBlogs from "../../../utils/getSingleBlogs";
import moment from "moment";
import Image from "next/image";
import CopyUrlBtn from "../../../components/button/copylinkbtn/copyurlbtn";

export async function generateMetadata({ params }) {
  const blog = await getSingleBlogs(params.slug);

  return {
    title: blog?.title || "Blogs",
    description: blog?.description || "Blogs",
  };
}
const detailsPage = async ({ params }) => {
  const blog = await getSingleBlogs(params.slug);

  const {
    title,
    postdate,
    description,
    img,
    bloggerImg,
    bloggerFirstName,
    bloggerLastName,
    emailAddresses,
  } = blog;

  return (
    <div className="mockup-browser bg-base-300 border mt-32">
      <div className="mockup-browser-toolbar">
        <div className="input">{title}</div>
      </div>
      <div
        className="bg-base-200 
       p-1 lg:p-4"
      >
        <div className=" flex justify-center ">
          <div>
            <figure>
              <Image
                className="w-full rounded-md shadow-md"
                width={400}
                height={400}
                priority="false"
                src={img}
                alt={title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-2 mb-5 mx-4  justify-between ">
              <div className="flex items-center gap-4 ">
                <div className="avatar">
                  <div className="w-12  rounded-full">
                    <Image
                      width={20}
                      height={20}
                      src={bloggerImg}
                      alt={bloggerFirstName}
                    ></Image>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold">
                    {bloggerFirstName} {bloggerLastName}
                  </h1>
                  <a
                    className="hover:text-warning"
                    href={`mailto:${emailAddresses}`}
                  >
                    {emailAddresses}
                  </a>
                  <p className="">{moment(postdate).format("LL")}</p>
                </div>
              </div>
              <div>
                <CopyUrlBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailsPage;
