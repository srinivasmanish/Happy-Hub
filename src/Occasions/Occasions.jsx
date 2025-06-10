import { useState } from "react";
import { occasionsData } from "./OccasionsData";
import OccasionDetails from "./OccasionDetails";
import "../styles/Occasions.css";

const Occasions = () => {
  const [selectedOccasion, setSelectedOccasion] = useState(null);

  if (selectedOccasion) {
    return (
      <OccasionDetails
        occasion={selectedOccasion}
        onBack={() => setSelectedOccasion(null)}
      />
    );
  }

  return (
    <div>
      <div className="occasions-container">
      {/* <h1 className="occasions-title">Other Occasions</h1> */}
      <div className="occasions-grid">
        {occasionsData.map((occasion) => (
          <div
            className="occasion-card"
            key={occasion.title}
            onClick={() => setSelectedOccasion(occasion)}
            style={{ cursor: "pointer" }}
          >
            <img src={occasion.image} alt={occasion.title} className="occasion-image" />
            <div className="occasion-content">
              <h2 className="occasion-card-title">{occasion.title}</h2>
              <p className="occasion-description">{occasion.description}</p>
              <button
                className="occasion-btn"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedOccasion(occasion);
                }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
     <div className="last1">
        <p>Celebrations are the essence of life. Happy!Hub would like to join you in your celebrations by presenting you an unbelievable range of Party Decorations in Hyderabad, Theme decors, Party entertainers, Party planners, Eateries like Popcorn stall, Ice Gola, Party Essentials and many more. The 10 most popular PartyOne birthday party theme decorations are Disney Mickey Mouse, Chhota Bheem, Disney Cars & Spiderman for Boys, Disney Minnie Mouse, Barbie, Crown & Disney Princess for Girls and The Jungle theme & The Smiley theme for both boys and girls as neutral themes. Birthday parties have evolved leaps and bounds with Entertainment playing a pivotal role in the party planning process .The most popular party artists who are always in demand at PartyOne for your party planning are the Magicians, Tattoo artists, Caricature artists, Puppet show artists, Mascots, Balloon modelling, Game show hosts, Face Painting, Theme decorators, Party organisers & Event Managers. PartyOne has its signature ready-to-go PartyOne combo birthday packages for all age groups. PartyOne is truly an online site that has something for every celebration.</p>
 
      </div>
      <div className="card1-container">
        <div className="card1">
          <div className="icon1">🏅</div>
          <div className="title1">Served<br></br>3 Lakh</div>
          <div className="subtitle1">Happy Customers<br></br>Since 2016</div>
        </div>
        <div className="card1">
          <div className="google-logo1">
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </div>
          <div className="rating1">
            <span className="star1">★</span>
            4.6/5
          </div>
          <div className="subtitle1">1336+ reviews on Google</div>
        </div>
      </div>
    </div>
    
  );
};

export default Occasions;

