import React, { useState, useEffect } from 'react';
import '../styles/App.css';
const Home = () => {
  const images = [
    "https://www.partyone.in/images/banner-images/web/partyone_room.webp",
    "https://www.partyone.in/images/banner-images/partyone_anniversery.webp",
    "https://www.partyone.in/images/banner-images/partyone_welcome_baby.webp",
    "https://www.partyone.in/images/banner-images/partyone_house_warming.webp",
    "https://www.partyone.in/images/banner-images/web/partyone_barbie.webp",
    "https://www.partyone.in/images/banner-images/web/partyone_birthday.webp",
    "https://www.partyone.in/images/banner-images/web/partyone_funnight.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
     
      {/* CAROUSEL */}
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div className="carousel-slide" key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          <button onClick={prevSlide}>❮</button>
          <button onClick={nextSlide}>❯</button>
        </div>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      <h1 className="section-title">EXPLORE OUR CATEGORIES</h1>
      <div className="categories-container">
        <div className="category-card">
          <img src="https://www.partyone.in/images/landing-categories/birthday.avif" alt="Birthday Services" />
          <h3>Birthday Services</h3>
          <p>Explore our birthday packages</p>
        </div>
        <div className="category-card">
          <img src="https://www.partyone.in/images/landing-categories/all-kids-activities.avif" alt="All Kids Activities" />
          <h3>All Kids Activities</h3>
          <p>Fun activities for kids</p>
        </div>
        <div className="category-card">
          <img src="https://www.partyone.in/images/landing-categories/theme-decor.avif" alt="Theme Decor" />
          <h3>Birthday theme decor</h3>
          <p>Fun activities for kids</p>
        </div>
        <div className="category-card">
          <img src="https://www.partyone.in/images/landing-categories/decorations.avif" alt="Decorations" />
          <h3>Decorations</h3>
          <p>Fun activities for kids</p>
        </div>
      </div>
      <h1 className="section-title">BIRTHDAY DECORATIONS</h1>
      <div className="categories-container1">
        <div className="category-card1">
          <img src="https://www.partyone.in/suploads/2024/Mar/19/38702/1710845807spiderman3_home.webp" alt="Spiderman Theme" />
          <h3>Simple Spiderman Theme Decoration</h3>
          <p>₹1699</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/suploads/2024/Apr/16/38800/1713272436yellow_ceiling1%20(1)_home.webp" alt="Balloon Surprise" />
          <h3>Balloon Surprise</h3>
          <p>₹1699</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/suploads/2024/Jun/25/38841/1719298062IMG_5570_home.webp" alt="Mickey Mouse" />
          <h3>Mickey Mouse Birthday theme decoration</h3>
          <p>₹1699</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/suploads/2024/Jun/25/38851/1719310449IMG_E7162_home.webp" alt="Love Wall Balloon" />
          <h3>Red and White Love wall balloon Decoration</h3>
          <p>₹1699</p>
        </div>

      </div>
      <h1 className="section-title">Theme Decoration</h1>
      <div className="categories-container1">
        <div className="category-card1">
          <img src="https://www.partyone.in/suploads/2025/Mar/27/39428/1743067578image-3-1-1_home.webp" alt="Spiderman Theme" />
          <h3>Minion Theme Arch Backdro</h3>
          <p>₹6999</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/suploads/2025/Mar/24/39426/1742799312WhatsApp-Image-2024-09-13-at-117a-1_home.webp" alt="Balloon Surprise" />
          <h3>Golden Chrome Shiny Ring</h3>
          <p>₹8499</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/suploads/2025/Mar/24/39425/1742796505IMG_7465-1_home.webp" alt="Mickey Mouse" />
          <h3>Welcome Baby Butterfly theme</h3>
          <p>₹26999</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/suploads/2025/Mar/17/39418/1742192223image-79_home.webp" alt="Love Wall Balloon" />
          <h3>1st Birthday Baloon Ring</h3>
          <p>₹16999</p>
        </div>

      </div>
      <h1 className="section-title">Entertainment</h1>
      <div className="categories-container1">
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/magicians.webp" alt="Spiderman Theme" />
          <h3>Magicians in Hyderabad</h3>
          <p>₹2999</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/mascot.webp" alt="Balloon Surprise" />
          <h3>Mascot in Hyderabad</h3>
          <p>₹8699</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/puppet_show.webp" alt="Mickey Mouse" />
          <h3>Puppet Show in Hyderabad</h3>
          <p>₹3999</p>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/game_host.webp" alt="Love Wall Balloon" />
          <h3>Game Host in Hyderabad</h3>
          <p>₹2999</p>
        </div>
      </div>
      <h1 className="section-title">Activities</h1>
      <div className="categories-container1">
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/balloon_sculptor.webp" alt="Spiderman Theme" />
          <h3>Baloon Sculptor in Hyderabad</h3>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/train_ride.webp" alt="Balloon Surprise" />
          <h3>Train Ride in Hyderabad</h3>

        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/bouncing_.webp" alt="Mickey Mouse" />
          <h3>Trampoline in Hydderabad</h3>

        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/baloon_shooting.webp" alt="Love Wall Balloon" />
          <h3>Baloon Shooting in Hyedrabad</h3>

        </div>
      </div>
      <h1 className="section-title">Artist</h1>
      <div className="categories-container1">
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/tattoo.webp" alt="Spiderman Theme" />
          <h3>Tattoo in Hyderabad</h3>
        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/caricature.webp" alt="Balloon Surprise" />
          <h3>Caricature in Hyderabad</h3>

        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/nail_art.webp" alt="Mickey Mouse" />
          <h3>Nail Art in Hyderabad</h3>

        </div>
        <div className="category-card1">
          <img src="https://www.partyone.in/img/category_landing/artists/mehndi_art.webp" alt="Love Wall Balloon" />
          <h3>Baloon Shooting in Hyedrabad</h3>
        </div>
      </div>
      <div className="req" id='reqt'>
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
      <div className="last1">
        <p>Celebrations are the essence of life. Happy!Hub would like to join you in your celebrations by presenting you an unbelievable range of Party Decorations in Hyderabad, Theme decors, Party entertainers, Party planners, Eateries like Popcorn stall, Ice Gola, Party Essentials and many more. The 10 most popular PartyOne birthday party theme decorations are Disney Mickey Mouse, Chhota Bheem, Disney Cars & Spiderman for Boys, Disney Minnie Mouse, Barbie, Crown & Disney Princess for Girls and The Jungle theme & The Smiley theme for both boys and girls as neutral themes. Birthday parties have evolved leaps and bounds with Entertainment playing a pivotal role in the party planning process .The most popular party artists who are always in demand at PartyOne for your party planning are the Magicians, Tattoo artists, Caricature artists, Puppet show artists, Mascots, Balloon modelling, Game show hosts, Face Painting, Theme decorators, Party organisers & Event Managers. PartyOne has its signature ready-to-go PartyOne combo birthday packages for all age groups. PartyOne is truly an online site that has something for every celebration.</p>
        <p>Charminar is an enduring gem of Hyderabad that attracts everyone's attention. Built in the 16th century, this monument represents the town's deep-rooted history. The old bazaar has become a hustling hub, surrounded by authentic markets and delicious food. Climb to the top floor of the monument to enjoy a panoramic view of the city. You can buy traditional articles like jewelry or clothes at the markets near Charminar. You cannot afford to miss this iconic monument. Keeping the city's hustle aside, move to the peaceful corners of Hyderabad. Tourists can connect with nature by visiting natural and green places. The town's shimmering gem, Hussain Sagar Lake, with a Buddha statue, is an attractive tourist place. Go on a peaceful journey and enjoy the breathtaking views. Another peaceful place you can crave is the KBR National Park, a lush green oasis home to diverse fauna and flora. Go for a walk in the urban woods and escape your busy routine. Bird watching is the most comforting thing you can do here. Sit near the lake and watch stars in the sky for a peaceful vibe. Add destinations like Durgam Cheruvu, Osman Sagar, etc., to your bucket list to witness the natural beauty and beautiful lakes. Due to the peaceful ambiance and activities like cycling, it is a favorite place for family outings. For a unique and unforgettable experience, visiting parks and lakes is the best idea. Nature is the best escape from your bustling life.</p>
        <p>Anyone passionate about cinema must visit the Ramoji Film City. It is the largest film studio, taking over a complex space of about 2000 acres. The Guinness world record holder place is situated on the city's outskirts. For an entertaining day out, I plan to visit a fascinating destination and enjoy movie moments. The film city appears like a different world. Many movies are shot on these sets, mesmerizing the audience by presenting the visuals differently. Explore the place to witness behind-the-scenes of different movies and experience the filmmaking process in detail. Visit theme parks to indulge in fun activities along with the film set. Enjoy thrilling rides and surround yourself with beautiful landscapes to experience a different world. Passengers can access the metro facilities at an affordable price to reach the film city without dealing with traffic. Metro has covered the wide city's network by eliminating traffic congestion and reducing traveling time. Reach on time to avoid missing entertainment events at the film city. The movie magic begins from the studios and inspires everyone who wants to become a part of the industry. Live shows also steal everyone's attention in the film city. Witness dance performances and stunt shows with your family. Extend your visit to Hyderabad's film city by staying in luxurious hotels and getting high-end amenities. Being a guest, you can participate in ongoing shoots to gain a glimpse of an actor's life. It is a perfect entertainment destination for thrilling cinematic experiences and a luxurious stay.</p>
        <p>Food enthusiasts love to visit Hyderabad to try special food items. The historical influence impacts the flavor of Hyderabadi cuisine and enhances its taste. No one exists who does not know about the delicious rice recipe biryani, which is served with delightful meat and aromatic spices. If you are travelling to this town, you cannot miss this mouth-watering food item. In every bite, you will experience the layered flavors and amazing taste. Start trying Hyderabadi cuisine with biryani and proceed to other amazing delights like Haleem. It is a special treat that you can enjoy during Ramadan. The meat stew made with lentils is nutritious enough to satisfy your taste buds. Another thing that cannot be missed is the kebabs. The spicy grilled meat melts in the mouth and can be enjoyed with bread as an appetizer. To satisfy your sweet cravings, try desserts like Qubani. The pudding is prepared by soaking the bread in sweet milk and, later, topped with dried apricots. Every sweet dish represents Hyderabad's unique flavor, which is unforgettable for your taste buds. Eating street food in Hyderabad is a great way to explore the city's authentic atmosphere. Depending on your budget, you can continue your culinary journey to witness the city's cultural diversity and richness. Tourists can explore the city by traveling through metros. All the metro stations are constructed with modern aesthetics, representing the cultural heritage of Hyderabad. It is easy to reach anywhere by metro, bus, auto, or cab. Reach your destination and try different food items you like.</p>
        <p>The heritage city is a place where multiple cultures and festivals are celebrated. Every festival has a distinct charm and level of excitement among the people. During the light festival, Diwali, each house is illuminated with candles. The sky is brightened with fireworks, and the fragrance of sweets spreads in the air. Families meet and give gifts to show their love and affection. Another festival, Eid, is celebrated with great pomp and shows. The Muslim community comes together to celebrate Eid with their families and friends. The Laad Bazaar is crowded with people shopping for sweets and gifts for their loved ones. Everyone loves to have Haleem during Ramadan in the community feast. They talked about the colorful festival of Hyderabad, Bonalu, which is dedicated to Ma Kali. During the grand celebration, the sounds of drums resonate, and everyone has eyes on women dancing and balancing pots on their heads. The festival is truly devoted to the goddess, giving goosebumps to everyone witnessing the charm and festivity of the landscape. Other festivals from different cultural backgrounds are also celebrated in Hyderabad, such as Christmas, Ganesh Chaturthi, etc. Everyone is free to celebrate various festivals through their unique rituals. All these communal activities highlight the cultural diversity of the city. Festivals are a way to understand the artistic aspect of the city and the everyday life of Hyderabad residents. The celebrating spirit of different festivals and cultures makes the city unique.</p>

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
}

export default Home;

