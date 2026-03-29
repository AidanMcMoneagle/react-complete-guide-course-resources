import { createContext } from "react";

//use the createContext function to create a context that components can provide or read.
//useful for managing state globally and avoid the issue of prop drilling.
export const CartContext = createContext({
  items: [],
});
