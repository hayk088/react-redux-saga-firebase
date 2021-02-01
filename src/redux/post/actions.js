import { createAction } from 'redux-actions';
export const getPostsRequested = createAction('GET_POSTS_REQUESTED');
export const getPostsSuccess = createAction('GET_POSTS_SUCCESS');
export const getPostsFail = createAction('GET_POSTS_FAIL');

export const addPostRequested = createAction('ADD_POST_REQUESTED');
export const addPostSuccess = createAction('ADD_POST_SUCCESS');
export const addPostFail = createAction('ADD_POST_FAIL');

export const deletePostRequested = createAction('DELETE_POST_REQUESTED');
export const deletePostSuccess = createAction('DELETE_POST_SUCCESS');
export const deletePostFail = createAction('DELETE_POST_FAIL');

export const getPostRequested = createAction('GET_POST_REQUESTED');
export const getPostSuccess = createAction('GET_POST_SUCCESS');
export const getPostFail = createAction('GET_POST_FAIL');

export const editPostRequested = createAction('EDIT_POST_REQUESTED');
export const editPostSuccess = createAction('EDIT_POST_SUCCESS');
export const editPostFail = createAction('EDIT_POST_FAIL');