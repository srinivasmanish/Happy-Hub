import  { useState } from "react";
import "./styles/checkout.css";

const CheckoutPage = () => {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      {submitted ? (
        <div className="checkout-success">
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            alt="Success"
            className="success-icon"
          />
          <h3>Thank you for your order!</h3>
          <p>Your booking has been received. We’ll contact you soon.</p>
        </div>
      ) : (
        // <form className="checkout-form" onSubmit={handleSubmit}>
        //   <div className="form-group">
        //     <label>Name</label>
        //     <input required type="text" placeholder="Enter your name" />
        //   </div>
        //   <div className="form-group">
        //     <label>Mobile Number</label>
        //     <input required type="tel" pattern="[0-9]{10}" placeholder="Enter 10 digit mobile number" />
        //   </div>
        //   <div className="form-group">
        //     <label>Address</label>
        //     <textarea required placeholder="Enter your address"></textarea>
        //   </div>
        //   <div className="form-group">
        //     <label>Payment Method</label>
        //     <select required>
        //       <option value="">Select</option>
        //       <option value="cod">Cash on Delivery</option>
        //       </select>
        //   </div>
        //   <button type="submit" className="checkout-submit-btn">
        //     Place Order
        //   </button>
        // </form>
        <form className="checkout-form" onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group">
      <label>Name</label>
      <input required type="text" placeholder="Enter your name" />
    </div>
    <div className="form-group">
      <label>Mobile Number</label>
      <input required type="tel" pattern="[0-9]{10}" placeholder="Enter 10 digit mobile number" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>Address</label>
      <textarea required placeholder="Enter your address"></textarea>
    </div>
    <div className="form-group">
      <label>Payment Method</label>
      <select required id="slct">
        <option value="">Select</option>
        <option value="cod">Cash on Delivery</option>
      </select>
    </div>
  </div>
  <button type="submit" className="checkout-submit-btn">
    Place Order
  </button>
</form>

      )}
    </div>
  );
};

export default CheckoutPage;
