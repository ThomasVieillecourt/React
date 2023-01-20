import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/post.slice";
import Post from "./Post";

const Thread = () => {
  const posts = useSelector((state) => state.posts.postsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="thread-container">
      {posts &&
        posts
          .slice()
          //localeCompare() permet de trier des chaines de caractères
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          .map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Thread;
