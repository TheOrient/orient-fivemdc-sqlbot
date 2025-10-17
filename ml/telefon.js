const Discord = require("discord.js");
const meslekler = require("../ortmeslekler.json");
module.exports = {
    name: "ml.telefon",
    description: "Telefon numarası ile oyuncu aratır.",
    execute(message, args, connection) {
        const numaraEmbed = new Discord.MessageEmbed()
        .setFooter("dev. by Orient")
        if (message.member.hasPermission("KICK_MEMBERS")) {
            if (message.member.hasPermission("KICK_MEMBERS")) {
                let numara = args[1]
                if (!numara) return message.channel.send("Bir numara girmelisin.")
                let aranacak = "SELECT * FROM users WHERE phone_number = ?"
                connection.query(aranacak,numara, (err,result) => {
                    let user = result[0]
                    if (!user) {
                        numaraEmbed.setColor("RED")
                        .setAuthor("Hata !", "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
                        .setDescription("Belirtilen numara ile bir kişi bulunamadı. Lütfen numarayı kontrol edip tekrar deneyiniz.")
                        message.channel.send(numaraEmbed)
                        return;
                    }
                    numaraEmbed.setAuthor(`${numara} numarasının bilgileri`, "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
                    .addField("Steam ismi",user.name)
                    .addField("Hex ID",user.identifier)
                    .addField("IC İsmi",`${user.firstname} ${user.lastname}`)
                    .addField("Grup",user.group)
                    .setColor("GREEN")
                    message.channel.send(numaraEmbed)
                })
            } else {
                numaraEmbed.setColor("RED")
                .setDescription(`Bunu yapmak için gereken yetkiye sahip değilsiniz!`)
                .setAuthor("İşlem başarısız!")
                message.channel.send(numaraEmbed)
                return;
            }
        } else return
    }
}