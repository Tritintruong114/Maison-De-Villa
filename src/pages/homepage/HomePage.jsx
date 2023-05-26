import { BiBed } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { MdPersonOutline, MdArrowRight } from "react-icons/md";
const HomePage = () => {
  //This page will recive sanity data
  return (
    <div className="text-black font-poppins bg-purple-300 w-full grid grid-cols-5 px-6">
      <div className="col-span-2 no-scrollbar h-screen overflow-scroll">
        <div className="col-span-2">
          <h1 className="text-3xl font-medium">Mirror House Sud</h1>
        </div>
        <div className="col-span-2">
          <p className="font-light text-sm ita">Ho Chi Minh City, Viet Nam</p>
        </div>
        <div>
          <p>
            $1,500<span className="text-xs">/night</span>
          </p>
        </div>
        <div className="col-span-2 flex items-center ">
          <h1>Calender selected</h1>
        </div>
        <div className="flex justify-between py-6">
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
        <div className="col-span-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-2 py-6 gap-2 text-sm font-light">
          {/* <div className="flex items-center">
            <MdArrowRight />
            <p>Kitchen</p>
          </div> */}
          {/* <UltilsAsset /> */}
          <div className="flex items-center">
            <MdArrowRight />
            <p>Free parking</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p>wi-fi</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p>Tv</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p>Air Conditioner</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p>Pool</p>
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p>asher</p>W
          </div>
          <div className="flex items-center">
            <MdArrowRight />
            <p>Hair dryer</p>
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
