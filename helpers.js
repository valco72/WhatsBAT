function successfullMessage(msg) {
    return "β *WhatsGAIA*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *WhatsGAIA*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *WhatsGAIA*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}