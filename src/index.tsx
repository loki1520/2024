import { render } from "react-dom";
import Counter from "./components/Counter";
// чтобы не просил импортировать реакт - в tsconfig.json ---> "compilerOptions": { ---> "jsx": "react-jsx" }

render(
  <div>
    <Counter />
  </div>,
  document.getElementById("root")
);
