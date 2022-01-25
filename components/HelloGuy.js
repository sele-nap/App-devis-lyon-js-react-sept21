import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useSession } from "next-auth/react";

import { useContext } from "react";

const HelloGuy = () => {
  const { data: session, status } = useSession();
  const { currentUserProfile } = useContext(CurrentUserContext);
  return (
    <div className="">
      {status === "authenticated" && (
        <p className="text-xs italic mx-12 border-2 border-opacity-40 border-third p-1 rounded-xl w-1/5 text-center">
          Bonjour {currentUserProfile.firstname} {currentUserProfile.lastname}
        </p>
      )}
    </div>
  );
};

export default HelloGuy;
