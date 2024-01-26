import React from 'react';
import { useSelector } from 'react-redux';
import Products from './Products';

function Home() {
  const message = useSelector((state) => state.users?.message);

  return (
    <main>
      <p className="text-sm text-center">{message}</p>
      <section className="mt-8">
        <article className="max-w-2xl lg:max-w-5xl mx-auto">
          <Products />
        </article>
      </section>
    </main>
  );
}

export default Home;
