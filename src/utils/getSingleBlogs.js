const getSingleBlogs = async (slug) => {
  const res = await fetch(`https://vatiza-portfolio.vercel.app/blogs/${slug}`);
  if (!res.ok) {
    return null;
  }
  const blog = await res.json();
  return blog;
};

export default getSingleBlogs;
