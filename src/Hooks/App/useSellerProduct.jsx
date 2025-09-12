import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const useSellerProducts = (sellerId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sellerRef = doc(db, "seller", sellerId);
        const sellerSnap = await getDoc(sellerRef);

        if (!sellerSnap.exists()) {
          console.log("Seller not found");
          setLoading(false);
          return;
        }

        const { categories } = sellerSnap.data();
        let allProducts = [];

        for (const category of categories) {
          const catRef = collection(db, "seller", sellerId, category);
          const catSnap = await getDocs(catRef);
          catSnap.forEach((doc) => {
            allProducts.push({ id: doc.id, ...doc.data(), category });
          });
        }

        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (sellerId) fetchProducts();
  }, [sellerId]);

  return { products, loading };
};

export default useSellerProducts;
