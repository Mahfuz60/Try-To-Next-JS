import React from "react";
import Link from "next/link";

function index(props) {
  return (
    <div>
      <nav>
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
}

export default index;
