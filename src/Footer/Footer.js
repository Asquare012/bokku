import facebook from "./facebook.png";
import twitter from "./twitter.png";
import gmail from "./gmail.png";
import whatsapp from "./whatsapp.png";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="Footer-top">
        <div className="Footer-left">
          <div>BOKKU! MART</div>
          <div>
            bokku! sells a limited number of carefully chosen grocery products.
            The products are of high-quality and cover 80% of what the average
            Nigerian household needs every day: Basic food like rice, oil,
            sauces, snacks or beverages, personal care like soaps and
            toothpaste, and household items like cleaning products and
            detergents.
          </div>
        </div>
        <div className="Footer-right">
          <ul>
            <li>
              <a href="https://facebook.com/bokkumart/" target="_blank">
                <img src={facebook} alt="facebook" height="38px" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bokkumart/" target="_blank">
                <img src={twitter} alt="twitter" height="33px" />
              </a>
            </li>
            <li>
              <a href="mailto:info@atreos.com?subject=Inquiry" target="_blank">
                <img src={gmail} target="_blank" alt="gmail" height="33px" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src={whatsapp} alt="whatsapp" height="34px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer-bottom">
        <div>
          Copyright {new Date().getFullYear()}, Atreos Retail Platform. <br />
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
