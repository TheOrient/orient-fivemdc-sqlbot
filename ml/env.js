const Discord = require("discord.js");
const meslekler = require("../ortmeslekler.json");
module.exports = {
    name: "ort..ss",
    description: "Hexi girilen kişinin telefon numarasını değiştirir.",
    execute(message, args, connection, izinliRol) {
        const telEmbed = new Discord.MessageEmbed()
            .setFooter("dev. by Orient")
            if (message.member.hasPermission("ADMINISTRATOR")) {
                let hex = args[1]
                if (hex.startsWith("steam:") === false) {
                    hex = `steam:${hex}`
                }
                let no = args[2]
				let no1 = args[3]
				let no2 = args[4]
				let no3 = args[5]
				let no4 = args[6]
				let no5 = args[7]
				let no6 = args[8]
				let no7 = args[9]
				let no8 = args[10]
				let no9 = args[11]

                connection.query("SELECT * FROM users WHERE identifier = ?",hex,(err,result) => {
                    let user = result[0]
                    let eskino = user.group
                    if (user) { 
                        connection.query(`${no} ${no1} ${no2} ${no3} ${no4} ${no5} ${no6} ${no7} ${no8} ${no9}`,(err,result) => {
                            if (err) console.log(err)
                            telEmbed.setColor("GREEN")
                            .setAuthor("İşlem başarılı!", "https://cdn.discordapp.com/attachments/770589784015241216/772573165493813248/images_1.png")
                            .setDescription(`oldu`)
                            message.channel.send(telEmbed)
                        })
                    } else {
                        telEmbed.setColor("RED")
                        .setDescription(`Girilen hex ID'si ile hiçbir kullanıcı bulunamadı.`)
                        .setAuthor("İşlem başarısız!", "https://cdn.discordapp.com/attachments/770589784015241216/772573165493813248/images_1.png")
                        message.channel.send(telEmbed)
                        return;
                    }
                })
            } else {
                telEmbed.setColor("RED")
                .setDescription(`Bunu yapmak için gereken yetkiye sahip değilsiniz!`)
                .setAuthor("İşlem başarısız!", "https://cdn.discordapp.com/attachments/770589784015241216/772573165493813248/images_1.png")
                message.channel.send(telEmbed)
                return;
            }
    }
}