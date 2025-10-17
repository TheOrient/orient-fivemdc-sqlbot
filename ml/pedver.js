const Discord = require("discord.js");
const meslekler = require("../ortmeslekler.json");
module.exports = {
    name: "ml.pedver",
    description: "Hexi girilen kişinin telefon numarasını değiştirir.",
    execute(message, args, connection) {
        const telEmbed = new Discord.MessageEmbed()
            .setFooter("dev. by Orient")
            if (message.member.hasPermission("KICK_MEMBERS")) {
                let hex = args[1]
				if (!hex) return message.channel.send("Bir hex girmelisin.")
                if (hex.startsWith("steam:") === false) {
                    hex = `steam:${hex}`
                }
                let no = args[2]
				
				connection.query("SELECT * FROM users WHERE identifier = ?",hex, (err,result) => {
                    let user = result[0]
                    if (user) {  
                        connection.query(`INSERT INTO ml_user_peds (identifier, pedmodel) VALUES ('${hex}', '${no}')`,(err,result) => {
                            if (err) console.log(err)
                            telEmbed.setColor("GREEN")
                            .setAuthor("İşlem başarılı!", "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
                            .setDescription(`${hex} ID'li kullanıcıya \`${no}\` isimli ped başarıyla verildi.`)
                            message.channel.send(telEmbed)
                        })
                    } else {
                        telEmbed.setColor("RED")
                        .setDescription(`Girilen hex ID'si ile hiçbir kullanıcı bulunamadı.`)
                        .setAuthor("İşlem başarısız!", "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
                        message.channel.send(telEmbed)
                        return;
                    }
                })
            } else {
                telEmbed.setColor("RED")
                .setDescription(`Bunu yapmak için gereken yetkiye sahip değilsiniz!`)
                .setAuthor("İşlem başarısız!", "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
                message.channel.send(telEmbed)
                return;
            }
    }
}