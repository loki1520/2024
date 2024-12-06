import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
// чтобы не просил импортировать реакт - в tsconfig.json ---> "compilerOptions": { ---> "jsx": "react-jsx" }

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />,  
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
