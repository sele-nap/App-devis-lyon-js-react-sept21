import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ClientLayout({ children, pageTitle }) {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && data?.user?.role !== "client") {
      router.push("/login");
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
