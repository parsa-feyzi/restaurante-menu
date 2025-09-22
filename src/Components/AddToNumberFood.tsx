import { useContext } from "react";
import { themeContext } from "../contexts/contexts";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import type { CartItemType } from "../types/types";
import Button from "./designSystem/Button";


export default function AddToNumberFood({ id, title, price }: CartItemType) {

  const { cartItems, setCartItems } = useContext(themeContext);

  const addToCartHandler = () => {
    const newCartItem = { id, title, price };
    setCartItems((prevCart: CartItemType[]) => [newCartItem, ...prevCart]);
  };

  const removeOfCartHandler = () => {
    const newCartItem = cartItems;
    const removedItemIndex = newCartItem.findIndex(
      (item: CartItemType) => item.id === id
    );
    newCartItem.splice(removedItemIndex, 1);
    setCartItems([...newCartItem]);
  };

  return (
    <div className="flex items-center content-center">
      <div className="flex gap-2 items-center content-center">
        <Button onClick={() => addToCartHandler()}>
          <AddRoundedIcon fontSize="small" />
        </Button>
        <div className="text-lg">
          {cartItems.filter((food: CartItemType) => food.id === id).length}
        </div>
        <Button onClick={() => removeOfCartHandler()}>
          <RemoveRoundedIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
}
