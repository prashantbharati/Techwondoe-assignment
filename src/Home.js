import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import Spinner from "./components/Spinner";
import AddEditTransaction from "./components/AddEditTransaction";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    React.useState(false);

  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPosts);
  return (
    <div className="container mt-5">
      {loading && <Spinner />}

      <div className="d-flex flex-row ">
        <div>
          <h1 className="text-primary mb-3">Company Settings</h1>
        </div>

        <div className="ml-5 d-flex justify-content-end">
          <button
            className="btn btn-primary"
            onClick={() => setShowAddEditTransactionModal(true)}
          >
            ADD NEW
          </button>
        </div>
      </div>
      <Posts
        posts={currentPosts}
        loading={loading}
        setSelectedItemForEdit={setSelectedItemForEdit}
        setShowAddEditTransactionModal={setShowAddEditTransactionModal}
        setLoading={setLoading}
      />
      <div className=" d-flex justify-content-center mt-2">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          selectedItemForEdit={selectedItemForEdit}
          setSelectedItemForEdit={setSelectedItemForEdit}
          posts={posts}
        />
      )}
    </div>
  );
};

export default App;
