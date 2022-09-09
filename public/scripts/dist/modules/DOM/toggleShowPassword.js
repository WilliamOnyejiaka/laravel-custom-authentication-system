const toggleShowPassword = (element, formType) => (e) => {
    const password = document.querySelector(`#${formType}Password`);
    const checkLabel = document.querySelector(`#${formType}FormCheckLabel`);
    if (element.checked) {
        password.type = "text";
        checkLabel.textContent = "Hide Password";
    }
    else {
        password.type = "password";
        checkLabel.textContent = "Show Password";
    }
};
export { toggleShowPassword };
