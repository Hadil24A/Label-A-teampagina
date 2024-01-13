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

// Elementen selecteren, werknemersfoto en werknemersinformatie

let EmployeeImage = document.querySelector('img')
let EmployeeInfo = document.querySelector('ul')

// Naar event luisteren, er wordt op de werknemersfoto geklikt

EmployeeImage.addEventListener('click', function() {

// Werknemersinformatie verschijnt

    EmployeeInfo.classList.toggle('show-emp-inf')

})