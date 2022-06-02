import { MdAddShoppingCart } from "react-icons/md";
import { useGlobalContext } from "./../context";
import Loading from "./loading";
const Main = () => {
  const { products, addProduct, qty, addQty, redQty, loading } =
    useGlobalContext();
  return (
    <section className='main'>
      <main id='main_id'>
        <h1 className='product_header'>Featured Products</h1>
        <div className='products_container'>
          {products.map((item) => {
            const { title, image, id, description, price } = item;
            const desc = description.slice(0, 55);
            return (
              <div key={id} className='product'>
                <img className='product_img' src={image} alt='' />
                <h3 className='title'>{title}</h3>
                <p>{desc}..</p>
                <h3 className='price'>${price}</h3>
                {/* <div className='qty'>
                  <h3>Quatity</h3>
                  <h3 className='qty_item' onClick={() => redQty(id)}>
                    -
                  </h3>
                  <h3 className='qty_item price'>{qty}</h3>
                  <h3 className='qty_item' onClick={() => addQty(id)}>
                    +
                  </h3>
                </div> */}
                <button
                  className='cart_add'
                  onClick={() => addProduct(id, price)}
                >
                  <MdAddShoppingCart className='cart_icon' />
                  <h5> Add to cart</h5>
                </button>
              </div>
            );
          })}
          {/* <div className='product'>
          <img
            className='product_img'
            src='https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/Y/166413_1588844268.jpg'
            alt=''
          />
          <h3>product name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            unde!
          </p>
          <h3 className='price'>$500</h3>
          <button className='cart_add'>
            <MdAddShoppingCart className='cart_icon' />
            <h5> Add to cart</h5>
          </button>
        </div> */}
        </div>
      </main>
    </section>
  );
};

export default Main;
