
export const actionType = {
    ADD_DEVELOPER: 'ADD_DEVELOPER',
    REMOVE_DEVELOPER: 'REMOVE_DEVELOPER'
  }
  
  export const Developer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case actionType.ADD_DEVELOPER:
        return [...state, {
          title: action.payload.title,
          language: action.payload.language,
          technologies: action.payload.technologies,
          food: action.payload.food,
          drink: action.payload.drink,
          id: state.length + 1
        }]
      case actionType.REMOVE_DEVELOPER:
        return state.filter(deve => deve.id !== action.payload.id);
      default:
        return state;
    }
  }