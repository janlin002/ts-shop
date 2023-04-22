import React, { Suspense, lazy } from 'react';
import {
  HashRouter as Router, Route, Link, Routes, Navigate,
} from 'react-router-dom';

import './asset/css/style.css';

const LoginPage = lazy(() => import('./pages/Login'));
const MainPage = lazy(() => import('./pages/MainPage'));

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products/1">First Product</Link>
            </li>
            <li>
              <Link to="/products/2">Second Product</Link>
            </li>
            <li>
              <Link to="/login">LoginPage</Link>
            </li>
          </ul>
        </nav> */}
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>

      </div>
    </Router>
  );
}

export default App;

// 如果使用者未登入，導致登入頁
