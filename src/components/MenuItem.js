import React from "react";

function MenuItem({ image, name }) {

  const handleOnClick = () => {
    console.log("Hello");
    window.location.href="./contact";
  }


  return (
    <div className="menuItem" onClick={handleOnClick}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default MenuItem;
