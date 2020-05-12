import React from "react";
import "./contactStyle.css";

export default function contact() {
  return (
    <>
      <section className="contactStyle">
        <div className="contact-now">
          <h1>If Not Now, When? Let’s Work Together!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
            mollitia earum.
          </p>
          <img src="//#endregion" alt="sign" />
        </div>
        <div className="contact-message">
          <form action="#">
            <input placeholder="fullname" type="text" name="" id="" />
            <input placeholder="email" name="email" type="text" />
            <input placeholder="your message" type="text" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
