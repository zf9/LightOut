const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const gen = require("images-generator");
const config = require('../../config.json')



module.exports.run = async (client, msg, args) => {
    msg.delete();
    let PPImage = await gen.animal.panda();
    let embed = new RichEmbed()
    .setImage(PPImage)
    .setColor(config.embed_colour)
    .setFooter(config.embed_footer)
    return msg.channel.send(embed)
}

module.exports.help = {
    name:"panda",
} 