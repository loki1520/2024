import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// чтобы не просил импортировать реакт - в tsconfig.json ---> "compilerOptions": { ---> "jsx": "react-jsx" }

render(
  <BrowserRouter>
    <App />,  
  </BrowserRouter>,
  document.getElementById("root")
);
