import { useGlobalContext } from "./../context";
import { MdAddShoppingCart } from "react-icons/md";

const SingleProduct = ({ title, image, id, description, price }) => {
  const { addProduct } = useGlobalContext();
  const desc = description.slice(0, 55);
  return (
    <>
      <div key={id} className='product'>
        <img className='product_img' src={image} alt='' />
        <h3 className='title'>{title}</h3>
        <p>{desc}..</p>
        <h3 className='price'>${price}</h3>
        <button className='cart_add' onClick={() => addProduct(id, price)}>
          <MdAddShoppingCart className='cart_icon' />
          <h5> Add to cart</h5>
        </button>
      </div>
    </>
  );
};
export default SingleProduct;
