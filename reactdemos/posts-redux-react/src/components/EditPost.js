import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {postById} from '../redux/PostsSlice';

export default function EditPost() {
    const params = useParams()
    const post = useSelector((state) => postById(state, parseInt(params.id)))

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const [author, setAuthor] = useState(post.author)
  
    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setAuthor(e.target.value)
    

  return (
    <section>
    <h2>Add a New Post</h2>
   
      <form>
      <div className='mb-3'>
        <label htmlFor="postTitle" className='form-label'>Post Title:</label>
        <input className='form-control'
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        </div>
        <div className='mb-3'>
        <label htmlFor="postAuthor" className='form-label'>Author:</label>
        <input className='form-control'
          type="text"
          id="postAuthor"
          name="author"
          placeholder="Author name"
          value={author}
          onChange={onAuthorChanged}
        />
        </div>
        <div className='mb-3'>
        <label htmlFor="postContent" className='form-label'>Content:</label>
        <textarea className='form-control'
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        </div>
        <button type="button" className="btn btn-primary"
        >
          Submit
        </button>
      </form>
   
  </section>
  )
}
