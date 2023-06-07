// import midJourney from "../../midjourney/config";

import axios from "axios";
import { useState } from "react";
import AimageSkeleton from "../../components/AimageSkeleton";

const ImageGenerate = () => {
  const [imgUri, setImgUri] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [architecture, setArchitecture] = useState("");
  const [view, setView] = useState("");
  const [weather, setWeather] = useState("");
  const [showPromt, setShowPromt] = useState("");

  const data = {
    prompt: `${architecture} ${view} ${weather} black Houses, Modern, Futuristic, Trees, Photorealistic, V-Ray Tracing, Ultra Detailed, Octane Render modern house in the woods creative commons attribution  a digital rendering by Maginel Wright Enright Barney modernism realistic architecture house modern --ar 16:9 --c 50 --quality 0.5`,
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
    setImgUri("");
    console.log(`${architecture} ${view} ${weather}`);
    setShowPromt(`${architecture} ${view} ${weather}`);
    fetchMidJourney();
  };

  return (
    <div className="  w-full  flex justify-center items-center  font-bold font-poppins ">
      <div className="  gap-3 w-full flex-col flex items-center justify-center px-9">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl m-0 font-bold">
            Design Your Dream Home: Share Your Vision
          </h1>
          <p className="m-0 text-xl opacity-60 italic">
            Select Your Options and Let AI Do the Rest!
          </p>
        </div>
        <div className="grid place-items-center grid-cols-3 w-full gap-9  items-center justify-center">
          <div className="col-span-1 border-2 rounded-3xl p-3 bg-darkBrown bg-opacity-60 items-center justify-center w-full flex flex-col">
            <label htmlFor="architecture">Modern Architecture</label>

            <select
              className="w-full rounded focus:outline-none"
              onChange={(e) => setArchitecture(e.target.value)}
              id="architecture"
            >
              <option value="Minimalist Architecture">
                Minimalist Architecture
              </option>
              <option value="Brutalist Architecture">
                Brutalist Architecture
              </option>
              <option value="Baroque Architecture ">
                Baroque Architecture{" "}
              </option>
              <option value="Modern Architecture">Modern Architecture</option>
              <option value="Art Deco Architecture">
                Art Deco Architecture
              </option>
              <option value="Gothic Architecture">Gothic Architecture</option>
            </select>
          </div>
          <div className="col-span-1 border-2 rounded-3xl p-3 bg-darkBrown bg-opacity-60  justify-center items-center w-full flex flex-col">
            <label htmlFor="panoramic">Panoramic Views</label>
            <select
              className="w-full rounded focus:outline-none"
              onChange={(e) => setView(e.target.value)}
              id="panoramic"
            >
              <option value="Mountain range">Mountain range</option>
              <option value="Beach">Beach</option>
              <option value="Forest in autumn">Forest in autumn</option>
              <option value="Spring">Spring</option>
              <option value="Snow covered">Snow covered</option>
              <option value="rainbow">Rainbow</option>
            </select>
          </div>
          <div className="col-span-1 border-2 rounded-3xl p-3 bg-darkBrown bg-opacity-60 items-center justify-center    w-full flex flex-col">
            <label htmlFor="weather"> Weather Conditions</label>
            <select
              className="w-full rounded focus:outline-none"
              onChange={(e) => setWeather(e.target.value)}
              id="weather"
            >
              <option value="sunset">Sunset</option>
              <option value="snow">Snow</option>
              <option value="sunny">Sunny</option>
              <option value="cloudy">Cloudy</option>
              <option value="thunder">Thunder</option>
              <option value="rain">Rain</option>
            </select>
          </div>
        <div className="place-self-stretch w-full col-span-1 col-start-2	 flex items-center justify-center">
          <button
            onClick={() => handleGenerate()}
            className="font-bold hover:scale-105  bg-opacity-60 py-3 items-center justify-center text-3xl hover:bg-fall active:bg-lightBrown transition ease-in-out bg-darkBrown w-full h-full rounded-full"
          >
            Generate
          </button>
        </div>
        </div>
        <div className="w-full flex flex-col h-full pb-24">
          <p className="w-full text-3xl m-0 flex capitalize px-6 items-center justify-center">
            {showPromt}
          </p>
          {imgUri && (
            <a target="_blank" rel="noreferrer" href={imgUri}>
              <img
                className="h-full rounded-3xl w-full object-cover"
                src={imgUri}
              ></img>
            </a>
          )}
          {isGenerating == true && <AimageSkeleton />}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerate;
