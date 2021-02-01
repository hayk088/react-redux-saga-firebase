import React, { useEffect, useState }  from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import {editPostRequested, getPostRequested} from '../../redux/post/actions';
import {Link, useHistory} from "react-router-dom";
import {ErrorMessage, Loading} from '../customComponents';
const EditPost = ({match}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    posts : {
      post,
      loading,
      postUpdated,
      error,
    }
  } = useSelector(state => state);
  const initial = {
    title: '',
    description: ''
  };
  const [editData, setEditData] = useState(initial);
  const [errorM, setErrorM] = useState(false);
  useEffect(() => {
    if(!Object.keys(post).length){
      const id = match.params.id;
      dispatch(getPostRequested({
        id,
        doRequest: true,
      }));
    }
  },[]);
  useEffect(() => {
    if(Object.keys(post).length){
      setEditData(post);
    }
  },[post]);
  useEffect(() => {
    if(postUpdated && !error){
      history.push('/');
    }
  },[postUpdated]);
  const handleInput = (e) => {
    const { value, name } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };
  const editPost = () => {
    if(!(title && description)){
      setErrorM(true);
      return false;
    }
    dispatch(editPostRequested(editData));
  };
  const {
    title,
    description,
  } = editData;
  return (
    <div className='post-detail'>
      <div className={'post-header'} >EDIT POST</div>
      <div className={'all-posts'}><Link to={'/'}>All posts</Link></div>
      {
        !loading ? (
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
            {
              errorM && <ErrorMessage message='All fields are required ' />
            }
            <button onClick={editPost}>Edit</button>
          </div>
        ): <Loading/>
      }
    </div>
  );
};

export default withRouter(EditPost);
