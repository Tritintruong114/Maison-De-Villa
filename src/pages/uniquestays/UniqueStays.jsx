// import { fetchHomePageDatas } from "../../features/fetchData/homePageDatasSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const UniqueStays = () => {
  const { homePageDatas } = useSelector((store) => store.homePageDatas);
  const dispatch = useDispatch();
  // console.log(homePageDatas);
  // useEffect(() => {
  //   console.log(homePageDatas);
  //   dispatch(fetchHomePageDatas());
  // }, [dispatch]);
  return <div>UniqueStays</div>;
};

export default UniqueStays;
