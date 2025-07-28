document.getElementById("submit-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const org = document.getElementById("org-name").value.trim();
  const desc = document.getElementById("description").value.trim();
  const response = document.getElementById("form-response");

  if (org && desc) {
    response.style.color = "green";
    response.textContent = "✅ Submitted! Thank you for contributing to the Network.";
    this.reset();
  } else {
    response.style.color = "red";
    response.textContent = "Please fill out the required fields.";
  }
});