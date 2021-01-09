import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  const { image, title, price, descripcion } = product;

  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Products-item-info">
        <h2>
          {title}
          <span>$ {price} </span>
        </h2>
        <p>{descripcion}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </div>
  );
};

export default Product;
