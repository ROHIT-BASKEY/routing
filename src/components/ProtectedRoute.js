// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userRole } = useRole();

  if (!userRole) {
    return <Navigate to="/signin" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
