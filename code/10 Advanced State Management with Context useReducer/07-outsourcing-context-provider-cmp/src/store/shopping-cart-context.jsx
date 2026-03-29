import { createContext, useState } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products.js";

//Steps for context.
//1. Create a context object with createContext function and export it. This context object will be used by components to access the context value and to wrap components that need access to the context value. The default value set when creating the context is only used if a component that was not wrapped by the Provider component tries to access the context value. Setting the default context value means you get some intellisense based upon the default value.
//2. Create a context provider and wrap this around the components that need to acess the component. Best pratice is to create a separate component for the context provider. This component will manage the state and provide the context value to its children components. The context provider component will use the Context.Provider component to wrap its children components and provide the context value through the value prop of the Provider component.
//3. Consume the context value in the components that need access to the context value. This can be done using the useContext hook or by using the Context.Consumer component. The useContext hook is a more convenient way to consume the context value and is recommended for most use cases.

//create a context object with items in the shopping cart and functions to add items to the cart and update item quantity in the cart. The default value set when creating the context is only used if a component that was not wrapped by the Provider component tries to access the context value. Setting the default context value means you get some intellisense based upon the default value.
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

//Context Provider component that manages the shopping cart state and returns a component to wrap the application components which require the usage of this context. The provider component is responsible for managing the state and providing the context value to its children components.
export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id,
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  //This value provided within the value prop of the Provider component is what will be accessible to any component that consumes this context.
  //When any of the values provided in the context value change, all components that consume this context will re-render to reflect the updated context value.
  //NOTE - even if a component only consumes one value from the context, it will re-render whenever any value in the context changes. This is because the entire context value is considered as a single unit, and any change to it will trigger a re-render of all consuming components.

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
