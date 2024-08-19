import React, { useEffect, useState } from "react";
import AnnouncementLp from "../_components/lp/annoucement-bar";
import HeaderLp from "../_components/lp/header";
import NavLp from "../_components/lp/nav";
import BuyInfosLp from "../_components/lp/buyInfos";
import FooterLp from "../_components/lp/footer";
import { ColoredLine, GoldenLine } from "../_components";
import { useRecoilState } from "recoil";
import { getCookie, setCookie } from "cookies-next";
import HeadLanding from "../_components/custom-head";
import axios from "axios";
import useWindowSize from "../hooks/useWindowSize";

const LandingPageLayout = (props: any) => {
  const { children } = props;
  const { width } = useWindowSize();
  const [title, setTitle] = useState("");
  // const [userData, setUserData] = useRecoilState(UserData);

  const handlePersistLogin = async () => {};

  // useEffect(() => {
  //   handlePersistLogin();
  // }, []);

  return (
    <React.Fragment>
      <HeadLanding />
      <HeaderLp />

      {children}
      {/* <BuyInfosLp />
      <FooterLp />  */}
    </React.Fragment>
  );
};

export default LandingPageLayout;
