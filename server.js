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

//Mensaje de inicio
client.on("ready", () => {
  console.log("Encendido");
  client.channels.find(x => x.name === "datos").send(":crown: Iniciando sistema :crown:");
});

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  //Comandos
  client.on("guildMemberAdd", member => {
    const canal = member.guild.channels.find(c => c.name === "『✈』𝑨𝒆𝒓𝒐𝒑𝒖𝒆𝒓𝒕𝒐");
    if (!canal) return;
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`<@${member.id}> Bienvenido a SN Army`)
      .setThumbnail(member.user.displayAvatarURL)
      .setColor("RANDOM")
      .setFooter(member.guild.name)
    canal.send({ embed })
  })

  if (message.content.startsWith(prefix + "Reglas")) {

    const embed = new Discord.RichEmbed()
      .setTitle("Ayuda para los usuarios")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0xc556d8)
      .setDescription("Hola! Soy el robot de ayuda de SN Army")
      .setFooter("", client.user.avatarURL)
      .setTimestamp()
      .addField("**•Reglas**")
      .addField(".", "No spamear")
      .addField(".", "No molestar por privado")
      .addField(".", "No ser toxico")
      .addField(".", "No pasar contenido porno, hentai o gore")
      .addField(".", "No acosar a ninguna persona")
      .addField(".", "No difundir informacion tanto publica como privada de las personas de dentro como externas a la comunidad")
      .addBlankField(true)
      .addField("Comunidad", "SN Army", true)
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

  //Roles 

  if (message.content.startsWith(prefix + "Mod")) {

    let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join("【💚】𝗔𝗬𝗨𝗗𝗔𝗡𝗧𝗘𝗦");
    let role = message.guild.roles.find(g => g.name === '【💚】𝗔𝗬𝗨𝗗𝗔𝗡𝗧𝗘𝗦"');
    let perms = message.member.hasPermission("ADMINISTRATOR");

    if (!perms) return message.channel.send(`Que intentas hacer? eso no esta bien **${message.author.username}**😟!`);

    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);

    miembro.addRole(role)

    message.channel.send(`El rol fue agregado correctamente a **${miembro.user.username}**.`);


  }

    client.channels.cache.get(memberlog).send(`So long... **${member.user.tag}** ... :(`);
});

client.on("messageReactionAdd", async (reaction, user) => {
  // If a message gains a reaction and it is uncached, fetch and cache the message.
  // You should account for any errors while fetching, it could return API errors if the resource is missing.
  if (reaction.message.partial) await reaction.message.fetch(); // Partial messages do not contain any content so skip them.
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; // If the user was a bot, return.
  if (!reaction.message.guild) return; // If the user was reacting something but not in the guild/server, ignore them.
  if (reaction.message.guild.id !== "520423098906968065") return; // Use this if your bot was only for one server/private server.
  
  if (reaction.message.channel.id === "708551760645587014") { // This is a #self-roles channel.
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("708554596817174559") // Minecraft role.
      return user.send("Minecraft role was given!").catch(() => console.log("Failed to send DM."));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("708554654409293894"); // Roblox role.
      return user.send("Roblox role was given!").catch(() => console.log("Failed to send DM."));
    }
  } else {
    return; // If the channel was not a #self-roles, ignore them.
  }
})

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
client.login("NzU1NDMyNjM0NTQ4NDg2MTk2.X2DNdw.alMoI-9i_thhMPEJyHcfvtXnzr0");