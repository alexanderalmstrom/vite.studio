import { ContentfulCollection } from 'contentful';
import { contentful } from '../services/contentful';
import { Page } from '../types';

export const fetchPages: Function = () => async (dispatch: Function) => {
  try {
    const { items } = await contentful.getEntries<ContentfulCollection<Page>>({
      content_type: 'page',
    });

    dispatch({ type: 'FETCH_PAGES', payload: items });
  } catch (err) {
    console.error(err);
  }
};
