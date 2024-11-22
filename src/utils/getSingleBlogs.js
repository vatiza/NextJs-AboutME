const getSingleBlogs = async (slug) => {
  const res = await fetch(`http://localhost:5000/blogs/${slug}`);
  if (!res.ok) {
    return null;
  }
  const blog = await res.json();
  return blog;
};

export default getSingleBlogs;
