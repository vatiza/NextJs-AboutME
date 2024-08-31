import { SignOutButton } from "@clerk/nextjs";

const adminPage = async () => {
  return (
    <div className="mt-60">
      <SignOutButton />
      <h1>AdminPage</h1>
    </div>
  );
};

export default adminPage;
