import React, { FC, createContext, useState } from 'react';
import {IUser} from "./interfaces/interfaces";




// Create the AuthContext
// @ts-ignore
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider: FC<{children: any}> = ({ children }) => {
  // State to hold the user's authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser>();


  // Function to handle logout
  const logout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
  };

  // Value object to be provided by the context
  const authContextValue = {
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    user,
    logout,
  };

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
