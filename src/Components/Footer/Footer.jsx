import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { WEBSITE_NAME } from "src/Data/constants";
import s from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  const section = "footer.section";

  return (
    <footer className={s.footer}>
      <div className="container">
        <section className={s.sections}>
          <section className={s.section1}>
            <b>
              <Link className="text" to="/">
                {WEBSITE_NAME}
              </Link>
            </b>
            <ul>
              <li>
                <Link className="text" to="/signup">
                  {t("Login / Register")}
                </Link>
              </li>
            </ul>
          </section>

          <section className={s.section3}>
            <b>{t("Helps")}</b>

            <ul>
              <li>
                <Link className="text" to="/about">
                  {t("About")}
                </Link>
              </li>
              <li>
                <Link className="text" to="/contact">
                  {t("Contact")}
                </Link>
              </li>
              <li>
                <Link className="text" to="/payment">
                  {t("Payment")}
                </Link>
              </li>
            </ul>
          </section>

          <section className={s.section4}>
            <b>{t("Consumer Policy")}</b>

            <ul>
              <li>
                <Link className="text" to="/privacy">
                  {t("Privacy")}
                </Link>
              </li>
              <li>
                <Link className="text" to="/termsOfUse">
                  {t("Terms of Use")}
                </Link>
              </li>
              <li>
                <Link className="text" to="/faqs">
                  {t("FAQs")}
                </Link>
              </li>
              <li></li>
            </ul>
          </section>
          <section className="address">
            <b>{t("Address")}</b>
            <ul>
              <li>
                Floor No : GROUND FLOOR SRI MUKUNDA SRI GANESH RESIDENCY <br />{" "}
                Building No/Flat No : FLAT NO.3 M.NO.1-11-400, 1-11-400/1,
                1-11-399, 1- 11-399/1 <br /> Road/Street : NIJALINGAPPA NAGAR{" "}
                <br /> City/Town/Village : RAICHUR,District : RAICHUR,State :
                KARNATAKA <br /> Pin Code : 584101
              </li>
            </ul>
          </section>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
