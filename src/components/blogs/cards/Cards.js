import Link from "next/link";
const Cards = ({ blog }) => {
  const { title, postdate, description, img, _id } = blog;
 
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <Link href={`/blogs/${_id}`}>{title}</Link>
          </h2>
          <p>{description}</p>
          <p>{postdate}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
