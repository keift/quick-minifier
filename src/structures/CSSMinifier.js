const axios = require("axios")
    , qs = require("qs");
module.exports = (e => new Promise((s, o) => {
    axios.post("https://www.toptal.com/developers/cssminifier/raw", qs.stringify({
            input: e
        }))
        .then(e => {
            s(e.data)
        })
        .catch(e => {
            e.response ? o("HTTP Error: " + e.response.statusText + " " + e.response.status) : o("Connection Error: Check your internet connection.")
        })
}));