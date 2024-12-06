//     https://react.dev/reference/react/lazy
import {lazy} from "react";

// export const AboutPageLazy = lazy(() => import('./AboutPage'));

// for testing loading...
export const AboutPageLazy = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    // @ts-ignore
        resolve(import('./AboutPage'));
    }, 1500);
}));
