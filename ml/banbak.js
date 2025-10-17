const Discord = require("discord.js");
const meslekler = require("../ortmeslekler.json");
module.exports = {
    name: "ml.banbak",
    description: "Oyuncunun kimliğini gösterir.",
    execute(message, args, connection) {
        const bilgiEmbed = new Discord.MessageEmbed()
        .setFooter("dev. by Orient")
        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (message.member.hasPermission("KICK_MEMBERS")) {
                let hex = args[1]
                if (!hex) return message.channel.send("Bilgisini bulmak istediğin oyuncunun HEX ID'sini girmelisin!")
                let arama = "SELECT * FROM ml_banlist WHERE steam = ?"
                if (hex.startsWith("steam:") === false) {
                    hex = `steam:${hex}`
                }
    
                connection.query(arama,hex, (err,result) => {
                    let user = result[0]
                    if (!user) {
                        bilgiEmbed.setDescription("Girilen Hex ID'si ile banlanan bir kullanıcı bulunamadı.")
                        .setColor("RED")
                        .setTitle("Hata!")
                        message.channel.send(bilgiEmbed)
                        return;
                    }
                    
                    bilgiEmbed.setColor("GREEN")
                    .setAuthor(`${user.name} isimli kişinin ban bilgileri!`, "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
                    .addField(`📃・İsmi` ,`${user.name}`)
					.addField(`🔧・Steam` ,`${user.steam}`)
					.addField(`🎤・Discord` ,`${user.discord}`)
					.addField(`💻・Banlayan` ,`${user.admin}`)
                    .addField(`📆・Süre` ,`${user.time}`)
					message.channel.send(bilgiEmbed)
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