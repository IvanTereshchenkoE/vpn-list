import React from "react";

import "./QrsContainer.scss";
import { QrElement } from "components";

const mockVpnServers = [
 {
  name: "Нидерланды",
  code:
   "trojan://4hDyUyuUB6@adadmin.ac:443?type=tcp&security=reality&pbk=8jPZTm8-qSFS0kbd62bejxM-53zOsN22NvlTTcvChXk&fp=random&sni=nu.nl&sid=eabe46&spx=%2F#TroyN-0z7f9rjov",
  id: 1,
 },
 {
  name: "Нидерланды",
  code:
   "trojan://4hDyUyuUB6@adadmin.ac:443?type=tcp&security=reality&pbk=8jPZTm8-qSFS0kbd62bejxM-53zOsN22NvlTTcvChXk&fp=random&sni=nu.nl&sid=eabe46&spx=%2F#TroyN-0z7f9rjov",
  id: 2,
 },
 {
  name: "Нидерланды",
  code:
   "trojan://4hDyUyuUB6@adadmin.ac:443?type=tcp&security=reality&pbk=8jPZTm8-qSFS0kbd62bejxM-53zOsN22NvlTTcvChXk&fp=random&sni=nu.nl&sid=eabe46&spx=%2F#TroyN-0z7f9rjov",
  id: 3,
 },
 {
  name: "Нидерланды",
  code:
   "trojan://4hDyUyuUB6@adadmin.ac:443?type=tcp&security=reality&pbk=8jPZTm8-qSFS0kbd62bejxM-53zOsN22NvlTTcvChXk&fp=random&sni=nu.nl&sid=eabe46&spx=%2F#TroyN-0z7f9rjov",
  id: 4,
 },
 {
  name: "Нидерланды",
  code:
   "trojan://4hDyUyuUB6@adadmin.ac:443?type=tcp&security=reality&pbk=8jPZTm8-qSFS0kbd62bejxM-53zOsN22NvlTTcvChXk&fp=random&sni=nu.nl&sid=eabe46&spx=%2F#TroyN-0z7f9rjov",
  id: 5,
 },
 {
  name: "Нидерланды",
  code:
   "trojan://4hDyUyuUB6@adadmin.ac:443?type=tcp&security=reality&pbk=8jPZTm8-qSFS0kbd62bejxM-53zOsN22NvlTTcvChXk&fp=random&sni=nu.nl&sid=eabe46&spx=%2F#TroyN-0z7f9rjov",
  id: 6,
 },
 {
  name: "Нидерланды",
  code:
   "trojan://4hDyUyuUB6@adadmin.ac:443?type=tcp&security=reality&pbk=8jPZTm8-qSFS0kbd62bejxM-53zOsN22NvlTTcvChXk&fp=random&sni=nu.nl&sid=eabe46&spx=%2F#TroyN-0z7f9rjov",
  id: 7,
 },
 {
  name: "Нидерланды",
  code:
   "trojan://4hDyUyuUB6@adadmin.ac:443?type=tcp&security=reality&pbk=8jPZTm8-qSFS0kbd62bejxM-53zOsN22NvlTTcvChXk&fp=random&sni=nu.nl&sid=eabe46&spx=%2F#TroyN-0z7f9rjov",
  id: 8,
 },
];

const QrsContainer = () => {
 return (
  <div className="qrs_container">
   {mockVpnServers.map((item) => {
    return <QrElement name={item.name} code={item.code} key={item.id} />;
   })}
  </div>
 );
};

export { QrsContainer };
