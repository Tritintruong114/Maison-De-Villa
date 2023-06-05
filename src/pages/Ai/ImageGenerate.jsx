import midJourney from "../../midjourney/config";

import { useEffect } from "react";

const ImageGenerate = () => {
  // const promt = "House 4k";

  useEffect(() => {
    console.log("Page Load start ");
    midJourney();
    console.log("Page Load end");
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-center  font-bold font-poppins ">
      <div className="h-2/4 w-2/4 bg-white shadow-xl rounded-3xl flex justify-center items-center hover:scale-105 transition ease-in-out">
        <h1 className="text-3xl sm:text-6xl from-black">Comming Soon</h1>
      </div>
    </div>
  );
};

export default ImageGenerate;
