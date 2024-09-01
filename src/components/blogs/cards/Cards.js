import Image from "next/image";
import Link from "next/link";

const Cards = ({ blog }) => {
  const { title, postdate, description, img, _id } = blog;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-80 h-96 shadow-xl">
        <figure>
          <Image
            className="w-full h-48 object-cover"
            width={400}
            height={400}
            src={img}
            alt={title}
          />
        </figure>
        <div className="card-body flex flex-col ">
          <h2 className="card-title text-xl font-bold">
            <Link href={`/blogs/${_id}`}>{title}</Link>
          </h2>
          <p className="flex-grow text-sm overflow-hidden text-ellipsis">
            {description}
          </p>
          <p className="text-sm">Post: {postdate}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
