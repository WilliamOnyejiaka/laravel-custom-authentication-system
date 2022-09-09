import { toggleShowPassword, getTokenFromMeta } from "./modules/DOM/index.js";
import { signUp } from "./modules/services/index.js";

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

sign();

async function sign(){
    const token: string = getTokenFromMeta()!;
    const name:string = signUpName.value.trim();
    const email:string = signUpEmail.value.trim();
    const password:string = signUpPassword.value;

    const data = await signUp(name,email,password,token);
    console.log(data);
}

loginUpShowPassword.addEventListener(
    "click",
    toggleShowPassword(loginUpShowPassword, "login")
);

signUpShowPassword.addEventListener(
    "click",
    toggleShowPassword(signUpShowPassword, "signUp")
);
