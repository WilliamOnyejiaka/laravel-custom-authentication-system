
const toggleShowPassword =
    (element: HTMLInputElement, formType: string) => (e: MouseEvent) => {
        const password = document.querySelector(
            `#${formType}Password`
        ) as HTMLInputElement;
        const checkLabel = document.querySelector(
            `#${formType}FormCheckLabel`
        ) as HTMLLabelElement;
        if (element.checked) {
            password.type = "text";
            checkLabel.textContent = "Hide Password";
        } else {
            password.type = "password";
            checkLabel.textContent = "Show Password";
        }
    };

export { toggleShowPassword };
