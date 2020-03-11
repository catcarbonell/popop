/* ======= ======= ======= ======= ======= */
/* POPOP.JS - FUNCTIONALITY FOR YOUR MODAL */
/* ======= ======= ======= ======= ======= */

/* - DOCUMENT ELEMENTS - */
// Main Modal //
const modal = document.querySelector('.popop-modal');
// Button Calls //
const btn = document.querySelectorAll('.button');
const openBtn = document.querySelectorAll('.popop-btn');
const closeBtn = document.querySelectorAll('.close-btn');

/* ======= ======= ======= ======= ======= */

/* - FUNCTIONS - */
// Open Modal //
function openModal(el){
    openBtn.forEach( trigger => { 
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById(`${el.id}`).style.display = "flex";
            e.stopImmediatePropagation();
            }
        )
    });
};
// Close Modal //
function closeModal(el){
    closeBtn.forEach( trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById(`${el.id}`).style.display = "none";
            e.stopImmediatePropagation();
        })
    });
};
