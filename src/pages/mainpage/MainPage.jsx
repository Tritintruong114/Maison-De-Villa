import { Link } from "react-router-dom";
import { fetchHomePageDatas } from "../../features/fetchData/homePageDatasSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import headlessService from "../../components/headlessService";
const MainPage = () => {
  const { homePageDatas } = useSelector((store) => store.homePageDatas);
  const dispatch = useDispatch();

  useEffect(() => {
    // headlessService();
    dispatch(fetchHomePageDatas());
  }, [dispatch]);
  // console.log(homePageDatas.slice(0, 3));
  return (
    <div className="font-poppins overflow-scroll no-scrollbar gap-12 flex flex-col p-12 sm:pt-0 sm:pr-24 sm:pl-24 h-full">
      {homePageDatas.map((main) => {
        return (
          <>
            <div className="sm:w-full shadow-xl rounded-3xl flex-shrink-0 w-full relative h-2/4 sm:h-3/4 ">
              <Link to={`uniquestays/${main?.slug?.current}`}>
                <img
                  className=" rounded-3xl absolute h-full w-full object-cover"
                  src={main.mainImageOfProduct}
                />
                <h1 className=" absolute sm:bottom-1/3 sm:ml-12 font-bold bottom-1/2 m-0 text-white text-6xl md:text-6xl">
                  {main.nameOfProduct}
                </h1>
              </Link>
            </div>{" "}
          </>
        );
      })}
    </div>
  );
};

export default MainPage;
