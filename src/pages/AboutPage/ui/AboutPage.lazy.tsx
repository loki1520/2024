//     https://react.dev/reference/react/lazy
import {lazy} from "react";
//    https://react.dev/reference/react/lazy 

// export const AboutPageLazy = lazy(() => import('./AboutPage'));

// for testing loading...
export const AboutPageLazy = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve(
      // @ts-ignore
      import('./AboutPage').then((module) => {
        console.log("Модуль загружен:", module); // Лог загруженного модуля
        return module; // Обязательно возвращаем default-экспорт
      })
    );
  }, 1500);
}));
