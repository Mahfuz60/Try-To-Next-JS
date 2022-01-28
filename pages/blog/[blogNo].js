import { useRouter } from "next/router";
import React from "react";


function blogNo(props) {
  const router =useRouter();
  const blogNumber = router.query.blogNo;
  return (
    <div>
      <h1>This is {blogNumber} Content </h1>
    </div>
  );
}

export default blogNo;
