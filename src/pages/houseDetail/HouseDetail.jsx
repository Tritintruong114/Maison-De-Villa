import { BiBed } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { MdPersonOutline, MdArrowRight } from "react-icons/md";
import CalenderPicker from "../../components/CalenderPicker";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchHomePageDetail } from "../../features/fetchData/homePageDetailSlice";
import { checkOut } from "../../features/dayRange/dayRangeSlice";
import { useEffect, useState } from "react";
import Comments from "../../components/comment/Comments";
import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import google from "./google.png";
import { auth, provider } from "../../googleServices/config";
import { signInWithPopup } from "firebase/auth";
// import TopNavBar from "../../components/TopNavBar";

const HouseDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { homePageDetail } = useSelector((store) => store.homePageDetail);
  const { days } = useSelector((store) => store.dayRange);
  const { comment } = useSelector((store) => store.homePageDetail);
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();
  const caculatePriceTotal = (price) => {
    const totalPrice = days * price;
    return totalPrice;
  };

  const notLogin = () => {
    navigate(`popup`);
    setShowPopUp(true);
  };

  const checkOutButton = () => {
    dispatch(checkOut(caculatePriceTotal(homePageDetail.priceOfProduct)));
  };

  // e.stopPropagation();
  const signInButton = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const saveResponse = await response;
      localStorage.setItem("email", saveResponse.user.email);
      toast.success("You are log in");
      setShowPopUp(false);
      // dispatch(fetchHomePageDetail(slug));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchHomePageDetail(slug));
    localStorage.setItem("detailHouse", slug);
  }, [dispatch, slug]);

  return (
    <div className="text-black relative font-poppins gap-5 bg-purple-300 w-full grid sm:grid-cols-5 px-6">
      {showPopUp == true && <Outlet />}
      <div className="sm:col-span-2 col-span-3  p-3 no-scrollbar h-screen overflow-scroll">
        <div className="absolute">
          <ToastContainer />
        </div>
        <div className="col-span-2">
          <h1 className="text-6xl font-bold">
            {homePageDetail?.nameOfProduct}
          </h1>
          <h1 className=" m-0 font-light text-xl">
            {homePageDetail.city}, {homePageDetail.country}
          </h1>
        </div>
        <div className="col-span-2"></div>
        {/* Money */}
        <div className="py-6">
          <p className="text-6xl m-0 font-bold">
            ${homePageDetail.priceOfProduct}
            <span className="text-3xl font-medium">/day</span>
          </p>
        </div>
        {/* Money */}
        {/* Calender */}
        <div className="col-span-2 flex-col flex">
          <h1 className="text-xl font-bold">Check Availability</h1>
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
          {localStorage.getItem("email") ? (
            <Link to={`/check-out/${homePageDetail?.slug?.current}`}>
              <button
                onClick={() => checkOutButton()}
                className="col-span-2 w-full text-3xl font-bold bg-darkBrown bg-opacity-60 py-3 rounded-3xl"
              >
                Check out
              </button>
            </Link>
          ) : (
            <button
              onClick={() => notLogin()}
              className="col-span-2 w-full text-3xl font-bold bg-darkBrown bg-opacity-60 py-3 rounded-3xl"
            >
              Check out
            </button>
          )}
        </div>
        {/* Money total */}
        {/* Furniture */}
        <div className=" col-span-1 grid grid-cols-3 gap-3">
          <div className="flex py-3 border-2 flex-col rounded-3xl justify-center items-center h-full">
            <MdPersonOutline />
            <p className="m-0">{homePageDetail.guests} guests</p>
          </div>
          <div className="flex py-3 border-2 flex-col rounded-3xl justify-center items-center h-full">
            <BiBed />
            <p className="m-0">{homePageDetail.rooms} Bedrooms</p>
          </div>
          <div className="flex py-3 border-2 flex-col rounded-3xl justify-center items-center h-full">
            <TbBath />
            <p className="m-0">{homePageDetail.bathrooms} Bathroom</p>
          </div>
        </div>
        {/* Furniture */}
        <div className="col-span-2">
          <p className="m-0 text-xl w-full py-6">{homePageDetail.describe}</p>
        </div>
        <div className="col-span-2 text-xl grid grid-cols-2 py-6 gap-2 font-light">
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
          {/* <div className="col-span-1 text-3xl">Star</div> */}
        </div>
        {/* <div className="col-span-2 text-3xl py-6">Reviews</div> */}
        {/* Comment section */}
        <div>
          <Comments notLogin={notLogin} />
        </div>
        <div className="w-full h-full gap-3 flex-col flex">
          {localStorage.getItem("detailHouse") === slug &&
            comment?.map((comment) => {
              return (
                <div
                  key={comment?.name}
                  className="col-span-2 py-6 bg-fall bg-opacity-30 pl-3 rounded-3xl"
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="h-9"
                      src="https://images.freeimages.com/fic/images/icons/61/dragon_soft/512/user.png"
                    ></img>
                    <div>
                      <h1 className="m-0 font-medium">{comment.name}</h1>
                      <p className="m-0 font-light opacity-60 italic text-sm">
                        3 Days ago
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="m-0 w-3/4 text-black pt-3">
                      {comment.comments}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {homePageDetail.imageGalleries && (
        <div className="no-scrollbar shadow-xl col-span-3 p-3 overflow-scroll h-screen  gap-3 grid grid-cols-2">
          <a
            className="col-span-2"
            href={homePageDetail.imageGalleries[0]?.image?.url}
          >
            <img
              className="w-full h-full object-cover rounded-3xl col-span-2"
              src={homePageDetail.imageGalleries[0]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-1"
            href={homePageDetail.imageGalleries[1]?.image?.url}
          >
            <img
              className="w-full rounded-3xl h-full object-cover col-span-1"
              src={homePageDetail.imageGalleries[1]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-1"
            href={homePageDetail.imageGalleries[2]?.image?.url}
          >
            <img
              className="w-full h-full object-cover rounded-3xl col-span-1"
              src={homePageDetail.imageGalleries[2]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-2"
            href={homePageDetail.imageGalleries[3]?.image?.url}
          >
            <img
              className="w-full h-full object-cover rounded-3xl col-span-2"
              src={homePageDetail.imageGalleries[3]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-2"
            href={homePageDetail.imageGalleries[4]?.image?.url}
          >
            <img
              className="w-full h-full object-cover rounded-3xl col-span-2"
              src={homePageDetail.imageGalleries[4]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-1"
            href={homePageDetail.imageGalleries[5]?.image?.url}
          >
            <img
              className="w-full h-full object-cover rounded-3xl col-span-1"
              src={homePageDetail.imageGalleries[5]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-1"
            href={homePageDetail.imageGalleries[6]?.image?.url}
          >
            <img
              className="w-full h-full object-cover rounded-3xl col-span-1"
              src={homePageDetail.imageGalleries[6]?.image?.url}
            ></img>
          </a>
          <a
            className="col-span-2"
            href={homePageDetail.imageGalleries[7]?.image?.url}
          >
            <img
              className="w-full h-full object-cover rounded-3xl col-span-2"
              src={homePageDetail?.imageGalleries[7]?.image?.url}
            ></img>
          </a>
        </div>
      )}
    </div>
  );
};
export default HouseDetail;
