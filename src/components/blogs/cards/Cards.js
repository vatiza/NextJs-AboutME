import moment from "moment";
import Image from "next/image";
import Link from "next/link";
const Cards = ({ blog }) => {
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
  console.log(img);
  const descriptionSlice =
    description.length > 100 ? description.slice(0, 100) : description;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl m-3 lg:mx-auto ">
        <figure>
          <Image
            width={400}
            height={400}
            priority="false"
            src={img}
            alt={title}
          />
        </figure>
        <div className="card-body flex flex-col ">
          <h2 className=" text-xl font-bold hover:text-blue-500">
            <Link href={`/blogs/${_id}`}>{title}</Link>
          </h2>

          <div className=" overflow-hidden text-ellipsis h-12  ">
            <div dangerouslySetInnerHTML={{ __html: descriptionSlice }} />
          </div>
          <div className="divider -mt-2"></div>

          <div className="flex items-center gap-2">
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
              <p>{moment(postdate).format("LL")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
