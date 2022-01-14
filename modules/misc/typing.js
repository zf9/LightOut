const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')
const message = require('../../events/message')


module.exports.run = async (client, msg, args) => {
    if (!args[0]) return msg.reply('No Arguments start/stop')
    if (args[0] == "start")
    {
        msg.delete();
        return msg.channel.startTyping()
    }
    if (args[0] == "stop")
    {
        msg.delete();
        return msg.channel.stopTyping()
    }
    else
    {
        msg.delete();
        msg.reply("Invalid Args start/stop")
    }

}

module.exports.help = {
    name:"typing",
} 