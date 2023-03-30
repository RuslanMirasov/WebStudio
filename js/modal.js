(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modal: document.querySelectorAll("[data-modal]"),
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
  }
})();