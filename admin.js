const productList = document.getElementById("product-list");
document.getElementById("product-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const category = document.getElementById("category").value.trim();
  const brand = document.getElementById("brand").value.trim();
  const productName = document.getElementById("product-name").value.trim();
  const boxQuantity = document.getElementById("box-quantity").value.trim();

  const productItem = document.createElement("li");
  productItem.textContent = `${category} - ${brand} - ${productName} (ลังเต็ม: ${boxQuantity})`;
  productList.appendChild(productItem);

  event.target.reset();
});

