import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser, updateUser } from "../../features/ListUser/listSlice";
import { toast } from "react-toastify";

const useUserForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [resetFormData, setResetFormData] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    try {
      if (initialState.id) {
         dispatch(
          updateUser({
            userId: initialState.id,
            body: formData,
          })
        );
        toast.warn("Cập nhật thành công");
      } else {
         dispatch(createUser(formData));
        toast.success("Thêm Thành Công");
      }
      setResetFormData(true);
      navigate("/users");
    } catch (error) {
      toast.error("404 Not Found");
    }
  };

  useEffect(() => {
    if (resetFormData) {
      setFormData(initialState);
      setResetFormData(false);
    }
  }, [resetFormData, initialState]);

  return { formData, handleChange, handleSubmit };
};

export default useUserForm;