import React, { useState } from 'react';
import Comeback from './Comeback';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/productsSlice/productsSlice';
import { useNavigate } from 'react-router';
import categories from '../categories';

function AddProduct() {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Smartphones');
  const [brand, setBrand] = useState('');
  const [label, setLabel] = useState('New');
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
        brand,
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
          <div className="flex flex-col">
            <label className="text-lg font-bold">SKU:</label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              placeholder="SKU"
              className="border border-slate-900 rounded p-1 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold">Product:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product"
              required
              className="border border-slate-900 rounded p-1 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-slate-900 rounded p-1 outline-none"
            >
              <option disabled>- Select Category -</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold">Brand:</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Brand"
              required
              className="border border-slate-900 rounded p-1 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold">Label:</label>
            <select
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="border border-slate-900 rounded p-1 outline-none"
            >
              <option disabled>- Select Label -</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
              required
              className="border border-slate-900 rounded p-1 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              required
              className="border border-slate-900 rounded p-1 outline-none"
            />
          </div>
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
