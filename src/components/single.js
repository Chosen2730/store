import { useState, useEffect } from "react";
import { useGlobalContext } from "./../context";
import { MdAddShoppingCart } from "react-icons/md";

const SingleProduct = ({ title, image, id, description, price }) => {
  const [num, setNum] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addProduct } = useGlobalContext();
  const desc = description.slice(0, 55);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAdded(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isAdded]);
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
      <div className='product shadow-md'>
        <div className='product_img_cont'>
          <img className='w-full h-40 object-contain' src={image} alt='' />
        </div>
        <h3 className='font-bold'>{title}</h3>
        <p>{desc}..</p>
        <h3 className='font-bold'>${price}</h3>
        <div className='qty'>
          <h5>Qty</h5>
          <button onClick={sub}>-</button>
          <button className='price'>{num}</button>
          <button onClick={add}>+</button>
        </div>
        <button
          className='bg-gray-900 text-white flex items-center justify-center rounded-md p-3'
          onClick={() => {
            addProduct(id, price, num, setNum);
            setIsAdded(true);
          }}
        >
          <MdAddShoppingCart className='cart_icon' />
          <h5>{isAdded ? "Item added to the cart" : "Add to cart"} </h5>
        </button>
      </div>
    </>
  );
};
export default SingleProduct;
