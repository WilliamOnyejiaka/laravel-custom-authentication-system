import { toggleShowPassword, getTokenFromMeta } from "./modules/DOM/index.js";
import { authService } from "./modules/services/index.js";

const signUpShowPassword = document.querySelector(
    "#sigshow"
) as HTMLInputElement;
const loginUpShowPassword = document.querySelector(
    "#logshow"
) as HTMLInputElement;

const loginEmail = document.querySelector("#loginEmail") as HTMLInputElement;
const loginPassword = document.querySelector(
    "#loginPassword"
) as HTMLInputElement;

const signUpName = document.querySelector("#signUpName") as HTMLInputElement;
const signUpEmail = document.querySelector("#signUpEmail") as HTMLInputElement;
const signUpPassword = document.querySelector(
    "#signUpPassword"
) as HTMLInputElement;
const signUpBtn = document.querySelector("#signUp-btn") as HTMLLinkElement;
const loginBtn = document.querySelector("#login-btn") as HTMLLinkElement;

function validateEmail(email: string): boolean {
    const emailRegex =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}

signUpShowPassword.addEventListener(
    "click",
    toggleShowPassword(signUpShowPassword, "signUp")
);

signUpBtn.addEventListener("click", async (e) => {
    const token: string = getTokenFromMeta()!;
    const name: string = signUpName.value.trim();
    const email: string = signUpEmail.value.trim();
    const password: string = signUpPassword.value;

    if (name.length < 1) {
        alert("name should contain at least one character");
    } else if (!validateEmail(email)) {
        alert("a valid email is needed");
    } else if (password.length < 4) {
        alert("password must have at least four characters");
    } else {
        const body = {
            name: name,
            email: email,
            password: password,
        };
        const data = await authService(body, "sign-up", token);

        if (data.error) {
            alert(data.message);
            return;
        }
        window.location.reload();
    }
});

loginUpShowPassword.addEventListener(
    "click",
    toggleShowPassword(loginUpShowPassword, "login")
);

loginBtn.addEventListener("click", async (e) => {
    const email: string = loginEmail.value;
    const password: string = loginPassword.value;
    const token: string = getTokenFromMeta()!;

    if (email.length < 1) {
        alert("email can not be empty");
    } else if (password.length < 1) {
        alert("password can not be empty");
    } else {
        const body: any = {
            email: email,
            password: password,
        };
        const data = await authService(body, "login", token);

        if (data.error) {
            alert(data.message);
            return;
        }
        window.location.href = "/home";
    }
});
