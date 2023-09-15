import { useGlobalContext } from "./../context";
import logo from "./../images/shopping.png";
import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdOutlineMenu } from "react-icons/md";
const Navbar = () => {
  const { showSideBar, amount } = useGlobalContext();
  return (
    <nav className='flex justify-between gap-4 p-4 bg-gray-900 text-gray-50 w-full'>
      <img className='w-20' src={logo} alt='logo' />
      <div className='font-bold'>
        <Link to='/home'>Products</Link>
      </div>
      <div className=''>
        <Link to='/home/cart' className='flex'>
          <MdAddShoppingCart />
          <h5 className='relative bottom-2 bg-white text-black w-4 h-4 rounded-full flex items-center justify-center font-bold'>
            {amount}
          </h5>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
