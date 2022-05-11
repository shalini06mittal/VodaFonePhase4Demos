import React, { useEffect } from "react";
import { PostExcerpt } from "./PostExcerpt";
import { fetchPosts, posts } from "../redux/PostsSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
export default function PostLists() {
  const dispatch = useDispatch();
  const postlist = useSelector(posts);

  const postStatus = useSelector((state) => state.postsReducer.status);
  useEffect(() => {
    console.log("fetching");
    if (postStatus === "idle") {
      console.log("fetching data");
      dispatch(fetchPosts());
    }
  }, []);

  let content;
  console.log(postStatus);
  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === "success") {
    content = postlist.map((post) => <PostExcerpt key={post.id} post={post} />);
  }
  return <div>{content}</div>;
}
