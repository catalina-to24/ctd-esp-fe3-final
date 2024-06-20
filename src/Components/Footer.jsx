import React from "react";
import { useContextState } from "./utils/global.context";


const Footer = () => {
  const { state } = useContextState();
  return (
    <footer className={state.theme}>
        <img src="/images/DH.png" alt="DH-logo"/>
      <div className="social">
        <img src="/images/facebook.png" alt="facebook" />
        <img src="/images/instagram.png" alt="instagram" />
        <img src="/images/whatsapp.png" alt="whatsapp" />
        <img src="/images/tiktok_logo_icon_186928.png" alt="tiktok" />
      </div>
    </footer>
  );
};

export default Footer;
