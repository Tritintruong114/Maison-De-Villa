import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const sanityStore = createClient({
  projectId: "ulqpb6bd",
  dataset: "production",
  apiVersion: "2023-05-05",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityStore);

export const urlFor = (source) => builder.image(source);
