// import Link from "next/link";
import React from "react";
// import img from "next/image";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
      <main>
      <img src="/img/smile.png" alt="메인이미지"/>
      </main>
  );
}

Home.getLayout = (page) => (
    <Layout meta={{title: 'NextJs 프로젝트'}}>
        {page}
    </Layout>
)