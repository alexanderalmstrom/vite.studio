import { ContentfulCollection } from 'contentful';
import { Page } from '../types';

const initialState = {
  pages: [],
};

type Action = {
  payload: ContentfulCollection<Page>;
  type: string;
};

export default function (state = initialState, action: Action) {
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
