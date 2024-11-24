import telegram from "../img/icons/telegram.svg";
import telegramQR from "../img/QR/telegramQR.jpg";

import whatsapp from "../img/icons/whatsapp.svg";
import whatsappQR from "../img/QR/whatsappQR.jpg";

const Contact = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Tbilisi, Georgia</p>
          </li>

          <li className="content-list__item">
            <div style={{ display: "flex" }}>
              <div style={{ margin: "20px" }}>
                <h2 className="title-2">
                  <img
                    src={telegram}
                    alt="TelegramIcon"
                    style={{ marginRight: "10px" }}
                  />
                  Telegram
                </h2>
                <img
                  src={telegramQR}
                  alt="telegramQR"
                  style={{ width: "175px" }}
                />
              </div>

              <div style={{ margin: "20px" }}>
                <h2 className="title-2">
                  <img
                    src={whatsapp}
                    alt="WhatsAppIcon"
                    style={{ marginRight: "10px" }}
                  />
                  Whatsapp
                </h2>
                <img
                  src={whatsappQR}
                  alt="whatsappQR"
                  style={{ width: "175px" }}
                />
              </div>
            </div>
          </li>

          <li className="content-list__item"></li>

          <li className="content-list__item">
            <h2 className="title-2">Email/Number</h2>
            <div>
              <p>
                <a href="mailto:bukhaidze.temo@gmail.com">
                  bukhaidze.temo@gmail.com
                </a>
              </p>

              <p>
                <a href="tel:+995598558233">+(995) 598 55 82 33</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contact;
