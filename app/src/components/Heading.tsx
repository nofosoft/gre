import { ReactElement, useEffect, useState } from "react";

type HeadingProps = {
  onHandleTypeing: any;
};

const Heading = ({ onHandleTypeing }: HeadingProps): ReactElement => {
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
      <button className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <div className="mx-2">
        <i className="fa-solid fa-circle-half-stroke"></i>
        <input type="checkbox" onClick={toggleTheme} className="toggle  mx-2" />
      </div>
    </div>
  );
};

export default Heading;
