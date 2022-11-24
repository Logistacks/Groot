const Discord = require("discord.js");
const config = require("../../botconfig/config.json");

module.exports = async (client, message, guild, cmd) => {    

console.table({ 
      'Bot User:' : `${client.user.tag}` ,
      'Guild(s):' : `${client.guilds.cache.size} Servers` ,
      'Watching:' : `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members` ,
      'Prefix:' : `${config.prefix}` ,
      'Commands:' : `${client.commands.size}` ,
      'Discord.js:' : `v${Discord.version}` ,
      'Node.js:' : `${process.version}` ,
      'Plattform:' : `${process.platform} ${process.arch}` ,
      'Memory:' : `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`
    }) 
  
      console.log("\n")
      console.log(`[CLIENT] => [READY] ${client.user.tag} IS READY...`.bold.bgWhite.brightMagenta)

}

  