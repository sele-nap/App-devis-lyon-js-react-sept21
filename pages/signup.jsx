import React from "react";
import Layout from "../components/Layout";
import SignupForm from "../components/SignupForm";

const signup = () => {
  return (
    <Layout title="inscription">
      <div>
        <SignupForm />
      </div>
    </Layout>
  );
};

export default signup;
