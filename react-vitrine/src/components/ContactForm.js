import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_8tbb12f",
        "template_azodpme",
        form.current,
        // Permet de cacher certaines données avec le .env
        "dZGt70tC40ba2-n71"
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
    <div className="form-container">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required id="name" />
        <label>Email</label>
        <input type="email" name="email" required id="email" />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input
          type="submit"
          value="Envoyer"
          id="btn-form"
          className="hover button"
        />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
