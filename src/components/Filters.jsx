import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../redux/productsSlice/productsSlice';
import categories from '../categories';

function Filters() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [label, setLabel] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterByCategory({ category, label, price }));
  };

  const handleClearFilters = () => {
    dispatch(filterByCategory({ category: '', label: '', price: '' }));
    setCategory('');
    setLabel('');
    setPrice('');
  };

  return (
    <div>
      <h3>Filter by:</h3>
      <form onSubmit={handleSubmit}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select an option</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.category}>
              {cat.category}
            </option>
          ))}
        </select>
        <select value={label} onChange={(e) => setLabel(e.target.value)}>
          <option value="">Select an option</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="">Select an option</option>
          <option value="price_high_to_low">High - Low</option>
          <option value="price_low_to_high">Low - High</option>
        </select>
        {category === '' ? (
          <button disabled="disabled">Filter</button>
        ) : (
          <button type="submit">Filter</button>
        )}
      </form>
      <button type="button" onClick={handleClearFilters}>
        Clear
      </button>
    </div>
  );
}

export default Filters;
