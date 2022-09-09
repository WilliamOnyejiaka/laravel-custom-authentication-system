
function getMeta(metaName: string = "csrf-token") {
    const metas = document.querySelectorAll("meta");
    for (let meta of metas) {
        if (meta.getAttribute("name") === metaName) {
            return meta.getAttribute("content");
        }
    }
    return "";
}

export {getMeta};