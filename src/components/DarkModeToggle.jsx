import sun from "../../public/images/sun.png";
import moon from "../../public/images/moon.png";
//import { useEffect, useState } from "react";

export default function DarModeToggle() {
  //const [checked, setChecked] = useState(false);
  //const [theme, setTheme] = useState("light");

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").removeAttribute("data-theme", "dark");
  };

  const setToggle = (e) => {
    if (!e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

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
