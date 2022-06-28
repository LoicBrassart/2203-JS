const initialState = {
  availables: [],
  favorite: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UNICORN_RESET":
      return initialState;

    case "UNICORN_SETAVAILABLES":
      return { ...state, availables: action.payload };

    case "UNICORN_SETFAV":
      if (state.availables.includes(action.payload))
        return { ...state, favorite: action.payload };
      return state;

    default:
      return state;
  }
};
