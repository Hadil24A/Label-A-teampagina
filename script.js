let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show-nav-menu");
    navMenu.classList.toggle("show-nav-menu");
})


let linkjes = document.querySelectorAll('.employee-link')

linkjes.forEach(function(link) {
    link.addEventListener('click', function(event) {

        // Pak de href van het linkje waarop ik klikte
        let id = this.getAttribute('href');

        // Zoek het element met dat id
        let infoElement = document.querySelector(id);

        // Toggle de class van Dat element
        infoElement.classList.toggle('employee-info-visible');
        event.preventDefault();
    })
})




//  functies in de select selecteren

// event; op een functie in de select klikke

// je krijgt alle werknemers te zien die deze functie hebben




































// let FND = document.getAttribute('ALL-EMPLOYEES:nth-of-type(1)','ALL-EMPLOYEES:nth-of-type(2)','ALL-EMPLOYEES:nth-of-type(5)','ALL-EMPLOYEES:nth-of-type(10)','ALL-EMPLOYEES:nth-of-type(14)','ALL-EMPLOYEES:nth-of-type(15)','ALL-EMPLOYEES:nth-of-type(21)','ALL-EMPLOYEES:nth-of-type(24)','ALL-EMPLOYEES:nth-of-type(27)','ALL-EMPLOYEES:nth-of-type(28)','ALL-EMPLOYEES:nth-of-type(30)','ALL-EMPLOYEES:nth-of-type(35)','ALL-EMPLOYEES:nth-of-type(38)','ALL-EMPLOYEES:nth-of-type(43)')
// let BND = document.getAttribute('ALL-EMPLOYEES:nth-of-type(3)','ALL-EMPLOYEES:nth-of-type(6)','ALL-EMPLOYEES:nth-of-type(12)','ALL-EMPLOYEES:nth-of-type(20)','ALL-EMPLOYEES:nth-of-type(23)','ALL-EMPLOYEES:nth-of-type(29)')
// let ScrumM = document.getAttribute('ALL-EMPLOYEES:nth-of-type(4)','ALL-EMPLOYEES:nth-of-type(40)','ALL-EMPLOYEES:nth-of-type(9)','ALL-EMPLOYEES:nth-of-type(39)')  
// let LCT = document.getAttribute('ALL-EMPLOYEES:nth-of-type(8)')   
// let UID = document.getAttribute('ALL-EMPLOYEES:nth-of-type(11)')   
// let ComD = document.getAttribute('ALL-EMPLOYEES:nth-of-type(13)')   
// let TSL = document.getAttribute('ALL-EMPLOYEES:nth-of-type(16)')   
// let TSS = document.getAttribute('ALL-EMPLOYEES:nth-of-type(17)')   
// let InnoStrat = document.getAttribute('ALL-EMPLOYEES:nth-of-type(18)')   
// let DataEng = document.getAttribute('ALL-EMPLOYEES:nth-of-type(19)')   
// let OAng010 = document.getAttribute('ALL-EMPLOYEES:nth-of-type(22)')   
// let IOSDev = document.getAttribute('ALL-EMPLOYEES:nth-of-type(26)')   
// let ATD = document.getAttribute('ALL-EMPLOYEES:nth-of-type(31)')   
// let CE = document.getAttribute('ALL-EMPLOYEES:nth-of-type(32)')   
// let UXL = document.getAttribute('ALL-EMPLOYEES:nth-of-type(33)')   
// let SystOp = document.getAttribute('ALL-EMPLOYEES:nth-of-type(34)')   
// let MngD = document.getAttribute('ALL-EMPLOYEES:nth-of-type(36)','ALL-EMPLOYEES:nth-of-type(37)')   
// let UXUI = document.getAttribute('ALL-EMPLOYEES:nth-of-type(41)')  
// let UXD = document.getAttribute('ALL-EMPLOYEES:nth-of-type(42)')   
// let TL = document.getAttribute('ALL-EMPLOYEES:nth-of-type(44)')   
// let Dev = document.getAttribute('ALL-EMPLOYEES:nth-of-type(45)')   
// let select = document.getAttribute('#functieselect')

// select value= "Front end developer".addEventListener('click', function() {
//     FND.classList.toggle('FND')
// })