const Discord = require("discord.js");
module.exports = {
    name: "ml.faturabilgi",
    description: "Hexi girilen kişiye ait faturaları gösterir.",
    execute(message, args, connection) {
        const faturaEmbed = new Discord.MessageEmbed()
        .setFooter("dev. by Orient")
        if (message.member.hasPermission("KICK_MEMBERS")) {
            let hex = args[1]
            if (!hex) return
            if (hex.startsWith("steam:") === false) {
                hex = `steam:${hex}`
            }
            connection.query("SELECT * FROM billing WHERE identifier = ?",hex,(err,result) => {
                if (result) {
                    let faturalar = []
                    let i = 1
                    result.forEach(res => {
                        faturalar.push(`${i}) Sebep: ${res.label} --> Miktar: **${res.amount}$**`)
                        i++
                    })
                    faturaEmbed.setColor("GREEN")
                    .setDescription(faturalar)
                    .setAuthor(`${hex.replace("steam:","")} kişisinin faturaları`, "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
                    message.channel.send(faturaEmbed)
                } else {
                    faturaEmbed.setColor("RED")
                    .setDescription(`Girilen Hex ID ile fatura bulunamadı!`)
                    .setAuthor("İşlem başarısız!")
                    message.channel.send(faturaEmbed)
                    return;
                }
            })
        } else {
            faturaEmbed.setColor("RED")
            .setDescription(`Bunu yapmak için gereken yetkiye sahip değilsiniz!`)
            .setAuthor("İşlem başarısız!")
            message.channel.send(faturaEmbed)
            return;
        }
    }
}