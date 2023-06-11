const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', OutSideClick);

function openModal () {
    modal.style.display = 'block';
}

function closeModal () {
    modal.style.display = 'none';
}

function  OutSideClick (e) {
    if (e.target == modal){
      closeModal();
    }
}