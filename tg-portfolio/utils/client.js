import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '0v3qhuan',
  dataset: 'production',
  apiVersion: '2022-08-16',
  useCdn: true,
  token: 'sklOw2TUyDMBucS3Vjbga9uWDZgbRT3hdoo0IwYvLiZ4xgcAeiMbmFjAcPMtwrPJDoFq35vIReTMYs4vgcekG5zL95EIETomk04m9qGvGDXmeeEVK9hQcybuqm914sMuUHCLRcby8z4BwO364dwGbZuBw41qCGoGFhNVn1rOQiyVarTDXCSZ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
