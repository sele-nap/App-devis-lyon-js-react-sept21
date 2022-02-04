import React from "react";
import { getCsrfToken } from "next-auth/react";
import Layout from "../components/Layout";
import CtaButton from "../components/CtaButton";
import { useRouter } from "next/dist/client/router";

export default function LogIn({ csrfToken }) {
  const { query } = useRouter();

  return (
    <div>
      <Layout title="Connectez-vous à votre compte">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <form
                className="mt-8 space-y-6"
                method="post"
                action="/api/auth/callback/credentials"
              >
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />

                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email-address"
                      name="username"
                      type="text"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Mot de passe
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Mot de passe"
                    />
                  </div>
                </div>
                <button
                  id="credentials-login-btn"
                  className=" py-2 px-4 hover:bg-yellow-300 bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10"
                  type="submit"
                >
                  Se connecter
                </button>
                {query.error === "CredentialsSignin" && (
                  <p className="p-2 text-red-600 text-xl font-bold text-center">
                    {"Les identifiants ne correspondent pas "}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  // capturing the callback url if any, which should include the current domain for security ?
  const host =
    typeof context.query?.callbackUrl === "string" &&
    context.query?.callbackUrl.startsWith(process.env.NEXTAUTH_URL)
      ? context.query?.callbackUrl
      : process.env.NEXTAUTH_URL;
  const redirectURL = encodeURIComponent(host);
  // getting both the csrf form token and (next-auth.csrf-token cookie + next-auth.callback-url cookie)
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/auth/csrf?callbackUrl=${redirectURL}`
  );
  const { csrfToken } = await res.json();
  const headers = await res.headers;
  // placing the cookies
  const [csrfCookie, redirectCookie] = headers.get("set-cookie").split(",");
  context.res.setHeader("set-cookie", [csrfCookie, redirectCookie]);
  // placing form csrf token
  return {
    props: {
      csrfToken,
    },
  };
}
