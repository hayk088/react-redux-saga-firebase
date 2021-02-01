import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getPostsRequested} from '../../redux/post/actions';
import PostItem from "./postItem";
import {Loading} from '../customComponents';
const Post = () => {
  const dispatch = useDispatch();
  const {
    posts : {
      posts,
      loading,
    }
  } = useSelector(state => state);
  useEffect(() => {
    if(!posts.length){
      dispatch(getPostsRequested());
    }
  },[]);

  return (
    <div className='posts-container'>
      <div className={'post-header'}>
        POSTS
      </div>
      <div className={'add-post'}>
        <Link to={'/add-post'}>Add Post</Link>
      </div>
      <div className={'content'}>
        {
          !loading ? (
            posts.length  ? (
              posts.map((post) => (<PostItem key={post.id} id={post.id} title={post?.title} />))
            ): ''
          ) : <Loading/>
        }
      </div>
    </div>
  );
};

export default Post;
