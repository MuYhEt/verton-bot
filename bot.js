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
bot.user.setGame("Online | "+PREFIX+"help")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
        message.delete();
        break;

        case "ping":
        message.channel.sendMessage("pong!");
        break;

        case "info":
        message.channel.sendMessage("EU SOU UM BOT FODA PRA CARALHO QUE FAZ COISA PRA CARALHO MERMAUM!");
        break;

        case "8ball":
            if (args[1]) message.channel.sendMessage(f8ball[Math.floor(Math.random() * f8ball.length)]);
            else message.channel.sendMessage("Can't read that");
            break;


        break;

        //Sad
        case "naruto":
        message.channel.sendMessage("**SUPER SADNESS TIME**: https://youtu.be/CS-2yV8QbtY");
        break;

        case "avatar":
        message.channel.sendMessage("**"+message.author.username + "'s avatar URL:** " + message.author.avatarURL);
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
