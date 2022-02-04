import CtaButton from "../components/CtaButton";
import EmailIcon from "@mui/icons-material/Email";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Layout from "../components/Layout";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendmail(e) {
    e.preventDefault();
    Swal.fire({
      text: "Merci pour votre mail",
    });

    emailjs
      .sendForm(
        "service_2l42j24",
        "template_e92jm2b",
        form.current,
        "user_hokJknV2laBXXOxIaDhDN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Layout title="contact">
      <div className="flex items-center justify-center mt-16">
        <form className="w-1/3" ref={form} onSubmit={sendmail}>
          <div className="mb-10">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nom et Prénom
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Adresse e-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Votre meessage
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex justify-center md:items-center">
            <CtaButton
              title="Envoyer un mail"
              type="submit"
              icon={<EmailIcon />}
            />
          </div>
        </form>
      </div>
      ;<div className="m-2 flex flex-col w-2/5"></div>
    </Layout>
  );
};

export default Contact;
