import { fetchHomePageDatas } from "../../features/fetchData/homePageDatasSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardSkeleton from "../../components/CardSkeleton";
import { FaStar } from "react-icons/fa";
import { fetchCityCategory } from "../../features/fetchData/cityCategory";
import { filterCity } from "../../features/fetchData/homePageDatasSlice";

const UniqueStays = () => {
  //Redux
  const { homePageDatas, isLoading, homeFilter } = useSelector(
    (store) => store.homePageDatas
  );
  const { cityCategory } = useSelector((store) => store.cityCategories);
  const dispatch = useDispatch();

  //hooks
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    dispatch(fetchCityCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchHomePageDatas());
  }, [dispatch]);

  //filter function
  const filter = (city) => {
    setIsFilter(true);
    const filtered = homePageDatas.filter((house) => {
      return house.city === city;
    });
    dispatch(filterCity(filtered));
  };
  //back to all function
  const handleAll = () => {
    setIsFilter(false);
    dispatch(fetchHomePageDatas());
  };

  return (
    <div className="grid font-poppins md:grid-cols-2 no-scrollbar w-full overflow-scroll gap-6 p-6 xl:grid-cols-3">
      <div className="xl:col-span-3 col-span-2 w-full flex  justify-center items-center gap-3">
        <div>
          <button
            onClick={() => handleAll()}
            className="px-3 bg-fall py-1 rounded-xl font-medium"
          >
            All
          </button>
        </div>
        {cityCategory.map((city) => {
          return (
            <div key={city.slug.current}>
              <button
                onClick={() => filter(city.title)}
                className="px-3 bg-fall py-1 rounded-xl font-medium"
              >
                {city.title}
              </button>
            </div>
          );
        })}
      </div>
      {isFilter == true
        ? homeFilter.map((house) => {
            return (
              <>
                {isLoading ? (
                  <CardSkeleton />
                ) : (
                  <div
                    className="col-span-1 p-6 rounded-3xl shadow-md flex-shrink-0 h-96 relative"
                    key={house.id}
                  >
                    <Link to={`${house.slug?.current}`}>
                      <img
                        className="object-cover w-full h-3/4 rounded-3xl"
                        src={house.mainImageOfProduct}
                      ></img>
                      <div className="grid">
                        <div className="flex text-3xl text-yellow  items-center pt-2">
                          <div className=" w-full h-full flex flex-col">
                            <h1 className="font-bold relative mb-0  text-xl text-black">
                              {house.nameOfProduct}
                              <div className="flex absolute text-black gap-3 w-full text-sm opacity-60">
                                <p className="mb-0">{house.rooms} Beds</p>
                                <p className="mb-0">{house.bathrooms} Baths</p>
                                <p className="mb-0">{house.guests} Guests</p>
                              </div>
                            </h1>
                            <p className="text-black text-xs absolute bottom-0">
                              {house.city}, {house.country}
                            </p>
                          </div>

                          <div className="flex gap-3 items-center relative text-center flex-col">
                            <div className="flex items-center">
                              <p className="text-black text-xl font-bold m-0">
                                4.5
                              </p>
                              <FaStar />
                            </div>
                            <p className="text-black text-xs mb-0">
                              (12 reviews)
                            </p>
                            <h1 className="text-sm m-0 font-bold text-black">
                              ${house.priceOfProduct}/night
                            </h1>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </>
            );
          })
        : homePageDatas.map((house) => {
            return (
              <>
                {isLoading ? (
                  <CardSkeleton />
                ) : (
                  <div
                    className="col-span-1 p-6 rounded-3xl shadow-md flex-shrink-0 h-96 relative"
                    key={house.id}
                  >
                    <Link to={`${house.slug?.current}`}>
                      <img
                        className="object-cover w-full h-3/4 rounded-3xl"
                        src={house.mainImageOfProduct}
                      ></img>
                      <div className="grid">
                        <div className="flex text-3xl text-yellow  items-center pt-2">
                          <div className=" w-full h-full flex flex-col">
                            <h1 className="font-bold relative mb-0  text-xl text-black">
                              {house.nameOfProduct}
                              <div className="flex absolute text-black gap-3 w-full text-sm opacity-60">
                                <p className="mb-0">{house.rooms} Beds</p>
                                <p className="mb-0">{house.bathrooms} Baths</p>
                                <p className="mb-0">{house.guests} Guests</p>
                              </div>
                            </h1>
                            <p className="text-black text-xs absolute bottom-0">
                              {house.city}, {house.country}
                            </p>
                          </div>

                          <div className="flex gap-3 items-center relative text-center flex-col">
                            <div className="flex items-center">
                              <p className="text-black text-xl font-bold m-0">
                                4.5
                              </p>
                              <FaStar />
                            </div>
                            <p className="text-black text-xs mb-0">
                              (12 reviews)
                            </p>
                            <h1 className="text-sm m-0 font-bold text-black">
                              ${house.priceOfProduct}/night
                            </h1>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </>
            );
          })}
    </div>
  );
};

export default UniqueStays;
