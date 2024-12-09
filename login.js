const accounts = {
  admin: { username: "Admin", password: "1234" },
  branches: [
    { username: "HONGTAE", password: "1234" },
    { username: "RDRF6", password: "1234" }
  ]
};

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (username === accounts.admin.username && password === accounts.admin.password) {
    window.location.href = "admin.html";
  } else {
    const branchAccount = accounts.branches.find(
      (account) => account.username === username && account.password === password
    );

    if (branchAccount) {
      window.location.href = "order.html";
    } else {
      errorMessage.style.display = "block";
    }
  }
});

