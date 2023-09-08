import UserForm from "./UserForm";

const EditUser = () => {
  return (
    <div>
      <h1>Edit User</h1>
      <UserForm isEditMode={true} />
    </div>
  );
};

export default EditUser;