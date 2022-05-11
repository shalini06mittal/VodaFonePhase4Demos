import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../redux/PostsSlice';
export default configureStore({
    reducer:{
      postsReducer:postReducer
    }
  })