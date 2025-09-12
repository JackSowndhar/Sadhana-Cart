import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./About.module.scss";
import AboutHeroSection from "./HeroSection/AboutHeroSection";

const About = () => {
  const { t } = useTranslation();

  useScrollOnMount();

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <main className={s.aboutPage}>
        <div className="container">
          <PagesHistory history={["/", t("nav.about")]} />
          <AboutHeroSection />
        </div>

      </main>
    </>
  );
};
export default About;
