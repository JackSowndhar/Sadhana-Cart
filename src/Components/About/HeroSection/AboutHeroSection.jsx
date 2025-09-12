import { useTranslation } from "react-i18next";
import { womenShopping } from "src/Assets/Images/Images";
import s from "./AboutHeroSection.module.scss";

const AboutHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className={s.heroSection}>
      <section className={s.content}>
        <h2>{t("About US")}</h2>

        <p>{t("Sadhana Cart is a digital extension of Sadhana Agro Tech, a proprietorship business founded and operated by Mrs. B. Nirmala in Karnataka, India. Our vision is to bring agricultural and daily-need products from local suppliers directly to your doorstep through a seamless online shopping experience.")}</p>
        <p>{t("With our primary base located in Raichur and an additional center in Ballari, Sadhana Cart is committed to providing high-quality products sourced responsibly. We believe in promoting local vendors, farmers, and small businesses by giving them a powerful platform to connect with customers.")}</p>
        <p>{t("Our goal is to build trust, transparency, and convenience in every transaction—making your shopping simple, safe, and satisfying.")}</p>
        <p>{t("Thank you for supporting local entrepreneurship and being part of the Sadhana Cart journey.")}</p>
      </section>

      <div className={s.imgHolder}>
        <img
          src={womenShopping}
          alt={t("aboutPage.heroSection.imageAlt")}
          height={"500px"}
          width={"500px"}
        />
      </div>
    </section>
  );
};

export default AboutHeroSection;
