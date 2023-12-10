const axios = require("axios")
    , qs = require("qs");
module.exports = s => new Promise((t, e) => {
    axios.post("https://www.toptal.com/developers/javascript-minifier/raw", qs.stringify({ input: s }))
        .then(s => { t(s.data) })
        .catch(s => { s.response ? e("HTTP Error: " + s.response.statusText + " " + s.response.status) : e("Connection Error: Check your internet connection.") })
});