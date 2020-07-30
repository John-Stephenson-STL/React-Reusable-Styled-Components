import React from "react";

export default function Pricing() {
  return (
    <>
      <h1>Pricing</h1>
      <div className="pricing">
        <div className="pricing-card">
          <h2 className="price-title">Free</h2>
          <p>
            <span className="price">$0</span>/month
          </p>{" "}
          <ul className="price-features">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button className="button">Get Started</button>
        </div>
        <div className="pricing-card">
          <h2 className="price-title">Standard</h2>
          <p>
            <span className="price">$10</span>/month
          </p>{" "}
          <ul className="price-features">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button className="button button-primary">Get Started</button>
        </div>
        <div className="pricing-card">
          <h2 className="price-title">Enterprise</h2>
          <p>
            <span className="price">$100</span>/month
          </p>
          <ul className="price-features">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button className="button">Get Started</button>
        </div>
      </div>
    </>
  );
}