import { fetchHomePageDatas } from "../../features/fetchData/homePageDatasSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CardSkeleton from "../../components/CardSkeleton";
import { FaStar } from "react-icons/fa";
const UniqueStays = () => {
  const { homePageDatas, isLoading } = useSelector(
    (store) => store.homePageDatas
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageDatas());
  }, [dispatch]);

  return (
    <div className="grid font-poppins no-scrollbar w-full overflow-scroll gap-6 p-6 sm:grid-cols-3">
      {homePageDatas.map((house) => {
        return (
          <>
            {isLoading ? (
              <CardSkeleton />
            ) : (
              <div
                className="col-span-1 p-6 shadow-md flex-shrink-0 h-96 relative"
                key={house.id}
              >
                <Link to={`${house.slug?.current}`}>
                  <img
                    className="object-cover w-full h-3/4"
                    src={house.mainImageOfProduct}
                  ></img>
                  <div className="grid">
                    <div className="flex text-3xl text-yellow  items-center">
                      <div className=" w-full h-full flex flex-col">
                        <h1 className="font-bold relative mb-0  text-xl text-black">
                          {house.nameOfProduct}
                          <div className="flex absolute text-black gap-3 w-full text-sm opacity-60">
                            <p className="mb-0">{house.rooms} Beds</p>
                            <p className="mb-0">{house.bathrooms} Baths</p>
                            <p className="mb-0">{house.guests} Guests</p>
                          </div>
                        </h1>
                      </div>

                      <div className="flex gap-3 items-center relative text-center flex-col">
                        <div className="flex items-center">
                          <p className="text-black text-xl font-bold m-0">
                            4.5
                          </p>
                          <FaStar />
                        </div>
                        <p className="text-black text-xs mb-0">(126 reviews)</p>
                        <h1 className="text-sm m-0 font-bold text-black">
                          $300/night
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
