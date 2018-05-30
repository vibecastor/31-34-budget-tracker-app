const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(section => (section.id === payload.id ? payload : category));
    case 'CATEGORY_DESTROY':
      return state.filter(section => section.id !== payload.id);
    default:
      return state;
  }
};
