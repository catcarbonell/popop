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
function openModal(){
    openBtn.forEach( trigger => { 
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'flex';
            e.stopImmediatePropagation();
            }
        )
    });
};
// Close Modal //
function closeModal(){
    closeBtn.forEach( trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'none';
           e.stopImmediatePropagation();
        })
    });
};
// Get ID //
