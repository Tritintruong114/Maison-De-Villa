import google from "./google.png";
import { auth, provider } from "../../googleServices/config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { showPopupLogin } from "../../features/fetchData/homePageDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const PopUp = () => {
  const { showPopup } = useSelector((store) => store.homePageDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInButton = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const saveResponse = await response;
      localStorage.setItem("email", saveResponse.user.email);
      toast.success("You are log in");
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

  const notLogin = () => {
    dispatch(showPopupLogin(false));
    navigate(-1);
  };
  return (
    <div
      onClick={() => notLogin()}
      className="w-full h-full flex backdrop-blur justify-center items-center absolute z-10"
    >
      <div className="w-1/2 h-3/4 bg-white rounded-3xl">
        <div className="sm:col-span-3  bg-darkBrown rounded-3xl bg-opacity-10 shadow-xl flex-col items-center justify-center flex h-full bg-ưh sm:rounded-r-3xl">
          <h1 className="m-0 text-xl w-3/4 py-6 text-center">
            Welcome to <br />{" "}
            <p className="m-0 italic font-bold text-4xl">Maison De Villa</p>
          </h1>
          <div className="shadow-xl active:bg-darkBrown hover:scale-110 transition ease-in-out flex px-6 py-1 gap-3 bg-darkBrown bg-opacity-30 rounded-3xl">
            <img className="p-0" src={google}></img>
            <button
              className="text-xl font-bold font-roboto  "
              onClick={() => signInButton()}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
