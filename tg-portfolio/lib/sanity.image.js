import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client'; // adjust path if different

const builder = imageUrlBuilder(client);
export const urlFor = (src) => builder.image(src);
