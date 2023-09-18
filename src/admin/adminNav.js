import { useGlobalContext } from "./../context";
import logo from "./../images/shopping.png";
import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdOutlineMenu } from "react-icons/md";
const AdminNavbar = () => {
  const { showSideBar, amount } = useGlobalContext();
  return (
    <nav className='flex justify-between gap-4 p-4 bg-gray-900 text-gray-50 w-full'>
      <img className='w-20' src={logo} alt='logo' />
      <div className='font-bold'>
        <Link to='/admin'>All Products</Link>
      </div>
      <div className='font-bold'>
        <Link to='/admin/create-product'>Create New Product</Link>
      </div>
    </nav>
  );
};
export default AdminNavbar;
