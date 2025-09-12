import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { NAV_PROPS } from "src/Data/globalVariables";

const useNavToolsProps = () => {
  const [navToolsProps, setNavToolsProps] = useState({});

  // Safe access to Redux state with fallback to false
  const isSignIn = useSelector((state) => state?.user?.loginInfo?.isSignIn || false);

  const { pathname } = useLocation();

  const setSelectedNavProps = () => {
    const { notSignIn, signUpPage, signIn } = NAV_PROPS;

    const isAuthPage = pathname === "/signup" || pathname === "/login";

    const selectedNavProps = isSignIn
      ? signIn
      : isAuthPage
      ? signUpPage
      : notSignIn;

    setNavToolsProps(selectedNavProps);
  };

  useEffect(() => {
    setSelectedNavProps();
  }, [isSignIn, pathname]);

  return navToolsProps;
};

export default useNavToolsProps;
