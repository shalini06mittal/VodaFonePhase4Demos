import { Link } from "react-router-dom"

export const PostExcerpt = ({ post }) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <div>
          {post.author}: {post.date} 
        </div>
        <p className="post-content">{post.content}</p>
        <Link to={`/edit/${post.id}`}>Edit</Link>
      </article>
    )
  }