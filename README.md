⚙️ How the Logic Works
Generation: The script loops through a 10-row array (A-J) and generates 4 seats per row, appending them to left and right columns.

Selection: Uses event delegation to listen for clicks on seats. It validates against MAX_SEATS and updates the pricing state.

Discounting: A dedicated logic block listens for coupon application, calculates the percentage, and hides the coupon box to show the final discount.

Validation: An input listener on the phone field checks the length and seat count to toggle the "Next" button's disabled attribute.


📝 Future Roadmap
    PDF Ticket generation.
    Integration with a mock backend (Local Storage).