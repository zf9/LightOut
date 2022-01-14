process.on("unhandledRejection", (err) => {return console.log(`unhandledRejection: ${err}`)})
process.on("uncaughtException", (err) => {return console.log(`uncaughtException: ${err}`)})

console.log('\033[2J' + '\033[2J');
console.clear();
const Discord = require('discord.js')
const fs = require('fs')
const { RichEmbed } = require('discord.js')
const fetch = require('superagent')
const axios = require('axios').default;
const config = require('./config.json')
require('events').EventEmitter.defaultMaxListeners = 15
var setTitle = require('console-title');
setTitle(`[Lightout] Loading...`);

//let client = new Discord.Client()

const client = new Discord.Client({
  ws: { properties: { $browser: "Discord iOS" } },
});


client.commands = new Discord.Collection()
fs.readdirSync("./modules").forEach(folders => {
    fs.readdirSync(`./modules/${folders}`).forEach(i => { 
     if (!i.endsWith(".js")) return;
     let commandFile = i.split(".")[0].trim()
     client.commands.set(commandFile, require(`./modules/${folders}/${commandFile}.js`))
     //console.log("Loaded: " + commandFile) 
    })
})

const evtFiles = fs.readdirSync("./events/")
evtFiles.forEach(file => {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
});

//console.log(`Loaded ${evtFiles.length} events.`)


client.login(config.token).catch(err => console.error("Incorrect login details were provided."))

/*
client.on("message", async (message) => {
  if(!message.content.includes("discord.gift/")) return;
  const code = message.content.slice(message.content.split("discord.gift/")[0].length).trim().split(/ +/)[0].split('/')[1]
  //console.log(code);

  fetch.post(`https://discord.com/api/v9/entitlements/gift-codes/${code}/redeem`).set("Authorization", config.token).end((err, f) => {
      if(f.body.code) {
          try
          {

            if(f.body.code === 50050) console.log("Nitro Code: " + code + ' [Used].');
            if(f.body.code === 10038) console.log("Nitro Code: " + code + ' [Invalid].');
            if(f.body.code === 50050) return client.channels.get('924211061870166102').send("Nitro Code: " + code + ' [Used].');
            if(f.body.code === 10038) return client.channels.get('924211061870166102').send("Nitro Code: " + code + ' [Invalid].');
          }
          catch (error)
          {

          }
      }  
  })

})

*/



client.on("message", async (message) => {
  if (config.NitroSniper == true)
  {
    if (message.content.includes('discord.gift/')) {
      let indexNum = message.content.search("discord.gift/") + 13;
      let giftCode = message.content.substring(indexNum, indexNum + 16);
  
      if (giftCode.length === 16) {
          //console.log('Gift code:', giftCode);
          url = `https://discordapp.com/api/v9/entitlements/gift-codes/${giftCode}/redeem`;
          axios({
              method: 'POST',
              url: url,
              headers:
              {
                  'Authorization': config.token
              }
          }).then(r => client.channels.get(config.Log_ChannelID).send(`Successfully redeemed Nitro ${giftCode}\nServer Name: ${message.guild.name}\nUser: ${message.author.tag}`)).catch(e => client.channels.get(config.Log_ChannelID).send(`Nitro Code: ${giftCode} [Invalid]\nServer Name: ${message.guild.name}\nUser: ${message.author.tag}`));
      }
  }
  }
})

client.on("debug", (e) => {
  try {
      fs.appendFile('debug.txt', e + "\n", function (err) {
  })
  } catch (err) {
      console.error(err)
  }
}); 