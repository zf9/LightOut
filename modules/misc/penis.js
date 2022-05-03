const { RichEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports.run = (client, msg, args) => {
    msg.delete();
    let user = msg.mentions.users.first()
    if(!user) user = msg.author
    let replies = [
        "**8=D**\n\nHas A Good Personality",
        "**8==D**\n\nSmall 2 inches",
        "**8===D**\n\nSmall But Okay 3 inches",
        "**8====D**\n\nNot Bad 4 inches",
        "**8=====D**\n\nNice 5 inches",
        "**8======D**\n\nInsane 6 inches",
         ]
    let result = Math.floor((Math.random() * replies.length));
    let embed = new RichEmbed()
    .setAuthor(user.tag, user.displayAvatarURL)
    .setColor(config.color)
    .setDescription(replies[result])
    .setFooter(config.copy)
    .setTimestamp()
    msg.channel.send(embed)
}


module.exports.help = {
    name:"penis",
}