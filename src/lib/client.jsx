import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//devêperr singapor.
//export const sanityStore = createClient({
//   projectId: "ulqpb6bd",
//   dataset: "production",
//   apiVersion: "2023-05-05",
//   useCdn: true,
// });

export const sanityStore = createClient({
  projectId: "ulqpb6bd",
  dataset: "production",
  token: import.meta.env.SANITY_AUTH_TOKEN,
  apiVersion: "2023-05-05",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityStore);

export const urlFor = (source) => builder.image(source);
