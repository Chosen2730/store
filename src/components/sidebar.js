import userIMG from "./../images/user.png";
import { CgProfile } from "react-icons/cg";
import { useGlobalContext } from "./../context";
import {
  MdAddShoppingCart,
  MdOutlineLogout,
  MdOutlineClose,
  MdGroups,
} from "react-icons/md";
import { GrLogout } from "react-icons/gr";

const Sidebar = () => {
  const {
    logout,
    user,
    sidebarOpen,
    closeSidebar,
    amount,
    total,
    allCategories,
    getCategory,
    setCartItem,
  } = useGlobalContext();
  return (
    <aside className={sidebarOpen ? `aside show-sidebar` : `aside`}>
      <div className='close_sidebar' onClick={closeSidebar}>
        <MdOutlineClose />
      </div>
      <div className='user_profile'>
        <img className='user_img' src={userIMG} alt='' />
        <h4>
          Welcome back, <span className='user_name'>{user}</span>
        </h4>
      </div>
      <hr />
      <div className='dash_items'>
        <div className='item_cont'>
          <CgProfile className='dash_icons' /> <h4>Dashboard</h4>
        </div>
      </div>
      <hr />
      <div className='dash_items'>
        <div className='item_cont'>
          <MdAddShoppingCart className='dash_icons' /> <h4>Cart</h4>
        </div>
        <div className='cart_items_cont'>
          <h5>Total Items: {amount} </h5>
          <h5>Total Price: ${total}</h5>
          <button
            onClick={() => {
              setCartItem([]);
            }}
            className='cart_clear'
          >
            Clear Cart
          </button>
        </div>
      </div>
      <hr />
      <div className='dash_items'>
        <div className='item_cont'>
          <MdGroups className='dash_icons' /> <h4>Categories</h4>
        </div>
        <div className='cart_items_cont cat'>
          {allCategories.map((cat, index) => {
            return (
              <h5 data-id={cat} key={index} onClick={getCategory}>
                {cat}
              </h5>
            );
          })}
        </div>
      </div>
      <hr />
      <div className='dash_items' onClick={logout}>
        <div className='item_cont'>
          <MdOutlineLogout className='dash_icons' />{" "}
          <h4 className='logout_icon'>Logout</h4>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
