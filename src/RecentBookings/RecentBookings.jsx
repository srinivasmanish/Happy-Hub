
import {useState} from "react";
import { recentBookings } from "./recentBookingsData";
import SubCardDetail from "../Occasions/SubCardDetail";
import "../styles/RecentBookings.css";

const RecentBookings = () => {
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
    <div className="recent-bookings-container">
      <h1 className="recent-bookings-title">Recent Bookings and Purchases</h1>
      <div className="recent-bookings-grid">
        {recentBookings.map((booking, idx) => (
          <div
            className="recent-booking-card"
            key={idx}
            onClick={() => setSelectedBooking(booking)}
            style={{ cursor: "pointer" }}
          >
            <img src={booking.image} alt={booking.title} className="recent-booking-image" />
            <div className="recent-booking-content">
              <div className="recent-booking-title">{booking.title}</div>
              <div className="recent-booking-meta">
                <span className="recent-booking-date">📅 {booking.date}</span>
                <span className="recent-booking-location">📍 {booking.location}</span>
              </div>

              <div>
                {booking.originalPrice && (
                  <span className="original-price"> ₹{booking.originalPrice}</span>
                )}
                 <span className="price">₹ <b>{booking.price}</b></span>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;