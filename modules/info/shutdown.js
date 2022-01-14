const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')

module.exports.run = async (client, msg, args) => {
    msg.delete();
    msg.reply("T - 10 seconds")
    setInterval(() => {
        client.destroy();
        process.exit();
    }, 10000); 
}

module.exports.help = {
    name:"shutdown",
} 