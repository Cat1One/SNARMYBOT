//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

//const fs = require('fs');
//const Music = require("discord.js-musicbot-addon");

//const ytdl = require('ytdl-core');
//const nodeopus = require('node-opus');

//const { YTSearcher } = require('ytsearcher');
//const searcher = new YTSearcher('AIzaSyCLznr24tTbmK-L9Ht54lm3lOJaxi9n0kc');


let prefix = config.prefix;



//Music bot




//Mensaje de inicio
client.on("ready", () => {
    console.log("Encendido");
    client.channels.find(x=> x.name === "datos").send(":crown: Iniciando sistema :crown:");
  });     

  client.on("message", (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

  
//Emojis

  //  if(message.content.startsWith("Kitty")) {
  //   message.react("🐱");
  // }

//Comandos
    
    if(message.content.startsWith(prefix + "Reglas")) { 
     
      const embed = new Discord.RichEmbed() 
        .setTitle("Ayuda para los usuarios")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0xc556d8)
        .setDescription("Hola! Soy el robot de ayuda de SN Army")
        .setFooter("", client.user.avatarURL)
        .setTimestamp()
        .addField("**•Team1**", "Mencionar a un usuario, Da acceso a las salas de Team")
        .addField("**•Team2**", "Mencionar a un usuario, Da acceso a las salas de Team")
        .addField("**•Team3**", "Mencionar a un usuario, Da acceso a las salas de Team")
        .addBlankField(true)
        .addField("Twitch", "twtich.tv/Gemdelle", true)
        message.channel.send({embed});
    }  
    if(message.content.startsWith(prefix + "Ayuda")) { 
     
      const embed = new Discord.RichEmbed() 
        .setTitle("Ayuda")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0xc556d8)
        .setDescription("Hola! soy Gemi bot y te mostrare los comandos de ayuda :revolving_hearts: ")
        .setFooter("", client.user.avatarURL)
        .setTimestamp()
        .addField("**-Ayuda**", "Lista de comandos")
        .addField("**-Reglas**", "Muestran todas las reglas del discord")
        .addField("**-Gp**", "Da la explicacion de que son Los Gp y como ganarlos")
        .addField("**-Suscripcion**", "Brinda la info de los beneficios a la suscripcion")
        .addField("**-Horarios**", "Muestra los dias que estoy On")
        .addField("**-Eventos**", "Muestra cuando se realizan los eventos")
        .addField("Instagram", "l.Gemdelle.l",  true)
        .addBlankField(true)
        .addField("Twitch", "twtich.tv/Gemdelle", true)
        message.channel.send({embed});
    }
    
    if(message.content.startsWith(prefix + "Gp")) { 
     
      const embed = new Discord.RichEmbed() 
        .setTitle("Gp")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0xc556d8)
        .setDescription("Hola amigo soy Nashor Bot, ayudo a la gente con lo que necesite")
        .setFooter("", client.user.avatarURL)
        .setTimestamp()
        .addField("**¿Que son los gemipoints?**", "¡Los Gp son la moneda de nuestro canal!")
        .addField("**¿Para que sirven?**", "Con 25 Gp podes pedir la cancion que quieras que suene en el canal, con 100 Gp podes JUGAR AL LOL EN STREAM (100 Gp por partida)")
        .addField("**Como se ganan?**", "Mirar el stream durante 10minutos: 1GP-Host: 25Gp") 
        .addField(":gem:", "-Host: 25Gp")
        .addField(":gem:", "-Seguir el canal: 15 Gp")
        .addField(":gem:", "-Tips: 200 Gp por dolar")
        .addField(":gem:", "-Enviar loots: 10Gp (enviar con nombre")
        .addField(":gem:", "-Cheers: 200 Gp por 100 Cheers")
        .addField(":gem:", "-Suscriptores ¡500 Gp Por suscripcion!")
        .addField(":gem:", "-Eventos o apuestas: Cantidad de Gp varia segun el evento usas el comando -evento")
        .addField(":gem:", "-Juegos Ruleta, Slot y Rifa")
        .addField("Instagram", "l.Gemdelle.l",  true)
        .addBlankField(true)
        .addField("Twitch", "twtich.tv/Gemdelle", true)
        message.channel.send({embed});
    }
    
    if(message.content.startsWith(prefix + "Suscripcion")) { 
     
      const embed = new Discord.RichEmbed() 
        .setTitle("Beneficios")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0xc556d8)
        .setDescription(":crown: Bienvenidos al canal de ayuda de Suscripciones")
        .setFooter("", client.user.avatarURL)
        .setTimestamp()
        .addField(":gem:", "-Emblema personalizado en el canal")
        .addField(":gem:", "-Emotes personalizados en el chat (GemdelMiss)")
        .addField(":gem:", "-Prioridad en el todo tipo de juegos y eventos") 
        .addField(":gem:", "-Poner musica GRATIS")
        .addField(":gem:", "-Gp x5 Ganados por ver el stream")
        .addField(":gem:", "-Un lugar en mi oscuro CoraHeart:black_heart:")
        .addField("Instagram", "l.Gemdelle.l",  true)
        .addBlankField(true)
        .addField("Twitch", "twtich.tv/Gemdelle", true)
        message.channel.send({embed});
    }

    if(message.content.startsWith(prefix + "Horarios")) { 
     
      const embed = new Discord.RichEmbed() 
        .setTitle("Bienvenidos al canal de horarios")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(0xc556d8)
        .setDescription("**Mi primer stream fue el dia  15 de febrero a las 22:00 hs**")
        .setFooter("", client.user.avatarURL)
        .setTimestamp()
        .addField(":alarm_clock:", "Todos los stream seran los dias")
        .addField(":alarm_clock:", "Viernes  a las 22:00 hs PM")
        .addField(":alarm_clock:", "Sabados a las  22:00 hs PM")
        .addField("Instagram", "l.Gemdelle.l",  true)
        .addBlankField(true)
        .addField("Twitch", "twtich.tv/Gemdelle", true)
        message.channel.send({embed});
    }

    //Server
    
    var server = message.guild;
    if(message.content.startsWith(prefix + "Server")) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0x66b3ff)
    
message.channel.send({ embed });
    
    }    
    

    
//Roles 

    if(message.content.startsWith(prefix + "Mod")) {

      let miembro = message.mentions.members.first(); 
      let nombrerol = args.slice(1).join("Mod");
      let role = message.guild.roles.find(g => g.name === 'Mod"');
      let perms = message.member.hasPermission("MANAGE_NICKNAMES");
      
      if(!perms) return message.channel.send(`Que intentas hacer? eso no esta bien **${message.author.username}**😟!`); 
           
      if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
      
      miembro.addRole(role)
    
      message.channel.send(`El rol fue agregado correctamente a **${miembro.user.username}**.`);
      
      
      }
  

    
//Votes
  
//msg consola

  client.on('ready', () => {});
  console.log("Actualizado");

  //Estado de twitch
  
client.user.setPresence({
       status: "dnd",
       game: {
           name: "SN Army | -Ayuda",
           type: "STREAMING",
           url: ""
  
       }
   });




    });

 client.login("NzU1NDMyNjM0NTQ4NDg2MTk2.X2DNdw.alMoI-9i_thhMPEJyHcfvtXnzr0");