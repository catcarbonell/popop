/* POPOP.JS - FUNCTIONALITY FOR YOUR MODAL */
const modalBtn = document.querySelector('.popop-btn')
const modal = document.querySelector('.popop-modal');
const modalBgLite = document.querySelector('.popop-bg-lite')
const closeBtn = document.querySelector('.close-btn');

function popop(el){
    modalBtn.addEventListener('click', function (e) {
        e.preventDefault();
        el.classList.add('popop-bg-lite');
        modalBgLite.style.display = 'initial';
        el.style.display = 'flex';
    });
};

function closeModal(el){
    closeBtn.addEventListener('click', function (e) {
        el.style.display = 'none';
        modalBgLite.style.display = 'none';
        el.classList.remove('popop-bg-lite');
    });
};

popop(modal);
closeModal(modal);