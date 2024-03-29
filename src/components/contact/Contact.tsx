import { Section, Success } from "..";
import { useState, useRef, FormEvent } from "react";
import { Slide } from "react-awesome-reveal";
import "./Contact.css";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLFormElement>(null);
  const serviceId = import.meta.env.VITE_MY_SERVICE as string;
  const templateId = import.meta.env.VITE_MY_TEMPLATE as string;
  const publicKey = import.meta.env.VITE_MY_PUBLIC_KEY as string;
  const method = "POST" as string;
  const url = "https://api.emailjs.com/api/v1.0/email/send" as string;

  // create an async function to send the email
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (inputRef.current) {
        const formData = new FormData(inputRef.current);
        const toNameInput = formData.get("to_name") as string;
        const fromNameInput = formData.get("from_name") as string;
        const projectInput = formData.get("project") as string;

        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              to_name: toNameInput,
              from_name: fromNameInput,
              project: projectInput,
            },
          }),
        });

        if (response.status === 200) {
          setSent(true);
          inputRef.current?.reset();
        } else {
          setSent(false);
        }
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    void sendEmail(e).catch(console.error);
  };
  return (
    <Section className="contact section" id="contact">
      <Success sent={sent} setSent={setSent} />
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Get in touch</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">Contact me</span>
      </Slide>

      <div className="contact__container container grid">
        {/* CONTENT 1 */}
        <Slide direction="left" triggerOnce>
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>
            {/* CARD 1 */}
            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send conact__card-icon"></i>
                <h3 className="conact__card-title">Email</h3>
                <span className="contact__card-data">
                  alejandro.morel1905@gmail.com
                </span>
                <a
                  href="mailto:alejandro.morel1905@gmail.com"
                  target="_blank"
                  className="contact__button"
                  rel="noreferrer"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
              {/* CARD 2 */}
              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bxl-whatsapp conact__card-icon"></i>
                  <h3 className="conact__card-title">Whatsapp</h3>
                  <span className="contact__card-data">549-370-5204454</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=3705204454&text=Hello, more information!"
                    target="_blank"
                    className="contact__button"
                    rel="noreferrer"
                  >
                    Write me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        {/* CONTENT 2*/}
        <Slide direction="right" triggerOnce>
          <div className="contact__content">
            <h3 className="contact__title">Tell me about your project</h3>

            {/* FORM */}
            <form
              className="contact__form"
              ref={inputRef}
              onSubmit={handleSubmit}
            >
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  required
                  type="text"
                  name="to_name"
                  className="contact__form-input"
                  placeholder="Insert your name..."
                />
              </div>
              <div className="contact__form-div">
                <label className="contact__form-tag">Email</label>
                <input
                  required
                  type="email"
                  name="from_name"
                  className="contact__form-input"
                  placeholder="Insert your email..."
                />
              </div>
              <div className="contact__form-div contact-form-area">
                <label className="contact__form-tag">Project</label>

                <textarea
                  className="contact__form-input "
                  name="project"
                  cols={30}
                  rows={10}
                  required
                  placeholder="Write your project..."
                ></textarea>
              </div>
              <button type="submit" className="button button--flex">
                {loading ? "Sending..." : " Send message"}
                {"  "}
                <svg
                  className="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="var(--container-color)"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </Slide>
      </div>
    </Section>
  );
};

export default Contact;
