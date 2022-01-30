import { ContentfulClientApi, createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;

export const contentfulClient: ContentfulClientApi = createClient({
  space,
  accessToken,
});
