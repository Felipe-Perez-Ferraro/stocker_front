const { createBrowserRouter } = require('react-router-dom');
const { default: Home } = require('./components/Home');
const { default: Signup } = require('./components/Signup');
const { default: Login } = require('./components/Login');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]);

export default router;
