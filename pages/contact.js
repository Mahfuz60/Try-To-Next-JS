import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Head from "next/head";

function Contact(props) {
  return (
    <div>
      <Head>
        <title>Contact page</title>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <NavBar></NavBar>
      <h1>This is Contact List</h1>
    </div>
  );
}

export default Contact;
