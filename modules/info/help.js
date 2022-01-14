const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')

module.exports.run = async (client, msg, args) => {
    msg.delete();

    if (args[0] == "nsfw")
    {
        const NSFWCommands = ('anal\nfourk\nass\ngonewild\npgif\npussy\nthigh\nboobs\n\nhentaiass\nhentai\nhmidriff\nhentaithigh\nerokemo\nkitsune\nlewd\nnekofeet\nnekopussy\nnekotits\nsolo\nwallpaper'); 
        let embed = new RichEmbed()
        .addField("NSFW Commands", NSFWCommands, true)
        .setColor(config.embed_colour)
        .setFooter(config.embed_footer)
        return msg.channel.send(embed)
    }
    if (args[0] == "animal")
    {
        const AnimalCommands = ('cat\ndog\nfox\npanda\nshiba\n'); 
        let embed = new RichEmbed()
        .addField("Animal Commands", AnimalCommands, true)
        .setColor(config.embed_colour)
        .setFooter(config.embed_footer)
        return msg.channel.send(embed)
    }
    if (args[0] == "weeb")
    {
        const WeebCommands = ('bite\nblush\ncry\ncuddle\ndance\neevee\nfeed\nfluff\nhug\nkiss\nlick\nneko\npat\npoke\nslap\nsmile\n'); 
        let embed = new RichEmbed()
        .addField("Weeb Commands", WeebCommands, true)
        .setColor(config.embed_colour)
        .setFooter(config.embed_footer)
        return msg.channel.send(embed)
    }
    if (args[0] == "misc")
    {
        const infoCommands = ('devs\nhelp\nshutdown\nclogs\ndlogs\nfakeinvite\nnitrogen\ntyping\nuserclear\npassgen\n'); 
        let embed = new RichEmbed()
        .addField("Misc Commands", infoCommands, true)
        .setColor(config.embed_colour)
        .setFooter(config.embed_footer)
        return msg.channel.send(embed)
    }
    if (args[0] == "activity")
    {
        const activityCommands = ('playing\nstreaming\nwatching\nlistening\n'); 
        let embed = new RichEmbed()
        .addField("Activity Commands", activityCommands, true)
        .setColor(config.embed_colour)
        .setFooter(config.embed_footer)
        return msg.channel.send(embed)
    }
    else
    {
        let embed = new RichEmbed()
        .addField("Misc Commands", `${config.prefix}help misc`, false)
        .addField("Activity Commands", `${config.prefix}help activity`, false)
        .addField("Animal Commands", `${config.prefix}help animal`, false)
        .addField("NSFW Commands", `${config.prefix}help nsfw`, false)
        .addField("Weeb Commands", `${config.prefix}help weeb`, false)
        .setColor(config.embed_colour)
        .setFooter(config.embed_footer)
        return msg.channel.send(embed)
    }
}

module.exports.help = {
    name:"help",
} 