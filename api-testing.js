const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

function getProductDefects(product) {
  const issues = [];

  // Validate title
  if (typeof product.title !== "string" || product.title.trim() === "") {
    issues.push("Missing or empty title");
  }

  // Validate price
  if (typeof product.price !== "number" || product.price < 0) {
    issues.push("Missing or negative price");
  }

  // Validate rating
  const rate = product?.rating?.rate;
  if (typeof rate !== "number") {
    issues.push("Missing or invalid rating.rate");
  } else if (rate > 5) {
    issues.push("rating.rate exceeds 5");
  }

  return issues;
}

app.get("/check-products", async (req, res) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  if (!response || !response.data) {
    return res.status(500).json({ error: "Failed to fetch products" });
  }
  if (response.status !== 200) {
    return res
      .status(response.status)
      .json({ error: "Failed to fetch products" });
  }

  const products = response.data;
  const defects = [];

  for (const product of products) {
    const issues = getProductDefects(product);
    if (issues.length > 0) {
      defects.push({
        id: product.id,
        title: product.title || "(no title)",
        issues,
      });
    }
  }

  res.status(200).json({
    message: "Product check completed",
    totalProducts: products.length,
    defectiveProducts: defects.length,
    defects,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
