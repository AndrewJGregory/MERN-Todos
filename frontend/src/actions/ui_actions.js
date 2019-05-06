export const SET_EDITING_TODO = "SET_EDITING_TODO";
export const SET_MODAL = "SET_MODAL";

export const setEditingTodo = todo => ({ type: SET_EDITING_TODO, todo });
export const setModal = bool => ({ type: SET_MODAL, bool });
