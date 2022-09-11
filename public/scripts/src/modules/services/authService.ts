const authService = async (
    body:any,
    url:string,
    token: string
) => {

    const response = await fetch(`/${url}`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
            "X-CSRF-TOKEN": token,
        },
    });

    return await response.json();
};

export { authService };
