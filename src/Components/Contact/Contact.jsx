import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { WEBSITE_NAME } from "src/Data/constants";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./Contact.module.scss";

const Contact = () => {
  const { t } = useTranslation();

  useScrollOnMount();

  return (
    <>
    <Helmet>
      <title>Contact</title>
      <meta
        name="description"
        content={`Get in touch with ${WEBSITE_NAME}'s customer support team for assistance with your orders, inquiries, or feedback. We're here to help you with any questions you may have.`}
      />
    </Helmet>

    <div className="container">
      <main className={s.contactPage}>
        <PagesHistory history={["/", t("nav.contact")]} />

        <div className={s.contactSection} id="contact-page">
          <div className={s.contactContainer}>
            <h2>Get in Touch</h2>
            <p className={s.introText}>
              If you have any questions, feedback, or need support, feel free to reach out to us. We're here to help!
            </p>

            <div className={s.contactCards}>
              <div className={s.contactCard}>
                <h4>📍 Registered Office</h4>
                <p>
                  Flat No. 3, Sri Mukunda Sri Ganesh Residency,<br />
                  1-11-400, 1-11-400/1, 1-11-399, 1-11-399/1,<br />
                  Nijalingappa Nagar, Raichur, Karnataka - 584101
                </p>
              </div>

              <div className={s.contactCard}>
                <h4>📍 Additional Office</h4>
                <p>
                  Plot No. 12/A, Bommanahal Road,<br />
                  Near Bharat Petrol Bunk, Andhral Village,<br />
                  Ballari, Karnataka - 583101
                </p>
              </div>

              <div className={s.contactCard}>
                <h4>📞 Phone</h4>
                <p>+91-94488 10877</p> <br />
                <h4>📧 Email</h4>
                <p> sadhanacart123@.com</p>
              </div>

              <div className={s.contactCard}>
                <h4>🕒 Working Hours</h4>
                <p>Monday to Saturday<br />9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
  );
};
export default Contact;
