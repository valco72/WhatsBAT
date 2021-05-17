const Asena = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('locate');


    Asena.addCommand({pattern: 'locate', fromMe: true, desc: Lang.L_DESC, warn: Lang.L_WARN}, (async (message, match) => {

        var r_text = new Array ();
        r_text[0] = "degreesLatitude: 24.121231, degreesLongitude: 55.1121221";
        r_text[1] = "degreesLatitude: 8.838637, degreesLongitude: -13.721434";

        var i = Math.floor(2*Math.random())

        await message.sendMessage(`My Location! ${r_text[i]}`, MessageType.location);

}));
