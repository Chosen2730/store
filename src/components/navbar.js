import { useGlobalContext } from "./../context";
import logo from "./../images/shopping.png";
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
      <div className='cart_cont'>
        <MdAddShoppingCart />
        <h5 className='cart_amount'>{amount}</h5>
      </div>
    </nav>
  );
};
export default Navbar;
