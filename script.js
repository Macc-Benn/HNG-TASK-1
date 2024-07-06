function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').innerText = utcTime;
    document.querySelector('[data-testid="currentDay"]').innerText = dayOfWeek;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();

function openNav() {
    document.getElementById("topmenubar").style.width = "150px";
    document.querySelector(".main").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("topmenubar").style.width = "0";
    document.querySelector(".main").style.marginLeft = "0";
}