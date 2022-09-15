import React from "react";

import Clock from "../img/text/clock.png"
import Zap from "../img/text/zap.png"
import map from "../img/text/mappin.png"
import checkmark from "../img/text/Group.png"



const Description = (props) => {
  return (
    <div className="description">
      <div className="description__mark">
        <img src={props.text.imageBig} alt="Mark" />

        <div className="description__mark-text">
          <h2 className="name">{props.text.name}</h2>

            <div className="profession">
              <p className="description__profession">{props.text.profession}</p>
            </div>

            <div className="description__btn">
              <button className="btn__connect">{props.text.contact}</button>
              <button className="btn__clock"><img src={Clock} alt="clock" />{props.text.clock}</button>
              <button className="btn__available"><img src={Zap} alt="zap" />{props.text.available}</button>
            </div>

            <div className="description__location">
              <p className="location"><img src={map} alt="map" />{props.text.location}{props.text.actifity}&#160;</p>
              <p className="actifity">{props.text.activity}</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Description;