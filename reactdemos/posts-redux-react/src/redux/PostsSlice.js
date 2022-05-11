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

export const addPost = createAsyncThunk('posts/addPost',async(newPost)=>{
    const response = await fetch('http://localhost:3000/posts',{
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body:JSON.stringify(newPost)
    })
    return response.json()
})
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postUpdate(state, action){
            const { id, title, content } = action.payload
            const existingPost = state.posts.find((post) => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    },
    extraReducers(builder){
        builder
        .addCase(addPost.fulfilled,(state, action)=>{
            state.posts.push(action.payload)
        })
        .addCase(fetchPosts.pending,(state, action)=>{
            state.status='loading'
        })
        .addCase(fetchPosts.fulfilled,(state, action)=>{
            console.log('success')
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
export let postById = (state, postId) => {
    console.log(state.postsReducer.posts)
  let post =  state.postsReducer.posts.find(post=>post.id===postId)
  console.log(post)
  return post;
}
export default postsSlice.reducer;