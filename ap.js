document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const errorDiv = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (regex.test(email)) {
      errorDiv.textContent = "Email валиден";
      errorDiv.style.color = "green";
    } else {
      errorDiv.textContent = "Неверный email. Введите адрес вида: example@gmail.com";
      errorDiv.style.color = "red";
    }
  });
});
