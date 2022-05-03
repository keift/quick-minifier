const axios = require("axios")
    , qs = require("qs");
module.exports = (e => new Promise((s, r) => {
    axios.post("https://www.toptal.com/developers/javascript-minifier/raw", qs.stringify({
            input: e
        }))
        .then(e => {
            s(e.data)
        })
        .catch(e => {
            e.response ? r("HTTP Error: " + e.response.statusText + " " + e.response.status) : r("Connection Error: Check your internet connection.")
        })
}));