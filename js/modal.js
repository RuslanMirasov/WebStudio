(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelectorAll("[data-modal]"),
    modalPaddingElements: [].filter.call(document.all, e => getComputedStyle(e).position == 'fixed'),
    body: document.querySelector(".body"),
    bodyPadding: window.innerWidth - document.querySelector('.main').offsetWidth
  };

  refs.openModalBtn.forEach(modalBtn => {
    modalBtn.addEventListener("click", toggleModal);
  });
  
  refs.closeModalBtn.forEach(closelBtn => {
    closelBtn.addEventListener("click", toggleModal);
  });

  function toggleModal() {
    refs.modal.forEach(modalClass => {
      modalClass.classList.toggle("is-hidden");
    });
    refs.body.classList.toggle("lock");
    bodyPaddingToggle();
  }
  function bodyPaddingToggle() {
    refs.modalPaddingElements.forEach(modalPaddingElements => {
      if (refs.body.classList.contains('lock')) {
        refs.body.style.paddingRight = refs.bodyPadding + 'px';
        modalPaddingElements.style.paddingRight = refs.bodyPadding + 'px';
      }
      else {
        refs.body.style.paddingRight = '0px';
        modalPaddingElements.style.paddingRight = '0px';
      }
    });
  }
})();