import { ReactElement, useEffect, useState } from "react";

type HeadingProps = {
  onHandleTypeing: any;
  onHandleSearch: any;
};

const Heading = ({
  onHandleTypeing,
  onHandleSearch,
}: HeadingProps): ReactElement => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // initially set the theme and "listen" for changes to apply them to the HTML tag
  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100">
      <div className="grid grid-cols-12 w-screen">
        <div className="col-span-9 sm:col-span-11 flex flex-between">
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full input-bordered mr-2"
            onChange={onHandleTypeing}
          />
          <button onClick={onHandleSearch} className="btn btn-ghost btn-circle">
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </button>
        </div>
        <div className="col-span-2 sm:col-span-1 flex flex-between">
          <div className="pb-1">
            <i className="fa-solid ml-2 fa-circle-half-stroke"></i>
          </div>
          <div>
            <input
              type="checkbox"
              onClick={toggleTheme}
              className="toggle border-0 mx-2"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Heading;
