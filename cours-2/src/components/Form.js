import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_8tbb12f",
        "template_azodpme",
        form.current,
        // Permet de cacher certaines données avec le .env
        process.env.REACT_APP_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          //   Remet le form à zero
          form.current.reset();
          formMessage.innerHTML = "<p class='success'>Message envoyé !</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);

          formMessage.innerHTML =
            "<p class='error'>Une erreur est survenue, veuillez réessayer.</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="container">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="form-container"
        autoComplete="off"
      >
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Envoyer" id="btn-form" required />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default FormTemplate;
