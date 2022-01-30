import { ContentfulCollection } from 'contentful';
import { ContentfulPage } from '../types';

type Action = {
  payload: ContentfulCollection<ContentfulPage>;
  type: string;
};

const initialState = {
  page: {},
};

export function page(state = initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_PAGE':
      return {
        ...state,
        page: action.payload.items[0],
      };
    default:
      return state;
  }
}
