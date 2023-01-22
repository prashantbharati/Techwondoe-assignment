import React, { useState } from "react";
import { Form, Input, Modal } from "antd";
import Spinner from "./Spinner";

function AddEditTransaction({
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  selectedItemForEdit,
  setSelectedItemForEdit,
  posts,
}) {
  const onFinish = async (values) => {
    posts = { ...posts, values };
    console.log(posts);

    setShowAddEditTransactionModal(false);
  };

  const [loading] = useState(false);

  return (
    <Modal
      title={selectedItemForEdit ? "Edit Transaction" : "Add Transaction"}
      visible={showAddEditTransactionModal}
      onCancel={() => setShowAddEditTransactionModal(false)}
      footer={false}
    >
      {loading && <Spinner />}
      <Form
        layout="vertical"
        className="transaction-form"
        onFinish={onFinish}
        initialValues={selectedItemForEdit}
      >
        <Form.Item label="User Id" name="userId">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Id" name="id">
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Title" name="title">
          <Input type="text" />
        </Form.Item>

        <Form.Item label="Body" name="body">
          <Input type="text" />
        </Form.Item>

        <div className="d-flex justify-content-end">
          <button className="primary" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default AddEditTransaction;
