import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addPost} from '../redux/PostsSlice';

export default function AddPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setAuthor(e.target.value)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isDisabled =
    ![title, content, author].every(Boolean) 

/**
 * 1) button should be disabled if the fields are empty.
 * 2) after succesful insert, route it to posts link
 * 3) Add a edit button on every post. When clicked call a reducer that returns the post with the id
 * then display the editform,js with pre populated post details to edit. Then clicking on submit
 * should make a PUT request to update the post in json-server and redirect to posts link
 */
  const onSavePost = async()=>{
     dispatch(addPost({title, author, content, date:new Date()}))
     setAuthor('')
     setTitle('')
     setContent('')
    navigate('/')

  }
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
          disabled={isDisabled}
          onClick={onSavePost}>
            Save Post
          </button>
        </form>
     
    </section>
  )
}
