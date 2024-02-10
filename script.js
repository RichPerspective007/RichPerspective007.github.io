// script.js
window.onload = function() {
    // Set the date of the birthday
    const birthdayDate = new Date('2024-02-09 23:52:52').getTime();

    // Update the countdown every second
    const x = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining until the birthday
        const distance = birthdayDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display the birthday message and start the photo slider
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = "Happy Birthday!";
            document.getElementById('birthdayMessage').innerHTML = "Happy Birthday Mummy!"; // You can add the person's name here

            // Display the photo slider
            const images = document.querySelectorAll('.sliderImage');

            // Start the photo slider
            let currentIndex = 0;

            setInterval(function() {
                images[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].style.display = 'inline'; // Change 'inline' to 'block' if needed
            }, 2000);
        }
    }, 1000);
};
