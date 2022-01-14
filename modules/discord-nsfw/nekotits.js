const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports.run = async (client, msg, args) => {
    msg.delete();
    const image = await nsfw.nekotits();

    let embed = new RichEmbed()
    .setImage(image)
    .setColor(config.embed_colour)
    .setFooter(config.embed_footer)
    return msg.channel.send(embed)
}

module.exports.help = {
    name:"nekotits",
} 