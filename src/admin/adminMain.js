import { useGlobalContext } from "./../context";
import { FcSearch } from "react-icons/fc";
import SingleProduct from "./singleProduc";
const AdminMain = () => {
  const { products, setNum, inputHandler, searchTerm } = useGlobalContext();
  return (
    <section className=''>
      <main id='main_id'>
        <div className='pt-20'>
          <div className='w-full relative'>
            <input
              type='text'
              className='w-full rounded-2xl border-2 border-gray-200 p-2'
              value={searchTerm}
              onChange={inputHandler}
            />
            <FcSearch className='absolute right-3 text-2xl bottom-3' />
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

export default AdminMain;
