import "../style/popup.css";
import Closebtn from "../assets/close-btn.svg";
const Popup = (props) => {
  return props.trigger ? (
    <div className="popup" onClick={() => props.setTrigger(false)}>
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <img src={Closebtn} alt="X" />
        </button>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
};

export default Popup;
