import { Navigate, useLocation } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const location = useLocation(); // To capture the current location

  if (token) {
    try {
      jwt.verify(token, 'your_secret_key'); // Make sure the secret key matches the one used during sign-in
      // Token is valid, allow access
      return children;
    } catch (err) {
      console.error('Invalid token',err);
      // Navigate to sign-in page with an error and preserve intended location
      return <Navigate to="/signin" state={{ from: location, error: 'Invalid token' }} />;
    }
  }

  // If no token, navigate to sign-in page and preserve intended location
  return <Navigate to="/signin" state={{ from: location }} />;
  
};
// PropTypes validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children prop is provided and is of type node
};

export default PrivateRoute;
