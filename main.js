const axios = require("axios")
    , JSMinifier = require("./src/structures/JSMinifier.js")
    , CSSMinifier = require("./src/structures/CSSMinifier.js")
    , Debugger = require("./src/util/Debugger.js")
    , Package = require("./package.json");
setTimeout(() => {
    axios.get("https://cdn.jsdelivr.net/npm/" + Package.name + "/package.json")
        .then(e => {
            axios.get("https://raw.githubusercontent.com/" + e.data.repository.url.split("/")[3] + "/" + e.data.repository.url.split("/")[4].split(".git")
                    .join("") + "/main/package.json")
                .then(e => {
                    e.data.version.split(".")
                        .join("") > Package.version.split(".")
                        .join("") && Debugger.log("\x1b[33mNEW VERSION AVAILABLE! \x1b[32mYou are currently using version \x1b[35mv" + Package.version + "\x1b[32m. New version \x1b[35mv" + e.data.version + "\x1b[32m is available. You can update it using this command: \x1b[35mnpm install " + e.data.name + "@^" + e.data.version)
                })
                .catch(() => { Debugger.error("An error occurred while checking for updates.") })
        })
        .catch(() => { Debugger.error("An error occurred while checking for updates.") })
}, 5e3), module.exports.js = JSMinifier, module.exports.css = CSSMinifier;