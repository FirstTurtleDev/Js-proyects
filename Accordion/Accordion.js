const accordion1 = document.getElementById("accordion-title1");
const accordion2 = document.getElementById("accordion-title2");
const accordion3 = document.getElementById("accordion-title3");
const accordion4 = document.getElementById("accordion-title4");

const addButton = document.getElementById("add-button");
const tabName = document.getElementById("tabName");
const addForm = document.getElementById("ui-addtab");
const closeButton = document.getElementById("ui-close");
const addTabButton = document.getElementById("addTab");

const accordions = [accordion1, accordion2, accordion3, accordion4];

accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        const children = accordion.children;
        const text = accordion.nextElementSibling;

        // Reset all icons to "+"
        accordions.forEach((accordionx) => {
            const childrenx = accordionx.children;
            for (let i = 0; i < childrenx.length; i++) {
                if (childrenx[i].classList.contains("icon")) {
                    childrenx[i].textContent = "+";
                }
            }
        });

        if (text.classList.contains('open')) {
            text.classList.remove('open');
        } else {
            for (let i = 0; i < children.length; i++) {
                if (children[i].classList.contains("icon")) {
                    children[i].textContent = "-";
                }
            }
            accordions.forEach((accordionx) => {
                const text = accordionx.nextElementSibling;
                text.classList.remove('open');
            });
            text.classList.add('open');
        }
    });
});

addButton.addEventListener("click", () => {
    addForm.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
    addForm.classList.add("hidden");
});

addTabButton.addEventListener("click", () => {
    tabNameValue = tabName.value;
    tabContentValue = document.getElementById("tabContent").value;
    if(tabNameValue && tabContentValue){
        addForm.classList.add("hidden");
        const newAccordion = document.createElement("div");
        newAccordion.classList.add("accordion-title");
        newAccordion.id = `accordion-title${accordions.length + 1}`;
        newAccordion.innerHTML = `<p class="title">${tabNameValue}<p class="icon">+</p></p>`;

        const newContent = document.createElement("div");
        newContent.classList.add("accordion-text");
        newContent.classList.add("hidden");
        newContent.innerHTML = `<p>${tabContentValue}</p>`;

        document.getElementById("accordion").appendChild(newAccordion);
        document.getElementById("accordion").appendChild(newContent);
        accordions.push(newAccordion);

        newAccordion.addEventListener("click", () => {
            const children = newAccordion.children;
            const text = newAccordion.nextElementSibling;

            // Reset all icons to "+"
            accordions.forEach((accordionx) => {
                const childrenx = accordionx.children;
                for (let i = 0; i < childrenx.length; i++) {
                    if (childrenx[i].classList.contains("icon")) {
                        childrenx[i].textContent = "+";
                    }
                }
            });

            if (text.classList.contains('open')) {
                text.classList.remove('open');
            } else {
                for (let i = 0; i < children.length; i++) {
                    if (children[i].classList.contains("icon")) {
                        children[i].textContent = "-";
                    }
                }
                accordions.forEach((accordionx) => {
                    const text = accordionx.nextElementSibling;
                    text.classList.remove('open');
                });
                text.classList.add('open');
            }
        });

        tabName.value = "";
        document.getElementById("tabContent").value = "";
    } //else 
});


