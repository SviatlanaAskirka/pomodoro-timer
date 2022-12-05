const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', changeBtn);

const pomodoroTime = document.querySelector('#pomodoro-time');

let timerId;


function changeBtn() {
    if (startBtn.textContent === 'stop') {
        startBtn.textContent = 'start';

        clearInterval(timerId);
    } else {
        startBtn.textContent = 'stop';


        timerId = setInterval(() => {
            const time = pomodoroTime.textContent.split(":");
            let minutes = parseInt(time[0]);
            let seconds = parseInt(time[1]);

            if (minutes === 0 & seconds === 0) {
                pomodoroTime.textContent = "25:00";
                clearInterval(timerId);
                startBtn.textContent = "start";
                return;
            }

            seconds--;

            if (seconds === -1) {
                minutes--;
                seconds = 59;
            }

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            pomodoroTime.textContent = minutes + ":" + seconds;
        }, 1000);
    }
}