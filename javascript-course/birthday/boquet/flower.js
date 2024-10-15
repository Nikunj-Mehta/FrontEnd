// Selecting the button and bouquet container
const giveBouquetButton = document.getElementById('giveBouquet');
const bouquet = document.getElementById('bouquet');

// Event listener for button click
giveBouquetButton.addEventListener('click', function() {
    // Toggle the "show" class to display the bouquet
    bouquet.classList.toggle('show');
});
