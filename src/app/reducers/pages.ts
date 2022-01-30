const initialState = {
  pages: [],
};

type Action = {
  payload: Payload;
  type: string;
};

type Payload = {
  data: Data;
};

type Data = {
  items: Items;
};

type Items = {
  items: Array<Object>;
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
