import { fetchHomePageDatas } from "../../features/fetchData/homePageDatasSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const UniqueStays = () => {
  const { homePageDatas } = useSelector((store) => store.homePageDatas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageDatas());
  }, [dispatch]);
  return (
    <div className="grid gap-3 p-6 grid-cols-3">
      {homePageDatas.map((house) => {
        return (
          <div className="col-span-1" key={house.id}>
            <h1>{house.nameOfProduct}</h1>
            <Link to={house.id}>
              <img
                className="object-cover w-full h-full"
                src={house.mainImageOfProduct}
              ></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UniqueStays;
