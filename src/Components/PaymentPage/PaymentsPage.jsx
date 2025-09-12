import React from 'react';
import './PaymentsPage.scss';

const PaymentsPage = () => {
  return (
    <div className="payments-page">
      <h1>Payments</h1>
      <p>Sadhana Cart offers secure payment options for a safe shopping experience:</p>
      <ul>
        <li>UPI (Google Pay, PhonePe, etc.)</li>
        <li>Credit/Debit Cards (Visa, Mastercard, RuPay)</li>
        <li>Net Banking</li>
        <li>Cash on Delivery (available in select regions)</li>
      </ul>
      <p>
        All online payments are processed using trusted payment gateways with <br /> end-to-end encryption.
      </p>
    </div>
  );
};

export default PaymentsPage;
