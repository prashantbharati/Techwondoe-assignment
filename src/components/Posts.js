import React from "react";
import BasicTable from "./Table";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(posts);

  return <BasicTable data={posts} />;
};

export default Posts;
