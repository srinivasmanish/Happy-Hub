import '../styles/cards.css';
import {useState} from "react";
import {birthData} from './BirthData'
import SubCardDetail from "../Occasions/SubCardDetail";

const Birthday = () =>{

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
                    <h3 className="decor-title">Kids Party Services - Birthday Party Organisers</h3>
                    {birthData.map((bData, idx) =>
                    <div
                     className="card"
                     key={idx}
                     onClick={() => setSelectedBooking(bData)}
                     style={{cursor :"pointer"}}
                    >
                    <img src={bData.image} alt={bData.title} class="card-image"/>
                     <div className="card-body">
                            <h3 className="card-title">{bData.title}</h3>
                            <p className="card-text">{bData.description}</p>
                            <p className="card-price">Price : ₹{bData.price}</p>
                        </div>

                         {/* <div className="rating">
                            <span className="stars">★{bData.rating}</span>
                            <img onClick={() => addToCart(card)} src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/shopping-cart.svg" alt="Add to Cart"></img>
                        </div> */}
                    </div>

                    )}
                            
                    </div>
                  
    );
};
export default Birthday;

