import { useContext } from "react";
import { themeContext } from "../contexts/contexts";

export default function CoverPage() {
  const { showCart, setShowCart } = useContext(themeContext);

  return (
    <div
      onClick={() => setShowCart(false)}
      className={`${
        showCart ? "block" : "hidden"
      } backdrop-blur-sm fixed z-10 bg-black bg-opacity-70 w-full h-screen`}
    ></div>
  );
}
