import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from '../Home/Home';
import Payment from './Payment/Payment';
import Privacy from './Privacy/Privacy';
import TermsOfUse from './TermOfUse/TermsOfUse';
import Faqs from './Faqs/Faqs';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
