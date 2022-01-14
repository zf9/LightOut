const { RichEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports.run = (client, msg, args) => {
    msg.delete();
    let user = msg.mentions.users.first()
    if(!user) user = msg.author
    let replies = [
        "**8=D**\n\nFucking Small 1 inch",
        "**8==D**\n\nSmall 2 inches",
        "**8===D**\n\nSmall But Okay 3 inches",
        "**8====D**\n\nNot Bad 4 inches",
        "**8=====D**\n\nNice 5 inches",
        "**8======D**\n\nInsane 6 inches",
         ]
     
         let random = Math.floor(Math.random() * replies.length)
     
         let embed = new RichEmbed()
         .setTitle(`${user.tag}`)
         .setDescription(`${replies[random]}`)
         .setColor(config.embed_colour)
         .setFooter(config.embed_footer)
         msg.channel.send(embed)

}


module.exports.help = {
    name:"penis",
}