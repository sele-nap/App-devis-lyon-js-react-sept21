import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useSession } from "next-auth/react";

import { useContext } from "react";

const HelloGuy = () => {
  const { data: session, status } = useSession();
  const { currentUserProfile } = useContext(CurrentUserContext);
  return (
    <div>
      {status === "authenticated" && (
        <p className="text-xs italic mx-12">
          Bonjour {currentUserProfile.firstname} {currentUserProfile.lastname}
        </p>
      )}
    </div>
  );
};

export default HelloGuy;
