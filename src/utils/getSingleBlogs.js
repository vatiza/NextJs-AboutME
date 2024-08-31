const getSingleBlogs = async (slug) => {
  const res = await fetch(
    `https://portfolio-server-dusky-chi.vercel.app/blogs/${slug}`
  );
  if (!res.ok) {
    return null;
  }
  const blog = await res.json();
  return blog;
};

export default getSingleBlogs;
