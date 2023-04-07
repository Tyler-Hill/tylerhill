import React, { useState } from "react";
import styled from "styled-components";
import { GiCandleFlame } from "react-icons/gi";

const Header = () => {
  const [bar, setBar] = useState(false);
  return (
    <section>
      <div className="flex-row nav flex-end">
        <span className="green">
          <GiCandleFlame />
        </span>
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#about">Services</a>
        </span>
        <span>
          <a href="#projectlist">Projects</a>
        </span>
        <span>
          <a href="#contact">Testimonials</a>
        </span>
        <span>
          <a href="#resume">Portfolio</a>
        </span>
        <div onClick={() => setBar(!bar)} className="bars">
          <div className="bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
