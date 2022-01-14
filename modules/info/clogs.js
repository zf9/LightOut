const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')

module.exports.run = async (client, msg, args) => {
    msg.delete();
    return msg.channel.send({file: "./Command.log"})
}

module.exports.help = {
    name:"clogs",
} 