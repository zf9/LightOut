const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')

module.exports.run = async (client, msg, args) => {
    msg.delete();
    rand = [16,24]
    let x = rand[Math.floor(Math.random()*rand.length)]
    msg.channel.send(`https://discord.gift/`+makeid(x));
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}

module.exports.help = {
    name:"nitrogen",
} 