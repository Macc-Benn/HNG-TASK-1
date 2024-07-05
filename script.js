function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').innerText = utcTime;
    document.querySelector('[data-testid="currentDay"]').innerText = dayOfWeek;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();

document.getElementById('menubutton').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
});
