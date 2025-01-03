
const accordion1 = document.getElementById("accordion-title1");
const accordion2 = document.getElementById("accordion-title2");
const accordion3 = document.getElementById("accordion-title3");
const accordion4 = document.getElementById("accordion-title4");

const accordions = [accordion1, accordion2, accordion3, accordion4];

accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        const children = accordion.children
        const text = accordion.nextElementSibling;
        if(text.classList.contains('open')){
            for(let i = 0; i < children.length; i++){
                if(children[i].classList.contains("icon")){
                    children[i].textContent = "+";
                }
            }
            text.classList.remove('open');
        }else{
            for(let i = 0; i < children.length; i++){
                if(children[i].classList.contains("icon")){
                    children[i].textContent = "-";
                }
            }
            text.classList.add('open'); 
        }        
    })
});




