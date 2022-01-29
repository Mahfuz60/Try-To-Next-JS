import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Head from "next/head";

const blog = () => {
  return (
    <div>
      <Head>
        <title>Blog page</title>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <NavBar></NavBar>
      <h1>This is blog content</h1>
    </div>
  );
};

export default blog;
