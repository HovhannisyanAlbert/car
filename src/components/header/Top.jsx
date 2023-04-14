import React, { memo } from "react";
import "./header.css";
import Whatsapp from "../../assets/img/icons/whatsapp.png";
import Telegram from "../../assets/img/icons/telegram.png";
import Instagram from "../../assets/img/icons/instagram.png";
import Phone from "../../assets/img/icons/phone.png";
import { TEL, WHATSAPP, TELEGRAM, INSTAGRAM } from "../../config/const";

const Top = () => {
  return (
    <div className="top_header">
      <div className="container-fluid max_width">
        <div className="">
          <a href={WHATSAPP} className="top_header-icon" target="_blank" rel="noopener noreferrer">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
          <a href={TELEGRAM} className="top_header-icon" target="_blank" rel="noopener noreferrer">
            <img src={Telegram} alt="Telegram" />
          </a>
          <a href={INSTAGRAM} className="top_header-icon" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>

        <div className="">
          <a href={`tel:${TEL}`} className="top_header-phone">
            <img src={Phone} alt="Phone" />
            {TEL}
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Top);
