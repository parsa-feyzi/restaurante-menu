import { createContext, useState, type JSX } from "react";
import type { CartItemType, FoodType, T_theme, ThemContextType } from "../types/types";

interface I_ThemeProvider {
  children: JSX.Element;
  them: T_theme;
  setThem: React.Dispatch<React.SetStateAction<T_theme>>;
}

export const themeContext = createContext<ThemContextType>({});


export const ThemeProvider = ({ children, them, setThem }: I_ThemeProvider) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<FoodType[]>([]);
  const [showCartItems, setShowCartItems] = useState<CartItemType[]>([]);
  return (
    <>
      <themeContext.Provider
        value={{
          them,
          setThem,
          showCart,
          setShowCart,
          cartItems,
          setCartItems,
          showCartItems,
          setShowCartItems,
        }}
      >
        {children}
      </themeContext.Provider>
    </>
  );
};
