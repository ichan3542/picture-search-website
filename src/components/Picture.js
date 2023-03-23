import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        下載圖片{">>> "}
        <a
          target="_blank"
          style={{ textDecoration: "underline" }}
          href={data.src.large}
        >
          按此
        </a>
      </p>
    </div>
  );
};

export default Picture;
