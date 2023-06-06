// import axios from "axios";
import { Midjourney } from "midjourney";
//npm

const midJourney = async () => {
  // const client = new Midjourney({
  //   ServerId: import.meta.env.VITE_PUBLIC_SERVER_ID,
  //   ChannelId: import.meta.env.VITE_PUBLIC_CHANNEL_ID,
  //   SalaiToken: import.meta.env.VITE_PUBLIC_SALAI_TOKEN,
  //   Debug: true,
  //   Ws: true,
  // });

  const prompt = `house residence attractive interior designs --chaos 0 --quality 0.5 --ar 16:9`;

  fetch(
    "https://ai-custom-curriculum-production-cbad.up.railway.app/api/midjourneyAPI",
    {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
        tempoPassword: "truongtritin",
      },
      body: prompt,
    }
  )
    .then((response) => {
      // Handle the response
      console.log("Response:", response);
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
};

export default midJourney;
