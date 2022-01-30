import { combineReducers } from 'redux';

import { pages } from './pages';
import { page } from './page';

const rootReducer = combineReducers({
  pages,
  page,
});

export default rootReducer;
