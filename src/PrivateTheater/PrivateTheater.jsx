import React from 'react';
import './PTC.css';
import privateTheaterData from '../PrivateTheater/PTdata'; 
import { useCart } from '../Cart/Cart'; 

function PrivateTheater() {
  const { addToCart } = useCart();

  const renderStars = (rating) => {
    const fullStars = '⭐'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div>
      <h2 className="title">PrivateTheater Experiences</h2>
      <div className="card-container">
        {privateTheaterData.map((item, idx) => (
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

      <p className="description">
        Anyone passionate about cinema must visit the Ramoji Film City. It is the largest film studio, taking over a complex space of about 2000 acres. The Guinness world record holder place is situated on the city's outskirts. For an entertaining day out, I plan to visit a fascinating destination and enjoy movie moments. The film city appears like a different world. Many movies are shot on these sets, mesmerizing the audience by presenting the visuals differently. Explore the place to witness behind-the-scenes of different movies and experience the filmmaking process in detail. Visit theme parks to indulge in fun activities along with the film set. Enjoy thrilling rides and surround yourself with beautiful landscapes to experience a different world. Passengers can access the metro facilities at an affordable price to reach the film city without dealing with traffic. Metro has covered the wide city's network by eliminating traffic congestion and reducing traveling time. Reach on time to avoid missing entertainment events at the film city. The movie magic begins from the studios and inspires everyone who wants to become a part of the industry. Live shows also steal everyone's attention in the film city. Witness dance performances and stunt shows with your family. Extend your visit to Hyderabad's film city by staying in luxurious hotels and getting high-end amenities. Being a guest, you can participate in ongoing shoots to gain a glimpse of an actor's life. It is a perfect entertainment destination for thrilling cinematic experiences and a luxurious stay.
      </p>

      <div className="stats-container">
        <div className="stat-card">
          <img src="/Assets/images.png" alt="Ribbon Icon" className="stat-icon" />
          <h3>Served<br />5 Lakh</h3>
          <p>Happy Customers<br />Since 2012</p>
        </div>
        <div className="stat-card">
          <img src="/Assets/download.png" alt="Google Icon" className="google-logo" />
          <h3><span className="star">⭐</span> 4.6/5</h3>
          <p>1342+ reviews on Google</p>
        </div>
      </div>
    </div>
  );
}

export default PrivateTheater;
