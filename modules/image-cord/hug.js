const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')
const gif = require("image-cord")


module.exports.run = async (client, msg, args) => {
    msg.delete();
    let image = await gif.Hug()

    let embed = new RichEmbed()
    .setImage(image)
    .setColor(config.embed_colour)
    .setFooter(config.embed_footer)
    return msg.channel.send(embed)
}

module.exports.help = {
    name:"hug",
} 