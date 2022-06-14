import React from "react";

const product = ({
  id,
  image,
  title,
  description,
  price,
  quantity,
  setQuantity,
  total,
  setTotal,
  deleteProduct,
}) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <div className="product-title">{title}</div>
        <p className="product-description">{description}</p>
      </div>
      <div className="product-price">{price}</div>
      <div className="product-quantity">
        <input
          min="0"
          type="number"
          value={quantity}
          onChange={(e) => {
            if (!e.target.value) {
              let newTotal = Math.round((total - price * quantity) * 10) / 10;
              setTotal(newTotal);
              setQuantity(e.target.value, id);
            } else if (e.target.value > quantity) {
              let newTotal =
                Math.round((total + price * (e.target.value - quantity)) * 10) /
                10;
              setTotal(newTotal);
              setQuantity(e.target.value, id);
            } else {
              setQuantity(e.target.value, id);
              let newTotal =
                Math.round((total - price * (quantity - e.target.value)) * 10) /
                10;
              setTotal(newTotal);
            }
          }}
        />
      </div>
      <div className="product-removal">
        <button
          className="remove-product"
          onClick={() => {
            deleteProduct(id);
          }}
        >
          Remove
        </button>
      </div>
      <div className="product-line-price">{price}</div>
    </div>
  );
};

export default product;
