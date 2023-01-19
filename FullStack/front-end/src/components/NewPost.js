import React, { useState } from "react";
import axios from "axios";

const NewPost = ({ userId }) => {
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/post/", {
      message: message,
      author: userId,
    });

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
