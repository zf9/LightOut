
const { RichEmbed } = require('discord.js')
const hastebin = require('hastebin')
module.exports.run = async (client, msg, args, config) => {
    msg.delete();
    if(!args.join(" ").length) return msg.channel.send('No text provided!')
    hastebin.createPaste(args.join(" "), {
        raw: false,
        contentType: 'text/plain',
        server: "https://hastebin.com"
    })
    .then(url => msg.channel.send(url))
    .catch(e => console.log(e))
    
  
}


module.exports.help = {
    name:"hastebin",
}