import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useSignOut from "src/Hooks/App/useSignOut";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./AuthSideBarButtons.module.scss";

const AuthSideBarButtons = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const loginInfo = useSelector((state) => state?.user?.loginInfo) || {};
  const handleSignOut = useSignOut();
  const { t } = useTranslation();

  const isSignedIn = loginInfo?.isSignIn ?? false;

  return (
    <>
      {isSignedIn ? (
        <button
          className={s.signOutButton}
          type="button"
          onClick={handleSignOut}
          aria-hidden={!isMobileMenuActive}
          tabIndex={isMobileMenuActive ? 0 : -1}
        >
          <SvgIcon name="boxArrowRight" />
          <span>{t("mobileNav.signOut")}</span>
        </button>
      ) : (
        <Link
          to="/signup"
          className={s.signOutButton}
          aria-hidden={!isMobileMenuActive}
          tabIndex={isMobileMenuActive ? 0 : -1}
        >
          <SvgIcon name="boxArrowRight" />
          <span>{t("mobileNav.signIn")}</span>
        </Link>
      )}
    </>
  );
};

export default AuthSideBarButtons;
