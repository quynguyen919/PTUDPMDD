
const initialState = {
  number: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'COUNT_INCRESE':
      return {
        ...state,
        number: state.number + 1,
      };
    case 'COUNT_DECRESE':
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};