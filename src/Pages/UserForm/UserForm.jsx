import React from 'react';
import useUserForm from './useUserForm';
import Form from '../../components/Form';
const UserForm = ({ isEditMode }) => {
    const { formData, handleChange, handleSubmit } = useUserForm(
      isEditMode ? {} : { name: "", email: "" }
    );
  
    return (
      <Form  isEditMode={isEditMode}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}/>
    );
  };
  
  export default UserForm;