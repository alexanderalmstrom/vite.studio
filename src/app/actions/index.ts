import { ContentfulCollection } from 'contentful';
import { contentfulClient } from '../services/contentful';
import { Page } from '../types';

export const fetchPages: Function = () => async (dispatch: Function) => {
  try {
    const payload = await contentfulClient.getEntries<
      ContentfulCollection<Page>
    >({
      content_type: 'page',
    });

    dispatch({ type: 'FETCH_PAGES', payload });
  } catch (err) {
    console.error(err);
  }
};
