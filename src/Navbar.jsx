import { Link, useNavigate } from 'react-router-dom';
import './styles/Navbar.css';
import { useCart } from './Cart/Cart';
import logo from './Logo.png'
import { useState } from 'react';

const Navbar = () => {
      const {cartItems} = useCart();
    const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
   const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch('');
    }
  }; 
  return (
    <>
   {/* HEADER */}
   <div className='nav-bar'>
      <header className="bg-white shadow-md">
        <div className="main-container">
            <div className="logo-container">
                    <Link to="/">
                                  <img className="logo-image" src={logo} alt="PartyOne Logo" />
                    </Link>
            </div>
           <form className="search-bar flex" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Search by event, birthday, party..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button type="submit" className="search-button">
                <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/search.svg" alt="Search Icon" width="20" height="20" />
              </button>
            </form>
{/* =============   Cart   ============= */}

             <Link to="/cart">
             <button className="cart-button flex items-center gap-1">
                <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/shopping-cart.svg" alt="Cart Icon" width="20" height="20" />
                <span className="cart-count">{cartItems.length}</span>
              </button>
              </Link> 

             <button className="login-button" onClick={() => setShowForm(true)}> Login</button>
               {/* Overlay Form */}
                  {showForm && (
                  <div className="overlay">
                    <div className="form-container">
                    <h2>Login </h2>
                    <div className="form-grid">
                    <input type="text" placeholder="Enter your name" />
                    <div className="phone-input"><span>+91</span>
                    <input type="tel" placeholder="10 digit mobile no" />
                  </div>
                  <input type="text"placeholder="Enter your gmail"/>
                  <input type="time" />
                </div>
                <div className="buttons">
                <button className="submit-button">Submit</button>
                <button className="cancel-button" onClick={() => setShowForm(false)}>Cancel </button>
              </div>
           </div>
        </div>
      )}
              <div className="location-button flex items-center gap-1">
                <img src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/map-pin.svg" alt="Location Icon" width="20" height="20" />
                <select >
                  <option value="hyderabad">Hyderabad</option>
                  <option value="hindupur">Hindupur</option>
                  <option value="anantapur">Anantapur</option>
                  <option value="mumbai">Nellore</option>
                  <option value="bengalore">Bengaluru</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
           
        </div>
      </header>

      {/* NAVIGATION */}
      <div className="nav">
        <div className="bg-red-600">
          <div className="container">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/birthday" className="nav-link">Birthday</Link></li>
              <li className="nav-item"><Link to="/decorations" className="nav-link">Decorations</Link></li>
              <li className="nav-item"><Link to="/candlelight-dinners" className="nav-link">Candlelight Dinners</Link></li>
              <li className="nav-item"><Link to="/Prvt-theater-celebration" className="nav-link">Private Theater Celebration</Link></li>
              <li className="nav-item"><Link to ="/festiv-decor" className="nav-link">Festival Decorations</Link></li>
              <li className="nav-item"><Link to="/corporate-planner" className="nav-link">Corporate Planner</Link></li>
              <li className="nav-item"><Link to="/occasions" className="nav-link">Occasions</Link></li>
              <li className="nav-item"><Link to="/recent-bookings" className="nav-link">Recent Bookings</Link></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
