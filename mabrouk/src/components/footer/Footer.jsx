//Style
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="contact-us">
      <div className="title">CONTATTI</div>
      <section className="container_footer">
        <div className="item_footer">
          <div className="icon_footer">
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <ul>
            <li>+393333333333</li>
            <li>+393300000000</li>
            <li>0790000000</li>
          </ul>
        </div>
        <div className="item_footer center">
          <div className="icon_footer">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <ul>
            <li>mabrouk@gmail.com</li>
          </ul>
        </div>
        <div className="social item_footer">
          <div>
            <span className="title_social">SEGUICI SU</span>
            <div className="social_icon">
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-tiktok"></ion-icon>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
