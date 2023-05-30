import homeimg from "./homeimg.jpg";
const MainPage = () => {
  return (
    <div className="font-poppins p-6 bg-darkBrown h-full">
      <div className="sm:w-full w-full relative h-3/4 ">
        <img
          className=" rounded-3xl absolute h-full w-full object-cover"
          src={homeimg}
        />
        <h1 className=" absolute sm:bottom-1/3 sm:ml-12 bottom-1/2 m-0 text-white text-6xl md:text-6xl">
          Luxury <br /> Real Estate
        </h1>
      </div>
    </div>
  );
};

export default MainPage;
