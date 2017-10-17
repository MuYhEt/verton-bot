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
            message.author.sendMessage('HI');
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

        case "profile":
        var embed = new Discord.RichEmbed()
         .addField("USERNAME", message.author.tag)
         .addField("MEMBER AT", message.guild.name)
         .setDescription(message.author.username + "'s profile")
         .setThumbnail(message.author.avatarURL)
         .setColor('RANDOM')
        message.channel.send(embed);
        break;

        default:
        message.channel.sendMessage("Invalid Command");
    }
});

bot.login(process.env.TOKEN);
