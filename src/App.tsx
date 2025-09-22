import { useState } from "react";
import "./App.css";
import Foods from "./Components/Foods";
import { ThemeProvider } from "./contexts/contexts";
import type { T_theme } from "./types/types";


function App() {
  const [them, setThem] = useState<T_theme>("dark");

  return (
    <ThemeProvider them={them} setThem={setThem} >
      <div className={them}>
        <Foods />
      </div>
    </ThemeProvider>
  );
}

export default App;
