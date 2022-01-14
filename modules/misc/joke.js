const { RichEmbed } = require('discord.js')
const InsultCompliment = require("insult-compliment");
const config = require('../../config.json')
module.exports.run = async (client, msg, args) => {
    msg.delete();
    msg.channel.send(new RichEmbed().setDescription(InsultCompliment.Insult()).setColor(config.embed_colour).setFooter(config.embed_footer))     

   
}


module.exports.help = {
    name:"joke",
} 