import React from "react";
import "./contactStyle.css";
import Signature from "../../image/signature.png";

export default function contact() {
  return (
    <>
      <section className="contactStyle">
        <div className="contact-now">
          <h2>If Not Now, When? Let’s Work Together!</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
            mollitia earum.
          </p>
          <br />
          <div className="signature">
            <img src={Signature} alt="sign" />
          </div>
        </div>
        <div className="contact-message">
          <input placeholder="Fullname" type="text" name="name" id="" />
          <input placeholder="Email" name="email" type="text" />
          <textarea
            name="message"
            placeholder="Your Message"
            id="message"
          ></textarea>
          <button type="submit">Send Message</button>
        </div>
      </section>
    </>
  );
}
