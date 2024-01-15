let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


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

// let linkjes = document.querySelectorAll('.employee-link')
// let removeInfo = document.querySelectorAll('.employee-info')

// info.forEach(function(link) {
//     linkjes.addEventListener('click', function() {

//         // Toggle de class van Dat element
//         removeInfonfo.classList.toggle('employee-info');
//     })
// })



