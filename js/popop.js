/* ======= ======= ======= ======= ======= */
/* POPOP.JS - FUNCTIONALITY FOR YOUR MODAL */
/* ======= ======= ======= ======= ======= */

///* - DOCUMENT ELEMENTS - *///
//* - Main Modal - *//
const modalContent = document.querySelector('.popop-content')
//* - Button Calls - *//
const btn = document.querySelectorAll('.button');
const openBtn = document.querySelectorAll('.popop-open-btn');
const closeBtn = document.querySelectorAll('.popop-close-btn');

/* ======= ======= ======= ======= ======= */

let openModalArr = [];
let savedTrigger = document.activeElement;;
///* - FUNCTIONS - *///

//* - VISIBILITY - *//
//* - Open Modal - *//
function openModal(modalId){
    const modal = document.getElementById(`${modalId}`);
    const focusableChild = modal.querySelector('a, button, input, select, textarea, [contenteditable]');
        if (focusableChild) {
        focusableChild.focus();
        } else {
          console.warn('Warning! Your modal is not accessible. We need an element to receive focus after the modal opens.')
        }
    modal.classList.add('popop-show');
    openModalArr.push(modal);
};
function closeModal (){
    if(!openModalArr.length){
        return;
    }
    const modal = openModalArr[openModalArr.length-1];
    modal.classList.remove('popop-show');
    openModalArr.pop();
    savedTrigger.focus();
}
//* - EVENT LISTENERS - *//
//* - Open Modal - *//
function openModalEvent(){
  openBtn.forEach( trigger => { 
    trigger.addEventListener('click', function (e) {
        const targetModal = e.target;
        const modalId = targetModal.getAttribute('data-modal-id')
        openModal(modalId);
    });
  });
};
//* - Close Modal - *//
function closeModalEvent(){
  closeBtn.forEach( trigger => {
    trigger.addEventListener('click', function (e) {
        e.stopImmediatePropagation();
        closeModal();
    });
  });
};

//** - INIT POPOP.JS! - **//
openModalEvent();
closeModalEvent();