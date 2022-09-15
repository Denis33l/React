import React from "react";

const Leftmenu = (props) => {
  return (

    <div className="item">
      <div className="container">
        <button className="btn__menu"><img src={props.item.itemImage} alt="icon" />{props.item.itemText}</button>

        <div className="item__description">
        </div>
      </div>
    </div>
  );
};

export default Leftmenu;