function displayError(message) {
    const modal = document.querySelector(".modal");
    const modalHeader = document.querySelector(".modal-header");
    const modalBody = document.querySelector(".modal-body");
    modal.classList.add("show");
    modalBody.textContent = message;
}
export { displayError };
