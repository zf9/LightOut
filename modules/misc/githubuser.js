const { RichEmbed } = require('discord.js')
//var TinyURL = require('tinyurl');
const config = require('../../config.json')
const request = require('node-superfetch');

module.exports.run = async (client, msg, args) => {
    msg.delete();
    if (!args[0]) return msg.reply('No Github Username provided')
    try {
        const { body } = await request.get('https://api.github.com/users/' + args[0])
        let embed = new RichEmbed()
        .setAuthor(body.login, body.avatar_url, body.html_url)
        .setDescription(`
        **Name**: ${body.name || "No Data"}
        **Company**: ${body.company || "No Data"}
        **Blog**: ${body.blog || "No Data"}
        **Location**: ${body.location || "No Data"}
        **Public Email**: ${body.email || "No Data"}
        **Hireable**: ${body.hireable || "No Data"}
        **Bio**: ${body.bio || "No Data"}
        **Public Repos**: ${body.public_repos || "No Data"}
        **Followers**: ${body.followers || "No Data"}
        **Following**: ${body.following || "No Data"}
        **Created At**: ${body.created_at || "No Data"}
        **Updated At**: ${body.updated_at || "No Data"}

        `)
        .setColor(config.embed_colour)
        .setFooter(config.embed_footer)
        return msg.channel.send(embed)
    } catch (err) {
        console.error(err);
        msg.reply("404 User not found!")
    }
}

module.exports.help = {
    name:"githubuser",
} 