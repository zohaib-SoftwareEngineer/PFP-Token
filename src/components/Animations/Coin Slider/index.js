import React from "react";
import Heroimage from "../../../images/logo.png";
import "./coinslider.css";
class CoinSlider extends React.Component {
  componentDidMount() {
 
}
render() {
    return (
      <div className="slider">
      <span>
      <img src={Heroimage} alt=""/>
      </span>
      </div>
      );
  }
}

export default CoinSlider;