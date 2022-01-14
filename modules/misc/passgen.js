const { RichEmbed } = require('discord.js')
const r = require('node-superfetch')
const config = require('../../config.json')
var passwordgen = require('generate-password');


module.exports.run = async (client, msg, args) => {
    if (!args[0]) return msg.reply('No Arguments password length')
    if (!args[0]) return msg.reply('No Arguments generate amount')
    if (args[1] > 5) return msg.reply("Max password generator is set to 5")
    //    if (args.join(" ").length > 100) return msg.reply('Arguments over 100 characters (Discord Limit)')
    var password = passwordgen.generateMultiple(args[1], {
        length: args[0],
        numbers: true
    });
    msg.delete();
    if (args[1] == 1)
    {
        msg.reply("\nGenerated Password: " + password[0])
    }
    if (args[1] == 2)
    {
        msg.reply("\nGenerated Password 1: " + password[0] + "\nGenerated Password 2: " + password[1])
    }
    if (args[1] == 3)
    {
        msg.reply("\nGenerated Password 1: " + password[0] + "\nGenerated Password 2: " + password[1] + "\nGenerated Password 3: " + password[2])
    }
    if (args[1] == 4)
    {
        msg.reply("\nGenerated Password 1: " + password[0] + "\nGenerated Password 2: " + password[1] + "\nGenerated Password 3: " + password[2] + "\nGenerated Password 4: " + password[3])
    }
    if (args[1] == 5)
    {
        msg.reply("\nGenerated Password 1: " + password[0] + "\nGenerated Password 2: " + password[1] + "\nGenerated Password 3: " + password[2] + "\nGenerated Password 4: " + password[3] + "\nGenerated Password 5: " + password[4])
    }
}

module.exports.help = {
    name:"passgen",
} 