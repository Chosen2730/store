import { useGlobalContext } from "./../context";
import SingleProduct from "./single";
import Loading from "./loading";
const Main = () => {
  const { products, setNum } = useGlobalContext();
  return (
    <section className='main'>
      <main id='main_id'>
        <h1 className='product_header'>Featured Products</h1>
        <div className='products_container'>
          {products.map((item) => {
            const { id } = item;
            return <SingleProduct key={id} setNum={setNum} {...item} />;
          })}
        </div>
      </main>
    </section>
  );
};

export default Main;
