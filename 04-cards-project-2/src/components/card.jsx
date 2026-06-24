import React from "react";

const Card = ({ image, title, size, price, quantity, total, active }) => {
  return (
    <div className="orderCard">

      <div className="topRow">
        <div className="imgBox">
          <img src={image} alt="" />
        </div>

        <div className="details">
          <h3>{title}</h3>
          <p className="size">Size : {size}</p>
          <h2>${price},00</h2>
        </div>

        <div className="qty">x{quantity}</div>
      </div>

      <div className="divider"></div>

      <div className="bottomRow">
        <div>
          <p className="estimate">Estimate Total</p>
          <h2>${total},00</h2>
        </div>

        <div className="actions">
          <button className={active ? "btn active" : "btn"}>
            Order Received
          </button>

          <div className="discount">
            %
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;