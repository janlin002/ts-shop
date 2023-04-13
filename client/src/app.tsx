import React, { Suspense, lazy } from 'react';
import {
  HashRouter as Router, Route, Link, Routes,
} from 'react-router-dom';

import './asset/css/style.css';

import Test from './pages/test';

const LoginPage = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>

      </div>
    </Router>
  );
}

export default App;
