// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userRole } = useRole(); // Get the current user role
  const location = useLocation(); // Get the current path

  console.log('Current userRole:', userRole); // Debug log
  console.log('Current path:', location.pathname); // Debug log

  // Check if the current path starts with the user role segment
  const rolePathMatches = userRole && location.pathname.startsWith(`/${userRole}`);

  // Redirect to /signin if userRole is missing or the path doesn't match
  if (!userRole || !rolePathMatches) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  // Redirect to /unauthorized if the role isn't allowed
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Render children if all conditions are met
  return children;
};

export default ProtectedRoute;
