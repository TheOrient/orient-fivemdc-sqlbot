const Discord = require("discord.js");
const meslekler = require("../ortmeslekler.json");
module.exports = {
     name: "ml.galerikasa",
    description: ".",
    execute(message, args, connection) {
        const bilgiEmbed = new Discord.MessageEmbed()
        .setFooter("dev. by Orient")
        if (message.member.hasPermission("SEND_MESSAGES")) {
            if (message.member.hasPermission("SEND_MESSAGES")) {
                let hex = args[1]
                if (!hex) return message.channel.send("Bilgisini bulmak istediğin kasanın kodunu girmelisin!")
                let arama = "SELECT * FROM addon_account_data WHERE account_name = ?"
                if (hex.startsWith("steam:") === false) {
                    hex = `${hex}`
                }
    
                connection.query(arama,hex, (err,result) => {
                    let user = result[0]
                    if (!user) {
                        bilgiEmbed.setDescription("Hata")
                        .setColor("RED")
                        .setTitle("Hata!")
                        message.channel.send(bilgiEmbed)
                        return;
                    }
                    bilgiEmbed.setColor("GREEN")
                    .setAuthor(`${user.account_name} adlı oluşumun kasa bilgileri!`, "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
					.addField(`💾・Adı` ,`${user.account_name}`)
				    message.channel.send(bilgiEmbed)
					message.channel.send(`Data ||${user.money}||`)
                })
            } else {
                bilgiEmbed.setColor("RED")
                .setDescription(`Bunu yapmak için gereken yetkiye sahip değilsiniz!`)
                .setAuthor("İşlem başarısız!")
                message.channel.send(bilgiEmbed)
                return;
            }
        } else return

    }
}