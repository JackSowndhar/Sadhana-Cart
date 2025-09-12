import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import PagesHistory from "../../Shared/MiniComponents/PagesHistory/PagesHistory";

const Payments = () => {
    const { t } = useTranslation();
    useScrollOnMount();

  return (
    <>  
      <Helmet>
        <title>Payment</title>
      </Helmet>

      <main className={s.PaymentsPage}>
        <div className="container">
          <PagesHistory history={["/", t("nav.payment")]} />
          <p>
            Sadhana Cart offers secure payment options for a safe shopping experience:

            - UPI (Google Pay, PhonePe, etc.)
            - Credit/Debit Cards (Visa, Mastercard, RuPay)
            - Net Banking
            - Cash on Delivery (available in select regions)

            All online payments are processed using trusted payment gateways with end-to-end encryption.
          </p>
         
        </div>

      </main>
    </>
  )
}

export default Payments;