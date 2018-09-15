const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', function(message){
    if(message.author.bot) return; //ignore other bots

    db.add(message.author.id, 1); //increment author's message count

    //Check for promotion
    db.fetch(message.author.id).then((res)=>{
        if(res >= config.milestone1 && !message.member.roles.has(config.tier1)){
            message.member.addRole(config.tier1);
            message.reply("Congratulations! You have sent " + config.milestone1 + " messages and have been awarded a new role!");
        }
        if(res >= config.milestone2 && !message.member.roles.has(config.tier2)) {
            message.member.addRole(config.tier2);
            message.reply("Congratulations! You have sent " + config.milestone2 + " messages and have been awarded a new role!");
        }
        if(res >= config.milestone3 && !message.member.roles.has(config.tier3)) {
            message.member.addRole(config.tier3);
            message.reply("Congratulations! You have sent " + config.milestone3 + " messages and have been awarded a new role!");
        }
        if(res >= config.milestone4 && !message.member.roles.has(config.tier4)) {
            message.member.addRole(config.tier4);
            message.reply("Congratulations! You have sent " + config.milestone4 + " messages and have been awarded a new role!");
        }
    });
    
    //commands
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //call !rank to see how many total messages you have sent.
    if(command === "rank") {
       db.fetch(message.author.id).then((res)=> message.reply("You have sent " + res + " messages!"));  
    }

    //Anyone with the role of admin (as set in the config.json file) can call !set <VALUE> or !set <VALUE> <@MEMBER> to change their total sent.
    if(command === "set" && message.member.roles.has(config.admin)) {
        let member = message.mentions.members.first() || message.author;
        db.set(member.id, Number(args[0]));
     }
});

client.login(config.token);