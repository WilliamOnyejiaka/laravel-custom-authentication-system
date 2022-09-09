var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { toggleShowPassword, getTokenFromMeta } from "./modules/DOM/index.js";
import { signUp } from "./modules/services/index.js";
const signUpShowPassword = document.querySelector("#sigshow");
const loginUpShowPassword = document.querySelector("#logshow");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const signUpName = document.querySelector("#signUpName");
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPassword = document.querySelector("#signUpPassword");
sign();
function sign() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = getTokenFromMeta();
        const name = signUpName.value.trim();
        const email = signUpEmail.value.trim();
        const password = signUpPassword.value;
        const data = yield signUp(name, email, password, token);
        console.log(data);
    });
}
loginUpShowPassword.addEventListener("click", toggleShowPassword(loginUpShowPassword, "login"));
signUpShowPassword.addEventListener("click", toggleShowPassword(signUpShowPassword, "signUp"));
