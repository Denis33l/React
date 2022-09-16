import React from "react";

const Leftmenu = (props) => {
  return (

    <div className="item">
      <div className="container">
        <button className="btn__menu"><img src={props.item.itemImage} alt="icon" /><span className="btn__styles">{props.item.itemText}</span></button>
      </div>
    </div>
  );
};

// const button = document.querySelector(".btn__menu");

// button.addEventListener("click", () => {
//   button.classList.add("hidden");
// });

export default Leftmenu;