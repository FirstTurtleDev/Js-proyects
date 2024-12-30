const links = document.querySelectorAll("a")
const sections = document.querySelectorAll("section")
let currentSection = null;

window.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if(rect.top >= 0 && rect.top <= window.innerHeight/2){
            links.forEach((link) => link.classList.remove("active"));
            links[index].classList.add("active");
        }
    });

})