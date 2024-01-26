import React, { useState } from 'react';
import Comeback from './Comeback';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/productsSlice/productsSlice';
import { useNavigate } from 'react-router';

function AddProduct() {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [label, setLabel] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      createProduct({
        sku,
        name,
        category,
        label,
        quantity,
        price,
      })
    );
    setSku('');
    setName('');
    setCategory('');
    setLabel('');
    setQuantity(0);
    setPrice(0);
    navigate('/');
  };

  return (
    <section>
      <Comeback />
      <article className="flex flex-col gap-3 max-w-lg lg:max-w-xl mx-auto border border-slate-900 p-2 rounded mt-5">
        <h1 className="uppercase text-2xl font-black text-center">
          Add Product
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="SKU"
            className="border border-slate-900 rounded p-1 outline-none"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product"
            required
            className="border border-slate-900 rounded p-1 outline-none"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            required
            className="border border-slate-900 rounded p-1 outline-none"
          />
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Label"
            className="border border-slate-900 rounded p-1 outline-none"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            required
            className="border border-slate-900 rounded p-1 outline-none"
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
            className="border border-slate-900 rounded p-1 outline-none"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="font-bold bg-lime-400 px-5 py-1 uppercase border border-slate-900 text-slate-100 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default AddProduct;
