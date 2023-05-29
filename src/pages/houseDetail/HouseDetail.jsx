import { BiBed } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { MdPersonOutline, MdArrowRight } from "react-icons/md";
import CalenderPicker from "../../components/CalenderPicker";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchHomePageDetail } from "../../features/fetchData/homePageDetailSlice";
import { checkOut } from "../../features/dayRange/dayRangeSlice";
const HouseDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { homePageDetail } = useSelector((store) => store.homePageDetail);
  const { days } = useSelector((store) => store.dayRange);

  useEffect(() => {
    dispatch(fetchHomePageDetail(slug));
  }, [dispatch, slug]);

  const caculatePriceTotal = (price) => {
    const totalPrice = days * price;
    return totalPrice;
  };
  //This page will recive sanity data
  //And redux data

  return (
    <div className="text-black font-poppins gap-5 bg-purple-300 w-full grid sm:grid-cols-5 px-6">
      <div className="sm:col-span-2 col-span-3  p-3 no-scrollbar h-screen overflow-scroll">
        <div className="col-span-2">
          <h1 className="text-5xl font-bold">{homePageDetail.nameOfProduct}</h1>
        </div>
        <div className="col-span-2">
          <p className="font-light text-sm ita">
            {homePageDetail.city}, {homePageDetail.country}
          </p>
        </div>
        {/* Money */}
        <div>
          <p className="text-3xl font-bold">
            ${homePageDetail.priceOfProduct}
            <span className="text-xl font-medium">/night</span>
          </p>
        </div>
        {/* Money */}
        {/* Calender */}
        <div className="col-span-2 flex-col flex">
          <h1 className="text-sm font-bold">Check Availability</h1>
          <CalenderPicker />
        </div>
        {/* Calender */}
        {/* Money total */}
        <div className="col-span-2 flex flex-col py-6">
          <div className="flex">
            <h1 className="w-1/2 text-xl font-medium">
              Your oder :{" "}
              <span className="font-bold text-3xl">
                {days}
                <span className="text-sm font-medium">/days</span>
              </span>
            </h1>
            <h1 className="w-1/2 text-xl font-medium">
              Totals : <span className="font-bold text-3xl">$</span>
              <span className="font-bold text-3xl">
                {days ? caculatePriceTotal(homePageDetail.priceOfProduct) : 0}
              </span>
            </h1>
          </div>
          <Link to="/check-out">
            <button
              onClick={() =>
                dispatch(
                  checkOut(caculatePriceTotal(homePageDetail.priceOfProduct))
                )
              }
              className="col-span-2 w-full text-3xl font-bold bg-darkBrown bg-opacity-60 py-3 rounded-3xl"
            >
              Check out
            </button>
          </Link>
        </div>
        {/* Money total */}
        {/* Furniture */}
        <div className=" col-span-1 grid grid-cols-3">
          <div className="flex flex-col">
            <MdPersonOutline />
            <p>{homePageDetail.guests} guests</p>
          </div>
          <div className="flex flex-col">
            <BiBed />
            <p>{homePageDetail.rooms} Bedrooms</p>
          </div>
          <div className="flex flex-col">
            <TbBath />
            <p>{homePageDetail.bathrooms} Bathroom</p>
          </div>
        </div>
        {/* Furniture */}
        <div className="col-span-2">
          <p>{homePageDetail.describe}</p>
        </div>
        <div className="col-span-2 grid grid-cols-2 py-6 gap-2 text-sm font-light">
          <div className="flex items-center">
            <MdArrowRight />
            <p className="m-0">Kitchen</p>
          </div>
          {/* <UltilsAsset /> */}
          <div className="flex items-center">
            <MdArrowRight />
            <p className="m-0">Free parking</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p className="m-0">wi-fi</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p className="m-0">Tv</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p className="m-0">Air Conditioner</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p className="m-0">Pool</p>
          </div>
          <div className=" flex items-center">
            <MdArrowRight />
            <p className="m-0">Washer</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p className="m-0">Hair dryer</p>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-3">
          <div className="col-span-1">Star</div>
          <div className="col-span-2">Review</div>
        </div>
        <div className="col-span-2 py-6">
          <div className="flex items-center">
            <img
              className="h-9"
              src="https://images.freeimages.com/fic/images/icons/61/dragon_soft/512/user.png"
            ></img>
            <div>
              <h1 className="font-medium">Name User</h1>
              <p className="font-light opacity-60 italic text-sm">Date</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
        </div>{" "}
        <div className="col-span-2 py-6">
          <div className="flex items-center">
            <img
              className="h-9"
              src="https://images.freeimages.com/fic/images/icons/61/dragon_soft/512/user.png"
            ></img>
            <div>
              <h1 className="font-medium">Name User</h1>
              <p className="font-light opacity-60 italic text-sm">Date</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
        </div>{" "}
        <div className="col-span-2 py-6">
          <div className="flex items-center">
            <img
              className="h-9"
              src="https://images.freeimages.com/fic/images/icons/61/dragon_soft/512/user.png"
            ></img>
            <div>
              <h1 className="font-medium">Name User</h1>
              <p className="font-light opacity-60 italic text-sm">Date</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
        </div>{" "}
        <div className="col-span-2 py-6">
          <div className="flex items-center">
            <img
              className="h-9"
              src="https://images.freeimages.com/fic/images/icons/61/dragon_soft/512/user.png"
            ></img>
            <div>
              <h1 className="font-medium">Name User</h1>
              <p className="font-light opacity-60 italic text-sm">Date</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
        </div>
      </div>
      {homePageDetail.imageGalleries && (
        <div className="no-scrollbar shadow-xl col-span-3 p-3 overflow-scroll h-screen  gap-3 grid grid-cols-2">
          <a
            className="col-span-2"
            href={homePageDetail.imageGalleries[0]?.image?.url}
          >
            <img
              className="w-full h-full rounded-3xl col-span-2"
              src={homePageDetail.imageGalleries[0]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-1"
            href={homePageDetail.imageGalleries[1]?.image?.url}
          >
            <img
              className="w-full rounded-3xl h-full col-span-1"
              src={homePageDetail.imageGalleries[1]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-1"
            href={homePageDetail.imageGalleries[2]?.image?.url}
          >
            <img
              className="w-full h-full rounded-3xl col-span-1"
              src={homePageDetail.imageGalleries[2]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-2"
            href={homePageDetail.imageGalleries[3]?.image?.url}
          >
            <img
              className="w-full h-full rounded-3xl col-span-2"
              src={homePageDetail.imageGalleries[3]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-2"
            href={homePageDetail.imageGalleries[4]?.image?.url}
          >
            <img
              className="w-full h-full rounded-3xl col-span-2"
              src={homePageDetail.imageGalleries[4]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-1"
            href={homePageDetail.imageGalleries[5]?.image?.url}
          >
            <img
              className="w-full h-full rounded-3xl col-span-1"
              src={homePageDetail.imageGalleries[5]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-1"
            href={homePageDetail.imageGalleries[6]?.image?.url}
          >
            <img
              className="w-full h-full rounded-3xl col-span-1"
              src={homePageDetail.imageGalleries[6]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-2"
            href={homePageDetail.imageGalleries[7]?.image?.url}
          >
            <img
              className="w-full h-full rounded-3xl col-span-2"
              src={homePageDetail?.imageGalleries[7]?.image?.url}
            ></img>
          </a>
        </div>
      )}
    </div>
  );
};

export default HouseDetail;
