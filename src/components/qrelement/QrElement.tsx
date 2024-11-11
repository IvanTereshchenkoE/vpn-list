import React from "react";

import "./QrElement.scss";

import QRCode from "react-qr-code";

import copyButton from "accets/svg/copy-button.svg";

interface IQrElement {
 name: string;
 code: string;
}

const QrElement = ({ name, code }: IQrElement) => {
 const handleCopy = async () => {
  try {
   await navigator.clipboard.writeText(code);
  } catch (err) {
   console.error("Ошибка при копировании текста: ", err);
  }
 };
 return (
  <div className="qr_element_container">
   <div className="qr_link_container">
    <span className="qr_span">
     {name} -{code}
    </span>
    <button className="qr_button" onClick={handleCopy}>
     <img src={copyButton} className="qr_img" alt="copy_button" />
    </button>
   </div>
   <div className="qr_code_container">
    <QRCode
     size={256}
     style={{
      height: "auto",
      width: "15vw",
      maxHeight: "15vh",
      backgroundColor: "white",
      paddingTop: "3%",
      paddingBottom: "3%",
      borderRadius: "10px",
     }}
     value={code}
     viewBox={`0 0 256 256`}
    />
    <p className="qr_code_p">Сканируйте для настройки VPN ({name})</p>
   </div>
  </div>
 );
};

export { QrElement };
