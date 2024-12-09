const orderList = document.getElementById("order-list");
const summary = document.getElementById("summary");

document.getElementById("add-button").addEventListener("click", () => {
  const productName = prompt("กรอกชื่อสินค้า:");
  const quantity = prompt("กรอกจำนวน:");

  if (productName && quantity) {
    const orderItem = document.createElement("li");
    orderItem.textContent = `${productName} [ ${quantity} ]`;
    orderList.appendChild(orderItem);
  }
});

document.getElementById("confirm-button").addEventListener("click", () => {
  const items = [...orderList.children].map((item) => item.textContent).join("\n");
  summary.value = `รายการสินค้า:\n${items}`;
});

