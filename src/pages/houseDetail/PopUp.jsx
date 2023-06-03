import google from "./google.png";
import { auth, provider } from "../../googleServices/config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { showPopupLogin } from "../../features/fetchData/homePageDetailSlice";
import { useDispatch } from "react-redux";
const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInButton = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const saveResponse = await response;
      localStorage.setItem("email", saveResponse.user.email);
      toast.success("You are log in");
      setShowPopUp(false);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const notLogin = () => {
    // setShowPopUp(true);
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
            <button
              className="text-xl  font-medium"
              onClick={() => signInButton()}
            >
              Sign In with
            </button>
            <img src={google}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
