import React from "react";
import { useContextState } from "./utils/global.context";


const Footer = () => {
  const { state } = useContextState();
  return (
    <footer className={state.theme}>
        <img src="/images/DH.png" alt="DH-logo"/>
      <div className="social">
        <img src="/public/images/facebook.png" alt="facebook" />
        <img src="/public/images/instagram.png" alt="instagram" />
        <img src="/public/images/whatsapp.png" alt="whatsapp" />
        <img src="/public/images/tiktok_logo_icon_186928.png" alt="tiktok" />
      </div>
    </footer>
  );
};

export default Footer;
