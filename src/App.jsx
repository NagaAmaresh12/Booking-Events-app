// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import EventDetailsPage from './pages/EventDetailsPage.jsx';
// import Login from './pages/Login.jsx';
import PrivateRoute from './middleware/auth.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/eventdetails" element={<PrivateRoute><EventDetailsPage /></PrivateRoute>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App