

const login = async (email:string, password:string) => {
    const response = await fetch("http://127.0.0.1:5000/api/v1/auth/login", {
        method: "GET",
        credentials: "include",
        headers: new Headers({
            "content-type": "application/json",
            Authorization: `Basic ${window.btoa(email + ":" + password)}`,
        }),
    });

    return await response.json();
};
