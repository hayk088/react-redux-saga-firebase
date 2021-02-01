import React  from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deletePostRequested, getPostRequested } from '../../redux/post/actions';

const PostItem = (props) => {
  const dispatch = useDispatch();
  const {
    title,
    id,
  } = props;
  const deletePost = () => {
    dispatch(deletePostRequested(id));
  };
  const getPost = () => {
    dispatch(getPostRequested({id}));
  };
  return (
    <div className='post'>
      <div className='title'>
        {
          title
        }
      </div>
      <div className={'post-action'}>
        <Link to={`/view-post/${id}`} onClick={getPost}><FontAwesomeIcon icon={faEye} /></Link>
        <Link to={`/edit-post/${id}`} onClick={getPost}><FontAwesomeIcon icon={faEdit} /></Link>
        <FontAwesomeIcon onClick={deletePost} icon={faTrash} />
      </div>
    </div>
  );
};

export default PostItem;
