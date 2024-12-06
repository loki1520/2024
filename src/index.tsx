import { render } from "react-dom";
import App from "./App";
// чтобы не просил импортировать реакт - в tsconfig.json ---> "compilerOptions": { ---> "jsx": "react-jsx" }

render(
  <App />,
  document.getElementById("root")
);
