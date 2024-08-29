const layout = ({ children }) => {
  return (
    <div className=" h-screen max-h-svh grid grid-cols-2 ">
      <div>
        <h1>Left Side</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
