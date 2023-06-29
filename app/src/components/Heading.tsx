import { ReactElement, useEffect, useState } from "react";

type HeadingProps = {
  onHandleTypeing: any;
  onHandleSearch: any;
};

const Heading = ({
  onHandleTypeing,
  onHandleSearch,
}: HeadingProps): ReactElement => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-200">
      <input
        type="text"
        placeholder="Type here"
        className="input input-ghost w-screen input-bordered mr-2"
        onChange={onHandleTypeing}
      />
      <button onClick={onHandleSearch} className="btn btn-ghost btn-circle">
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      </button>
      <div className="mx-2">
        <i className="fa-solid fa-circle-half-stroke"></i>
        <input type="checkbox" onClick={toggleTheme} className="toggle  mx-2" />
      </div>
    </div>
  );
};

export default Heading;
