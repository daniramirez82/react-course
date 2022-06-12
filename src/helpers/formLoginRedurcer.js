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
    case 'CLEAR_FORM':
      return {
        ...state,
        user: '',
        password: '',
      };
    default:
      return state;
  }
};

export default formLoginReducer;
