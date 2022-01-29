import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <div>
      <NavBar></NavBar>
      {data.slice(0, 10).map((currentData) => {
        return (
          <div key={currentData.id} className="staticData">
            <h1>{currentData.id}</h1>
            <Link href={`/blog/${currentData.id}`}>
              <h3>{currentData.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default blog;
