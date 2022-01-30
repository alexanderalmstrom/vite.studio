import { ContentfulClientApi, createClient } from 'contentful';

const space = (import.meta.env.VITE_CONTENTFUL_SPACE_ID ||
  process.env.VITE_CONTENTFUL_SPACE_ID) as string;
const accessToken = (import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ||
  process.env.VITE_CONTENTFUL_ACCESS_TOKEN) as string;

export const contentfulClient: ContentfulClientApi = createClient({
  space,
  accessToken,
});
