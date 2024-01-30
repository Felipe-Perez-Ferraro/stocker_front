import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../redux/productsSlice/productsSlice';
import categories from '../categories';

function Filters() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [label, setLabel] = useState('');
  const [price, setPrice] = useState('');
  const [added, setAdded] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterProducts({ category, label, price, added }));
  };

  const handleClearFilters = () => {
    dispatch(filterProducts({ category: '', label: '', price: '', added: '' }));
    setCategory('');
    setLabel('');
    setPrice('');
    setAdded('');
  };

  return (
    <div className="flex gap-2 my-2 items-center">
      <form onSubmit={handleSubmit} className="flex gap-5">
        <div className="flex gap-1 items-center">
          <label className="font-bold">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border outline-none border-slate-900 p-1 rounded"
          >
            <option value="">Select an option</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-1 items-center">
          <label className="font-bold">Label:</label>
          <select
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="border outline-none border-slate-900 p-1 rounded"
          >
            <option value="">Select an option</option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <div className="flex gap-1 items-center">
          <label className="font-bold">Price:</label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border outline-none border-slate-900 p-1 rounded"
          >
            <option value="">Select an option</option>
            <option value="price_high_to_low">High - Low</option>
            <option value="price_low_to_high">Low - High</option>
          </select>
        </div>
        <div className="flex gap-1 items-center">
          <label className="font-bold">Added:</label>
          <select
            value={added}
            onChange={(e) => setAdded(e.target.value)}
            className="border outline-none border-slate-900 p-1 rounded"
          >
            <option value="">Select an option</option>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <button
          type="submit"
          className="p-1 px-2 border border-orange-800 bg-orange-600 text-slate-50 rounded uppercase"
        >
          Filter
        </button>
      </form>
      <button
        type="button"
        className="p-1 px-2 border border-gray-800 bg-gray-600 text-slate-50 rounded uppercase"
        onClick={handleClearFilters}
      >
        Clear
      </button>
    </div>
  );
}

export default Filters;
