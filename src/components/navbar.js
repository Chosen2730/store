import { useGlobalContext } from "./../context";
import logo from "./../images/shopping.png";
import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdOutlineMenu } from "react-icons/md";
const Navbar = () => {
  const { showSideBar, amount } = useGlobalContext();
  return (
    <nav>
      <div className='menu_icon' onClick={showSideBar}>
        <MdOutlineMenu />
      </div>
      <div className='logo_cont'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='product_link'>
        <Link to='/home'>Products</Link>
      </div>
      <div className='cart_cont'>
        <Link to='/home/cart'>
          <MdAddShoppingCart />
          <h5 className='cart_amount'>{amount}</h5>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
