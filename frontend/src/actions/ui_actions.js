export const SET_EDITING_TODO = "SET_EDITING_TODO";
export const SET_MODAL = "SET_MODAL";
export const SET_CREATE_MODAL = "SET_CREATE_MODAL";

export const setEditingTodo = todo => ({ type: SET_EDITING_TODO, todo });
export const setModal = bool => ({ type: SET_MODAL, bool });
export const setCreateModal = bool => ({ type: SET_CREATE_MODAL, bool });
