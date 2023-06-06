// import midJourney from "../../midjourney/config";

import { useState } from "react";

const ImageGenerate = () => {
  const [imgUri, setImgUri] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [inputPromt, setInpurPromt] = useState("");
  const [showPromt, setShowPromt] = useState("");

  const midJourney = async () => {
    const prompt = `residence attractive interior designs glass sunset full view luxury and have some people , with pool view, sky , cloud --chaos 0 --quality 0.5 --ar 16:9`;
    fetch("https://toanjs.free.beeceptor.com/api/midjourneyAPI", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        tempoPassword: "truongtritin",
      },
      body: prompt,
    })
      .then((response) => {
        setIsGenerating(true);
        return response.json();
      })
      .then((data) => {
        setIsGenerating(false);
        console.log(data.uri);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleGenerate = () => {
    setShowPromt(inputPromt);
    setInpurPromt("");
    setIsGenerating(true);
    // midJourney();
  };

  return (
    <div className="h-full w-full  flex justify-center items-center  font-bold font-poppins ">
      <div className="h-full pt-24 gap-3 w-full flex-col flex items-center justify-center p-9">
        <h1 className="text-3xl font-bold">Type your dream house</h1>
        <div className="w-full gap-3 flex items-center justify-center">
          <input
            value={inputPromt}
            onChange={(e) => setInpurPromt(e.target.value)}
            className="w-full font-medium bg-fall bg-opacity-20 focus:outline-none px-6 py-3 rounded-3xl"
          ></input>
          <button
            onClick={() => handleGenerate()}
            className="font-medium bg-opacity-60 hover:bg-fall active:bg-lightBrown transition ease-in-out bg-darkBrown w-1/4 h-full rounded-full"
          >
            Generate
          </button>
        </div>
        {isGenerating == true && (
          <div className="w-full flex flex-col h-full pb-24">
            <p className="w-full">{showPromt}</p>
            <img
              className="h-full w-full object-cover"
              src="https://cdn.discordapp.com/attachments/1110473578283016223/1115642690701369424/rimn_house_residence_attractive_interior_designs_b13bbd38-1ebb-4171-bded-24d29705e331.png"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerate;
