import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Head from 'next/head'

function Home(props) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar></NavBar>
      <h1>This is Home Pages</h1>
    </div>
  );
}

export default Home;
