const { MessageEmbed, Message } = require("discord.js");
const schema = require("../../models/premium-guild")
const config = require(`../../botconfig/config.json`);
const day = require("dayjs")

module.exports = {
        name: `removepremium`,
        category: `Premium`,
        aliases: [`ap`],
        description: `Add Premium`,
        usage: `rp xD`,
        options: [
    {
      name: "guildid",
      description: "Guild Id Daal le Bsdk",
      required: true,
      type: "STRING"
        }
    ],
        run: async (client, message, args, guildData, player, prefix) => {

            if (!config.ownerIDS.includes(message.author.id)) {

                const nop = new MessageEmbed()
                .setColor(ee.wrongcolor)
                .setDescription(`${emoji.msg.ERROR} You are not allowed to run this command! Only Developers Are allowed to run this command`)
                return message.channel.send({embeds: [nop]})
          
          
                  }

                  if (!args[0]) return message.reply("Please Provide A Guild Id...")
        if (!client.guilds.cache.has(args[0])) return message.reply("Please Provide A Valid Guild ID")

        schema.findOne({
            Guild: args[0]
        }, async (err, data) => {
            if (!data) return message.reply(`\`\`\`\nNo Data Found\n\`\`\``);
            
            data.delete();
            const lol = new MessageEmbed()
            .setDescription("**Successfully Removed Premium**")
            .setColor(`#303037`)
            message.reply({embeds: [lol]})
        })



        }
    }

    