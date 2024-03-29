import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import UpdateProduct from './components/UpdateProduct';

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
  {
    path: 'add-product',
    element: (
      <>
        <Navbar />
        <AddProduct />
      </>
    ),
  },
  {
    path: 'update-product',
    element: (
      <>
        <Navbar />
        <UpdateProduct />
      </>
    ),
  },
]);

export default router;
