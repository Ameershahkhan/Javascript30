const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".minute-hand")
const hourdHand = document.querySelector(".hour-hand")



function setDate(){
    const now = new Date()
    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes()
    const minuteDegrees = ((minutes / 60) * 360) + 90;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourdHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (seconds === 0) {
    secondHand.style.transition = 'none';
    } else {
    secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }

}

setInterval(setDate, 1000)