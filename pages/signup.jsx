import React from "react";
import Layout from "../components/Layout";
import SignupForm from "../components/SignupForm";

const signup = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl uppercase text-center m-10"> Inscription</h1>
        <SignupForm />
      </div>
    </Layout>
  );
};

export default signup;
