import { useState, useContext, useEffect } from "react";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { themeContext } from "../contexts/contexts";
import AddToNumberFood from "./AddToNumberFood";
import type { CartItemType, FoodType } from "../types/types";

function FoodItem({ id, title, price, img, desc }: FoodType) {
  const [addedToCart, setAddedToCart] = useState(false);

  const {
    setCartItems,
    setShowCartItems,
    cartItems,
  } = useContext(themeContext);

  useEffect(() => {
    if (cartItems.filter((food: CartItemType) => food.id === id).length === 0) {
      setAddedToCart(false);
    }
  }, [cartItems]);

  const addToCartHandler = () => {
    if (!addedToCart) {
      const nweCortItem = { id, title, price };
      setCartItems((prevCart: Object[]) => [nweCortItem, ...prevCart]);
      setShowCartItems((prevCart: Object[]) => [nweCortItem, ...prevCart]);
      setAddedToCart(true);
    }
  };

  return (
    <div style={{ gridTemplateColumns: "4fr 6fr" }} className="grid gap-4">
      <div className="border-4 border-opacity-50 border-seco dark:border-seco-dark rounded w-full h-[160px]">
        <img className="object-cover w-full h-full" src={img} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="py-2 border-b-2 flex justify-between items-center content-center">
          <div>{title}</div>
          <div className="text-mony dark:text-mony-dark">${price}</div>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</div>
        <div
          onClick={addToCartHandler}
          className="w-full flex justify-end text-zinc-600 dark:text-zinc-400 cursor-pointer overflow-hidden h-full"
        >
          <div className="flex items-end pb-1 hover:opacity-70">
            {addedToCart ? (
              <AddToNumberFood id={id} title={title} price={price} />
            ) : (
              <AddShoppingCartRoundedIcon fontSize="medium" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
