import { ContentfulCollection } from 'contentful';
import { ContentfulPage } from '../types';

type Action = {
  payload: ContentfulCollection<ContentfulPage>;
  type: string;
  error: Boolean;
  message: Error;
};

const initialState = {
  page: {},
  loading: false,
  error: false,
  message: {},
};

export function page(state = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_PAGE_LOADING':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'FETCH_PAGE_SUCCESS':
      return {
        ...state,
        page: action.payload.items[0],
        loading: false,
        error: false,
      };
    case 'FETCH_PAGE_NOT_FOUND':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'FETCH_PAGE_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        message: action.error,
      };
    default:
      return state;
  }
}
