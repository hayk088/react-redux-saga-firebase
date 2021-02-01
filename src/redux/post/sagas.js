import { put, takeLatest } from 'redux-saga/effects';
import { firebase_app } from '../../firebase';
import {
  getPostsSuccess,
  getPostsRequested,
  getPostsFail,
  addPostRequested,
  addPostFail,
  addPostSuccess,
  deletePostFail,
  deletePostRequested,
  deletePostSuccess,
  getPostFail,
  getPostRequested,
  getPostSuccess,
  editPostFail,
  editPostRequested,
  editPostSuccess,
} from './actions';

function* getPosts() {
  try {
    const posts = yield firebase_app.firestore().collection("posts").get()
      .then(posts => {
        const allPosts = [];
        posts.forEach(doc => {
          allPosts.push({id: doc.id, ...doc.data()});
        });
        return allPosts;
      });
    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsFail());
  }
}

function* addPost({payload}) {
  try {
    const postId = yield firebase_app.firestore().collection("posts").add(payload)
      .then(post => {
        return post.id;
      });
    yield put(addPostSuccess({
      id: postId,
      ...payload,
    }));
  } catch (e) {
    yield put(addPostFail());
  }
}

function* deletePost({payload}) {
  try {
    yield firebase_app.firestore().collection("posts").doc(payload).delete();
    yield put(deletePostSuccess(payload));
  } catch (e) {
    yield put(deletePostFail());
  }
}

function* getPost({payload}) {
  try {
    const {
      id,
      doRequest,
    } = payload;
    if(doRequest){
      const post = yield firebase_app.firestore().collection("posts").get(id)
        .then(post => {
          let newPost = {};
          post.forEach(doc => {
            newPost = {
              id: doc.id, ...doc.data()
            };
          });
          return newPost;
        });
      yield put(getPostSuccess({post: post}));
      return;
    }
    yield put(getPostSuccess({id}));
  } catch (e) {
    yield put(getPostFail());
  }
}

function* editPost({payload}) {
  try {
    yield firebase_app.firestore().collection("posts").doc(payload.id).update(payload);
    yield put(editPostSuccess(payload));
  } catch (e) {
    yield put(editPostFail());
  }
}

export default function* () {
  yield takeLatest(getPostsRequested, getPosts);
  yield takeLatest(addPostRequested, addPost);
  yield takeLatest(deletePostRequested, deletePost);
  yield takeLatest(getPostRequested, getPost);
  yield takeLatest(editPostRequested, editPost);
}
