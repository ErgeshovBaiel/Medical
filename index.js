const dayButton = document.getElementById("Day");

if (localStorage.getItem('theme') === 'day') {
    document.body.classList.add('day-icon'); 
}

dayButton.addEventListener("click", function() {
    document.body.classList.toggle("day-icon");

    if (document.body.classList.contains("day-icon")) {
        localStorage.setItem('theme', 'day');
    } else {
        localStorage.setItem('theme', 'night');
    }
});
