import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
const TopNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenuDropDown = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <div className="flex relative font-poppins w-full h-full">
      {showMenu && (
        <div
          onMouseLeave={() => setShowMenu(false)}
          className=" text-black bg-white sm:invisible visible flex flex-col absolute w-full"
        >
          <button className="active:bg-fall h-9 w-full hover:bg-lightBrown">
            <Link to="cabin&cottages">Cabin & cottages</Link>
          </button>
          <button className="active:bg-fall h-9 w-full hover:bg-lightBrown">
            <Link to="entirehomes">Entire Homes</Link>
          </button>
          <button className="active:bg-fall h-9 w-full hover:bg-lightBrown">
            <Link to="uniquestays">Unique Stays</Link>
          </button>
          <button className="active:bg-fall h-9 w-full hover:bg-lightBrown">
            <Link to="signin">Sign In</Link>
          </button>
        </div>
      )}
      <div className=" gap-3 sm:justify-normal px-6 justify-between h-28 sm:h-12 w-full flex items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold">Maison</h1>
        </Link>
        <div className="grid grid-cols-3 w-1/2   sm:visible sm:relative invisible absolute">
          <button>
            <Link to="cabin&cottages">Cabin & cottages</Link>
          </button>
          <button>
            <Link to="entirehomes">Entire Homes</Link>
          </button>
          <button>
            <Link to="uniquestays">Unique Stays</Link>
          </button>
        </div>
        <div className="visible text-white z-10 sm:invisible sm:absolute">
          {!showMenu && (
            <GoThreeBars
              size={30}
              onMouseEnter={() => handleShowMenuDropDown()}
            />
          )}
        </div>
      </div>
      <div className="w-1/6 flex absolute sm:relative sm:visible invisible  justify-end">
        <button className="h-full md:w-3/4 sm:w-full bg-fall text-black mr-9 rounded-3xl">
          <Link to="signin">Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
