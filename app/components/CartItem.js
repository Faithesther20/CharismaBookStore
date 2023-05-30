import React from 'react';

const CartItem = ({ item }) => {
  const { id, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
