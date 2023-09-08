import React from "react";
import { Form, Button } from "react-bootstrap";

const Form = ({ isEditMode, formData, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isEditMode ? "Edit User" : "Add User"}
      </Button>
    </Form>
  );
};

export default Form;