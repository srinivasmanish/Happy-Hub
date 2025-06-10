import React from 'react';
import './FestDec.css';
import festivalDecorationsData from './FDdata.js';
import { useCart } from '../Cart/Cart'; 

function FestivalDecorations() {
  const { addToCart } = useCart();

  const renderStars = (rating) => {
    const fullStars = '⭐'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div>
      <h2 className="title">Best Festival and Pooja Decorations Online</h2>
      <div className="card-container">
        {festivalDecorationsData.map((item, idx) => (
          <div className="card" key={idx}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p className="price">₹{item.price}</p>
            <div className="stars">{renderStars(item.rating)}</div>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart({ ...item, quantity: 1 })}
            >
              Add to Cart
            </button>
          </div>
        ))}
         </div>
    </div>
  );
}

export default FestivalDecorations;
