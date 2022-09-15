import React from "react";
import checkmark from "../img/post/checkmark.png"


const Postitem = (props) => {
  return (
    <div className="post">
      <div className="post__content">

        <img src={props.post.image} alt="logo" height="90px"/>

        <div className="post__decription">
          <h2 className="name">{props.post.name} {props.post.isVerified && <img src={checkmark} alt="check" />}</h2>

          <div className="post__location">  
            <p className="location"><img src={props.post.mapMini} alt="map" /> {props.post.location}</p>
          </div>

          <div className="profession">
            <p className="post__profession">{props.post.profession}&#160;</p>
            <p className="post__abilities">{props.post.abilities}</p>
          </div>

          <div className="post__btn">
            <button className="btn__clock"><img src={props.post.Imageclock} alt="clock" />{props.post.clock}</button>
            <button className="btn__available"><img src={props.post.Imagezap} alt="zap" />{props.post.available}</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Postitem;