// Components/Policies/CancellationPolicyPage.jsx

import React from "react";
import "./CancellationPolicyPage.scss";

const cancellationText = `
Cancellation Policy – SadhanaCart.com
At Sadhana Cart, we understand that sometimes orders need to be cancelled. Our cancellation policy is designed to be simple and transparent, while ensuring smooth order processing and delivery.

Customers may cancel their order before it has been dispatched. To request a cancellation, please contact our support team within 12 hours of placing the order by calling or messaging us on WhatsApp at +91 94488 10877, or by emailing us at appasharan@gmail.com. Please mention your Order ID and reason for cancellation.

Once the order has been shipped, we will not be able to process a cancellation. In such cases, you may refer to our Return & Refund Policy if the product is eligible for return.

For prepaid orders that are cancelled before shipping, the full amount will be refunded to your original payment method within 5 to 7 business days. In the case of cash-on-delivery (COD) orders, cancellation must be confirmed before dispatch to avoid shipment.

We reserve the right to cancel orders in cases where the item is out of stock, incorrectly priced, or in case of suspected fraud or misuse. In such cases, customers will be notified and refunded in full.
`;

const CancellationPolicyPage = () => {
  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.trim() === "") return null;

      if (line.trim() === line.trim().toUpperCase()) {
        return <h1 key={index}>{line.trim()}</h1>;
      }

      return <p key={index}>{line.trim()}</p>;
    });
  };

  return (
    <div className="cancellation-page">
      <h1>Cancellation Policy</h1>
      {formatText(cancellationText)}
    </div>
  );
};

export default CancellationPolicyPage;
