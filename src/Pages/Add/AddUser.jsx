import UserForm from "../UserForm/UserForm";
const AddUser = () => {
  return (
    <div>
      <h1>Add User</h1>
      <UserForm isEditMode={false} />
    </div>
  );
};

export default AddUser;