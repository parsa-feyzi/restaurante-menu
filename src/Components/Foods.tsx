import { useEffect, useState } from "react";
import menu from "../Data";
import FoodItem from "./FoodItem";
import Header from "./Header";
import Cart from "./Cart";
import CoverPage from "./CoverPage";

function Foods() {
  const [menuDatas, setMenuDatas] = useState(menu);
  const [categories, setCategories] = useState<string[]>();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const [isCategoryHover, setIsCategoryHover] = useState(false);

  useEffect(() => {
    setCategories(["All", ...new Set(menuDatas.map((menu) => menu.category))]);
  }, []);

  useEffect(() => {
    if (activeCategory !== "All") {
      const filteredMenuDatas = menu.filter(
        (food) => food.category === activeCategory
      );

      setMenuDatas(filteredMenuDatas);
    } else setMenuDatas(menu);
  }, [activeCategory]);

  return (
    <>
      {/* page cover */}
      <CoverPage />

      {/* header */}
      <Header />

      {/* cart */}
      <Cart />
      <div className="bg-pry dark:bg-pry-dark pt-28 text-pry-dark dark:text-pry min-h-screen bg-opacity-70 py-10 px-[6vw]">
        <div className="font-medium">
          <div className="relative text-center text-3xl py-2 after:absolute after:w-28 after:h-1 after:bg-seco dark:after:bg-seco-dark after:rounded-full after:bottom-0 after:left-1/2 after:-translate-x-1/2">
            Our Meno
          </div>
          <div className="flex justify-center">
            <div
              onMouseMove={() => setIsCategoryHover(true)}
              onMouseLeave={() => setIsCategoryHover(false)}
              className="mt-12 flex gap-2 justify-center"
            >
              {categories?.map((category, index) => (
                <div
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category && !isCategoryHover
                      ? "rounded cursor-pointer px-3 py-1 bg-seco dark:bg-seco-dark text-pry dark:text-pry-dark"
                      : "rounded cursor-pointer px-3 py-1 text-seco dark:text-seco-dark hover:bg-seco dark:hover:bg-seco-dark hover:text-pry dark:hover:text-pry-dark"
                  }
                  key={index + 1}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12 py-20">
          {menuDatas.map((food) => (
            <FoodItem {...food} key={food.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Foods;
