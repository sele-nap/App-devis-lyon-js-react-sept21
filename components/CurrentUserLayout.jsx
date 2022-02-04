import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

export default function CurrentUserLayout({ children, pageTitle }) {
  const { data, status } = useSession();
  const router = useRouter();
  const { currentUserIsAdmin, currentUserProfile } =
    useContext(CurrentUserContext);
  console.log(currentUserProfile);

  useEffect(() => {
    if (
      status !== "loading" &&
      currentUserProfile.id !== parseInt(data?.user?.id)

      // ||
      // currentUserProfile.role != "client"
    ) {
      router.push("/estimates");
    }
  }, [status, data, router]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <main>{children}</main>
    </>
  );
}
