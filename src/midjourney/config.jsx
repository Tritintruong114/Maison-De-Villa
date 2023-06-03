import { Midjourney } from "midjourney";
//npm

const midJourney = async () => {
  const client = new Midjourney({
    ServerId: import.meta.env.VITE_PUBLIC_SERVER_ID,
    ChannelId: import.meta.env.VITE_PUBLIC_CHANNEL_ID,
    SalaiToken: import.meta.env.VITE_PUBLIC_SALAI_TOKEN,
    Debug: true,
    Ws: true,
  });

  const params = `house residence attractive interior designs --chaos 0 --quality 0.5 --ar 16:9`;

  try {
    await client.init();
    const msg = await client.Imagine(params, (uri) => {
      console.log("imagine.loading", uri);
    });

    console.log({ msg });
  } catch (error) {
    console.log(`Midjourney Error`, error);
  }
};

export default midJourney;
