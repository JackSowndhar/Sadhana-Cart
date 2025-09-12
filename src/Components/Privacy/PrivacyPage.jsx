// PrivacyPage.jsx

import React from "react";
import "./PrivacyPage.scss";

const privacyPolicy = `
SADHANA CART
Disclaimer: In case of any discrepancy or difference, the English version of this Privacy Policy shall prevail over any translation.
Sadhana Agro Tech ("Sadhana Cart", "we", "us", "our") values the trust you place in us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information through our website www.sadhanacart.com, mobile site, and any other related services (collectively referred to as the “Platform”).
By visiting or using our Platform, you agree to be bound by the terms and conditions of this Privacy Policy and our Terms of Use. If you do not agree, please do not use or access our Platform.

1. Collection of Your Information
We collect your personal information including but not limited to:
• Name, address, email ID, phone number, and payment details
• Order history, browsing behavior, and preferences
• Communication via emails, calls, or feedback on our Platform or social media
• UPI or GST details if you are a registered business
We may collect data directly or via cookies, forms, or third-party integrations.

2. Use of Information
Your data helps us:
• Process and fulfill orders
• Improve product and service offerings
• Customize user experience
• Send promotional offers, updates, and transactional emails
• Comply with legal and regulatory requirements
We may use your information for internal analysis, marketing, and to safeguard against fraud or abuse.

3. Sharing of Information
We may share your information:
• With delivery and logistics partners for order fulfillment
• With payment service providers and banks
• As required by law, legal processes, or regulatory authorities
• With analytics or advertising service providers (with consent)
• With our group companies or business partners in relation to the services we offer
We do not sell your personal information to third parties for their own marketing use.

4. Cookies
We use cookies and similar tools for website functionality, personalization, and analytics. You can disable cookies via your browser settings, but this may affect Platform features.

5. Security of Your Data
We use reasonable administrative, physical, and technical safeguards to protect your data. However, internet transmission is not completely secure, and we cannot guarantee full security.
You are responsible for maintaining the confidentiality of your account and password.

6. Children’s Privacy
Use of our Platform is only allowed for individuals above the age of 18. We do not knowingly collect information from children under 18.

7. Your Rights
You have the right to:
• Access and correct your personal data via your account settings
• Withdraw your consent by contacting us (may affect service access)
• Opt out of promotional communications through your profile settings

8. Data Retention
We retain personal information as long as required for business or legal purposes. We may also retain anonymized data for research and analysis.

9. Third-party Links
Our Platform may contain links to third-party websites or apps. We are not responsible for their privacy practices and recommend reading their privacy policies before sharing information.

10. Grievance Redressal
If you have any complaints or concerns regarding your privacy or data, please contact our Grievance Officer:
Name: B NIRMALA
Designation: Proprietor, Sadhana Agro Tech
Email: appasharan@gmail.com
Address: FLAT NO.3, M.NO.1-11-400, NIJALINGAPPA NAGAR, RAICHUR, Karnataka, 584101

11. Changes to This Policy
We may update this Privacy Policy from time to time. The latest version will always be available on our Platform, and significant changes will be communicated to users as required by law.
`;

const PrivacyPage = () => {
  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      // Headings
      if (
        line.trim().match(/^\d+\.\s/) || // numbered headings
        line.trim().toUpperCase() === line.trim() // all uppercase titles
      ) {
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

      // Empty lines
      if (line.trim() === "") return null;

      // Normal paragraph
      return <p key={index}>{line.trim()}</p>;
    });
  };

  return (
    <div className="privacy-page">
      <h1>Sadhana Cart</h1>
      {formatText(privacyPolicy)}
    </div>
  );
};

export default PrivacyPage;
