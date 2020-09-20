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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
let prefix = config.prefix;
const token = "NzU1NDMyNjM0NTQ4NDg2MTk2.X2DNdw.alMoI-9i_thhMPEJyHcfvtXnzr0";
////////////////////////////// MENSAJE DE INICIO //////////////////////////////
  client.on("ready", () => {
  console.log("Encendido");
  client.channels.find(x => x.name === "𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙄𝙊𝙉").send(":crown: Iniciando sistema :crown:");
});
////////////////////////////// BIENVENIDA //////////////////////////////
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
  
client.on("messageReactionAdd", async (reaction, user) => {

const emoji = "😋";

const channel = client.channels.cache.get("755642173801758750") // Aca pondremos la ID del canal en donde estara el mensaje a reaccionar
const m = await channel.messages.fetch("755642214264209408"); // Y este sera el mensaje a donde se reaccionara para verificarse.

// Procedemos a verificar

if (reaction.emoji.name == emoji && reaction.message.id == m.id) {

// Si se cumple procederemos a dar el rol

const member = await reaction.message.guild.members.fetch(user.id)
member.roles.add("757183302791725112");

}

});
////////////////////////////// kiss //////////////////////////////
let gifs = ['https://cdn.discordapp.com/attachments/399448944889036801/664505452792381460/c0aa038091b778c5f22f82e6245c8e43.gif', 'https://cdn.discordapp.com/attachments/399448944889036801/734823235018817536/tenor-2.gif', 'https://cdn.discordapp.com/attachments/399448944889036801/664504993352515594/5738ac03-e8c8-481e-a5f9-3fa14761635f.gif'] /* Creamos un array con los GIFS que pueden salir */
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] /* Esto harÃÂ¡ que obtengamos un elemento aleatorio del array "GIFS" */

if (message.content.startsWith(prefix + "kiss")) {
  var user = message.mentions.members.first()
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    const embed = new Discord.RichEmbed() 
    .setDescription(`${message.author} ah besado a **${user}**`)
    .setImage(randomIMG)
    .setColor("RANDOM")
    .setFooter("💋")
    .setTimestamp()
message.channel.send(embed)}
////////////////////////////// Fuck //////////////////////////////
let gifsq = ['https://i.imgur.com/FZJOBUW.jpg', 'https://i.imgur.com/AXS3l0D.png', 'https://i.imgur.com/MSXa2yP.jpg', "https://bootyoftheday.co/wp-content/uploads/2012/07/sfw-xxx-1.gif"] /* Creamos un array con los GIFS que pueden salir */
let randomIMGE = gifsq[Math.floor(Math.random() * gifsq.length)] /* Esto harÃÂ¡ que obtengamos un elemento aleatorio del array "GIFS" */

if (message.content.startsWith(prefix + "fuck")) {
  var user = message.mentions.members.first()
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    const embed = new Discord.RichEmbed() 
    .setDescription(`${message.author} le rompio la cola a **${user}**`)
    .setImage(randomIMGE)
    .setColor("RANDOM")
    .setFooter("🍆")
    .setTimestamp()
message.channel.send(embed)}
////////////////////////////// SLAP //////////////////////////////
let gifsqd = ['https://media1.tenor.com/images/114c90ecd5ed4b3dbff76938f4143c4b/tenor.gif?itemid=17355724', "https://lh3.googleusercontent.com/proxy/kSt-Gh7kSoQP409rAFFvBpPqpR7MFGK7T6OKwtlVoc6iNM9HNGB16gcLIwaLHN65n0g8hxSY9OaNz1B7Zmv34GnxAgmdnUXSikbJC5Usv4Is-DSSIYg7hl8ottk", "https://i.pinimg.com/originals/0a/aa/27/0aaa27c725ae162ded47b851e88d153b.jpg", "https://i.imgflip.com/wcluo.jpg", "https://i.imgflip.com/4/2tbtew.jpg"]
let randomIMGEd = gifsqd[Math.floor(Math.random() * gifsqd.length)]

if (message.content.startsWith(prefix + "slap")) {
  var user = message.mentions.members.first()
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    const embed = new Discord.RichEmbed() 
    .setDescription(`${message.author} le dio una cachetada a **${user}**`)
    .setImage(randomIMGEd)
    .setColor("RANDOM")
    .setFooter(`👊`)
    .setTimestamp()
message.channel.send(embed)}

