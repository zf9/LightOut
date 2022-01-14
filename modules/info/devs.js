const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')

module.exports.run = async (client, msg, args) => {
    msg.delete();
    let embed = new RichEmbed()
    //.addField("This is a field", "this is its description" , true)
    .setDescription("ZF9#1214")
    .setColor(config.embed_colour)
    .setFooter(config.embed_footer)
    return msg.channel.send(embed)
}

module.exports.help = {
    name:"devs",
} 