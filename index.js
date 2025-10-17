const Discord = require("discord.js");
const client = new Discord.Client()
const ayarlar = require("./config.json");
const meslekler = require("./ortmeslekler.json"); 
const fs = require("fs");

// MYSQL //
const mysql = require("mysql");
const connection = mysql.createConnection(ayarlar.sql)

connection.connect(err => {
    if (err) {
        console.log("\x1b[32mDatabase \x1b[0mile bağlantı \x1b[31msağlanamadı ! \x1b[0mBot kapanacaktır. Lütfen database bağlantınızı kontrol edip tekrar deneyiniz.") // XAMPP açın.
        setTimeout(() => {
            process.exit(1)
        },3000)
        return;
    }
    console.log("\x1b[32mDatabase \x1b[0mile bağlantı başarıyla sağlandı ! / Orient#6666")
})
//////////////////////////////////


// ENVIRONMENT VARIABLES (.env) //
require("dotenv").config()
var token = process.env.TOKEN;
var prefix = process.env.PREFIX;
//////////////////////////////////

// ANA KOD //
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./ml/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./ml/${file}`);

  client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`\x1b[31m${client.user.tag} \x1b[0molarak Discord'a bağlanıldı! Orient`)
});

client.on("message", async (message) => {
    let args = message.content.substring(prefix.length).split(" ")
    let command = client.commands.get(args[0])

    if (command) {
        command.execute(message,args,connection)
    } else return
});



client.login(token)
