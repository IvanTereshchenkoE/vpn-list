import React from "react";

import "./LinkContainer.scss";

const LinkContainer = () => {
 return (
  <ul className="main_link_container">
   <li>
    <a href="#" target="_blank">
     v2rayNG – для Android
    </a>
   </li>
   <li>
    <a href="#" target="_blank">
     Nekoray – для Android
    </a>
   </li>
   <li>
    <a href="#" target="_blank">
     Streisand – для iOS
    </a>
   </li>
   <li>
    <a href="#" target="_blank">
     FoXray – для iOS, macOS, iPadOS
    </a>
   </li>
   <li>
    <a href="#" target="_blank">
     Shadowrocket – для iOS, iPadOS (платное)
    </a>
   </li>
   <li>
    <a href="#" target="_blank">
     Nekoray – для Windows/Linux (прокси и туннель)
    </a>
   </li>
   <li>
    <a href="#" target="_blank">
     Nekoray – для MACos (прокси и туннель)
    </a>
   </li>
  </ul>
 );
};

export { LinkContainer };
