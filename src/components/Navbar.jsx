import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../redux/usersSlice/usersSlice';
import { Link } from 'react-router-dom';

function Navbar() {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userLogOut());
  };

  return (
    <header className="bg-orange-500">
      <nav className="h-20 flex items-center justify-between max-w-2xl lg:max-w-5xl mx-auto">
        <h2 className="font-black text-slate-50 text-xl">
          <Link to="/">STOCKER</Link>
        </h2>
        {user ? (
          <ul className="flex gap-3 items-center">
            <li>
              <h1 className="font-bold text-slate-50">Hi {user.name}!</h1>
            </li>
            <span className="font-semibold text-slate-50">|</span>
            <li>
              <button type="button" className="font-semibold text-slate-50" onClick={handleClick}>
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-3 items-center">
            <li className="font-semibold text-slate-50">
              <Link to="/signup">Sign up</Link>
            </li>
            <span className="font-semibold text-slate-50">|</span>
            <li className="font-semibold text-slate-50">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
