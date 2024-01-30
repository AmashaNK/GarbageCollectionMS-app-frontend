import React, { Components } from "react";

function NewsItem({ image, name, para }) {
  return (
    <div className="newsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 style={{ textAlign: "center", margin: "0" }}>{name}</h1>
      <p>{para}</p>
    </div>
  );
}

export default NewsItem;
