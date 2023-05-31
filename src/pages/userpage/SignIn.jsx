import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signInimg from "./signInimg.jpg";
const SignIn = () => {
  const [signInForm, setSignInForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showSignInForm = () => {
    setSignInForm(true);
  };

  const handleLogin = () => {
    setPassword("");
    setEmail("");
    toast.success("Welcome Back !");
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
        {!signInForm && (
          <button
            onClick={() => showSignInForm()}
            className="py-3 px-6 bg-darkBrown bg-opacity-30 rounded-3xl"
          >
            Sign In
          </button>
        )}
        {signInForm == true && (
          <div className="col-span-3 w-3/4 flex flex-col gap-3">
            <div className="flex flex-col w-full">
              <span className="m-0 pt-3 text-xl opacity-90 w-full">
                Gmail Adress
              </span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="maisondevilla@gmail.com"
                className="py-3 rounded-3xl pl-3 focus:outline-none w-full"
              ></input>
            </div>{" "}
            <div className="flex flex-col w-full">
              <span className="m-0 pt-3 text-xl opacity-90">Password</span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="******"
                className="py-3 rounded-3xl pl-3 focus:outline-none w-full"
              ></input>
            </div>
            <div>
              <button className="opacity-60">Forgot password?</button>
            </div>
            <button
              onClick={() => handleLogin()}
              className="py-3 rounded-3xl px-6 bg-darkBrown bg-opacity-30 "
            >
              Login
            </button>
          </div>
        )}
      </div>
      <div className="absolute">
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignIn;
