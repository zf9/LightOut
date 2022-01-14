const { RichEmbed } = require('discord.js')
//var TinyURL = require('tinyurl');
const config = require('../../config.json')
const request = require('node-superfetch');

module.exports.run = async (client, msg, args) => {
    msg.delete();
    if (!args[0]) return msg.reply('No Email provided')
    try {
        const { body } = await request.get('https://open.kickbox.com/v1/disposable/' + args[0])
        let embed = new RichEmbed()
        .setAuthor(args[0])
        .setDescription(`Temp Email: ${body.disposable}`)
        .setColor(config.embed_colour)
        .setFooter(config.embed_footer)
        return msg.channel.send(embed)
    } catch (err) {
        console.error(err);
        msg.reply("404!")
    }
}

module.exports.help = {
    name:"tempcheck",
} 