// Components/Terms/TermsPage.jsx

import React from "react";
import "./TermsPage.scss";

const terms = `
Terms of Use – SadhanaCart.com
Welcome to www.sadhanacart.com (“Platform”). This website is owned and operated by Sadhana Agro Tech, a proprietorship firm registered under Indian law, having its principal place of business at Flat No.3, Sri Mukunda Sri Ganesh Residency, Nijalingappa Nagar, Raichur, Karnataka – 584101.
By accessing, browsing, or using this Platform, you agree to comply with and be bound by the following terms and conditions of use ("Terms"). If you do not agree with any part of these Terms, please do not use our Platform.

1. Eligibility
Use of the Platform is available only to individuals who can form a legally binding contract under the Indian Contract Act, 1872. Persons who are “incompetent to contract” including minors (under the age of 18) are not eligible to use the Platform.

2. Account and Registration Obligations
If you create an account on our Platform, you are responsible for maintaining the confidentiality of your login details and all activities that occur under your account. You agree to provide accurate and complete information during the registration process and to keep it updated.
We reserve the right to suspend or terminate your account if any information provided is false, misleading, or violates these Terms.

3. Use of the Platform
You agree to use the Platform only for lawful purposes. You must not use the Platform to:
• Violate any applicable local, state, national or international law
• Infringe the rights of others, including intellectual property and privacy rights
• Distribute viruses or malicious code
• Engage in fraudulent activities or impersonate others
We reserve the right to take legal action against users who misuse the Platform or violate these Terms.

4. Product Information and Pricing
We strive to provide accurate descriptions and prices of products listed on the Platform. However, we do not guarantee that the product descriptions, images, or other content are always accurate, complete, or error-free.
In the event a product is listed at an incorrect price, we reserve the right to cancel the order and refund the amount, even if the order has been confirmed.

5. Payment and Order Fulfillment
All prices are in Indian Rupees (INR) and inclusive of applicable taxes unless stated otherwise. Orders will be confirmed only after successful payment. We use secure third-party payment gateways to process transactions and do not store any sensitive payment information like credit/debit card numbers.
Order delivery times are estimates and may vary due to unforeseen circumstances. We are not liable for delays caused by logistics or courier partners.

6. Cancellations, Returns & Refunds
Please refer to our Return & Refund Policy (to be linked or provided) for details regarding product cancellations, returns, and refunds.

7. Intellectual Property Rights
All content on the Platform, including logos, graphics, images, audio clips, text, and software, is the property of Sadhana Agro Tech or its content suppliers and is protected by applicable copyright and intellectual property laws. You may not reproduce, duplicate, or exploit any portion of the Platform without our written permission.

8. User Content and Reviews
If you submit reviews, feedback, or other content, you grant us the right to use, reproduce, and publish such content for promotional or marketing purposes. You agree that the content you submit does not violate any third-party rights and is not illegal, obscene, or offensive.

9. Limitation of Liability
To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Platform or our products/services.

10. Privacy
Your use of the Platform is also governed by our Privacy Policy. Please read it to understand how we collect and use your personal information.

11. Termination
We reserve the right to suspend or terminate your access to the Platform at any time without prior notice, if we find you violating these Terms or engaging in unlawful activity.

12. Changes to Terms
We may modify these Terms from time to time. The updated version will be posted on this page with the “Last Updated” date. Your continued use of the Platform after any changes constitutes your acceptance of the updated Terms.

13. Governing Law and Jurisdiction
These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts of Raichur, Karnataka.

14. Contact Us
If you have any questions regarding these Terms, please contact:
Name: B Nirmala
Designation: Proprietor
Email: appasharan@gmail.com
Address: Flat No.3, Sri Mukunda Sri Ganesh Residency, Nijalingappa Nagar, Raichur – 584101, Karnataka
`;

const TermsPage = () => {
  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.trim() === "") return null;

      // Section titles (e.g., 1. Eligibility)
      if (/^\d+\./.test(line.trim())) {
        return <h2 key={index}>{line.trim()}</h2>;
      }

      // Bullet points
      if (line.trim().startsWith("•")) {
        return (
          <p key={index} style={{ paddingLeft: "1.5rem", textIndent: "-1rem" }}>
            {line.trim()}
          </p>
        );
      }

      // Capitalized headings
      if (line.trim() === line.trim().toUpperCase()) {
        return <h1 key={index}>{line.trim()}</h1>;
      }

      return <p key={index}>{line.trim()}</p>;
    });
  };

  return (
    <div className="terms-page">
      <h1>Terms & Conditions</h1>
      {formatText(terms)}
    </div>
  );
};

export default TermsPage;
