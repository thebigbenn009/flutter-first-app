import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      Welcome Home!
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
};

export default Home;
