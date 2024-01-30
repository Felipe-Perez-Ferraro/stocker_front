import React, { useEffect, useState } from 'react';
import { edit, trash } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProduct,
  fetchProducts,
} from '../redux/productsSlice/productsSlice';
import { Link } from 'react-router-dom';
import UpdateProduct from './UpdateProduct';
import Filters from './Filters';

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.users);
  const [open, setOpen] = useState(false);
  const [prodId, setProdId] = useState(undefined);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = async (id) => {
    await dispatch(deleteProduct(id));
    dispatch(fetchProducts());
  };

  const handleOpen = (id) => {
    setProdId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <>
          <UpdateProduct prodId={prodId} close={handleClose} />
        </>
      ) : (
        <>
          {user ? (
            <button
              type="button"
              className="border border-slate-900 px-3 py-1 mb-3 bg-lime-500 rounded font-bold"
            >
              <Link to="/add-product">Add Product</Link>
            </button>
          ) : (
            <button
              type="button"
              title="You must Log In"
              className="border border-slate-900 px-3 py-1 mb-3 bg-gray-700 text-slate-50 rounded font-bold"
              disabled
            >
              Add Product
            </button>
          )}
          <Filters />
          <table className="table-auto w-full">
            <thead className="border border-slate-900">
              <tr>
                <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
                  Id
                </th>
                <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
                  SKU
                </th>
                <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
                  Product
                </th>
                <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
                  Category
                </th>
                <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
                  Label
                </th>
                <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
                  Quantity
                </th>
                <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
                  Price
                </th>
                <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
                  Added
                </th>
                <th className="bg-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="border border-slate-900">
              {products.map((prod) => (
                <tr key={prod.id}>
                  <td className="p-1 border-r border-b border-slate-900">
                    {prod.id}
                  </td>
                  <td className="p-1 border-r border-b border-slate-900">
                    {prod.sku}
                  </td>
                  <td className="p-1 border-r border-b border-slate-900">
                    {prod.name}
                  </td>
                  <td className="p-1 border-r border-b border-slate-900">
                    {prod.category}
                  </td>
                  <td className="p-1 border-r border-b border-slate-900">
                    {prod.label}
                  </td>
                  <td className="p-1 border-r border-b border-slate-900">
                    {prod.quantity}
                  </td>
                  <td className="p-1 border-r border-b border-slate-900">
                    ${prod.price}
                  </td>
                  <td className="p-1 border-r border-b border-slate-900">
                    {new Date(prod.created_at).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  </td>
                  <td className="p-1 border-r border-b border-slate-900">
                    <ul className="flex items-center gap-2 justify-center">
                      <li>
                        <button
                          type="button"
                          title={user ? 'Delete' : 'You must Log in'}
                          className={
                            user
                              ? 'p-1 px-2 rounded text-sm bg-red-700 text-slate-50'
                              : 'p-1 px-2 rounded text-sm bg-gray-700 text-slate-50'
                          }
                          onClick={user ? () => handleClick(prod.id) : null}
                        >
                          {trash}
                        </button>
                      </li>
                      <li>
                        <button
                          title="Edit"
                          className="p-1 px-2 rounded text-sm bg-orange-700 text-slate-50"
                          to="update-product"
                          onClick={() => handleOpen(prod.id)}
                        >
                          {edit}
                        </button>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default Products;
