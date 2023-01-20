import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, getPosts } from "../features/post.slice";

const NewPost = () => {
  const [message, setMessage] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const data = {
    message: message,
    author: userId,
    // création d'un id provisoire en attendant le get de la bdd mongo
    _id: Date.now(),
  };

  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/post/", data);
    dispatch(createPosts(data));
    // dispatch de getPosts car il faut aller chercher l'id de mongoDB
    dispatch(getPosts());

    setMessage("");
  };

  return (
    <form
      action=""
      className="new-post-container"
      onSubmit={(e) => handleForm(e)}
    >
      <textarea
        placeholder="Votre message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
