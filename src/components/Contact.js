import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xgerkwed");

  if (state.succeeded) {
    return (
      <div className="contact">
        <img
          height="100"
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png"
          alt="smiling-emoji"
        />
        <br />
        <p>Thanks for your message! I will be contacting you if necessary</p>
      </div>
    );
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder=""
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Enter your message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
      <br />
      <div className="contact_text">
        <p>
          Made possible by Nguyen Minh Huy - SE161323 <br />
          <a href="https://github.com/minhhi68">
              Github Account
          </a>
        </p>
        <p>
       Anything happens, please call: 0833060802
        </p>
      </div>
    </div>
  );
}

export default Contact;
