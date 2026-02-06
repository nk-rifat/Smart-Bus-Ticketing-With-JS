const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const seatIds = [];
const TICKET_PRICE = 550;
const MAX_SEATS = 4;
let selectedSeatsCount = 0;
let selectedSeatIds = [];

const labelContainer = document.getElementById("row-labels");
const leftSide = document.getElementById("col-1-2");
const rightSide = document.getElementById("col-3-4");

rows.forEach((row) => {
  labelContainer.innerHTML += `<div class="flex items-center justify-center font-bold h-[58px]">${row}</div>`;
  for (let i = 1; i <= 4; i++) {
    const id = row + i;
    seatIds.push(id);
    const seatHTML = `<div id="${id}" class="seat bg-[#F7F8F8] rounded-xl px-10 py-4 text-center cursor-pointer transition-all font-medium">${id}</div>`;
    if (i <= 2) leftSide.innerHTML += seatHTML;
    else rightSide.innerHTML += seatHTML;
  }
});

//  Handle Selection
document.addEventListener("click", function (event) {
  const clickedElement = event.target.closest(".seat");
  if (!clickedElement) return;

  const elementId = clickedElement.id;

  if (seatIds.includes(elementId) && !selectedSeatIds.includes(elementId)) {
    if (selectedSeatsCount >= MAX_SEATS) {
      alert("Maximum 4 seats allowed");
      return;
    }

    // Add to Selection
    selectedSeatIds.push(elementId);
    selectedSeatsCount++;
    setBackgroundById(elementId);

    // Update UI Counts
    const available = getTextElementValueById("total-seat");
    setTextElementValueById("total-seat", available - 1);
    setTextElementValueById("total-select", selectedSeatsCount);

    // Update Pricing
    const currentTotal = selectedSeatsCount * TICKET_PRICE;
    setTextElementValueById("total-price", currentTotal);
    setTextElementValueById("grand-total", currentTotal);

    // Append to Sidebar
    const container = document.getElementById("seat-details-container");
    const div = document.createElement("div");
    div.className = "flex justify-between text-gray-600";
    div.innerHTML = `<p>${elementId}</p><p>Economy</p><p>${TICKET_PRICE}</p>`;
    container.appendChild(div);

    // Enable Coupon Box
    if (selectedSeatsCount === MAX_SEATS) {
      document.getElementById("btn-apply").removeAttribute("disabled");
      document.getElementById("input-copupon").removeAttribute("disabled");
    }
  }
});

// Coupon Logic

function hideCopuponBox() {
  hideElementById("apply-btn-copupon");
  showElementById("discount-price");
}
document.getElementById("btn-apply").addEventListener("click", function () {
  const couponInput = document.getElementById("input-copupon").value;
  const currentTotal = selectedSeatsCount * TICKET_PRICE;
  let discount = 0;

  if (couponInput === "NEW15") {
    discount = (currentTotal * 15) / 100;
  } else if (couponInput === "Couple 20") {
    discount = (currentTotal * 20) / 100;
  } else {
    alert("Invalid Coupon");
    return;
  }

  setTextElementValueById("discount", discount);
  setTextElementValueById("grand-total", currentTotal - discount);
  hideCopuponBox();
});

// Form Validation & Next Screen
document.getElementById("phone-number").addEventListener("input", function (e) {
  const btnNext = document.getElementById("btn-enabled");
  if (e.target.value.length > 0 && selectedSeatsCount > 0) {
    btnNext.removeAttribute("disabled");
  } else {
    btnNext.setAttribute("disabled", true);
  }
});

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
