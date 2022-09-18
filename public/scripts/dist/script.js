var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { toggleShowPassword, getTokenFromMeta, displayError } from "./modules/DOM/index.js";
import { authService } from "./modules/services/index.js";
const signUpShowPassword = document.querySelector("#sigshow");
const loginUpShowPassword = document.querySelector("#logshow");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const signUpName = document.querySelector("#signUpName");
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPassword = document.querySelector("#signUpPassword");
const signUpBtn = document.querySelector("#signUp-btn");
const loginBtn = document.querySelector("#login-btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("#modal-close");
modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});
function validateEmail(email) {
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}
signUpShowPassword.addEventListener("click", toggleShowPassword(signUpShowPassword, "signUp"));
signUpBtn.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    const token = getTokenFromMeta();
    const name = signUpName.value.trim();
    const email = signUpEmail.value.trim();
    const password = signUpPassword.value;
    if (name.length < 1) {
        displayError("name should contain at least one character");
    }
    else if (!validateEmail(email)) {
        displayError("a valid email is needed");
    }
    else if (password.length < 4) {
        displayError("password must have at least four characters");
    }
    else {
        const body = {
            name: name,
            email: email,
            password: password,
        };
        const data = yield authService(body, "sign-up", token);
        if (data.error) {
            displayError(data.message);
            return;
        }
        window.location.reload();
    }
}));
loginUpShowPassword.addEventListener("click", toggleShowPassword(loginUpShowPassword, "login"));
loginBtn.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    const email = loginEmail.value;
    const password = loginPassword.value;
    const token = getTokenFromMeta();
    if (email.length < 1) {
        displayError("email can not be empty");
    }
    else if (password.length < 1) {
        displayError("password can not be empty");
    }
    else {
        const body = {
            email: email,
            password: password,
        };
        const data = yield authService(body, "login", token);
        if (data.error) {
            displayError(data.message);
            return;
        }
        window.location.href = "/home";
    }
}));
