
const { RichEmbed } = require('discord.js')
const urban = require('relevant-urban')
module.exports.run = async (client, msg, args, config) => {
    if (!args[0]) return msg.reply('No Arguments')
    msg.delete();
    try {
    const search = await urban(args.join(" "))
    let embed = new RichEmbed()
    .setTitle(search.word)
    .setDescription(`Definition: ${search.definition}\n\nExample: ${search.example}\n\nINFO: ID: ${search.id} : URL: ${search.urbanURL}`)
    .setColor(config.embed_colour)
    .setFooter(config.embed_footer)
    msg.channel.send(embed)
} catch(err) {
    return msg.reply('Could not find Argument')
}
    
    
  
}


module.exports.help = {
    name:"urban",
    usage:"*urban <search>",
    group: "search",
    desc: "*urban <text>",
    example:"*urban selfbots",
}