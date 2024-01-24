function startClock() {
    const hrs = document.getElementById("hours");
    const minute = document.getElementById("Minute");
    const second = document.getElementById("second");
    const appm = document.getElementById("ampm");

    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    // Format hours to 12-hour format
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    hrs.textContent = hours;
    minute.textContent = minutes < 10 ? "0" + minutes : minutes;
    second.textContent = seconds < 10 ? "0" + seconds : seconds;
    appm.textContent = ampm;
}

setInterval(startClock, 1000); 

startClock(); 