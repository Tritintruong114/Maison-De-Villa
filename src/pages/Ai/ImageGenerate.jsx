// import midJourney from "../../midjourney/config";

import axios from "axios";
import { useState } from "react";
import AimageSkeleton from "../../components/AimageSkeleton";
import ReactConfetti from "react-confetti";

import {
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon } from "react-share";
// import messenger from "./messenger.png";
const ImageGenerate = () => {
  const [imgUri, setImgUri] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [architecture, setArchitecture] = useState("");
  const [view, setView] = useState("");
  const [weather, setWeather] = useState("");
  const [showPromt, setShowPromt] = useState("");

  // const [imageUrl, setImageUrl] = useState("");
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: "Bearer 3e1edc25-c3db-4b97-bafb-f2a1b07d027a",
    },
    body: JSON.stringify({
      prompt:
        "editorial photo from Dwell, Midcentury modern house, on a cliff overlooking Los Angeles, morning sun, brilliant architecture, beautiful, exclusive, expensive, minimal lines, breathtaking, 8K, architecture photography",
      negative_prompt: "string",
      modelId: "6bef9f1b-29cb-40c7-b9df-32b51c1f67d3",
      sd_version: "v1_5",
      num_images: 4,
      width: 512,
      height: 512,
      num_inference_steps: 30,
      guidance_scale: 9,
      init_generation_image_id: "string",
      init_image_id: "string",
      response_format: "url",
      init_strength: 0.6,
      scheduler: "KLMS",
      presetStyle: "LEONARDO",
      tiling: true,
      public: true,
      promptMagic: true,
      // controlNet: true,
      controlNetType: "POSE",
    }),
  };
  const handleClick = async () => {
    fetch("https://cloud.leonardo.ai/api/rest/v1/generations", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  // const data = {
  //   prompt: `${architecture} ${view} ${weather} black Houses, Modern, Futuristic, Trees, Photorealistic, V-Ray Tracing, Ultra Detailed, Octane Render modern house in the woods creative commons attribution  a digital rendering by Maginel Wright Enright Barney modernism realistic architecture house modern --ar 16:9 --c 50 --quality 0.5`,
  // };

  // const fetchMidJourney = async () => {
  //   setIsGenerating(true);
  //   try {
  //     // Text data to be sent
  //     const result = await axios.post(
  //       "https://maison-be.onrender.com/api/midjourneyAPI",
  //       data,
  //       {
  //         headers: {
  //           tempopassword: "truongtritin",
  //         },
  //       }
  //     );
  //     console.log(result.data, "This is MidJourney AI");
  //     setImgUri(result.data.uri);
  //     setIsGenerating(false);
  //   } catch (error) {
  //     console.log("POST DATA ERROR", error);
  //   }
  // };

  // const handleGenerate = () => {
  //   console.log("Button click");
  //   setImgUri("");
  //   console.log(`${architecture} ${view} ${weather}`);
  //   setShowPromt(`${architecture} ${view} ${weather}`);
  //   // fetchMidJourney();
  // };

  return (
    <div className=" w-full  flex justify-center items-center  font-bold font-poppins ">
      <div className="  gap-3 w-full flex-col flex items-center justify-center px-9">
        <div className="flex pb-6 flex-col justify-center items-center">
          <h1 className="text-3xl m-0 font-bold">
            Design Your Dream Home: Share Your Vision
          </h1>
          <p className="m-0 text-xl opacity-60 italic">
            Select Your Options and Let AI Do the Rest!
          </p>
        </div>
        <div className="grid place-items-center pb-6 grid-cols-3 w-full gap-9  items-center justify-center">
          <div className="col-span-1  rounded-3xl p-3 bg-darkBrown bg-opacity-30 shadow-xl items-center justify-center w-full flex flex-col">
            <label className="py-1 text-xl" htmlFor="architecture">
              Architecture
            </label>

            <select
              className="w-full rounded-3xl py-1 px-3 focus:outline-none"
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
          <div className="col-span-1   rounded-3xl p-3 bg-darkBrown bg-opacity-30 shadow-xl  justify-center items-center w-full flex flex-col">
            <label className="py-1 text-xl" htmlFor="panoramic">
              Panoramic Views
            </label>
            <select
              className="w-full py-1 px-3 rounded-3xl focus:outline-none"
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
          <div className="col-span-1  rounded-3xl p-3 bg-darkBrown bg-opacity-30 shadow-xl items-center justify-center    w-full flex flex-col">
            <label className="py-1 text-xl" htmlFor="weather">
              {" "}
              Weather Conditions
            </label>
            <select
              className="w-full py-1  px-3 rounded-3xl focus:outline-none"
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
          <div className="place-self-stretch relative w-full col-span-1 col-start-2	 flex items-center justify-center">
            <button
              // disabled={true}
              // disabled={isGenerating == true ? true : false}
              onClick={() => handleClick()}
              className={`glow-on-hover ${
                isGenerating == true ? "cursor-not-allowed" : "cursor-pointer"
              } font-poppins w-full hover:scale-105 transition  ease-in-out  py-3 rounded-3xl text-3xl relative`}
            >
              Generate
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col h-full pb-24">
          {imgUri && (
            <>
              {/* <ReactConfetti run numberOfPieces={150} /> */}
              <p className="w-full py-3 m-0 text-3xl  flex capitalize px-6 items-center justify-center">
                {showPromt}
              </p>
              <a
                className="shadow-2xl cursor-zoom-in rounded-3xl hover:scale-105 transition ease-in-out"
                target="_blank"
                rel="noreferrer"
                href={imgUri}
              >
                <img
                  className="h-full  rounded-3xl w-full object-cover"
                  src={imgUri}
                ></img>
              </a>
              <div className="w-full pt-6 flex-col flex justify-center items-center">
                <h1 className="m-0 py-1 font-bold text-xl">Design with AI</h1>
                <div className="flex gap-6">
                  <div className="hover:scale-110 shadow-2xl rounded-full transition ease-in-out">
                    <FacebookShareButton url={imgUri} hashtag="#AIImage">
                      <FacebookIcon round={true} />
                    </FacebookShareButton>
                  </div>
                  <div className="hover:scale-110 shadow-2xl rounded-full transition ease-in-out">
                    <FacebookMessengerShareButton url={imgUri}>
                      <FacebookMessengerIcon round={true} />
                    </FacebookMessengerShareButton>
                  </div>
                  <div className="hover:scale-110 shadow-2xl rounded-full transition ease-in-out">
                    <TwitterShareButton url={imgUri} hashtag="#AIImage">
                      <TwitterIcon round={true} />
                    </TwitterShareButton>
                  </div>
                </div>
              </div>
            </>
          )}
          {isGenerating == true && <AimageSkeleton />}
          {/* <img src={imageUrl}></img> */}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerate;
