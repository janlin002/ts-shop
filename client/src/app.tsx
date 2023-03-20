import React from 'react';
import {
  HashRouter as Router, Route, Link, Routes,
} from 'react-router-dom';

import Test from './pages/test';

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
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Test />} />
          {/* <Route path="/products/:id" component={Product} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
