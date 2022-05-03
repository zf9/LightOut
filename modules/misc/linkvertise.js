const { RichEmbed } = require('discord.js')
//var TinyURL = require('tinyurl');
const config = require('../../config.json')
const request = require('node-superfetch');
const message = require('../../events/message');

module.exports.run = async (client, msg, args) => {
    msg.delete();
    if (!args[0]) return msg.reply('No Arguments')
    try {
        const { body } = await request.get('https://bypass.bot.nu/bypass2?url=' + args[0]);
        msg.reply(body.destination);
    } catch (err) {
        console.error(err);
    }
    //TinyURL.shorten(args[0]).then(function(res) {
    //msg.reply(res);
    //});
}

module.exports.help = {
    name:"linkvertise",
} 