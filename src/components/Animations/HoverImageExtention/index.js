import React from "react";
import T1 from "../../../images/TM1.jpg";
import T2 from "../../../images/TM2.jpg";
import T3 from "../../../images/TM3.jpg";
import T4 from "../../../images/TM4.jpg";
import T5 from "../../../images/TM5.jpg";
import T6 from "../../../images/TM6.jpg";
import "./hoverimage.css";
class Slider extends React.Component {
  componentDidMount() {
    let radius = 340;
    let autoRotate = true;
    let rotateSpeed = -60;
    let imgWidth = 190;
    let imgHeight = 230;

    setTimeout(init, 2000);

    let odrag = document.getElementById("drag");
    let ospin = document.getElementById("spin");
    let aImg = ospin.getElementsByTagName("img");

    let aEle = [...aImg];
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    let ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    function applyTransform(obj) {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = yes ? "running" : "paused";
    }

    let 
      desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    if (autoRotate) {
      let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      let sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        let nX = e.clientX,
          nY = e.clientY;

        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;

        applyTransform(odrag);

        sX = nX;
        sY = nY;
      };

      this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;

          applyTransform(odrag);
          playSpin(false);

          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);

        this.onpointermove = this.onpointerup = null;
      };
      return false;
    };
  }
  render() {
    return (
      <div id="drag">
        <div id="spin">
          <img src={T4} alt="" />
          <img src={T1} alt="" />
          <img src={T4} alt="" />
          <img src={T3} alt="" />
          <img src={T2} alt="" />
          <img src={T5} alt="" />
          <img src={T6} alt="" />
        </div>
        <div id="ground"></div>
      </div>
    );
  }
}

export default Slider;
