import { createContext } from "react";

//value returned by createContext is a React component.
//exported as a named export.

//create a context object with items in the shopping cart.
//The default value set when creating the context is only used if a component that was not wrapped by the Provider component tries to access the context value.
//setting the default context value means you get some intellisense based upon the default value.
export const CartContext = createContext({
  items: [],
});
