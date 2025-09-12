import { useTranslation } from "react-i18next";
import { translateProduct } from "../../../Cart/CartProducts/CartProduct";
import RateStars from "../../../Shared/MidComponents/RateStars/RateStars";
import s from "./ProductFirstInfos.module.scss";

export const ProductQuantity = ({ productData }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <ProductFirstInfos productData={productData} setQuantity={setQuantity} />
      <AnotherComponent quantity={quantity} />
    </>
  );
};

const ProductFirstInfos = ({ productData }) => {
  const { t } = useTranslation();


  const name = productData?.name || "Unknown Product";
  const price = productData?.productDetails?.Price || "N/A";
  const offerPrice = productData?.productDetails?.["Offer Price"] || null;
  const description = productData?.description || "No description";
  const rate = productData?.rate || 4;
  const votes = productData?.votes || 10;
  const quantity = productData?.productDetails?.Quantity || 0;

  const translatedProductName = translateProduct({
    productName: name,
    translateMethod: t,
    translateKey: "name",
    uppercase: true,
  });

  const translatedDescription = translateProduct({
    productName: name,
    translateMethod: t,
    translateKey: "description",
  });
  function stock () {
    if (quantity > 0) {
      return t("InStock");
    }else {
      return t("OutOfStock");
    }
  }

  return (
    <section className={s.firstInfos}>
      <h2 className={s.productName}>{ name}</h2>

      <div className={s.rateAndReviews}>
        <RateStars rate={rate} />
        <span className={s.reviews}>{t("detailsPage.reviews", { votes })}</span>

        <div className={s.verticalLine} />

        <span className={s.greenText}>{stock()}</span>
      </div>

      <span className={s.price}>
        ₹{offerPrice ? <><del>{price}</del> <strong>{offerPrice}</strong></> : price}
      </span>

      <p className={s.description}>{description}</p>
    </section>
  );
};

export default ProductFirstInfos;
