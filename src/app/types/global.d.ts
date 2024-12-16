// https://stackoverflow.com/questions/41336858/how-to-import-css-modules-with-typescript-react-and-webpack#:~:text=declare%20module%20%27*.css%27%20%7B%0A%20%20interface%20IClassNames%20%7B%0A%20%20%20%20%5BclassName%3A%20string%5D%3A%20string%0A%20%20%7D%0A%20%20const%20classNames%3A%20IClassNames%3B%0A%20%20export%20%3D%20classNames%3B%0A%7D
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

// https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.woff";
declare module "*.woff2";

declare const __IS_DEV__: boolean;
