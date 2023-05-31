import { Link } from "react-router-dom";
import homeimg from "./homeimg.jpg";
import img2 from "./img2.jpg";
import { fetchHomePageDatas } from "../../features/fetchData/homePageDatasSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const MainPage = () => {
  const { homePageDatas, mainPage } = useSelector(
    (store) => store.homePageDatas
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageDatas());
  }, [dispatch]);
  // console.log(homePageDatas.slice(0, 3));
  return (
    <div className="font-poppins overflow-scroll no-scrollbar gap-12 flex flex-col p-6 bg-darkBrown h-full">
      {mainPage.map(() => {
        return (
          <>
            <div className="sm:w-full flex-shrink-0 w-full relative h-3/4 ">
              <Link to="uniquestays/black-house-in-the-woods">
                <img
                  className=" rounded-3xl absolute h-full w-full object-cover"
                  src={homeimg}
                />
                <h1 className=" absolute sm:bottom-1/3 sm:ml-12 font-bold bottom-1/2 m-0 text-white text-6xl md:text-6xl">
                  Luxury <br /> Real Estate
                </h1>
              </Link>
            </div>{" "}
            <div className="sm:w-full  flex-shrink-0 w-full relative h-3/4 ">
              <Link to="uniquestays/reza-villa">
                <img
                  className=" rounded-3xl absolute h-full w-full object-cover"
                  src={img2}
                />
                <h1 className=" absolute sm:bottom-1/3 sm:ml-12 font-bold bottom-1/2 m-0 right-12 text-white text-6xl md:text-6xl">
                  Back to <br />
                  nature
                </h1>
              </Link>
            </div>
            <div className="sm:w-full  flex-shrink-0 w-full relative h-3/4 ">
              <Link>
                <img
                  className=" rounded-3xl absolute h-full w-full object-cover"
                  src={homeimg}
                />
                <h1 className=" absolute sm:bottom-1/3 sm:ml-12 bottom-1/2 m-0 text-white text-6xl md:text-6xl">
                  Luxury <br /> Real Estate
                </h1>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MainPage;
