const getBlogs = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = res.json();
  return data;
};

export default getBlogs;
