import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
//    https://react.dev/reference/react/lazy

// App стал пропсом children для провайдера
const App = () => {
  // создали отдельный хук
  const { theme, changeTheme } = useTheme(); 

  return (
    <div className={`app ${theme}`}>
      <Link to="/about">About</Link>
      <Link to="/">Main</Link>
      <button onClick={changeTheme}>Change Theme</button>
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
