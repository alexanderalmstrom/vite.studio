import { ContentfulCollection } from 'contentful';
import { contentfulClient } from '../services/contentful';
import { ContentfulPage } from '../types';

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
    try {
      const payload = await contentfulClient.getEntries<
        ContentfulCollection<ContentfulPage>
      >({
        content_type: 'page',
        'fields.slug': slug,
      });

      dispatch({ type: 'FETCH_PAGE', payload });
    } catch (err) {
      console.error(err);
    }
  };
