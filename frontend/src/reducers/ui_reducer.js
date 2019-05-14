import {
  SET_CREATE_MODAL,
  SET_EDITING_TODO,
  SET_MODAL,
} from "../actions/ui_actions";

const initialState = {
  isModalOpen: false,
  editingTodo: { content: "", id: null },
  isCreateModalOpen: false,
};

export default function uiReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case SET_MODAL:
      return { ...state, isModalOpen: action.bool };
    case SET_CREATE_MODAL:
      return { ...state, isCreateModalOpen: action.bool };
    case SET_EDITING_TODO:
      return { ...state, editingTodo: action.todo };
    default:
      return state;
  }
}
