import { handleActions } from 'redux-actions';
import {
  getPostsFail,
  getPostsRequested,
  getPostsSuccess,
  addPostFail,
  addPostRequested,
  addPostSuccess,
  deletePostSuccess,
  deletePostFail,
  deletePostRequested,
  getPostRequested,
  getPostSuccess,
  getPostFail,
  editPostRequested,
  editPostFail,
  editPostSuccess,
} from './actions';

const initialState = {
  posts: [],
  post: {},
  postUpdated: false,
  loading: false,
  error: null,
};

const reducer = handleActions(
  {
    [getPostsRequested]: (state) => ({
      ...state,
      loading: true,
    }),
    [getPostsSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      posts: payload,
      error: null,
    }),
    [getPostsFail]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),

    [addPostRequested]: (state) => ({
      ...state,
      loading: true,
    }),
    [addPostSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      posts: [
        payload,
        ...state.posts,
      ]
    }),
    [addPostFail]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),

    [deletePostRequested]: (state) => ({
      ...state,
      loading: true,
    }),
    [deletePostSuccess]: (state, { payload }) => ({
      ...state,
      loading: false,
      posts: state.posts.filter((post) => post.id !== payload )
    }),
    [deletePostFail]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
    [getPostRequested]: (state) => ({
      ...state,
      loading: true,
      postUpdated: false,
    }),
    [getPostSuccess]: (state, { payload }) => {
      let newPost = {};
      if(payload.id){
        newPost = state.posts.find((post) => post.id === payload.id );
      }else{
        newPost = payload.post;
      }
      return {
        ...state,
        loading: false,
        post: newPost,
      };
    },
    [getPostFail]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),

    [editPostRequested]: (state) => ({
      ...state,
      loading: true,
      postUpdated: false,
    }),
    [editPostSuccess]: (state, { payload }) => {
      const postIndex = state.posts.findIndex((post) => post.id === payload.id);
      state.posts[postIndex] = payload;
      return {
        ...state,
        loading: false,
        postUpdated: true,
      };
    },
    [editPostFail]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
  },
  initialState
);

export default reducer;
