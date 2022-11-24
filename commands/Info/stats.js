const { MessageEmbed } = require("discord.js");
const Discord  = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const {
  getRandomInt
} = require("../../handlers/functions")
module.exports = {
    name: "stats",
    category: "Info",
    aliases: ["musicstats"],
    cooldown: 10,
    usage: "stats",
    description: "Shows music Stats, like amount of Commands and played Songs etc.",
    run: async (client, message, args, guildData, player, prefix) => {
        try {
            let totalSeconds = message.client.uptime / 1000;
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            
            let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  
            let connectedchannelsamount = 0;
            let guilds = client.guilds.cache.map((guild) => guild);
            for (let i = 0; i < guilds.length; i++) {
                if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
            }
            if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;

            const statsEmbed = new Discord.MessageEmbed()
            .setColor("#303037")
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
            .setDescription(`[Invite](${config.links.opmusicinv}) ● [Support Server](${config.links.server})`)
            .setFooter(ee.footertext, ee.footericon)
            .addFields (
                { name: `🌐 • **Servers**`, value: `\`\`\`Total: ${client.guilds.cache.size} servers\`\`\``, inline: true },
                { name: `👥 • **Users**`, value: `\`\`\`Total: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} users\`\`\``, inline: true },
                { name: `🎟 • **Node Version**`, value: `\`\`\`v${process.versions.node}\`\`\``, inline: true },
                { name: `🎈 • **Discord.js**`, value: `\`\`\`v13.1.0\`\`\``, inline: true },
                { name: `🔰 • **Uptime**`, value: `\`\`\`${uptime}\`\`\``, inline: true },
                { name: `🏘 • **Ping**`, value: `\`\`\`${client.ws.ping}ms\`\`\``, inline: true },
                { name: `🎙 • **Music**`, value: `\`\`\`Playing Music In ${connectedchannelsamount} Servers\`\`\``, inline: true },
                { name: `♦ • **Developers**`, value: `\`\`\`\nDayyan#8345\nNOBITA♡#1541\nMr.Yogi#0360\nS H I V A M. B A B Y#0002\n\`\`\``, inline: true }
            )
            message.channel.send({embeds: [statsEmbed]});
        } catch (e) {
            console.log(String(e.stack).bgRed)
			const emesdf = new MessageEmbed()
			.setColor(ee.wrongcolor)
			.setAuthor(`An Error Occurred`)
			.setDescription(`\`\`\`${e.message}\`\`\``);
			return message.channel.send({embeds: [emesdf]});
        }
    }
}