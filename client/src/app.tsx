import React, { Suspense, lazy } from 'react';
import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import { Box } from '@mui/material';

import './asset/css/style.css';

const LoginPage = lazy(() => import('./pages/Login'));
const MainPage = lazy(() => import('./pages/MainPage'));

function App() {
  return (
    <Router>
      <Box>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>

      </Box>
    </Router>
  );
}

export default App;

// 如果使用者未登入，導致登入頁
