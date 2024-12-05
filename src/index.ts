import { someFunc } from "./test";

someFunc(6666);

document.body.innerHTML = `<h1 style="color: red">Hello World</h1>`;

// передать определенные переменные при запуске dev server (или можно их сразу вставить в json start): npx webpack --env goal=local --env production --progress
 