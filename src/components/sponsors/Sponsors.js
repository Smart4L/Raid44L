import React from "react";
import { SponsorsImg } from './Sponsors_img'

import "../../assets/css/Sponsors.css";

export const Sponsors = () => {
  return (
    <div>
      <div className="bg-orange">
        <div className="remerciements">
          <h1>Merci à eux !</h1>
        </div>
      </div>
      <SponsorsImg />
    </div>
  );
}
