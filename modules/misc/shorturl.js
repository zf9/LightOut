const shorten = require('node-url-shortener')
const { RichEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports.run = async (client, msg, args) => {
    if(!args[0]) return msg.reply('No URL provided!')
    msg.delete();
   shorten.short(args[0], function(err, url) {
       if(err) throw err;
       msg.channel.send(new RichEmbed().setDescription(url).setColor(config.embed_colour).setFooter(config.embed_footer))
   })
    
}
   
   
module.exports.help = {
    name:"shorturl",
}