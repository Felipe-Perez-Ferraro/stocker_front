import React from 'react';

function Products() {
  return (
    <table className="table-auto w-full">
      <thead className="border border-slate-900">
        <tr>
          <th className="text-left border-r border-slate-900 px-1 bg-gray-400">
            id
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
        <tr>
          <td className='p-1 border-r border-b border-slate-900'>1</td>
          <td className='p-1 border-r border-b border-slate-900'>1345345234</td>
          <td className='p-1 border-r border-b border-slate-900'>Pizza</td>
          <td className='p-1 border-r border-b border-slate-900'>Food</td>
          <td className='p-1 border-r border-b border-slate-900'>New</td>
          <td className='p-1 border-r border-b border-slate-900'>1</td>
          <td className='p-1 border-r border-b border-slate-900'>200</td>
          <td className='p-1 border-r border-b border-slate-900'>14-14-2024</td>
          <td className='p-1 border-r border-b border-slate-900'>
            <ul className='flex items-center gap-2 justify-center'>
              <li>Delete</li>
              <li>Update</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className='p-1 border-r border-b border-slate-900'>2</td>
          <td className='p-1 border-r border-b border-slate-900'>13434534</td>
          <td className='p-1 border-r border-b border-slate-900'>Pastas</td>
          <td className='p-1 border-r border-b border-slate-900'>Food</td>
          <td className='p-1 border-r border-b border-slate-900'>New</td>
          <td className='p-1 border-r border-b border-slate-900'>1</td>
          <td className='p-1 border-r border-b border-slate-900'>200</td>
          <td className='p-1 border-r border-b border-slate-900'>14-14-2024</td>
          <td className='p-1 border-r border-b border-slate-900'>
            <ul className='flex items-center gap-2 justify-center'>
              <li>Delete</li>
              <li>Update</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Products;
