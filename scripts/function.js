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
    const seatHTML = `<div id="${id}" class="seat bg-[#F7F8F8] rounded-xl px-10 py-4 text-center cursor-pointer hover:bg-gray-200 transition-all font-medium">${id}</div>`;
    if (i <= 2) leftSide.innerHTML += seatHTML;
    else rightSide.innerHTML += seatHTML;
  }
});

document.addEventListener("click", function (event) {
  const clickedElement = event.target.closest(".seat");
  if (!clickedElement) return;

  const elementId = clickedElement.id;

  if (seatIds.includes(elementId) && !selectedSeatIds.includes(elementId)) {
    if (selectedSeatsCount >= MAX_SEATS) {
      alert("Maximum 4 seats allowed");
      return;
    }
  }
});
