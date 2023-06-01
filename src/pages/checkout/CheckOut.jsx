// import createVnPayOrder from "./connectVnPay";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomePageDetail } from "../../features/fetchData/homePageDetailSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import yes from "./yes.png";

const CheckOut = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { homePageDetail } = useSelector((store) => store.homePageDetail);
  const { total, days } = useSelector((store) => store.dayRange);

  const platformFee = 36;
  useEffect(() => {
    dispatch(fetchHomePageDetail(slug));
    // console.log(homePageDetail);
  }, [dispatch, slug]);

  //Account sandbox demo :

  //copy here  : sb-a6fog26134195@business.example.com
  //password: %t6x*5C$

  // const handlePaymentClick = () => {
  //   toast.success("Success Payment");
  // };
  return (
    <div className="grid h-full overflow-scroll sm:overflow-hidden  font-poppins gap-6  p-6 w-full sm:grid-cols-6">
      {paymentSuccess == true && (
        <div className="sm:col-span-4 h-full w-full justify-center bg-fall bg-opacity-30 flex flex-col items-center   rounded-3xl">
          <h1 className="sm:text-6xl">Thank you</h1>
          <h1 className="sm:text-4xl">Payment Successfull</h1>
          <h1 className="sm:text-3xl">Check your email for detail</h1>
          <img className="h-12 sm:h-36" src={yes}></img>
        </div>
      )}
      {paymentSuccess == false && (
        <div className="sm:col-span-4  bg-fall bg-opacity-30 flex flex-col items-center   rounded-3xl">
          <h1 className="text-4xl pt-12 font-bold">Payment details</h1>
          <div className="w-3/4 h-1/4">
            <img
              className="rounded-3xl w-full h-full object-cover "
              src={homePageDetail.mainImageOfProduct}
            />
          </div>
          <div className="w-3/4">
            <div className="flex pt-12 justify-between items-center ">
              <h1 className="text-3xl">Name</h1>
              <h1 className="sm:text-3xl text-xl font-bold">
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
            {/* <button
            onClick={() => handlePaymentClick()}
            className="py-6 w-full text-3xl font-medium bg-fall rounded-3xl"
          >
            Make Payment
          </button> */}
            <PayPalScriptProvider
              options={{
                "client-id":
                  "Afc348h9v5rBjYyLNV7uNn_pgYxqYY6iBQyJa3maJPQmGYNbOKGZVuWj7mKveyXz1CMEbkyOO5Y6Uyk3",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: total + platformFee,
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    toast.success(`Transaction completed by ${name}`);
                    setPaymentSuccess(true);
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      )}
      <div className="sm:col-span-2 sm:overflow-scroll shadow-2xl no-scrollbar relative flex-col flex h-full rounded-3xl bg-white ">
        <div className="absolute p-6">
          {homePageDetail?.imageGalleries?.map((image) => {
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
      <div className="absolute">
        <ToastContainer />
      </div>
    </div>
  );
};

export default CheckOut;
