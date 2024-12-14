import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import classNames from '@/shared/lib/classNames'; // можно использовать и библиотеку classnames, но сделал свою, for training)
import { AppRouter } from '@/app/providers/router/index';
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
      <AppRouter />
    </div>
  );
};

export default App;
