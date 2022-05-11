import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState={
    posts:[],
    status:'idle',
    error:''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts',async()=>{
    const response = await fetch('http://localhost:3000/posts');
    //console.log(response.json())
        return response.json()
    
})
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchPosts.pending,(state, action)=>{
            state.status='loading'
        })
        .addCase(fetchPosts.fulfilled,(state, action)=>{
            state.status='success';
            state.posts = state.posts.concat(action.payload)
        })
        .addCase(fetchPosts.rejected,(state, action)=>{
            state.status = 'error'
            state.error = action.error.message
        })
    }
})

export let posts = (state)=>state.postsReducer.posts;
export default postsSlice.reducer;