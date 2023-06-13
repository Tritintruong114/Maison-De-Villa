import { useState } from "react";
import AimageSkeleton from "../../components/AimageSkeleton";
import {
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon } from "react-share";
import { useSelector, useDispatch } from "react-redux";
import { getImageGenerationID } from "../../features/fetchData/imageSlice";
import { imagesDetail } from "../../features/fetchData/imageSlice";
import { ColorRing } from "react-loader-spinner";
const ImageGenerate = () => {
  const { imageUrl, generationID, isFetching } = useSelector(
    (store) => store.imageDetail
  );
  const dispatch = useDispatch();

  const [isGenerating, setIsGenerating] = useState(false);
  const [architecture, setArchitecture] = useState("");
  const [view, setView] = useState("");
  const [weather, setWeather] = useState("");
  const [promt, setPromt] = useState("");
  const [canGetImage, setCanGetImage] = useState(null);

  const handleGenerate = async () => {
    setCanGetImage(true);
    let promt = `${architecture} ${view} ${weather}`;
    const response = await dispatch(getImageGenerationID(promt));
    console.log(response.payload.sdGenerationJob.generationId);
    dispatch(imagesDetail(response.payload.sdGenerationJob.generationId));
    setPromt(promt);
    setTimeout(() => setCanGetImage(false), 21000);
  };

  const getImage = (id) => {
    console.log(id);
    dispatch(imagesDetail(generationID));
    // dispatch(imagesDetail(response.payload.sdGenerationJob.generationId));
  };
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
                Minimalist Architecture 🔥
              </option>
              <option value="Brutalist Architecture">
                Brutalist Architecture
              </option>
              <option value="Baroque Architecture ">
                Baroque Architecture{" "}
              </option>
              <option value="Modern Architecture">
                Modern Architecture 🔥
              </option>
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
              <option value="Forest in autumn">Forest in autumn 🔥</option>
              <option value="Spring">Spring</option>
              <option value="Snow covered">Snow covered 🔥</option>
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
              <option value="sunset">Sunset 🔥</option>
              <option value="snow">Snow</option>
              <option value="sunny">Sunny 🔥</option>
              <option value="cloudy">Cloudy</option>
              <option value="thunder">Thunder</option>
              <option value="rain">Rain</option>
            </select>
          </div>
          <div className="place-self-stretch gap-12 relative w-full col-span-3 px-12	 flex items-center justify-center">
            <button
              onClick={() => handleGenerate()}
              className={`glow-on-hover ${
                canGetImage == false ? "cursor-not-allowed" : "cursor-pointer"
              } font-poppins w-full hover:scale-105 transition  ease-in-out  py-3 rounded-3xl text-3xl relative`}
            >
              Generate
            </button>
            {generationID !== null || imageUrl.length > 0 ? (
              <button
                // disabled={canGetImage == true ? true : false}
                onClick={() => getImage(generationID)}
                className={`glow-on-hover ${
                  canGetImage == true
                    ? "cursor-not-allowed "
                    : "cursor-pointer "
                } font-poppins w-full hover:scale-105 transition flex justify-center items-center ease-in-out  py-3 rounded-3xl text-3xl relative`}
              >
                {canGetImage == true ? (
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#b8c480",
                      "#B2A3B5",
                      "#F4442E",
                      "#51E5FF",
                      "#429EA6",
                    ]}
                  />
                ) : (
                  "Get Images"
                )}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-full flex flex-col h-full pb-24">
          <p className="w-full text-center py-3 m-0 text-3xl  flex capitalize px-6 items-center justify-center">
            <span className="font-medium text-xl px-3">Your design ideas</span>{" "}
            {promt}
          </p>
          {generationID !== null && imageUrl.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-9">
                {imageUrl?.map((image) => {
                  return (
                    <>
                      <div className="col-span-1 flex flex-col justify-center items-center gap-6">
                        <a
                          className="shadow-2xl w-full cursor-zoom-in rounded-3xl hover:scale-105 transition ease-in-out"
                          target="_blank"
                          rel="noreferrer"
                          href={image.url}
                        >
                          <img
                            className="h-full rounded-3xl w-full object-cover"
                            src={image.url}
                          ></img>
                        </a>
                        <div className="flex gap-6">
                          <div className="hover:scale-110 shadow-2xl rounded-full transition ease-in-out">
                            <FacebookShareButton
                              url={image.url}
                              hashtag="#AIImage"
                            >
                              <FacebookIcon round={true} />
                            </FacebookShareButton>
                          </div>
                          <div className="hover:scale-110 shadow-2xl rounded-full transition ease-in-out">
                            <FacebookMessengerShareButton url={image.url}>
                              <FacebookMessengerIcon round={true} />
                            </FacebookMessengerShareButton>
                          </div>
                          <div className="hover:scale-110 shadow-2xl rounded-full transition ease-in-out">
                            <TwitterShareButton
                              url={image.url}
                              hashtag="#AIImage"
                            >
                              <TwitterIcon round={true} />
                            </TwitterShareButton>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {canGetImage == true && <AimageSkeleton />}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerate;
