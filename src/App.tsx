import React, {useState, useEffect, createContext, useContext} from 'react';
import { AuthProvider } from './Auth';
import Routes from "./Routes";

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <div className="container my-12">
          <div className="row g-4">
            <div className="col-md-12">
              <Routes />
            </div>
            
          </div>
          
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
