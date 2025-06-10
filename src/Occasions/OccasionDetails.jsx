import React, { useState } from "react";
import SubCardDetail from "./SubCardDetail";
import "../styles/Occasions.css";

const OccasionDetails = ({ occasion, onBack }) => {
  const [selectedSubCard, setSelectedSubCard] = useState(null);

  if (selectedSubCard) {
    return (
      <SubCardDetail
        card={selectedSubCard}
        onBack={() => setSelectedSubCard(null)}
      />
    );
  }

  return (
    <div className="occasions-details-container">
      <button className="occasion-btn" onClick={onBack} style={{ marginTop: 24 }}>
        ← Back
      </button>
      <h1 className="occasions-title">{occasion.title} Packages</h1>
      <div className="occasions-grid">
        {occasion.details.map((detail, idx) => (
          <div
            className="occasion-card"
            key={idx}
            onClick={() => setSelectedSubCard(detail)}
            style={{ cursor: "pointer" }}
          >
            <img src={detail.image} alt={detail.title} className="occasion-image" />
            <div className="occasion-content">
              <h2 className="occasion-card-title">{detail.title}</h2>
              <div className="occasion-description">
                <span className="price">₹ <b>{detail.price}</b></span>
                {detail.originalPrice && (
                  <span className="original-price"> ₹{detail.originalPrice}</span>
                )}
              </div>
              <button
                className="occasion-btn"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedSubCard(detail);
                }}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccasionDetails;
