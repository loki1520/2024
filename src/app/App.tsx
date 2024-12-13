import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import classNames from 'shared/lib/classNames'; // можно использовать и библиотеку classnames, но сделал свою, for training)
import { AboutPage } from 'pages/AboutPage/index';
import { MainPage } from 'pages/MainPage/index';
//    https://react.dev/reference/react/lazy 

// App стал пропсом children для провайдера
const App = () => { 
  // создали отдельный хук
  const { theme, changeTheme } = useTheme(); 

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to="/about">About</Link> 
      <Link to="/">Main</Link>
      <button onClick={changeTheme}>Change Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
