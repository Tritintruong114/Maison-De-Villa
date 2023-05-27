import { BiBed } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { MdPersonOutline, MdArrowRight } from "react-icons/md";
import CalenderPicker from "../../components/CalenderPicker";
import { useSelector } from "react-redux";
const HomePage = () => {
  const { days } = useSelector((store) => store.dayRange);
  //This page will recive sanity data
  //And redux data
  return (
    <div className="text-black font-poppins bg-purple-300 w-full grid sm:grid-cols-5 px-6">
      <div className="col-span-2 no-scrollbar h-screen overflow-scroll">
        <div className="col-span-2">
          <h1 className="text-3xl font-medium">Mirror House Sud</h1>
        </div>
        <div className="col-span-2">
          <p className="font-light text-sm ita">Ho Chi Minh City, Viet Nam</p>
        </div>
        {/* Money */}
        <div>
          <p className="text-xl font-bold">
            $200<span className="text-xs font-medium">/night</span>
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
        <div className="col-span-2 flex py-6">
          <h1 className="w-1/2 text-xl font-medium">
            Your oder :{" "}
            <span className="font-bold text-2xl">
              {days}
              <span className="text-sm font-medium">/days</span>
            </span>
          </h1>
          <h1 className="w-1/2 text-xl font-medium">
            Totals : <span className="font-bold text-2xl">${days * 200}</span>
          </h1>
        </div>
        {/* Money total */}
        {/* Furniture */}
        <div className=" col-span-1 grid grid-cols-3">
          <div className="flex flex-col">
            <MdPersonOutline />
            <p>4 guests</p>
          </div>
          <div className="flex flex-col">
            <BiBed />
            <p>2 Bedrooms</p>
          </div>
          <div className="flex flex-col">
            <TbBath />
            <p>1 Bathroom</p>
          </div>
        </div>
        {/* Furniture */}
        <div className="col-span-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
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
      <div className="no-scrollbar col-span-3 p-3 overflow-scroll h-screen  gap-3 grid grid-cols-2">
        <img
          className="w-full rounded-3xl col-span-2"
          src="https://moivaonhatoi.com/sites/uploads/2020/05/villa-la-gi-1.jpg"
        ></img>{" "}
        <img
          className="w-full rounded-3xl col-span-1"
          src="https://moivaonhatoi.com/sites/uploads/2020/05/villa-la-gi-1.jpg"
        ></img>{" "}
        <img
          className="w-full rounded-3xl col-span-1"
          src="https://moivaonhatoi.com/sites/uploads/2020/05/villa-la-gi-1.jpg"
        ></img>
        <img
          className="w-full rounded-3xl col-span-2"
          src="https://moivaonhatoi.com/sites/uploads/2020/05/villa-la-gi-1.jpg"
        ></img>{" "}
        <img
          className="w-full rounded-3xl col-span-2"
          src="https://moivaonhatoi.com/sites/uploads/2020/05/villa-la-gi-1.jpg"
        ></img>{" "}
        <img
          className="w-full rounded-3xl col-span-1"
          src="https://moivaonhatoi.com/sites/uploads/2020/05/villa-la-gi-1.jpg"
        ></img>{" "}
        <img
          className="w-full rounded-3xl col-span-1"
          src="https://moivaonhatoi.com/sites/uploads/2020/05/villa-la-gi-1.jpg"
        ></img>
        <img
          className="w-full rounded-3xl col-span-2"
          src="https://moivaonhatoi.com/sites/uploads/2020/05/villa-la-gi-1.jpg"
        ></img>{" "}
      </div>
    </div>
  );
};

export default HomePage;
