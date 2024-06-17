import React from "react";
import { useContextState } from "./utils/global.context";

const Footer = () => {
  const { state } = useContextState();
  return (
    <footer className={state.theme}>
        <img src="/images/DH.png" alt="DH-logo"/>
      <div className="social">
        <img src="/images/ico-facebook.png" alt="facebook" />
        <img src="/images/ico-instagram.png" alt="instagram" />
        <img src="/images/ico-whatsapp.png" alt="whatsapp" />
        <img src="/images/ico-tiktok.png" alt="tiktok" />
      </div>
    </footer>
  );
};

export default Footer;
