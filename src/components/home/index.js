import { Layout } from "antd";
import React from "react";
import Main from "../layout/maincontent";
import Head from "../layout/dashboard/header";
import Foot from "../layout/dashboard/footer";
import Sidbar from "../layout/dashboard/sidbar";

export default function Home() {
  return (
    <Layout>
      <Sidbar />
      <Layout>
        <Head />
        <Main />
        <Foot />
      </Layout>
    </Layout>
  );
}
