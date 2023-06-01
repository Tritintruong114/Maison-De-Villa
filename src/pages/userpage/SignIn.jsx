import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signInimg from "./signInimg.jpg";
import { auth, provider } from "../../googleServices/config";
import { signInWithPopup } from "firebase/auth";
import google from "./google.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const signInButton = async () => {
    const response = await signInWithPopup(auth, provider);
    const saveResponse = response;
    localStorage.setItem("email", saveResponse.user.email);
    navigate("/");
  };

  return (
    <div className="grid gap-6 relative font-poppins p-6 grid-cols-1 sm:grid-cols-9 h-full">
      <div className="sm:col-span-6 shadow-xl rounded-3xl h-full">
        <h1 className="m-0 italic font-bold text-white text-6xl absolute w-3/4 p-6">
          Luxury Places to Stay
        </h1>
        <img
          className="h-full  rounded-3xl w-full object-cover"
          src={signInimg}
        ></img>
      </div>
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
      <div className="absolute">
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignIn;
