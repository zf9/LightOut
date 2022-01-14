const Discord = require('discord.js')
const snekfetch = require("snekfetch")
var setTitle = require('console-title');
const express = require("express")
const server = express()
const config = require('../config.json')

module.exports = (client) => {
    client.afk = new Discord.Collection()
    client.copycat = new Discord.Collection()
    client.snipe = new Discord.Collection()
    client.editmode = new Discord.Collection()
    client.emotemode = new Discord.Collection()
    client.giveaway = new Discord.Collection()

    //console.log(`\x1b[36mLogged in as: ${client.user.tag}\x1b[0m | \x1b[34mGuild Count: ${client.guilds.size}\x1b[0m`)
      try
      {
          snekfetch.get("https://artii.herokuapp.com/make?text=User: " + client.user.username + "&font=standard").then(r => {
            console.log("\x1b[35m██╗     ██╗ ██████╗ ██╗  ██╗████████╗ ██████╗ ██╗   ██╗████████╗\n██║     ██║██╔════╝ ██║  ██║╚══██╔══╝██╔═══██╗██║   ██║╚══██╔══╝\n██║     ██║██║  ███╗███████║   ██║   ██║   ██║██║   ██║   ██║\n██║     ██║██║   ██║██╔══██║   ██║   ██║   ██║██║   ██║   ██║\n███████╗██║╚██████╔╝██║  ██║   ██║   ╚██████╔╝╚██████╔╝   ██║\n╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝  ╚═════╝    ╚═╝\x1b[0m")
            console.log("\x1b[36m" + r.text + "\x1b[0m");
            console.log(`\x1b[32mCurrent Command Count: ${client.commands.size}\x1b[0m`) 
            console.log(`\x1b[33mUser Guild Count: ${client.guilds.size}\x1b[0m`)
            setTitle(`[Lightout] Selfbot User: ${client.user.username}#${client.user.discriminator}`);
            /*
            keepAlive()
            server.all("/penis", (req, res) => {
                res.json({ "username": `${client.user.username}`, "discriminator": `${client.user.discriminator}`, "GuildCount": `${client.guilds.size}`, "Prefix": `${config.prefix}`, "EColour": `${config.embed_colour}` })
            })
            */
        });
      } catch (error)
      {
          process.exit(9);
      }      
}
/*
server.all("/", (req, res) => {
    res.send("[Lightout] Active!")
})

server.all("/2", (req, res) => {
  res.json({ "message": "User", "success": true })
})


function keepAlive() {
    server.listen("3000" || 5000, () => {
      console.log("Server is ready.")
    })
}
*/