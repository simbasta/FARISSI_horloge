
function horloge() {
    // les heures en temps reel
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    
    var hour = hours * 30;
    var minute = minutes * 6;
    var second = secondes * 6;
    
    // affichage des heures, rotation
    document.querySelector(".heure").style.transform = `rotate(${hour}deg)`;
    
    document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
    
    document.querySelector(".seconde").style.transform = `rotate(${second}deg)`;
}
horloge();

setInterval(horloge, 1000)
