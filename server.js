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
let prefix = config.prefix;
//Mensaje de inici
  client.on("ready", () => {
  console.log("Encendido");
  client.channels.find(x => x.name === "𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉").send(":crown: Iniciando sistema :crown:");
});
client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  client.on("guildMemberAdd", member => {
    const canal = member.guild.channels.find(c => c.id === "756210199622058014");
    if (!canal) return;
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`<@${member.id}> Bienvenido a SN Army`)
      .setThumbnail(member.user.displayAvatarURL)
      .setColor("RANDOM")
      .setFooter(message.guild.name)
      canal.send(embed)
  })
//Comandos
  if (message.content.startsWith(prefix + "Reglas")) {

    const embed = new Discord.RichEmbed()
      .setTitle("📜 | Reglas del servidor")
      .setColor(0xc556d8)
      .addField("•", "No insultar")
      .addField("•","No spamear")
      .addField("͔•","No molestar por privado")
      .addField("•","No ser toxico")
      .addField("•","No pasar contenido porno, hentai o gore por general")
      .addField("•","No acosar a ninguna persona")
      .addField("•","No difundir informacion tanto publica como privada de las personas de dentro como externas a la comunidad")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "reglas")) {

    const embed = new Discord.RichEmbed()
      .setTitle("📜 | Reglas del servidor")
      .setColor(0xc556d8)
      .addField("•", "No insultar")
      .addField("•","No spamear")
      .addField("͔•","No molestar por privado")
      .addField("•","No ser toxico")
      .addField("•","No pasar contenido porno, hentai o gore por general")
      .addField("•","No acosar a ninguna persona")
      .addField("•","No difundir informacion tanto publica como privada de las personas de dentro como externas a la comunidad")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "Roles")) {
    const embed = new Discord.RichEmbed()
      .setTitle("🧾| ELEGI TU RANGO")
      .setColor(0xc556d8)
      .setDescription("• Tenes que reaccionar en el emoji que se indica para cada uno")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
   if (message.content.startsWith(prefix + "Generos")) {
    const embed = new Discord.RichEmbed()
      .setTitle("🧖| ELEGI TU GENERO")
      .setColor(0xc556d8)
      .setDescription("• Reacciona con :woman: para recibir el rol de mujer o con :man: para recibir el rol de hombre")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "Paises")) {

    const embed = new Discord.RichEmbed()
      .setTitle(":earth_americas:| ELEGI TU PAIS")
      .setColor(0xc556d8)
      .setDescription("• Reacciona con la bandera de tu pais para recibir el rol.")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "twitch")) {
    const embed = new Discord.RichEmbed()
      .setTitle("<:TwitchLogo:755632620368298085> | TWITCH")
      .setColor(0xc556d8)
      .setDescription("• Reacciona con el emoji <:TwitchLogo:755632620368298085> para recibir notificaciones cuando los streamers del servidor prendan.")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "economia")) {
    const embed = new Discord.RichEmbed()
      .setTitle(":dollar: | CASINO")
      .setColor(0xc556d8)
      .setDescription("• Reacciona con el emoji :dollar: para ver las salas del ***Casino***.")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "CsGo")) {
    const embed = new Discord.RichEmbed()
      .setTitle("<:Cs:754138621669277746> | CsGo")
      .setColor(0xc556d8)
      .setDescription("• Reacciona con el emoji <:Cs:754138621669277746> para ver las salas del ***Cs:Go***.")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "Fortnite")) {
    const embed = new Discord.RichEmbed()
      .setTitle("<:Fortnite:755640673482440745> | Fortnite")
      .setColor(0xc556d8)
      .setDescription("• Reacciona con el emoji <:Fortnite:755640673482440745> para ver las salas del ***Fortnite***.")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  if (message.content.startsWith(prefix + "Lol")) {
    const embed = new Discord.RichEmbed()
      .setTitle("<:LoL:754137357015318538> | League Of Legeds")
      .setColor(0xc556d8)
      .setDescription("• Reacciona con el emoji <:LoL:754137357015318538> para ver las salas del ***LoL***.")
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp()
    message.channel.send({ embed });
  }
  //Server
  var server = message.guild;
  if (message.content.startsWith(prefix + "Server")) {
    const embed = new Discord.RichEmbed()
      .setThumbnail(server.iconURL)
      .setAuthor(server.name, server.iconURL)
      .addField('ID', server.id, true)
      .addField('Region', server.region, true)
      .addField('Creado el', server.joinedAt.toDateString(), true)
      .addField('Dueño del Servidor', server.owner.user.tag + '(' + server.owner.user.id + ')', true)
      .addField('Miembros', server.memberCount, true)
      .addField('Roles', server.roles.size, true)
      .setColor(0x66b3ff)
    message.channel.send({ embed });
  } 
  let member = message.mentions.members.first();
  if (message.content.startsWith(prefix + "kiss")) {
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
  const embed = new Discord.RichEmbed() 
      .setImage("https://cdn.discordapp.com/attachments/399448944889036801/664504993352515594/5738ac03-e8c8-481e-a5f9-3fa14761635f.gif")
      .setAuthor(server.name, server.iconURL)  
      .setTitle(`<@${member.id}>`, "ah besado a", `<@${member.id}>`)
      .setColor(0x66b3ff)
    message.channel.send({ embed });
  };
  //Server
  if (message.content.startsWith(prefix + "avatar")) {
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    const embed = new Discord.RichEmbed() 
      .setImage(member.user.displayAvatarURL)
      .setAuthor(server.name, server.iconURL)
      .addField("Aca tenes el avatar", `<@${member.id}>`)
      .setColor(0x66b3ff)
    message.channel.send({ embed });
  }
  
//8Ball
const command = args.shift().toLowerCase();
let texto = args.join(" ");
if(command === '8ball'){
    var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
    if (!texto) return message.reply(`Escriba una pregunta.`);
    message.channel.send(`${message.author}`+ ' mi respuesta es a su pregunta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');



  
//msg consola
  client.on('ready', () => { });
  console.log("Actualizado");
//Estado de twitch
  client.user.setPresence({
    status: "STREAMING",
    game: {
      name: "SN Army | -Ayuda",
      type: "STREAMING",
      url: "https://discord.gg/3HTdCDw"
      }
    });
  }
});
client.login("NzU1NDMyNjM0NTQ4NDg2MTk2.X2DNdw.alMoI-9i_thhMPEJyHcfvtXnzr0");