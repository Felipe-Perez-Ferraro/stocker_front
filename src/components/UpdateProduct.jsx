import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/productsSlice/productsSlice';

function UpdateProduct({ close, prodId }) {
  const { products } = useSelector((state) => state.products);
  const product = products.find((prod) => prod.id === prodId);
  const [sku, setSku] = useState(product.sku);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [label, setLabel] = useState(product.label);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        productId: prodId,
        updatedProduct: {
          sku,
          name,
          category,
          label,
          quantity,
          price,
        },
      })
    );
    close();
  };

  return (
    <div>
      <button type="button" onClick={close}>
        close
      </button>
      <h2>Update {product.name}</h2>
      <form onSubmit={handleSubmit}>
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
