import { useGlobalContext } from "./../context";
import Product from "./product";
const Main = () => {
  const { cartItem, total } = useGlobalContext();
  return (
    <section className='main'>
      <main id='main_id'>
        <div className='featured_header'>
          <h1 className='product_header'>Cart Summary</h1>
        </div>
        <div className='sum_container'>
          {cartItem.map((item, index) => {
            const id = new Date().getTime().toString();
            return <Product key={index} {...item} />;
          })}
          <div className='top_item total_cont'>
            <h4 className='price'>Total: </h4>
            <h4 className='price'>${total}</h4>
          </div>
          <p>Shipping and taxes will be calculated at checkout.</p>
          <button className='check_out'>CheckOut</button>
        </div>
      </main>
    </section>
  );
};

export default Main;
