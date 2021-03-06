import { ContentfulCollection } from 'contentful';
import { ContentfulPage } from '../types';

type Action = {
  payload: ContentfulCollection<ContentfulPage>;
  type: string;
};

const initialState = {
  pages: [],
};

export function pages(state = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_PAGES':
      return {
        ...state,
        pages: action.payload,
      };
    default:
      return state;
  }
}
