import Navbar from './components/Navbar';

const { createBrowserRouter } = require('react-router-dom');
const { default: Home } = require('./components/Home');
const { default: Signup } = require('./components/Signup');
const { default: Login } = require('./components/Login');

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: 'signup',
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
  {
    path: 'login',
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
]);

export default router;
