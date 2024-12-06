// Select all the count, increase, and decrease elements
const counts = document.querySelectorAll(".count");
const incButtons = document.querySelectorAll(".increase");
const decButtons = document.querySelectorAll(".decrease");

// Add event listeners to the "increase" buttons
incButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const countElement = counts[index];
    let currentCount = parseInt(countElement.textContent) || 0;
    countElement.textContent = currentCount + 1;
  });
});

// Add event listeners to the "decrease" buttons
decButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const countElement = counts[index];
    let currentCount = parseInt(countElement.textContent) || 0;
    countElement.textContent = currentCount > 0 ? currentCount - 1 : 0;
  });
});

// Select all the delete button
const btn_delete = document.querySelectorAll(".btndelete");
const btn_cart = document.querySelectorAll(".cart");
console.log(btn_cart);

btn_delete.forEach((button, index) => {
  button.addEventListener("click", () => {
    alert("Do you want to delete this product?");
    if (btn_cart[index]) {
      console.log(index);

      // Check if the cart exists at this index
      btn_cart[index].style.display = "none";
    }
  });
});

// Input Range Price
const priceRange = document.getElementById("price-range");
const currentPrice = document.getElementById("current-price");

priceRange.addEventListener("input", () => {
  currentPrice.textContent = `$${priceRange.value}`;
});

// Select ALl Size Button
const buttons = document.querySelectorAll("#size-buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("bg-black", "text-white");
      btn.classList.add("text-gray-600");
    });

    button.classList.add("bg-black", "text-white");
    button.classList.remove("text-gray-600");
  });
});

// Select All dress style buttons
const btnTypeClothes = document.querySelectorAll("#dress-style-buttons button");

btnTypeClothes.forEach((button) => {
  button.addEventListener("click", () => {
    btnTypeClothes.forEach((btn) => {
      btn.classList.remove("bg-black", "text-white");
      btn.classList.add("text-gray-600");
    });

    button.classList.add("bg-black", "text-white");
    button.classList.remove("text-gray-600");
  });
});

// Select All Categories Buttons
const btnCategories = document.querySelectorAll("#Categories-buttons button");

btnCategories.forEach((button) => {
  button.addEventListener("click", () => {
    btnCategories.forEach((btn) => {
      btn.classList.remove("bg-black", "text-white");
      btn.classList.add("text-gray-600");
    });

    button.classList.add("bg-black", "text-white");
    button.classList.remove("text-gray-600");
  });
});
// code sign form
document.getElementById("to-signin").addEventListener("click", function () {
  document.getElementById("signup-form-container").style.display = "none";
  document.getElementById("signin-form-container").style.display = "block";
});
document.getElementById("to-signup").addEventListener("click", function () {
  document.getElementById("signup-form-container").style.display = "block";
  document.getElementById("signin-form-container").style.display = "none";
});
