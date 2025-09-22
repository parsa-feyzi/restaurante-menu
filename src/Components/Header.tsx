import { useContext } from "react";
import type { T_theme, ThemContextType } from "../types/types";
import { themeContext } from "../contexts/contexts";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

export default function Header() {
  const { them, setThem, setShowCart, cartItems } = useContext<ThemContextType>(
    themeContext
  );

  const themChangeHandler = () => {
    setThem((prevThem: T_theme) =>
      prevThem === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="w-full fixed z-30 bg-pry-s/80 dark:bg-pry-s-dark/80 backdrop-blur-md dark:backdrop-blur-lg px-[6vw] py-4 flex justify-between items-center content-center">
      <div className="font-[bangers] text-2xl text-seco dark:text-seco-dark">
        Mega Food
      </div>
      <div className="flex flex-row gap-6 items-center content-center text-pry-dark dark:text-pry ">
        <div
          onClick={themChangeHandler}
          className="cursor-pointer hover:opacity-70"
        >
          {them === "dark" ? (
            <WbSunnyRoundedIcon className="dark:text-pry" />
          ) : (
            <DarkModeRoundedIcon className="text-pry-dark" />
          )}
        </div>
        <div
          onClick={() => setShowCart((prevShow: boolean) => !prevShow)}
          className="cursor-pointer hover:opacity-70"
        >
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
}
