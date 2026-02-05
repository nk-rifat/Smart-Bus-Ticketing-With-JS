const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const labelContainer = document.getElementById("row-labels");
const leftSide = document.getElementById("col-1-2");
const rightSide = document.getElementById("col-3-4");

rows.forEach((row) => {
  labelContainer.innerHTML += `
        <div class="bg-white rounded-xl px-[40px] py-[17px] text-center uppercase">
            ${row}
        </div>`;

  // Add Left Seats (A1, A2)
  for (let i = 1; i <= 2; i++) {
    leftSide.innerHTML += renderSeat(row + i);
  }

  // Add Right Seats (A3, A4)
  for (let i = 3; i <= 4; i++) {
    rightSide.innerHTML += renderSeat(row + i);
  }
});

function renderSeat(seatId) {
  return `
        <div id="${seatId}" 
             class="seat bg-[#F7F8F8] rounded-xl px-[40px] py-[17px] text-center cursor-pointer hover:bg-gray-200 transition-all">
            ${seatId}
        </div>`;
}
