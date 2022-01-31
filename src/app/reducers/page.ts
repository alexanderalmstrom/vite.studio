import { ContentfulCollection } from 'contentful';
import { ContentfulPage } from '../types';

type Action = {
  payload: ContentfulCollection<ContentfulPage>;
  type: string;
  error: Error;
};

const initialState = {
  page: {},
  loading: false,
  error: null,
};

export function page(state = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_PAGE_LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_PAGE_SUCCESS':
      return {
        ...state,
        page: action.payload.items[0],
        loading: false,
        error: null,
      };
    case 'FETCH_PAGE_NOT_FOUND':
      return {
        ...state,
        loading: false,
        error: {
          name: '404',
          message: 'Page not found',
        },
      };
    case 'FETCH_PAGE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
