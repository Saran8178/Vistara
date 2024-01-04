// Payment.js
import React, { useState } from 'react';
import '../Assests/CSS/Payment.css';
import { Link } from 'react-router-dom';
import Success from './Success';
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your payment processing logic based on the selected payment method
    console.log(`Payment submitted using ${paymentMethod === 'creditCard' ? 'Credit Card' : 'Cash on Delivery'}`);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Cardholder Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Card details:
          <input type="text" name="cardNumber" placeholder="Card Number" required />
          <input type="text" name="expiry" placeholder="MM/YY" required />
          <input type="text" name="cvc" placeholder="CVC" required />
        </label>

        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="creditCard"
            checked={paymentMethod === 'creditCard'}
            onChange={handlePaymentMethodChange}
          />
          Pay with Credit Card
        </label>

        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="cashOnDelivery"
            checked={paymentMethod === 'cashOnDelivery'}
            onChange={handlePaymentMethodChange}
          />
          Cash on Delivery
        </label>
        <Link to={"/success"}>
        <button type="submit">Pay</button>
        </Link>
      </form>
    </div>
  );
};

export default Payment;
