import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // Store role after login

  const login = (role) => setUserRole(role);
  const logout = () => setUserRole(null);

  return (
    <RoleContext.Provider value={{ userRole, login, logout }}>
      {children}
    </RoleContext.Provider>
  );
};
