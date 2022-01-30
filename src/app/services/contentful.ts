import { ContentfulClientApi, createClient } from 'contentful';

let space;
let accessToken;

if (process.env.NODE_ENV === 'production') {
  if (import.meta.env.SSR) {
    space = process.env.CONTENTFUL_SPACE_ID as string;
    accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;
  } else {
    space = process.env.VITE_CONTENTFUL_SPACE_ID as string;
    accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN as string;
  }
} else {
  space = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string;
  accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string;
}

export const contentfulClient: ContentfulClientApi = createClient({
  space,
  accessToken,
});
