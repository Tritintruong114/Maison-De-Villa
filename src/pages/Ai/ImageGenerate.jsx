import midJourney from "../../midjourney/config";

import { useEffect } from "react";

const ImageGenerate = () => {
  const promt = "House 4k";

  useEffect(() => {
    console.log("Page Load start ");
    midJourney(promt);
    console.log("Page Load end");
  }, []);

  return <div>ImageGenerate</div>;
};

export default ImageGenerate;
