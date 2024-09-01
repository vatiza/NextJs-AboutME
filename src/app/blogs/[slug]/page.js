import getSingleBlogs from "@/utils/getSingleBlogs";
import Image from "next/image";

const detailsPage = async ({ params }) => {
  const blog = await getSingleBlogs(params.slug);

  const { title, postdate, description, img } = blog;

  return (
    <div className="mt-20 flex justify-center">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image width={400} height={400} src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{postdate}</p>
        </div>
      </div>
    </div>
  );
};

export default detailsPage;
