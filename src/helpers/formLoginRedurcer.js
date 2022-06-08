const formLoginReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_TEXT':
      return {
        ...state,
        [action.field]: action.payload,
        errors: action.errors,
      };
    case 'TOGGLE_CONSENT':
      return {
        ...state,
        hasConsented: !state.hasConsented,
      };
    default:
      return state;
  }
};

export default formLoginReducer;
