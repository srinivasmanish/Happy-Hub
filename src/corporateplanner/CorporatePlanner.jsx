import React, { useEffect } from 'react';
import './CorpPlan.css';
import corporatePlannerCards from '../corporateplanner/CPdata'; 
import { useCart } from '../Cart/Cart'; 

function CorporatePlanner() {
  const { addToCart } = useCart();

  useEffect(() => {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardWidth = 250 + 20;
    const visibleCards = 4;
    const totalCards = track?.children.length || 0;
    const maxIndex = Math.ceil(totalCards / visibleCards) - 1;
    let currentIndex = 0;

    const updateCarousel = () => {
      const translateX = -currentIndex * cardWidth * visibleCards;
      if (track) track.style.transform = `translateX(${translateX}px)`;
    };

    nextBtn?.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevBtn?.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const answer = btn.nextElementSibling;
        if (btn.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          btn.querySelector('.arrow').style.transform = "rotate(180deg)";
        } else {
          answer.style.maxHeight = null;
          btn.querySelector('.arrow').style.transform = "rotate(0deg)";
        }
      });
    });
  }, []);

  const renderStars = (rating) => {
    const fullStars = '⭐'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <div className="CorporatePlanner">
      <div className="banner">
        <img src="/Assets/corporate-planner-banner.jpg" alt="Corporate Event Banner" className="banner-img" />
      </div>
      <div className="caption">Your Trusted Corporate Event Planner</div>
      <section className="info-section">
        <h2 className="section-title">We Plan and Execute</h2>
        <p>
          Your perfect end-to-end corporate event planner. We handle all types of corporate events, including employee engagement activities, company anniversary celebration, product launches, office openings, award ceremonies, event photography and videography, showroom inaugurations, and photobooth setups.
        </p>
      </section>
      <section className="info-section">
        <h2 className="section-title">Our Services</h2>
        <p>
          We also specialise in organising celebrations for special occasions such as Diwali, Independence Day, etc.
        </p>
      </section>

      <div className="card-grid">
        {corporatePlannerCards.map((card, i) => (
          <div className="card" key={i}>
            <img src={`/Assets/${card.image}`} alt={card.title} />
            <p>{card.title}</p>
            <p className="price">₹{card.price}</p>
            <div className="stars">{renderStars(card.rating)}</div>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart({ ...card, quantity: 1 })}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <section className="stats-section">
        <h2>Successfully Completed 2000+ Projects</h2>
        <div className="stats-grid">
          <div className="stat-card">400+ Events</div>
          <div className="stat-card">200+ Corporate Clients</div>
          <div className="stat-card">600+ Product Launches</div>
          <div className="stat-card">800+ Exhibitions</div>
        </div>
      </section>

      <div className="carousel-container">
        <h2><span className="highlight">We Help Celebrate</span> Special Occasions</h2>
        <div className="carousel-wrapper">
          <button className="carousel-btn" id="prevBtn">&#10094;</button>
          <div className="carousel">
            <div className="carousel-track" id="carouselTrack">
              {[
                "independence-day", "republic-day", "diwali (1)", "new-year",
                "ganesh-chaturthi", "holi", "womens-day", "christmas (1)",
                "valentines-day", "halloween (1)", "exhibitions"
              ].map((event, i) => (
                <div className="carousel-card" key={i}>
                  <img src={`/Assets/${event}.webp`} alt={`Occasion ${i + 1}`} />
                  <p>{event.replace(/-/g, ' ').replace(/\(1\)/, '').replace(/(?:^|\s)\S/g, c => c.toUpperCase())}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn" id="nextBtn">&#10095;</button>
        </div>
      </div>
    </div>
  );
}

export default CorporatePlanner;
