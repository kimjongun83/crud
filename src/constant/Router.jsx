import AddUser from "../Pages/Add"
import ListUser from "../Pages/ListUser"
const navItems  = [
  { path: '/users/add', label: 'Add', component:<AddUser/> },
  { path: '/users', label: 'List User', component: <ListUser/> },
];

export default navItems;