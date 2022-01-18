import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminNavBar from "./AdminNavBar";

export default function ClientLayout({ children, pageTitle }) {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && status == "unauthenticated") {
      router.push("/login");
    }
  }, [status, data, router]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AdminNavBar />

      <main>{children}</main>
    </>
  );
}
