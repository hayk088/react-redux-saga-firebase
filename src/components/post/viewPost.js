import React, { useEffect }  from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import {getPostRequested} from '../../redux/post/actions';
import {Link} from "react-router-dom";
import {Loading} from "../customComponents";
const ViewPost = ({match}) => {
  const dispatch = useDispatch();
  const {
    posts : {
      post,
      loading,
    }
  } = useSelector(state => state);
  useEffect(() => {
    if(!Object.keys(post).length){
      const id = match.params.id;
      dispatch(getPostRequested({
        id,
        doRequest: true,
      }));
    }
  },[]);
  const {
    title,
    description,
  } = post;
  return (
    <div className='post-detail'>
      <div className={'post-header'} >VIEW POST</div>
      <div className={'all-posts'}><Link to={'/'}>All posts</Link></div>
      {
        !loading ? (
          <div>
            <div className='title'>
              <h3>Title</h3>
              <p>{title}</p>
            </div>
            <div className={'description'}>
              <h3>Description</h3>
              <p>{description}</p>
            </div>
          </div>
        ): <Loading/>
      }
    </div>
  );
};

export default withRouter(ViewPost);
