import getBlogs from "@/utils/getBlogs";

const blogsPage = async () => {
  const data = await getBlogs();
  console.log(data);
  return (
    <div className="mt-20">
      <h1>Blogs is Coming {data.length}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        voluptatum! Quaerat enim eaque officiis rerum perferendis. Sunt qui
        repellendus provident, voluptas, nam in nisi expedita nesciunt soluta
        eveniet repudiandae tempora? Saepe corrupti nam facere doloremque minus.
        Harum aut quos magnam fuga facere facilis, necessitatibus laborum.
        Voluptas repudiandae cupiditate rerum quasi?
      </p>
    </div>
  );
};

export default blogsPage;
