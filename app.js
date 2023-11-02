const endDate = "Time until Monday, 1 January 2024 (Karachi time)"

document.getElementById("end-date").innerText = endDate;

function countdown() {
    const newYearDate = new Date("January 1, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();
    
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = newYearDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
}

countdown();