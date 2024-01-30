import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/productsSlice/productsSlice';
import categories from '../categories';
import { closeIcon } from '../icons';

function UpdateProduct({ close, prodId }) {
  const { products } = useSelector((state) => state.products);
  const product = products.find((prod) => prod.id === prodId);
  const [sku, setSku] = useState(product.sku);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [brand, setBrand] = useState(product.brand);
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
          brand,
          label,
          quantity,
          price,
        },
      })
    );
    close();
  };

  return (
    <section>
      <article className="flex flex-col gap-3 relative mx-auto max-w-xl border p-2 border-slate-900 rounded">
        <button
          type="button"
          onClick={close}
          className="absolute bg-red-500 text-slate-50 rounded-lg px-2 p-1 -top-2 -right-2"
        >
          {closeIcon}
        </button>
        <h2 className="uppercase text-xl font-black text-center">
          Update {product.name}
        </h2>
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
              Update
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default UpdateProduct;
