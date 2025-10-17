const Discord = require("discord.js");
const meslekler = require("../ortmeslekler.json");
module.exports = {
     name: "ml.depobak",
    description: "Oyuncunun envanterini gösterir.",
    execute(message, args, connection) {
        const bilgiEmbed = new Discord.MessageEmbed()
        .setFooter("dev. by Orient")
        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (message.member.hasPermission("KICK_MEMBERS")) {
                let hex = args[1]
                if (!hex) return message.channel.send("Bilgisini bulmak istediğin deponun kodunu girmelisin!")
                let arama = "SELECT * FROM ml_inv_stashs WHERE owner = ?"
                if (hex.startsWith("steam:") === false) {
                    hex = `${hex}`
                }
    
                connection.query(arama,hex, (err,result) => {
                    let user = result[0]
                    if (!user) {
                        bilgiEmbed.setDescription("Girilen depo bulunamadı.")
                        .setColor("RED")
                        .setTitle("Hata!")
                        message.channel.send(bilgiEmbed)
                        return;
                    }
                    bilgiEmbed.setColor("GREEN")
                    .setAuthor(`${user.owner} adlı oluşumun kasa bilgileri!`, "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
					.addField(`💾・Adı` ,`${user.stashname}`)
				    message.channel.send(bilgiEmbed)
					message.channel.send(`Data ||${user.data}||`)
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