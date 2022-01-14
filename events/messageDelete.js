const { RichEmbed } = require('discord.js')
module.exports = (client, msg) => {
    if(!msg.guild) return;

    if(client.snipe.get(`${client.user.id}-${msg.guild.id}`)) {
        msg.channel.send(new RichEmbed().setDescription(msg.content).setColor("RANDOM").setAuthor(msg.author.tag, msg.author.displayAvatarURL).setTimestamp(Date.now()))
    }

    client.snipe.set(msg.guild.id, { content: msg.content, time: Date.now(), author: msg.author.id })
}
