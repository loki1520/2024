import React from 'react';
import Counter from './components/Counter';
import './index.scss'
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Suspense } from 'react';
//    https://react.dev/reference/react/lazy

const App = () => {
  return (
    <div className='app'>
      <Link to="/about">About</Link>
      <Link to="/">Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
