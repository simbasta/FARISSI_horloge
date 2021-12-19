clock();

function clock() {
    const date = new Date();
    const hours = ((date.getHours()+ 11) % 12 + 1)
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();



    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
}


document.querySelector(".heure").style.transform = `rotate(${hour}deg)`)

