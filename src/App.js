import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import UserRegistration from './pages/UserRegistration';
import UserDashboard from './pages/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import Watch from './pages/Watch';
import WatchFavorite from './pages/WatchFavorite';

function App() {
  return (
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<UserRegistration />} />
          
          <Route path='/user-dashboard' element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>} />
          <Route path='/watch/:id' element={<Watch />} />
          <Route path='/watch-favorite/:id' element={<WatchFavorite />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
  );
}

export default App;
