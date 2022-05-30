/// <reference types="react-scripts" />
declare module 'react-dom/client' {
  // typing module default export as `any` will allow you to access its members without compiler warning
  const createRoot: any;
  export { createRoot };
}

declare module 'react' {
  // typing module default export as `any` will allow you to access its members without compiler warning
  const StrictMode: any;
  const useReducer: any;
  const MouseEventHandler: any;
  export { StrictMode, useReducer, MouseEventHandler };
}
