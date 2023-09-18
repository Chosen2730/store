import { useState, useEffect } from "react";
import { useGlobalContext } from "./../context";
import { MdAddShoppingCart } from "react-icons/md";

const SingleProduct = ({ title, image, id, description, price }) => {
  const [num, setNum] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addProduct } = useGlobalContext();
  const desc = description.slice(0, 55);

  return (
    <>
      <div className='product shadow-md'>
        <div className='product_img_cont'>
          <img className='w-full h-40 object-contain' src={image} alt='' />
        </div>
        <h3 className='font-bold'>{title}</h3>
        <p>{desc}..</p>
        <h3 className='font-bold'>${price}</h3>

        <button className='bg-red-900 text-white flex items-center justify-center rounded-md p-3'>
          Delete
        </button>
      </div>
    </>
  );
};
export default SingleProduct;
