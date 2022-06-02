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
  const useState: any;
  const useRef: any;
  const createContext: any;
  const useContext: any;
  const useEffect: any;
  export { useRef, useEffect, useContext, StrictMode, createContext, useReducer, useState, MouseEventHandler };
}

// declare module '@storybook/react' {
//   // typing module default export as `any` will allow you to access its members without compiler warning
//   const ComponentStory: any;
//   const ComponentMeta: any;
//   const MouseEventHandler: any;
//   const useState: any;
//   const useRef: any;
//   const createContext: any;
//   const useContext: any;
//   const useEffect: any;
//   export { useRef, useEffect, useContext, ComponentStory, createContext, useReducer, useState, ComponentMeta };
// }
