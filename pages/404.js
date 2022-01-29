/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const errorPage = () => {
  const router = useRouter();
  const handleInput = () => {
    router.push("/");
  };

  {
    /* back to homepage process 3 */
  }
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <div>
        <div>
          <h1>404!</h1>
          <h2>We are Sorry Page is Not Found!</h2>
        </div>
        {/* back to homepage process 1 */}

        {/* <button
          onClick={() => {
            router.push("/");
          }}
        >
          BackToHomePage+
        </button> */}

        {/* back to homepage process 2 */}
        {/* <button onClick={handleInput}>BackToHomePage+</button> */}
      </div>
    </>
  );
};

export default errorPage;
