import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { db } from "src/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ProductDetails from "./ProductDetails/ProductDetails";
import RelatedItemsSection from "./RelatedItemsSection/RelatedItemsSection";
import s from "./ProductDetailsPage.module.scss";

const ProductDetailsPage = () => {
  const { sellerId, productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Attempt to fetch from known categories if you're not storing full path
        const categories = [
          "Accessories",
          "Vegetables",
          "Clothing",
          "Electronics",
          "Footwear",
          "Home Appliances",
          "Books",
          "Offers"
        ];

        let found = false;

        for (const category of categories) {
          const productRef = doc(db, "seller", sellerId, category, productId);
          const snapshot = await getDoc(productRef);

          if (snapshot.exists()) {
            setProductData({ id: productId, sellerId, category, ...snapshot.data() });
            found = true;
            break;
          }
        }

        if (!found) {
          setError("Product not found.");
        }
      } catch (err) {
        console.error(err);
        setError("Error loading product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [sellerId, productId]);

  if (loading) return <p className={s.loading}>Loading product details...</p>;
  if (error) return <p className={s.error}>{error}</p>;
  if (!productData) return null;

  return (
    <>
      <Helmet>
        <title>{productData.name}</title>
        <meta name="description" content={`Explore ${productData.name}`} />
      </Helmet>

      <div className="container">
        <main className={s.detailsPage}>
          <ProductDetails productData={productData} />
          <RelatedItemsSection
            productType={productData.category}
            currentProduct={productData}
          />
        </main>
      </div>
    </>
  );
};

export default ProductDetailsPage;
