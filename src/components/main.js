import { useGlobalContext } from "./../context";
import SingleProduct from "./single";
import Loading from "./loading";
import { FcSearch } from "react-icons/fc";
const Main = () => {
  const { products, setNum, inputHandler, searchTerm } = useGlobalContext();
  return (
    <section className='main'>
      <main id='main_id'>
        <div className='featured_header'>
          <h1 className='product_header'>Featured Products</h1>
          <div className='featured'>
            <input type='text' value={searchTerm} onChange={inputHandler} />
            <FcSearch className='search_icon' />
          </div>
        </div>
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
