function displayError(message: string): void {
    const modal = document.querySelector(".modal") as HTMLDivElement;
    const modalHeader = document.querySelector(
        ".modal-header"
    ) as HTMLDivElement;
    const modalBody = document.querySelector(".modal-body") as HTMLDivElement;

    modal.classList.add("show");
    modalBody.textContent = message;
}

export {displayError};
