import sun from "../../public/images/sun.png";
import moon from "../../public/images/moon.png";
import { useEffect, useState } from "react";

export default function DarModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setDarkMode(true);
  };
  const setLightTheme = () => {
    document.querySelector("body").removeAttribute("data-theme", "dark");
    setDarkMode(false);
  };

  // Función para cambiar el modo al hacer clic en el interruptor
  const setToggle = () => {
    if (!darkMode) {
      setDarkTheme();
      localStorage.setItem("theme", "dark");
    } else {
      setLightTheme();
      localStorage.setItem("theme", "light");
    }
  };

  // Efecto para cargar el tema almacenado localmente al iniciar
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);

  // const setToggle = (e) => {
  //   if (!e.target.checked) {
  //     setDarkMode();
  //   } else {
  //     setLightMode();
  //   }
  // };

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setChecked(savedTheme === "dark");
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("theme", checked ? "dark" : "light");
  //   if (!checked) {
  //     document.querySelector("html")?.classList.add("dark");
  //   } else {
  //     document.querySelector("html")?.classList.remove("dark");
  //   }
  // }, [checked]);

  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        // value={darkMode}
        checked={!darkMode}
        onChange={setToggle}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <img src={sun} alt="light" className="fa-sun" />
        <img src={moon} alt="dark" className="fa-moon" />
        <span className="ball"></span>
      </label>
    </div>
  );
}
