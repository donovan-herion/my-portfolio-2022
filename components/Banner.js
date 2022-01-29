import React from "react";

function Banner({ title }) {
  return (
    <div className="banner" id="banner-id">
      <div className="container">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Banner;
