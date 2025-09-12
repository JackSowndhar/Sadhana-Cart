import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore();

const fetchAllProductsForSeller = async (sellerId) => {
    const categoryNames = [
        'Clothing',
        'Electronics',
        'Footwear',
        'Accessories',
        'Home Appliances',
        'Books',
        'Vegetables',
		'offers',
		'Others',]; 
  let allProducts = [];

  for (const category of categoryNames) {
    const subColRef = collection(db, "seller", sellerId, category);
    const snapshot = await getDocs(subColRef);
    snapshot.forEach((doc) => {
      allProducts.push({ id: doc.id, ...doc.data(), category });
    });
  }

  return allProducts;
};