import React from "react";
import checkmark from "../img/post/checkmark.png"


const Postitem = (props) => {
  return (
    <div className="post">
      <img className="post__like" src={props.post.like} alt="Like" />
      <div className="container">
        <div className="post__content">

          <img src={props.post.image} alt="Mark" height="100px" />

          <div className="post__decription">
            <h2 className="name">{props.post.name} {props.post.isVerified && <img src={checkmark} alt="check" height="15px" />}</h2>

            <div className="post__location">
              <p className="location"><img src={props.post.mapMini} alt="map" /> {props.post.location}</p>
            </div>

            <div className="profession">
              <p className="post__profession">{props.post.profession}&#160;</p>
              <p className="post__abilities">{props.post.abilities}</p>
            </div>

            <div className="post__btn">
              <button className="btn__clock"><img src={props.post.Imageclock} alt="clock" /><span className="btn__label">{props.post.clock}</span></button>
              <button className={`btn__available ${props.post.isAvailable ? "not_available_class" : ""}`}><img src={props.post.Imagezap} alt="zap" />{props.post.available}</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Postitem;