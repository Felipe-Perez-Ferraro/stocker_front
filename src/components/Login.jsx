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
    navigate('/')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Signup;
