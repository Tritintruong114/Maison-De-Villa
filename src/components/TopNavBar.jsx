import { useEffect } from "react";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import user from "./user.png";
const TopNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleShowMenuDropDown = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/signin");
    toast.success("You are Log Out");
  };

  useEffect(() => {
    console.log(localStorage.getItem("email"));
  }, []);
  return (
    <div className="flex shadow-md relative pb-6 font-poppins w-full h-full">
      {showMenu && (
        <div
          onMouseLeave={() => setShowMenu(false)}
          className=" text-black bg-white md:invisible visible flex flex-col absolute w-full"
        >
          <button className="active:bg-fall h-9 w-full hover:bg-lightBrown">
            <Link to="ai">Design your🔥</Link>
          </button>{" "}
          <button className="active:bg-fall h-9 w-full hover:bg-lightBrown">
            <Link to="uniquestays">Unique Stays</Link>
          </button>
          <button className="active:bg-fall h-9 w-full hover:bg-lightBrown">
            <Link to="signin">Sign In</Link>
          </button>
        </div>
      )}
      <div className=" gap-3 text-center md:justify-normal px-6 justify-between h-28 sm:h-12 w-full flex items-center">
        <h1 className="text-5xl font-bold m-0">
          <Link to="/">Maison</Link>
        </h1>
        <div className="grid grid-cols-3 w-1/2   md:visible md:relative invisible absolute">
          {/* <button>
            <Link to="cabin&cottages">Cabin & cottages</Link>
          </button>*/}
          <button className="text-xl  hover:scale-110 transition ease-in-out font-medium hover:text-darkBrown">
            <Link to="ai">Design your🔥</Link>
          </button>
          <button className="text-xl  hover:scale-110 transition ease-in-out font-medium hover:text-darkBrown">
            <Link to="uniquestays">Galleries</Link>
          </button>
        </div>
        <div className="visible text-black z-10 md:invisible md:absolute">
          {!showMenu && (
            <GoThreeBars
              size={30}
              onMouseEnter={() => handleShowMenuDropDown()}
            />
          )}
        </div>
      </div>
      <div className="w-1/6 flex absolute md:relative md:visible invisible  justify-end">
        {!localStorage.getItem("email") ? (
          <button className="h-full shadow hover:scale-110 transition ease-in-out md:w-3/4 sm:w-full bg-fall text-black mr-9 rounded-3xl">
            <Link className="h-full md:w-3/4 sm:w-full" to="signin">
              Sign in
            </Link>
          </button>
        ) : (
          <div className="flex w-full items-center gap-3">
            <img className="h-12" src={user}></img>
            <button
              onClick={() => logOut()}
              className="h-full shadow hover:scale-110 transition ease-in-out active:bg-darkBrown md:w-3/4 sm:w-full bg-fall text-black mr-9 rounded-3xl"
            >
              <Link
                className="h-full  hover:text-darkBrown  md:w-3/4 sm:w-full"
                to="signin"
              >
                Log out
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
