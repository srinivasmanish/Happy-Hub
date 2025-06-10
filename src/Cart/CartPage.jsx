import { useCart } from "./Cart";
import "../styles/CartPage.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-qty">Qty: {item.quantity}</div>
                <div className="cart-item-qty">Price: ₹{item.price}</div>
              </div>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(item.title)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <div className="cart-total">
              <span>Total Amount :</span>
              <span className="cart-total-amount">₹{totalPrice}</span>
            </div>
            <button
              className="cart-checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
