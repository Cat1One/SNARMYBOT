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
const star = require('star-labs');
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


	
if(message.content.startsWith(prefix + 'ayuda')){

       // message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
        message.channel.send('**Comandos de SN Army**\n```\n'+
                            ''+prefix+'fuck      :: Te cojes al usuario arrobado.\n'+
                            ''+prefix+'slap      :: Cacheteas al usuario arrobado.\n'+
                            ''+prefix+'kiss      :: Besas al usuario arrobado.\n'+
                            ''+prefix+'abrazo    :: Abrazas al usuario arrobado.\n'+
                            ''+prefix+'reglas    :: Muestra las reglas del servidor.\n'+
                            ''+prefix+'server    :: Muestra la informacion del servidor.\n'+
                            ''+prefix+'avatar    :: Muestra el avatar de un usuario.\n'+
                            ''+prefix+'8ball     :: te responde que si, no, probablemente.\n```\n'+
                            '**Bot privado de SN Army**');
        
      }
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
////////////////////////////// SLAP //////////////////////////////
let gifs = ['https://media1.tenor.com/images/ef9687b36e36605b375b4e9b0cde51db/tenor.gif?itemid=12498627', "https://lh3.googleusercontent.com/proxy/kSt-Gh7kSoQP409rAFFvBpPqpR7MFGK7T6OKwtlVoc6iNM9HNGB16gcLIwaLHN65n0g8hxSY9OaNz1B7Zmv34GnxAgmdnUXSikbJC5Usv4Is-DSSIYg7hl8ottk", "https://i.pinimg.com/originals/0a/aa/27/0aaa27c725ae162ded47b851e88d153b.jpg", "https://i.imgflip.com/wcluo.jpg", "https://i.imgflip.com/4/2tbtew.jpg"]
let randomIMAGE = gifs[Math.floor(Math.random() * gifs.length)]

if (message.content.startsWith(prefix + "kiss")) {
  var user = message.mentions.members.first()
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    const embed = new Discord.RichEmbed() 
    .setDescription(`${message.author} le dio una cachetada a **${user}**`)
    .setImage(randomIMAGE)
    .setColor("RANDOM")
    .setFooter(`👊`)
    .setTimestamp()
message.channel.send(embed)}

////////////////////////////// AFK //////////////////////////////
    const links = ["discord.gg", "discord.me", "discord.io/", "discordapp.com/invite", "https://", "https://google.com/", "https:", "https:/", "https://discord.gg/"] // Acá colocamos los posibles links de invitación
    if (links.some(word => message.content.toLowerCase().includes(word))) { 

      message.delete(100)
          message.reply("No links.").then((response) => {
      response.delete(6000);
      }); 
    }
  
if (message.content.startsWith(prefix + "abrazo")) {//Abrimos un nuevo comando
	message.delete()
	let aA = message.author
	let aB = message.mentions.users.first()//utilizamos las menciones
	if(!aB) return message.channel.send('Debe mencionar a un miembro.');//Si no se menciona a alguien, el bot enviará esto.
	const aC = new Discord.RichEmbed()//Podeis cambiar el embed a nuestro gusto
    .setDescription(aA.tag+' abrazó a '+aB.tag)
    .setImage(star.hug())
    .setFooter(`🤗`)
    .setTimestamp();
	message.channel.send(aC);
	}//cerr
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
////////////////////////////// Avatar //////////////////////////////
  let member = message.mentions.members.first();
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