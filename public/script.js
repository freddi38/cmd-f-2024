// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the counter element
    const counterElement = document.getElementById("counter");

    // Get the increment button
    const incrementButton = document.getElementById("incrementButton");

    // Initialize the counter value
    let counterValue = 0;

    // Function to update the counter value and display it
    function updateCounter() {
        counterValue++;
        counterElement.textContent = counterValue;
    }

    // Add event listener to the increment button
    incrementButton.addEventListener("click", updateCounter);
});