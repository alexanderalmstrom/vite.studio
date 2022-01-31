import { ContentfulCollection } from 'contentful';
import { ContentfulPage } from '../types';
import { contentfulClient } from '../services/contentful';

export const fetchPages: Function = () => async (dispatch: Function) => {
  try {
    const payload = await contentfulClient.getEntries<
      ContentfulCollection<ContentfulPage>
    >({
      content_type: 'page',
    });

    dispatch({ type: 'FETCH_PAGES', payload });
  } catch (err) {
    console.error(err);
  }
};

export const fetchPage: Function =
  (slug: string) => async (dispatch: Function) => {
    dispatch({ type: 'FETCH_PAGE_LOADING' });

    try {
      const payload = await contentfulClient.getEntries<
        ContentfulCollection<ContentfulPage>
      >({
        content_type: 'page',
        'fields.slug': slug,
      });

      if (payload.items.length) {
        dispatch({ type: 'FETCH_PAGE_SUCCESS', payload });
      } else {
        dispatch({ type: 'FETCH_PAGE_NOT_FOUND' });
      }
    } catch (error) {
      dispatch({ type: 'FETCH_PAGE_ERROR', error });

      if (error instanceof Error) {
        console.error(error);
      } else {
        throw error;
      }
    }
  };
