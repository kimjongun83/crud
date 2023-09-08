import useListUser from "./useListUser";
import Table from "../../components/Table";


import './index.css'

const ListUser = () => {
  const { listItem } = useListUser();
  return (
    <Table data={listItem}/>
  );
};

export default ListUser;
