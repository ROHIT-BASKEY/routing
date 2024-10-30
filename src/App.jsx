// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
// auth files
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
// s.director files 
import SportDirectorPage from './pages/Director/SportDirectorPage';

// coach files 
import CoachPage from './pages/Coach/CoachPage';
// athelete files 
import AthletePage from './pages/Athlete/AthletePage';

// fan files 
import FanPage from './pages/Fan/FanPage';

import UnauthorizedPage from './pages/UnauthorizedPage';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <div>
    <RoleProvider>
      <Router>
        <Routes>
        <Route path="*" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          <Route
            path="/director/*"
            element={
              <ProtectedRoute allowedRoles={['director']}>
                <SportDirectorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coach/*"
            element={
              <ProtectedRoute allowedRoles={['coach']}>
                <CoachPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/athlete/*"
            element={
              <ProtectedRoute allowedRoles={['athlete']}>
                <AthletePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fan/*"
            element={
              <ProtectedRoute allowedRoles={['fan']}>
                <FanPage/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </RoleProvider>
    </div>
  );
}

export default App;