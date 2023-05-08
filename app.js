
const myNAv = document.querySelector(".myNav")
const menuBTN = document.querySelector(".hamburger")
const navLinks = document.querySelectorAll(".navlinks a")

//-------for my navigation-------

menuBTN.addEventListener("click", () => {
    menuBTN.classList.toggle('is-active')
    myNAv.classList.toggle('is-active')
})

//-------active state for nav links-------

navLinks.forEach(a => a.addEventListener('click', () => {
  navLinks.forEach(a => a.classList.remove("show"))
  a.classList.add("show")

  myNAv.classList.remove('is-active')
  menuBTN.classList.remove('is-active')
  
}))

//-------- for my type animation--------

var typed = new Typed(".auto-type", {
    strings: ["WEB DEVELOPER.", 'UI DESIGNER.', 'FREELANCER.', 'WEB DESIGNER.'], 
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
 })


//-----AOS-------
AOS.init();


