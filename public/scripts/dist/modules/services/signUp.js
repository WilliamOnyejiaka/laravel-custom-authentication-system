var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const signUp = (name, email, password, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("/sign-up", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
        headers: new Headers({
            "content-type": "application/json",
            Authorization: `Basic ${window.btoa(email + ":" + password)}`,
            'X-CSRF-TOKEN': token,
        }),
    });
    return yield response.json();
});
export { signUp };