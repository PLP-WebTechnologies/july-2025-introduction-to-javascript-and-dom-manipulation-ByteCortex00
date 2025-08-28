// ===============================
// Part 1: Variables & Conditionals
// ===============================
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You are an adult ✅";
  } else if (age > 0) {
    result.textContent = "You are a minor 👶";
  } else {
    result.textContent = "Please enter a valid age.";
  }
});

// ===============================
// Part 2: Functions
// ===============================

// Function 1: Calculate total price
function calculateTotal(prices) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
}

document.getElementById("calcTotalBtn").addEventListener("click", function () {
  let items = [10, 20, 30]; // sample prices
  let total = calculateTotal(items);
  document.getElementById("totalResult").textContent = "Total = $" + total;
});

// Function 2: Toggle visibility of text
function toggleText() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

document.getElementById("toggleTextBtn").addEventListener("click", toggleText);

// ===============================
// Part 3: Loops
// ===============================

// Example 1: For loop (show numbers 1-5)
document.getElementById("showNumbersBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Example 2: forEach loop (show fruits)
document.getElementById("showFruitsBtn").addEventListener("click", function () {
  let fruits = ["Apple", "Banana", "Cherry", "Mango"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear list

  fruits.forEach(function (fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
});

// ===============================
// Part 4: DOM Interactions
// ===============================
// (Already covered above with .getElementById, .textContent, .style, .appendChild)
