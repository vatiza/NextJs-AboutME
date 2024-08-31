import getSingleBlogs from "@/utils/getSingleBlogs";
import Image from "next/image";

const detailsPage = async ({ params }) => {
  const blog = await getSingleBlogs(params.slug);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const { title, postdate, description, img } = blog;

  return (
    <div className="mt-20 flex justify-center">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image
            width={300}
            height={300}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={title}
          />
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
