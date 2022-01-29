/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Image from "next/image";
import Head from 'next/head'

function About(props) {
  return (
    <div >
      <Head>
        <title>About Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar></NavBar>
      <div  style={{textAlign: 'center'}}>
        <h1>This is About Pages</h1>
        <Image
          src="/demo.jpg"
          width="500"
          height="500"
          alt="aboutImage"
        ></Image>
      </div>

      
    </div>
  );
}

export default About;
