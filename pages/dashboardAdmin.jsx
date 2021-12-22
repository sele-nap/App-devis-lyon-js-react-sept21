import React from "react";
import AdminLayout from "../components/AdminLayout";
import Layout from "../components/Layout";

const dashboardAdmin = () => {
  return (
    <div>
      <AdminLayout>
        <Layout>
          <h1> Dashboard for Admin only</h1>
        </Layout>
      </AdminLayout>
    </div>
  );
};

export default dashboardAdmin;