//
if (message.content.startsWith(prefix + "nick")) { 
    let perms = message.guild.me.hasPermission('MANAGE_NICKNAMES') /* Definimos los permisos del bot */
  let permsM = message.member.hasPermission('MANAGE_NICKNAMES') /* Definimos los permisos del usuario */
  let member = message.mentions.members.first()
  let NewNick = args.slice(1).join('') /* Argumentos */
  
  if(!perms) return message.reply('Necesito permisos de **Gestionar Apodos**.') /* AquÃ­ ponemos que pasa si el bot no tiene los permisos */
  if(!permsM) return message.reply('Necesitas el permiso **Gestionar Apodos**.') /* AquÃ­ ponemos que pasa si el usuario no tiene los permisos */
  if(!member) return message.reply('Menciona a alguien') /* Si no mencionas al usuario */
  if(!NewNick) return message.reply('No veo el nuevo apodo') /* Cuando no escribes el apodo a cambiar  */
    
    member.setNickname(NewNick) /* AquÃ­ usamos setNickname, para establecer el apodo del usuario */
    
  const NickEmbed = new Discord.RichEmbed() /* Abrimos un mensaje embed */
  
  .setAuthor(member.user.username, member.user.displayAvatarURL) /*Mostramos el avatar, y nombre del usuario */
  .setThumbnail(member.user.displayAvatarURL) /* Avatar del usuario */
  .setTitle('¡Apodo Cambiado!') /* El titulo */
  .addField('**__Apodo Nuevo__**', `**${NewNick}**`) /* Usamos ${NewNick} para llamar al nuevo apodo, no es necesario que este en corchetes */
  .setColor('RANDOM') /* El color, en este caso puse RANDOM */
            
  message.channel.send(NickEmbed) /* Cerramos el mensaje embed */
  } 
////////////////////////////// Restart //////////////////////////////
if (message.content.startsWith(prefix + "restart")) {
    if(message.author.bot) return; //Esto harÃ¡ que ningun bot pueda ejecutar el comando, incluyendo el nuestro.
  
var ids = ["355866404714577920"] //Aqui puedes poner las ids de los usuarios que quieres que puedan usar el comando, incluyendo la tuya.

if(!ids.some(ids => message.author.id == ids)) return message.channel.send(":x: Â¡No tienes permisos para usar ese comando!") //esta parte del codigo harÃ¡ que solo las ids que pusiste en el array "ids" sean las que puedan ejecutar el comando.
    console.log(`asd`) //Se harÃ¡ un mensaje en la consola "asd", esto es opcional pero te harÃ¡ saber si se ejecuto el comando.
    message.channel.send("`> Recargado correctamente`").then(() => {
        client.destroy().then(() => {
            process.exit(); //estas 3 ultimas lineas son las que hacen que se reinicie el bot.
        });
    }); 
}//cerramos partes del codigo
////////////////////////////// Reglas //////////////////////////////
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
////////////////////////////// SERVER //////////////////////////////
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
////////////////////////////// KISS //////////////////////////////
  let member = message.mentions.members.first();
//  if (message.content.startsWith(prefix + "kiss")) {
//  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
//  const embed = new Discord.RichEmbed() 
//      .setImage("https://cdn.discordapp.com/attachments/399448944889036801/664504993352515594/5738ac03-e8c8-481e-a5f9-3fa14761635f.gif")
//      .setAuthor(server.name, server.iconURL)  
//      .setTitle(`<@${member.id}>`, "ah besado a", `<@${member.id}>`)
//      .setColor(0x66b3ff)
//    message.channel.send({ embed });
//  };
////////////////////////////// AVATAR //////////////////////////////
  if (message.content.startsWith(prefix + "avatar")) {
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    const embed = new Discord.RichEmbed() 
    .setImage(member.user.displayAvatarURL)
    .setAuthor(server.name, server.iconURL)
    .addField("Aca tenes el avatar", `<@${member.id}>`)
    .setColor(0x66b3ff)
    .setTimestamp()
    message.channel.send({ embed });
  }
////////////////////////////// 8BALL //////////////////////////////
const command = args.shift().toLowerCase();
let texto = args.join(" ");
if(command === '8ball'){
    var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
    if (!texto) return message.reply(`Escriba una pregunta.`);
    message.channel.send(`${message.author}`+ ' mi respuesta es a su pregunta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
////////////////////////////// Mensaje de conosla Actualizado //////////////////////////////
  client.on('ready', () => { });
  console.log("Actualizado");
////////////////////////////// Estado //////////////////////////////
  client.user.setPresence({
    status: "STREAMING",
    game: {
      name: "SN Army | -Ayuda",
      type: "STREAMING",
      url: "https://www.twitch.tv/Cat_One"
      }
////////////////////////////// TOKEN //////////////////////////////
    });
  }
});
client.login(token);