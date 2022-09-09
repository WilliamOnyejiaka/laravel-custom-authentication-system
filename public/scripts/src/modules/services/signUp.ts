const signUp = async (name: string, email: string, password: string,token:string) => {
    const response = await fetch("/sign-up", {
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
            'X-CSRF-TOKEN':token,
        }),
    });

    return await response.json();
};

export {signUp};
