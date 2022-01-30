import { ContentfulCollection } from 'contentful';
import { contentful } from '../services/contentful';
import { Page } from '../types';

export const fetchPages: Function = () => async (dispatch: Function) => {
  try {
    const payload = await contentful.getEntries<ContentfulCollection<Page>>({
      content_type: 'page',
    });

    dispatch({ type: 'FETCH_PAGES', payload });
  } catch (err) {
    console.error(err);
  }
};
