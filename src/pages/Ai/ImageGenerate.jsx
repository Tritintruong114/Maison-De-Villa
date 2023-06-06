// import midJourney from "../../midjourney/config";

import axios from "axios";
import { useState } from "react";
import AimageSkeleton from "../../components/AimageSkeleton";

const ImageGenerate = () => {
  const [imgUri, setImgUri] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [inputPromt, setInpurPromt] = useState("");
  const [showPromt, setShowPromt] = useState("");

  const data = {
    prompt: `${showPromt}  interior  Contemporary Architecture, White Houses, Modern, Futuristic, Trees, Photorealistic, V-Ray Tracing, Ultra Detailed, Octane Render modern house in the woods creative commons attribution  a digital rendering by Maginel Wright Enright Barney modernism realistic architecture house modern --ar 16:9 --c 50 --quality 0.5`,
  };

  const fetchMidJourney = async () => {
    setIsGenerating(true);
    try {
      // Text data to be sent
      const result = await axios.post(
        "https://maison-be.onrender.com/api/midjourneyAPI",
        data,
        {
          headers: {
            tempopassword: "truongtritin",
          },
        }
      );
      console.log(result.data, "This is MidJourney AI");
      setImgUri(result.data.uri);
      setIsGenerating(false);
    } catch (error) {
      console.log("POST DATA ERROR", error);
    }
  };

  const handleGenerate = () => {
    console.log(inputPromt, "This is promt");
    setImgUri("");
    setInpurPromt("");
    setShowPromt(inputPromt);
    fetchMidJourney();
  };

  return (
    <div className="h-full w-full  flex justify-center items-center  font-bold font-poppins ">
      <div className="h-full pt-24 gap-3 w-full flex-col flex items-center justify-center p-9">
        <h1 className="text-3xl font-bold">Type your dream house</h1>
        <div className="w-full gap-3 flex items-center justify-center">
          <input
            value={inputPromt}
            onChange={(e) => setInpurPromt(e.target.value)}
            className="w-full capitalize font-medium bg-fall bg-opacity-20 focus:outline-none px-6 py-3 rounded-3xl"
          ></input>
          <button
            onClick={() => handleGenerate()}
            className="font-medium bg-opacity-60 hover:bg-fall active:bg-lightBrown transition ease-in-out bg-darkBrown w-1/4 h-full rounded-full"
          >
            Generate
          </button>
        </div>
        <div className="w-full flex flex-col h-full pb-24">
          <p className="w-full capitalize px-6">{showPromt}</p>
          {imgUri && (
            <img
              className="h-full rounded-3xl w-full object-cover"
              src={imgUri}
            ></img>
          )}
          {isGenerating == true && <AimageSkeleton />}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerate;
