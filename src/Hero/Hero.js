import { useState } from "react";
import "./hero.scss";
import logo from "./logo.png";
import hambrger_icon from "./hamburger.svg";
import hamburger_close_icon from "./close_hambugger.svg";

// social media icons
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import gmail from "./gmail.png";
import whatsapp from "./whatsapp.png";

const Hero = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="Hero" style={{ overflowY: menu ? "hidden" : "visible" }}>
      <div className="Hero-container">
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src={logo} alt="logo" height="60px" />
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#About">About </a>
            </li>
            <li>
              <a href="#Job">Jobs</a>
            </li>
            <li>
              <a>Locations</a>
            </li>
            <li>
              <a href="#">
                <img
                  src={menu ? hamburger_close_icon : hambrger_icon}
                  alt="hamburger icon"
                  height="15px"
                  onClick={handleMenu}
                />
              </a>
            </li>
          </ul>
        </nav>

        {/* MENU SECTION */}
        <div
          className="Menu"
          style={{
            marginLeft: menu ? "0" : "-100%",
          }}
        >
          <div className="Menu-top">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#About">About </a>
              </li>
              <li>
                <a href="#Job">Jobs</a>
              </li>
              <li>
                <a>Expansion</a>
              </li>
              <li>
                <a>Locations</a>
              </li>
            </ul>
          </div>
          <div className="Menu-bottom">
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
                <a
                  href="mailto:info@atreos.com?subject=Inquiry"
                  target="_blank"
                >
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
        <main>
          <h1>BOKKU! MART</h1>
          <h3>Nigeria's best discount grocery store</h3>
          <button>Locate us</button>
        </main>
      </div>
    </div>
  );
};

export default Hero;
