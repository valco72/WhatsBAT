function successfullMessage(msg) {
    return "✅ *WhatsGAIA*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *WhatsGAIA*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *WhatsGAIA*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}