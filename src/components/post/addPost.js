import React, { useState }  from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../customComponents";
import {
  addPostRequested
} from '../../redux/post/actions';
const AddPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initial = {
    title: '', 
    description: ''
  };
  const [addData, setAddData] = useState(initial);
  const [error, setError] = useState(false);
  const handleInput = (e) => {
    const { value, name } = e.target;
    setAddData({
      ...addData,
      [name]: value
    });
  };
  const addPost = () => {
    const {
      title,
      description,
    } = addData;
    if(!(title && description)){
      setError(true);
      return false;
    }
    dispatch(addPostRequested(addData));
    history.push('/');
  };
  const {
    title,
    description,
  } = addData;
  return (
    <div className='post-detail'>
      <div className={'post-header'} >ADD POST</div>
      <div className={'all-posts'}><Link to={'/'}>All posts</Link></div>
      <div>
        <div className='title'>
          <input
            name='title'
            value={title}
            onChange={handleInput}
          />
        </div>
        <div className={'description'}>
          <input
            name='description'
            value={description}
            onChange={handleInput}
          />
        </div>
      </div>
      {
        error && <ErrorMessage message='All fields are required ' />
      }
      <button onClick={addPost}>Add</button>
    </div>
  );
};

export default AddPost;
