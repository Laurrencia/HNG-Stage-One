function getCurrentTime(){
    const days =[ "Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
    const todaysDate = new Date();
    const dayOfWeek = days[todaysDate.getUTCDay()];
    const time = todaysDate.toISOString().slice(11, 21);

    const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentTime = document.querySelector('[data-testid="currentUTCTime"]');

    currentDay.textContent = dayOfWeek;
    currentTime.textContent = time;

    setTimeout(getCurrentTime,  100000);
}
getCurrentTime();
