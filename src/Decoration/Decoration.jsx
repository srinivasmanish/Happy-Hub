import cardsData from "./DecorData";
import '../styles/cards.css'
import SubCardDetail from "../Occasions/SubCardDetail";
import {useState} from "react";

const Decor = () => {

 const [selectedBooking, setSelectedBooking] = useState(null);


  if (selectedBooking) {
    return (
      <SubCardDetail
        card={selectedBooking}
        onBack={() => setSelectedBooking(null)} 
      />
    );
  } 


  return (
    <div className="content-grid" id="content-grid">
        
            <h3 className="decor-title">Event Decoration Services for All Your Events</h3>
        
        
      {cardsData.map((card, idx) => (
        <div 
        className="card" 
        key={idx}
        onClick={() => setSelectedBooking(card)}
        style={{cursor :"pointer"}}>
          <div className="card-image-container">
            <img src={card.image} alt={card.title} className="card-image" />
          </div>
          <div className="card-body">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.description}</p>
            <p className="card-price">Price: ₹{card.price}</p>
          </div>
          {/* <div className="rating">
            <span className="stars">★{card.rating}</span>
            <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/shopping-cart.svg" alt="Add to Cart" />
          </div> */}
        </div>
      ))}
    </div>
  );
}
export default Decor;
