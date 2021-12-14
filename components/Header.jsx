import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data, status } = useSession();
  return (
    <div className="bg-purple-700 flex justify-around items-center h-12">
      <h1 className="text-gray-100 uppercase text-3xl"> Coucou Francis</h1>

      {status === "unauthenticated" && (
        <button
          className="bg-yellow-100 p-2 rounded-xl"
          onClick={() => signIn()}
        >
          Se connecter
        </button>
      )}
      {status === "authenticated" && (
        <button
          className="bg-yellow-100 p-2 rounded-xl"
          onClick={() => signOut()}
        >
          Se déconnecter
        </button>
      )}
    </div>
  );
};
