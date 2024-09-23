import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppContext from './AppContext'; 
import routes from './fuse-configs/routesConfig'; 

const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            {/* <Route path="*" element={<Navigate to="/pages/errors/error-404" />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
