import React from "react";

const CreateProduct = () => {
  return (
    <div className='py-20 p-5 max-w-xl mx-auto'>
      <h2 className='font-bold text-center'>Create a new Product</h2>
      <form action='' className=''>
        <label htmlFor=''>Enter Product Name</label>
        <input
          className='block w-full bg-gray-100 p-3 mb-4 rounded-md'
          type='text'
        />

        <label htmlFor=''>Enter Product Description</label>
        <input
          className='block w-full bg-gray-100 p-3 mb-4 rounded-md'
          type='text'
        />

        <label htmlFor=''> Enter Product Price</label>
        <input
          className='block w-full bg-gray-100 p-3 mb-4 rounded-md'
          type='number'
        />
        <label htmlFor=''> Upload Product image</label>
        <input
          className='block w-full bg-gray-100 p-3 mb-4 rounded-md'
          type='file'
          name='image'
          id=''
        />
        <button className='bg-gray-900 text-white text-center w-full my-10 p-3 rounded-full'>
          Upload
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
