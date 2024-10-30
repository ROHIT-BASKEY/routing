// src/context/RoleContext.js
import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // Store user role

  const login = (role) => {
    console.log('Logging in with role:', role); // Debug log
    setUserRole(role);
  };

  const logout = () => {
    console.log('Logging out'); // Debug log
    setUserRole(null);
  };

  return (
    <RoleContext.Provider value={{ userRole, login, logout }}>
      {children}
    </RoleContext.Provider>
  );
};
