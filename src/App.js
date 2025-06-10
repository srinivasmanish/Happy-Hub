import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Birthday from './Birthday/Birthday'
import Decor from './Decoration/Decoration'
import CLD from './CLD/Candlelight'
import PT from './PrivateTheater/PrivateTheater'
import FD from './FestivDecor/FestivalDecorations'
import CP from './corporateplanner/CorporatePlanner'
import Occasions from './Occasions/Occasions'
import RecentBookings from './RecentBookings/RecentBookings'
import CartPage from './Cart/CartPage'
import { CartProvider } from './Cart/Cart';
import CheckoutPage from './checkout';
import Home from './Home/Home'
import SearchResults from './SearchResults';

function App() {
  return (
    <CartProvider>

 <Router>
      <Navbar />
      <div style={{ padding: '24px' }}>
        <Routes>
            <Route path="/search" element={<SearchResults />} />

          <Route path="/" element={<Home />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/decorations" element={<Decor />} />
          <Route path="/candlelight-dinners" element={<CLD />} />
          <Route path="/Prvt-theater-celebration" element={<PT />} />
          <Route path="/festiv-decor" element={<FD />} />
          <Route path="/corporate-planner" element={<CP />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/recent-bookings" element={<RecentBookings />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>

    </CartProvider>
   
  );
}

export default App;
