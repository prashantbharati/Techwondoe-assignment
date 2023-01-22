import React from "react";
import BasicTable from "./Table";
const Posts = ({
  posts,
  loading,
  setSelectedItemForEdit,
  setShowAddEditTransactionModal,
  setLoading,
}) => {
  console.log(posts);

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
