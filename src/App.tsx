import React from "react";
import "./App.scss";
import { LinkContainer, QrsContainer } from "components";
import { Main } from "pages";

function App() {
  return (
    <div className="App">
      {/* <div className="link_container">
    <h1 className="main_text">Добро пожаловать</h1>
    <h2 className="main_second_text">Инструкция по настройке VPN</h2>
    <LinkContainer />
    <QrsContainer />
    <div>
     Безопасный браузер:{" "}
     <a href="#" target="_blank">
      Mullvad Browser {" "}
     </a>
     для компьютера |{" "}
     <a href="#" target="_blank">
      Brave {" "}
     </a>
     для мобильного устройства
    </div>
    <div>
      Кошелек: <a href="#" target="_blank">
      Electrum {" "}
     </a> | <a href="#" target="_blank">
     Cake Wallet {" "}
     </a>
    </div>
   </div> */}
      <Main />
    </div>
  );
}

export default App;
