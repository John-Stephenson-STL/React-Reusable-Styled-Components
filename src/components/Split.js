import React from "react";
import computer from "../computer.png";

export default function Split() {
  return (
    <div className="split">
      <div>
        <h1 class="split-title">Cool, Catchy Slogan</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, fugit
          provident. Fugit, distinctio dolor nesciunt natus quidem laborum
          beatae ratione accusantium hic illo quas id numquam possimus,
          similique odit alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, fugit
          provident. Fugit, distinctio dolor nesciunt natus quidem laborum
          beatae ratione accusantium hic illo quas id numquam possimus,
          similique odit alias.
        </p>
      </div>
      <div>
        <img src={computer} alt="" />
      </div>
    </div>
  );
}