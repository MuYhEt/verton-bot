// Library
const Discord = require('discord.js');
var bot = new Discord.Client();

const PREFIX = "v!";

//Functions 8ball
var f8ball = [
    "Yes",
    "No",
    "Maybe"
];

// Functions
bot.on("ready", function() {
console.log("Ready");
bot.user.setGame("24/7 | "+PREFIX+"help")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
            var embed = new Discord.RichEmbed()
            .addField("About us", "A project made for studies, done by a single person. The bot can still be considered in pre-pre-pre-alpha.")
            .addField("Commands", "Ping, 8ball",true)
            .addField("Prefix", PREFIX, true)
            .addField("Made by", "<@220690100332265472>")
            .setDescription("Developers Lab - Community")
           .setFooter("Our discord - discord.gg/qrgAPGU")
            .setThumbnail(message.author.avatarURL)
            .setColor('RANDOM')
           message.author.sendMessage(embed);
        message.delete();
        break;

        case "ping":
        message.channel.sendMessage(`:white_check_mark:  **| PONG!** - \`${Date.now() - message.createdTimestamp} ms\``);
        break;

        case "8ball":
            if (args[1]) message.channel.sendMessage(f8ball[Math.floor(Math.random() * f8ball.length)]);
            else message.channel.sendMessage("Can't read that");
            break;


        break;

        case "user":
        var embed = new Discord.RichEmbed()
        .addField("ID", message.author.id,true)
        .addField("Nickname", ${message.author.tag},true)
        .addField("Account Created",message.author.createdAt,true)
        .setTitle(message.author.tag,true)
        .setDescription("User Details")
        .setFooter("discord.gg/qrgAPGU")
        .setThumbnail(message.author.avatarURL)
        .setColor('RANDOM')
        message.channel.send(embed);
        break;

        default:
        message.channel.sendMessage("Invalid Command");
    }
});

bot.login(process.env.TOKEN);
