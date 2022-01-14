const config = require('../../config.json')

module.exports.run = (client, msg, args, config) => {
    if (!args[0]) return msg.reply('No Arguments')
    if (args.join(" ").length > 100) return msg.reply('Arguments over 100 characters (Discord Limit)')
    msg.delete();
    client.user.setActivity(args.join(" "), {
        type: "STREAMING",
        url: "https://www.twitch.tv/#"
      });
}


module.exports.help = {
    name:"streaming",
}