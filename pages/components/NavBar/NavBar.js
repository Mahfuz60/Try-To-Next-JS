import React from "react";
import Link from "next/link";


const NavBar = () => {
  return (
    <div className="container">
      <nav  className="navbar">
        <ul>
          <li>
            <Link href="/home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
