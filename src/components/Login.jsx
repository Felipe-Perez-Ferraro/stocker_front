import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../redux/usersSlice/usersSlice';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(userLogIn({ name, password }));
    navigate('/');
  };

  return (
    <section className="mt-10">
      <article className="flex flex-col gap-3 border border-slate-900 p-2 mx-auto max-w-xl">
        <h2 className="text-3xl font-black uppercase text-center">Log In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-slate-900 p-1 rounded outline-none text-lg"
            placeholder="Name"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-slate-900 p-1 rounded outline-none text-lg"
            placeholder="Password"
            required
          />
          <button type="submit" className="bg-lime-500 p-1 rounded font-bold text-slate-50">
            Log in
          </button>
        </form>
      </article>
    </section>
  );
}

export default Signup;
