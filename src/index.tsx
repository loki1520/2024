import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";
// чтобы не просил импортировать реакт - в tsconfig.json ---> "compilerOptions": { ---> "jsx": "react-jsx" }

import "./shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ThemeProvider> 
      <App />,  
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
