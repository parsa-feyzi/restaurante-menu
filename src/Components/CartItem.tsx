import { useContext } from "react";
import AddToNumberFood from "./AddToNumberFood";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { themeContext } from "../contexts/contexts";
import type { CartItemType } from "../types/types";

export default function CartItem({ id, title, price }: CartItemType) {

  const { cartItems, setCartItems } = useContext(themeContext);

  const removeItemHandler = () => {
    const newCartItems = cartItems.filter(
      (item: CartItemType) => item.id !== id
    );
    setCartItems([...newCartItems]);
  }

  return (
    <div className="item_cart_container p-4 flex justify-between border-b dark:border-gray-700 border-gray-300">
      <div className="flex items-center content-center gap-3">
        <div onClick={removeItemHandler} className="item_cart_remove text-red-800 dark:text-red-500 cursor-pointer hover:opacity-50">
          <ClearRoundedIcon fontSize="small" />
        </div>
        <div>
          <div>{title}</div>
          <div className="text-lg text-mony dark:text-mony-dark">${price}</div>
        </div>
      </div>
      <AddToNumberFood id={id} title={title} price={price} />
    </div>
  );
}
