const getSingleBlogs = async (slug) => {
  const res = await fetch(`http://localhost:5000/blogs/${slug}`);

  return res.json();
};

export default getSingleBlogs;
