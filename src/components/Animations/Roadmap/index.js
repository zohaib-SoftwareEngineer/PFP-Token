import React from "react";
import "./slider.css";
class Slider extends React.Component {
  componentDidMount() {
    (function () {

    
      // define variables
      var items = document.querySelectorAll(".timeline li");
    
      // check if an element is in viewport
      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    
      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }
    
      // listen for events
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    })();
    

  }
  render() {
    return (
      <section className="timeline">
      <ul>
        <li>
          <div>
            <time>October 10, 2022</time> Launch the PFP Platform and offer the 1st private sale 
          </div>
        </li>
        <li>
          <div>
            <time>December 2022</time> Open Pre-Sale and Announce Partnership for the future EcoSystem.
          </div>
        </li>
        <li>
          <div>
            <time>January 2023</time> 2nd Pre-sale
          </div>
        </li>
        <li>
          <div>
            <time>April 2023</time> ICO PFP on All Exchanges
          </div>
        </li>
        <li>
          <div>
            <time>May 2023</time> Start Development of the PFP Crypto Platform, Play 2 Earn
          </div>
        </li>
      </ul>
    </section>
    
    );
  }
}

export default Slider;
