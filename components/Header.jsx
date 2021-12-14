import React from "react";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const btnLog = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    <button
      className="bg-yellow-300 m-2 rounded-md p-3"
      onClick={() => signIn()}
    >
      Sign in
    </button>;
  } else {
    <button
      className="bg-blue-300 m-2 rounded-md p-3"
      onClick={() => signOut()}
    >
      Sign out
    </button>;
  }
};
const Header = () => {
  return (
    <div className="bg-purple-700 flex justify-around items-center">
      <h1 className="text-gray-100"> Coucou Francis</h1>

      {/* <button
        className="bg-yellow-300 m-2 rounded-md p-3"
        onClick={() => signIn()}
      >
        Sign in
      </button>
      <button
        className="bg-blue-300 m-2 rounded-md p-3"
        onClick={() => signOut()}
      >
        Sign out
      </button> */}
    </div>
  );
};

export default Header;
