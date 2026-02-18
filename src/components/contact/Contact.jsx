// src/Contact.js

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../contact/contact.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_8cklpu1", "template_bbxx9p8", form.current, {
        publicKey: "lBMNDjKqGLChMMeta",
      })
      .then(
        () => {
          console.log("MESSAGE SEND SUCCESSFULLY!");
          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <div id="contactSection">
        <div className=" flex-grow-0 justify-center pt-20 flex-row-reverse items-center filter-contact ">
          <h2 className="text-6xl text-center pt-16 pb-16 titleContact">
            Kontakt
          </h2>
          <form
            className="flex items-center flex-col w-full text-base"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex w-3/6 mb-6">
              <input
                className="w-3/6 h-[35px] p-[30px] text-lg mr-6 rounded border bg-[#fff8de]"
                placeholder="Name"
                type="text"
                name="user_name"
              />

              <input
                className="w-3/6 h-[35px] p-[30px] text-lg rounded border bg-[#fff8de]"
                placeholder="E-mail"
                type="email"
                name="user_email"
              />
            </div>

            <input
              className="w-3/6 h-[35px] p-[30px] text-lg mb-6 rounded border bg-[#fff8de]"
              placeholder="Betreff"
              type="text"
              name="subject"
            />

            <textarea
              className="w-3/6 mb-6 pt-[20px] text-lg pb-[180px] overflow-auto pl-8 bg-[#fff8de]"
              placeholder="Nachricht"
              name="message"
            />
            <button
              className={`w-3/6 p-[15px] text-lg font-bold text-[#4d5d53] mb-52 rounded border ${
                isSending ? "bg-[#f07041]" : "bg-[#e14208] border-[#e14208]"
              } ${isSending ? "cursor-not-allowed" : ""}`}
              type="submit"
              disabled={isSending}
            >
              NACHRICHT SENDEN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
