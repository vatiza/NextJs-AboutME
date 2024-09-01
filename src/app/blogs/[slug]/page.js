import getSingleBlogs from "@/utils/getSingleBlogs";
import moment from "moment";
import Image from "next/image";

const detailsPage = async ({ params }) => {
  const blog = await getSingleBlogs(params.slug);

  const {
    title,
    postdate,
    description,
    img,
    _id,
    bloggerImg,
    bloggerFirstName,
    bloggerLastName,
    emailAddresses,
  } = blog;

  return (
    <div className="mt-20 flex justify-center ">
      <div className="bg-base-100  shadow-xl">
        <figure>
          <Image width={400} height={400} src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="divider"></div>
        <div className="flex items-center gap-2 mb-5">
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
            <a className="hover:text-warning" href={`mailto:${emailAddresses}`}>
              {emailAddresses}
            </a>
            <p className="">{moment({ postdate }).format("LLL")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailsPage;
