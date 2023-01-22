import React, { useState } from "react";
import BasicTable from "./Table";
const Posts = ({
  posts,
  loading,
  setSelectedItemForEdit,
  setShowAddEditTransactionModal,
  setLoading,
}) => {
  console.log(posts);

  const [id, setId] = useState("0");
  const [title, setTitle] = useState("title");
  const [body, setBody] = useState(["Body"]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <BasicTable
        data={posts}
        setSelectedItemForEdit={setSelectedItemForEdit}
        setShowAddEditTransactionModal={setShowAddEditTransactionModal}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Posts;
