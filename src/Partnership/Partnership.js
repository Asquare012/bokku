import jumia from "./jumia.png";
import jiji from "./jiji.png";
import konga from "./konga.png";
import fedex from "./fedex.png";
import "./partnership.scss";
const Partnership = () => {
  return (
    <div className="Partnership">
      <div className="Partnership-title">OUR PARTNERS</div>
      <div className="Partnership-list">
        <ul>
          <li>
            <img src={jumia} alt="jumia" height="22px" />
          </li>
          <li>
            <img src={jiji} alt="jiji" height="42px" />
          </li>
          <li>
            <img src={fedex} alt="fedex" height="38px" />
          </li>
          <li>
            <img src={konga} alt="konga" height="55px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Partnership;
