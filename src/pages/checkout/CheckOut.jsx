// import createVnPayOrder from "./connectVnPay";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomePageDetail } from "../../features/fetchData/homePageDetailSlice";
import { useEffect } from "react";

const CheckOut = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { homePageDetail } = useSelector((store) => store.homePageDetail);
  const { total, days } = useSelector((store) => store.dayRange);

  const platformFee = 36;
  useEffect(() => {
    dispatch(fetchHomePageDetail(slug));
    console.log(homePageDetail);
  }, [dispatch, slug]);
  return (
    <div className="grid h-full overflow-hidden  font-poppins gap-6  p-6 w-full sm:grid-cols-6">
      <div className="sm:col-span-4  bg-fall bg-opacity-30 flex flex-col h-3/4  justify-center items-center   rounded-3xl">
        <h1 className="text-4xl pt-12 font-bold">Payment details</h1>
        <div className="flex flex-col w-3/4">
          <span className="py-1 text-xl opacity-60">Email address</span>
          <input
            placeholder="maisondevilla@gmail.com"
            className="py-3 text-xl rounded pl-3"
          ></input>
        </div>
        <div className="flex flex-col w-3/4">
          <span className="py-1 text-xl opacity-60">Credit Card Number</span>
          <input
            placeholder="xxxx xxxx xxxx xxxx"
            className="py-3 text-xl rounded pl-3"
          ></input>
        </div>
        <div className="flex w-3/4 justify-between">
          <div className="flex flex-col w-1/4">
            <span className="text-xl pt-3 pb-1">Expiry Date</span>
            <input className="py-3 pl-3 rounded" placeholder="mm/yy"></input>
          </div>{" "}
          <div className="flex flex-col w-1/4">
            <span className="text-xl pt-3 pb-1">CVV</span>
            <input className="py-3 pl-3 rounded" placeholder="XXX"></input>
          </div>
        </div>

        <div className="w-3/4">
          <div className="flex pt-12 justify-between items-center ">
            <h1 className="text-xl">Name of product</h1>
            <h1 className="text-3xl font-bold">
              {homePageDetail.nameOfProduct}
            </h1>
          </div>
          <div className="flex w-full justify-between">
            <h1 className="text-3xl">
              Price<span className="text-xl">/day</span>
            </h1>
            <h1 className="text-3xl font-bold">
              ${homePageDetail.priceOfProduct}
            </h1>
          </div>
          <div className="flex w-full justify-between">
            <h1 className="text-3xl">Days</h1>
            <h1 className="text-3xl font-bold">{days}</h1>
          </div>
          <div className="flex w-full justify-between pb-6">
            <h1 className="text-3xl">Platform Fee</h1>
            <h1 className="text-3xl font-bold">${platformFee}</h1>
          </div>
        </div>
        <hr className="w-3/4 pb-3" />
        <div className="w-3/4 flex justify-between">
          <h1 className="text-3xl">Total Amount</h1>
          <h1 className="text-3xl font-bold">${total + platformFee}</h1>
        </div>
        <div className="w-3/4 pb-12">
          <button className="py-6 w-full bg-fall rounded-3xl">
            Make Payment
          </button>
        </div>
      </div>
      <div className="sm:col-span-2 overflow-scroll shadow-2xl no-scrollbar relative flex-col flex h-3/4 rounded-3xl bg-white ">
        <div className="absolute p-6">
          {homePageDetail.imageGalleries.map((image) => {
            return (
              <>
                <img
                  className="py-3 rounded-3xl w-full object-cover"
                  src={image.image.url}
                ></img>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
