import { Post, AddPost, ViewPost, EditPost } from '../components/post';
export const routes = [
  {
    path: '/',
    component: Post,
  },
  {
    path: '/add-post',
    component: AddPost,
  },
  {
    path: '/view-post/:id',
    component: ViewPost,
  },
  {
    path: '/edit-post/:id',
    component: EditPost,
  },
];