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
//////////////////////DESDE AQUI EMPIEZA EL BOT//////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
let prefix = config.prefix;
//////////////////////BIENVENIDA//////////////////////
  client.on("ready", () => {
  console.log("Encendido");
  client.channels.find(x => x.name === "𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉").send(":crown: Iniciando sistema :crown:");});
//////////////////////BIENVENIDA//////////////////////
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
      canal.send(embed)})
//////////////////////REGLAS//////////////////////
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
      message.channel.send({ embed });}
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
      message.channel.send({ embed });}
//////////////////////SERVER//////////////////////
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
      message.channel.send({ embed });}
//////////////////////KISS//////////////////////
  let member = message.mentions.members.first();
  if (message.content.startsWith(prefix + "kiss")) {
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
  const embed = new Discord.RichEmbed() 
      .setImage("https://cdn.discordapp.com/attachments/399448944889036801/664504993352515594/5738ac03-e8c8-481e-a5f9-3fa14761635f.gif")
      .setAuthor(server.name, server.iconURL)  
      .addField(`<@${member.id}>`, "ah besado a")
      .setColor(0x66b3ff)
    message.channel.send({ embed });}
//////////////////////AVATAR//////////////////////
  if (message.content.startsWith(prefix + "avatar")) {
   if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    const embed = new Discord.RichEmbed() 
      .setImage(member.user.displayAvatarURL)
      .setAuthor(server.name, server.iconURL)
      .addField("Aca tenes el avatar", `<@${member.id}>`)
      .setColor(0x66b3ff)
      .setTimestamp()
      message.channel.send({ embed });}

if (message.content === 'restart') {
  if (message.author.id !== '355866404714577920') return;
  message.channel.send('Restarted.').then(() => {
  process.exit(1);
})
};
//////////////////////8Ball//////////////////////
const command = args.shift().toLowerCase();
let texto = args.join(" ");
if(command === '8ball'){
    var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
    if (!texto) return message.reply(`Escriba una pregunta.`);
    message.channel.send(`${message.author}`+ ' mi respuesta es a su pregunta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
//////////////////////MSG_CONSOLA//////////////////////
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