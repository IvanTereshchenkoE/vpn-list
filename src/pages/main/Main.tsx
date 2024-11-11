import React from "react";

import "./Main.scss";
import QRCode from "react-qr-code";
import { Header } from "components";

const Main = () => {
  const qrData = [
    { country: "Нидерланды", value: "https://link1.com", flag: "🇳🇱" },
    { country: "Германия", value: "https://link2.com", flag: "🇩🇪" },
    { country: "Финляндия", value: "https://link3.com", flag: "🇫🇮" },
    { country: "Финляндия", value: "https://link4.com", flag: "🇫🇮" },
  ];
  return (
    <>
      <Header />
      <div className="qr-page">
        {qrData.map((data, index) => (
          <div className="qr-container" key={index}>
            <div className="qr-header">
              <span className="qr-flag">{data.flag}</span>
              <p className="qr-country">{data.country}</p>
            </div>
            <div className="qr-code-wrapper">
              <QRCode size={196} value={data.value} className="qr-code" />
            </div>
            <p className="qr-text">
              Сканируйте для настройки VPN ({data.country})
            </p>
          </div>
        ))}
        <div className="footer">
          <p>
            БЕЗОПАСНЫЙ БРАУЗЕР:{" "}
            <a href="#" className="green-link">
              MULLVAD BROWSER
            </a>{" "}
            ДЛЯ КОМПЬЮТЕРА
          </p>
          <p>
            <a href="#" className="green-link">
              BRAVE
            </a>{" "}
            ДЛЯ МОБИЛЬНОГО УСТРОЙСТВА
          </p>
          <p>
            КОШЕЛЬКИ:{" "}
            <a href="#" className="green-link">
              ELECTRUM
            </a>{" "}
            |{" "}
            <a href="#" className="green-link">
              CAKE WALLET
            </a>
          </p>
          <p>
            TOR:{" "}
            <a href="#" className="green-link">
              TOR BROWSER
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export { Main };
