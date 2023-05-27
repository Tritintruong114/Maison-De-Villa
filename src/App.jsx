import { Outlet } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import CalenderPicker from "./components/CalenderPicker";

function App() {
  return (
    <div className="flex no-scrollbar bg-opacity-60 bg-darkBrown overflow-hidden h-screen flex-col items-center">
      <div className="text-black sm:mt-9 sm:py-6 bg-white w-full bg-slate-400 max-w-screen-2xl">
        <TopNavBar />
      </div>
      <div className="text-black overflow-scroll no-scrollbar h-screen bg-white w-full bg-slate-400 max-w-screen-2xl">
        {/* <Outlet /> */}
        <CalenderPicker />
      </div>
    </div>
  );
}

export default App;
