import { createClient } from 'contentful';

export const contentfulClient = () => {
  const SPACE_ID = (process.env.VITE_CONTENTFUL_SPACE_ID ||
    import.meta.env.VITE_CONTENTFUL_SPACE_ID) as string;
  const ACCESS_TOKEN = (process.env.VITE_CONTENTFUL_ACCESS_TOKEN ||
    import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN) as string;

  try {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    });

    return client;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
    } else {
      throw err;
    }
  }
};
