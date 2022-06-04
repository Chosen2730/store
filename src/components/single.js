import { useState } from "react";
import { useGlobalContext } from "./../context";
import { MdAddShoppingCart } from "react-icons/md";

const SingleProduct = ({ title, image, id, description, price }) => {
  const [num, setNum] = useState(1);
  const { addProduct } = useGlobalContext();
  const desc = description.slice(0, 55);

  const checkNum = (n) => {
    if (n < 0) {
      return 0;
    }
    return n;
  };
  const add = () => {
    setNum(num + 1);
  };
  const sub = () => {
    setNum(checkNum(num - 1));
  };
  return (
    <>
      <div key={id} className='product'>
        <div className='product_img_cont'>
          <img className='product_img' src={image} alt='' />
        </div>
        <h3 className='title'>{title}</h3>
        <p>{desc}..</p>
        <h3 className='price'>${price}</h3>
        <div className='qty'>
          <h5>Quantity</h5>
          <button onClick={sub}>-</button>
          <button className='price'>{num}</button>
          <button onClick={add}>+</button>
        </div>
        <button
          className='cart_add'
          onClick={() => addProduct(id, price, num, setNum)}
        >
          <MdAddShoppingCart className='cart_icon' />
          <h5> Add to cart</h5>
        </button>
      </div>
    </>
  );
};
export default SingleProduct;
