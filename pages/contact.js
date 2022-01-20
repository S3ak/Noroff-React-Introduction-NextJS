import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnChangeEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "message") {
      setMessage(value);
    }
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          console.log(`form submit event
          ${firstName}
          ${email}
          ${message}`);

          //   TODO: Post this data to some backend
        }}
      >
        <label htmlFor="firstName">
          first name:
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnChangeEvent}
          />
        </label>
        <br />

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            style={{
              width: "300px",
            }}
            value={email}
            onChange={(event) => {
              handleOnChangeEvent(event);
            }}
          />
        </label>

        <br />

        <label htmlFor="message">
          message
          <textarea
            type="message"
            name="message"
            style={{
              width: "300px",
            }}
            value={message}
            onChange={(event) => {
              handleOnChangeEvent(event);
            }}
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
