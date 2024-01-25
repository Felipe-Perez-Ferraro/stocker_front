import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Products from './Products';
import AddProduct from './AddProduct';

function Home() {
  const message = useSelector((state) => state.users?.message);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <main>
      <p>{message}</p>
      <section className="mt-8">
        <article className="max-w-lg lg:max-w-5xl mx-auto">
          <button type="button" onClick={handleClick}>Add Product</button>
          <Products />
          {open && <AddProduct close={handleClose} />}
        </article>
      </section>
    </main>
  );
}

export default Home;
