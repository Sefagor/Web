let firefox = {
    browserEnginne: "Gecko",
    name: "FireFox"
}

let tool = {
    browserEnginne: "Blink",
    category: "Browser"
}

let chrome = {
    name: "Chrome"
}

Object.setPrototypeOf(chrome, tool);
Object.setPrototypeOf(tool, firefox);