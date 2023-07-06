import React, {FC, useState, useEffect, createContext, useContext} from 'react';
import { AuthProvider, AuthContext } from './Auth';

import {MainPage} from "./pages/main/MainPage";
import {Login} from "./pages/login/Login";

export const Routes: FC = () => {

  // @ts-ignore
  const { isAuthenticated } = useContext(AuthContext);

  console.log(isAuthenticated);
  
  
  return (
      <>
        {isAuthenticated ? (
          <MainPage />
        ) : (
          <Login />
        )}
      </>
  );
}

export default Routes;
