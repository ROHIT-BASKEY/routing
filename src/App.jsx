// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
// auth files
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
// s.director files 
import SportDirectorPage from './pages/Director/SportDirectorPage';
import DirectorEvent from './pages/Director/DirectorEvents';
import DirectorBudgets from './pages/Director/DirectorBudgets';
import DirectorGames from './pages/Director/DirectorGames';
import DirectorUpdates from './pages/Director/DirectorUpdates';


// coach files 
import CoachPage from './pages/Coach/CoachPage';
import CoachEvents from './pages/Coach/CoachEvents';
import CoachUpdates from './pages/Coach/CoachUpdates';
import CoachBudgets from './pages/Coach/CoachBudgets';
import CoachProfile from './pages/Coach/CoachProfile';
import CoachMembers from './pages/Coach/CoachMembers';
// athelete files 
import AthletePage from './pages/Athlete/AthletePage';
import AthletePerformance from './pages/Athlete/AthletePerformance';
import AthleteUpdates from './pages/Athlete/AthleteUpdates';
import AthleteTraining from './pages/Athlete/AthleteTraining';
import AthleteProfile from './pages/Athlete/AthleteProfile';
import AthleteHealth from './pages/Athlete/AthleteHealth';

// fan files 
import FanPage from './pages/Fan/FanPage';
import FanEvents from './pages/Fan/FanEvents';
import FanGames from './pages/Fan/FanGames';

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
            path="/director"
            element={
              <ProtectedRoute allowedRoles={['director']}>
                <SportDirectorPage />
              </ProtectedRoute>
            }
          />
          <Route path="director/events" element={<DirectorEvent/>} />
          <Route path="director/budges" element={<DirectorBudgets/>} />
          <Route path="director/games" element={<DirectorGames/>} />
          <Route path="director/updates" element={<DirectorUpdates/>} />
          <Route
            path="/coach"
            element={
              <ProtectedRoute allowedRoles={['coach']}>
                <CoachPage />
              </ProtectedRoute>
            }
          />
          <Route path="coach/events" element={<CoachEvents/>} />
          <Route path="coach/updates" element={<CoachUpdates/>} />
          <Route path="coach/members" element={<CoachMembers/>} />
          <Route path="coach/budgets" element={<CoachBudgets/>} />
          <Route path="coach/profile" element={<CoachProfile/>} />
          <Route
            path="/athlete"
            element={
              <ProtectedRoute allowedRoles={['athlete']}>
                <AthletePage />
              </ProtectedRoute>
            }
          />
           <Route path="Athlete/performance" element={<AthletePerformance/>} />
          <Route path="Athlete/updates" element={<AthleteUpdates/>} />
          <Route path="Athlete/health" element={<AthleteHealth/>} />
          <Route path="Athlete/training" element={<AthleteTraining/>} />
          <Route path="Athlete/profile" element={<AthleteProfile/>} />
          <Route
            path="/fan"
            element={
              <ProtectedRoute allowedRoles={['fan']}>
                <FanPage />
              </ProtectedRoute>
            }
          />
          <Route path="fan/events" element={<FanEvents/>} />
          <Route path="fan/games" element={<FanGames/>} />
        </Routes>
      </Router>
    </RoleProvider>
    </div>
  );
}

export default App;