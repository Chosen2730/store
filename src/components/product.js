import { useState, useEffect } from "react";
import { useGlobalContext } from "./../context";
import { AiOutlineDelete } from "react-icons/ai";

const Product = ({ title, num, price, id }) => {
  const { deleteItem } = useGlobalContext();
  const amount = price * num;
  return (
    <>
      <div className='summary_div'>
        <div className='top_item'>
          <h4>{title}</h4>
          <i className='delete_btn' onClick={() => deleteItem(id)}>
            <AiOutlineDelete />
          </i>
        </div>
        <div className='top_item'>
          <h5 className='price'>Quantity: {num}</h5>
          <h5 className='price'>${amount}</h5>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Product;
