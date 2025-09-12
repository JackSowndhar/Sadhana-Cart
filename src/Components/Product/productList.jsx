import React from "react";
import useSellerProducts from "../../Hooks/App/useSellerProduct";

const ProductList = ({ sellerId }) => {
  const { products, loading } = useSellerProducts(sellerId);

  if (loading) return <p>Loading products...</p>;

  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div>
      <h2>All Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "8px",
              width: "200px",
            }}
          >
            <h4>{product.title || "No title"}</h4>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price || "N/A"}</p>
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
