import { useContext, useEffect, useState } from "react";
import { themeContext } from "../contexts/contexts";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import CartItem from "./CartItem";
import type { CartItemType } from "../types/types";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [walletBalance] = useState<number>(24.008);
  const { cartItems, showCart, showCartItems } = useContext(themeContext);

  useEffect(() => {
    if (cartItems.length) {
      let total = 0;
      if (cartItems.length > 1) {
        total = cartItems.reduce((a: CartItemType | any, c: CartItemType) => {
          if (!a.price) {
            return a + c.price;
          }
          return a.price + c.price;
        });
      } else {
        total = cartItems[0].price;
      }
      setTotalPrice(total);
    }
  }, [cartItems]);

  const paymentHandler = () => {
    walletBalance < totalPrice && alert("Your account balance is not sufficient :(");
  };

  return (
    <div
      className={`${
        showCart ? "" : "translate-x-[100vw]"
      } w-screen overflow-hidden text-pry-dark dark:text-pry z-20 max-w-[350px] fixed right-0 top-16 bg-pry-s/80 dark:bg-pry-s-dark/80 backdrop-blur-md dark:backdrop-blur-lg h-[90.5vh]`}
    >
      {cartItems.length ? (
        <div className="">
          <div className="flex gap-4 dark:bg-pry-s bg-pry-s-dark dark:bg-opacity-10 bg-opacity-10 px-4 py-3">
            <div>Your Wallet Balance :</div>
            <div className="text-seco dark:text-seco-dark">
              ${walletBalance}
            </div>
          </div>
          <div className="cart_items_container flex flex-col overflow-auto max-h-[63vh] pb-1">
            {showCartItems.map(
              (item: CartItemType) =>
                cartItems.includes(item) && <CartItem {...item} />
            )}
          </div>
          <div
            style={{ boxShadow: "0px 7px 69px 0px #38bdf82f" }}
            className="absolute bg-pry-s/80 dark:bg-pry-s-dark/80 backdrop-blur-md dark:backdrop-blur-lg bottom-0 w-full p-4"
          >
            <div className="flex justify-between items-center text-lg">
              <div>Total Price</div>
              <div className="text-mony dark:text-mony-dark">${totalPrice.toFixed(2)}</div>
            </div>
            <div
              onClick={paymentHandler}
              className="flex gap-2 items-center content-center mt-4 bg-seco-dark dark:bg-seco w-full p-2 justify-center cursor-pointer active:bg-opacity-70 dark:active:bg-opacity-70 hover:-translate-y-[1px] rounded text-xl"
            >
              <div>Payment</div>
              <div className="flex items-center">
                <LocalAtmOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-16">
          <img
            className="w-full object-cover opacity-85 dark:opacity-30"
            src="./images/fig-cart-empty.png"
            alt=""
          />
          <div className="text-gray-500 text-2xl text-center pt-4">
            Your cart is empty :(
          </div>
        </div>
      )}
    </div>
  );
}
