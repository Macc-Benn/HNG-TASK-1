function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').innerText = utcTime;
    document.querySelector('[data-testid="currentDay"]').innerText = dayOfWeek;

    document.querySelector('[data-testid="currentTimeUTC1"]').innerText = utcTime;
    document.querySelector('[data-testid="currentDay1"]').innerText = dayOfWeek;

}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();

function openNav() {
    
    document.getElementById("topmenubar").classList.remove('hidden-menu-bar').style.width = "150px";
    document.querySelector(".main").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("topmenubar").classList.add('hidden-menu-bar').style.width = "0";
    document.querySelector(".main").style.marginLeft = "0";
}

document.getElementById('openPopupButton').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
});
document.getElementById('openPopupButton2').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('closePopupButton').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});
