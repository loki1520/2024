import "./styles/index.scss"; // добавляем стили !!!
import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames"; // можно использовать и библиотеку classnames, но сделал свою, for training)
import { AppRouter } from "@/app/providers/router/index";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

// App стал пропсом children для провайдера
const App = () => {
  // создали отдельный хук
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
