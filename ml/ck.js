const Discord = require("discord.js");
const meslekler = require("../ortmeslekler.json");
module.exports = {
    name: "ml.ck",
    description: "Hexi girilen kişiye CK atar.",
    execute(message, args, connection) {
        const ckEmbed = new Discord.MessageEmbed()
            .setFooter("dev. by Orient")
            if (message.member.hasPermission("KICK_MEMBERS")) {
                let hex = args[1]
                if (!hex) return message.channel.send("Bir hex girmelisin.")
                if (hex.startsWith("steam:") === false) {
                    hex = `steam:${hex}`
                }
                message.channel.send("Eminmisin ? Eminsen bu mesajı \`evet\` yazarak cevapla..")
                message.channel.awaitMessages(m => m.author.id === message.author.id, {
                    max:1,
                    time:10000
                }).then(c => {
                    if (c.first().content.toLowerCase() === "evet") {
                        connection.query("SELECT * FROM users WHERE identifier = ?",hex, (err,result) => {
                           let user = result[0]
                           if (user) {
                                connection.query("DELETE FROM users WHERE identifier = ?",hex, (err,results,fields) => {
                                })
                                connection.query("DELETE FROM addon_account_data WHERE owner = ?",hex, (err,results,fields) => {
                                })
								connection.query("DELETE FROM communityservice WHERE identifier = ?",hex, (err,results,fields) => {
                                })
								connection.query("DELETE FROM billing WHERE identifier = ?",hex, (err,results,fields) => {
                                })
                                connection.query("DELETE FROM characters WHERE identifier = ?",hex, (err,results,fields) => {
                                })
                                connection.query("DELETE FROM phone_calls WHERE owner = ?",hex, (err,results,fields) => {
                                })
								connection.query("DELETE FROM phone_messages WHERE owner = ?",hex, (err,results,fields) => {
                                })
								connection.query("DELETE FROM ml_stashhouse WHERE owner = ?",hex, (err,results,fields) => {
                                })
								connection.query("DELETE FROM ml_inv_stashs WHERE owner = ?",hex, (err,results,fields) => {
                                })
								connection.query("DELETE FROM ml_user_peds WHERE identifier = ?",hex, (err,results,fields) => {
                                })
								connection.query("DELETE FROM datastore_data WHERE owner = ?",hex, (err,results,fields) => {
                                })
                                connection.query("DELETE FROM user_accounts WHERE identifier = ?",hex, (err,results,fields) => {
                                })
                                connection.query("DELETE FROM user_inventory WHERE identifier = ?",hex, (err,results,fields) => {
                                })
                                connection.query("DELETE FROM user_licenses WHERE owner = ?",hex, (err,results,fields) => {
                                })
                                connection.query("DELETE FROM owned_vehicles WHERE owner = ?",hex, (err,results,fields) => {
                                })
                                connection.query("DELETE FROM phone_users_contacts WHERE identifier = ?",hex, (err,results,fields) => {
                                })
                                ckEmbed.setAuthor("İşlem başarılı!", "https://media.discordapp.net/attachments/795349438851842051/796455672413290557/logo.png?width=467&height=467")
                                .setColor("GREEN")
                                .setDescription(`${hex} HEX ID'li kişiye başarıyla CK attım ! by Orient`)
                                message.channel.send(ckEmbed)
                            } else {
                                ckEmbed.setAuthor("Hata !")
                                .setColor("RED")
                                .setDescription("Girilen ID ile bir kullanıcı bulunamadı! Lütfen tekrar deneyiniz.")
                                message.channel.send(ckEmbed)
                                return;
                            }
                        })
                    }
                })
            }  else {
                ckEmbed.setColor("RED")
                .setDescription(`Bunu yapmak için gereken yetkiye sahip değilsiniz!`)
                .setAuthor("İşlem başarısız!")
                message.channel.send(ckEmbed)
                return;
            }
    }
}