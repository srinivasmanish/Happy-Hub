import "../styles/SubCardDetails.css";
import { useCart } from "../Cart/Cart";

const SubCardDetail = ({ card, onBack }) => {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Main Card Detail */}
      <div className="detail-container">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="detail-content">
          <img src={card.image} alt={card.title} className="detail-image" />
          <div className="detail-info">
            <h2 className="detail-title">Book {card.title}</h2>
            <p>{card.description}</p>
            <div className="detail-pricing">
              <span className="detail-price">₹{card.price}</span>
              {card.originalPrice && (
                <span className="detail-original-price">₹{card.originalPrice}</span>
              )}
            </div>
            <div className="detail-pincode">
              <input type="text" placeholder="Enter pincode" className="pincode-input" />
            </div>
            <div className="detail-actions">
              <button className="add-cart-btn" onClick={() => addToCart(card)}>Add to Cart</button>
              {/* <button className="book-now-btn">Book Now</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Request Callback Form */}
      <div className="req" id="reqt">
        <div className="form-container">
          <h2 className="form-title">Request Callback</h2>
          <p className="form-description">
            Please fill your details, we will get back to you shortly
          </p>
          <form className="space-y-4">
            <div className="form-group">
              <label htmlFor="mobile" className="form-label">Enter 10 digit mobile no</label>
              <input type="tel" id="mobile" name="mobile" placeholder="Enter 10 digit mobile no" pattern="[0-9]{10}" required className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Enter your name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required className="form-input" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="form-group flex-1">
                <label htmlFor="partyDate" className="form-label">Party Date</label>
                <input type="date" id="partyDate" name="partyDate" className="form-input" />
              </div>
              <div className="form-group flex-1">
                <label htmlFor="partyTime" className="form-label">Party Time</label>
                <input type="time" id="partyTime" name="partyTime" className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Write a message...</label>
              <textarea id="message" name="message" placeholder="Write a message..." className="form-textarea"></textarea>
            </div>
            <div className="form-actions">
              <button type="submit" className="form-submit-button">Send request</button>
            </div>
          </form>
          <a href="#reqt" className="callback-link">
            <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/phone.svg" alt="Phone" className="phone-icon" />
            Request Callback
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubCardDetail;
