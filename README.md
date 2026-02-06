⚙️ How the Logic Works </br>
Generation: The script loops through a 10-row array (A-J) and generates 4 seats per row, dynamically appending them to the left and right columns using template literals.</br>

Selection: Uses Event Delegation to listen for clicks on seats. It validates the selection against MAX_SEATS (4), updates the background color, and refreshes the pricing state.</br>

Discounting: A dedicated logic block listens for coupon application. It calculates the percentage based on the code (NEW15 or Couple 20) and replaces the coupon box with a discount breakdown.</br>

Validation: A real-time input listener on the phone field checks both the string length and the current selectedSeatsCount to toggle the "Next" button's disabled state.</br>

📝 Future Roadmap </br>
PDF Ticket generation.</br>
Integration with a mock backend (Local Storage).
