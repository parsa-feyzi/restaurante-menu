export type ThemContextType = any;

export type T_theme = "dark" | "light"

export interface FoodType {
  id: number;
  title: string;
  price: number;
  img: string;
  desc: string;
};

export interface CartItemType { id: number; title: string; price: number };
