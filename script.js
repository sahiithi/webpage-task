const form = document.getElementById("checkout-form");
const totalPrice = document.getElementById("total-price");
const bundleOptions = document.querySelectorAll(".bundle-option");

function updateUI() {
    bundleOptions.forEach(option => {
      const input = option.querySelector("input");
      const selectors = option.querySelector(".selectors");
  
      if (input.checked) {
        option.classList.add("selected");
        selectors.classList.remove("hidden");
        const price = input.getAttribute("data-price");
        totalPrice.textContent = `$${parseFloat(price).toFixed(2)} USD`;
      } else {
        option.classList.remove("selected");
        selectors.classList.add("hidden");
      }
    });
}
  
  form.addEventListener("change", updateUI);
  window.addEventListener("DOMContentLoaded", updateUI);
  