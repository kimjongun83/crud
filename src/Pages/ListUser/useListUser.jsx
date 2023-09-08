import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserList, startEditingUser } from "../../features/ListUser/listSlice";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {  toast } from 'react-toastify';const useListUser = () => {
  const userList = useSelector((state) => state.user.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(getUserList());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const handleStartEditing = (id) => {
    dispatch(startEditingUser(id));
  };

  const handleStartDelete =  (id) => {
    try {
       dispatch(deleteUser(id));
      toast.error("Xóa user thành công")
      dispatch(getUserList());
    } catch (error) {
      console.log("error", error);
    }
  };
  const listItem = userList.map((item ) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td className="td">
        <Button variant="warning">
        <Link className="custom" to ={`/users/edit/:${item.id}`} onClick={() => handleStartEditing(item.id)}>Edit</Link>
        </Button>
       
        
        <Button className="delete" variant="danger" onClick={() => handleStartDelete(item.id)}>Delete</Button>
      </td>
    </tr>
  ))
  return { userList, handleStartEditing, handleStartDelete , listItem };
};

export default useListUser;