//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
////////////////////////////// BOT REAL //////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
let prefix = config.prefix;
const token = "NzU1NDMyNjM0NTQ4NDg2MTk2.X2DNdw.alMoI-9i_thhMPEJyHcfvtXnzr0";
const star = require("star-labs");
const qdb = require("quick.db"); //Definimos quick.db como "qdb"
const cooldown = new Set(); //Creamos un nuevo set para cooldown

//if(!message.channel.nsfw) { return message.channel.send("este canal no es NSFW") }

////////////////////////////// ECONOMIA //////////////////////////////
client.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "work") {
    if (cooldown.has(message.author.id)) {
      message.reply("Espera 1 minuto para poder trabajar denuevo.");
    } else {
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var cantidad = getRandomInt(100, 1000);
      qdb.add(`economia_${message.author.id}`, cantidad);
      const embed = new Discord.RichEmbed().setTitle(
        `Has trabajado y ganaste ${cantidad} Robuxs`
      );
      message.channel.send(embed);
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 60000);
    }
  }
  if (command === "balance") {
    const robuxs = qdb.fetch(`economia_${message.author.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`Tu balance es de ${robuxs} Robuxs`);
    message.channel.send(embed);
  }
});
////////////////////////////// MEMBER COUNT //////////////////////////////
client.on("ready", () => {
  let myGuild = client.guilds.get("738198243552526366");
  let memberCount = myGuild.memberCount;
  console.log(memberCount);
  let memberCountChannel = myGuild.channels.get("757327596743557173");
  memberCountChannel
    .setName("😈 | ᴍɪᴇᴍʙʀᴏꜱ " + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});
////////////////////////////// MENSAJE DE INICIO //////////////////////////////
client.on("ready", () => {
  console.log("Encendido");
  client.channels
    .find(c => c.id === "753303568676552775")
    .send(":crown: Iniciando sistema :crown:");
});
////////////////////////////// BIENVENIDA //////////////////////////////
client.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  client.on("guildMemberAdd", member => {
    const canal = member.guild.channels.find(
      c => c.id === "756210199622058014"
    );
    if (!canal) return;
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`<@${member.id}> Bienvenido a SN Army`)
      .setThumbnail(member.user.displayAvatarURL)
      .setColor("RANDOM")
      .setFooter(member.guild.name);
    canal.send(embed);
  });
  ////////////////////////////// AYDA //////////////////////////////
  const command = args.shift().toLowerCase();
  if (command === "ayuda") {
    // message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.channel.send(
      "**Comandos de SN Army**\n```\n" +
        "" +
        prefix +
        "fuck      :: Te cojes al usuario arrobado.\n" +
        "" +
        prefix +
        "slap      :: Cacheteas al usuario arrobado.\n" +
        "" +
        prefix +
        "kiss      :: Besas al usuario arrobado.\n" +
        "" +
        prefix +
        "abrazo    :: Abrazas al usuario arrobado.\n" +
        "" +
        prefix +
        "reglas    :: Muestra las reglas del servidor.\n" +
        "" +
        prefix +
        "server    :: Muestra la informacion del servidor.\n" +
        "" +
        prefix +
        "avatar    :: Muestra el avatar de un usuario.\n" +
        "" +
        prefix +
        "8ball     :: te responde que si, no, probablemente.\n```\n" +
        "**Bot privado de SN Army**"
    );
  }
  ////////////////////////////// FUCK //////////////////////////////
  let gifsq = [
    "https://i.imgur.com/FZJOBUW.jpg",
    "https://i.imgur.com/AXS3l0D.png",
    "https://i.imgur.com/MSXa2yP.jpg",
    "https://bootyoftheday.co/wp-content/uploads/2012/07/sfw-xxx-1.gif"
  ]; /* Creamos un array con los GIFS que pueden salir */
  let randomIMGE =
    gifsq[
      Math.floor(Math.random() * gifsq.length)
    ]; /* Esto harÃÂ¡ que obtengamos un elemento aleatorio del array "GIFS" */
  if (command === "fuck") {
    var user = message.mentions.members.first();
    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a un miembro.").catch(console.error);
    const embed = new Discord.RichEmbed()
      .setDescription(`${message.author} le rompio la cola a **${user}**`)
      .setImage(randomIMGE)
      .setColor("RANDOM")
      .setFooter("🍆")
      .setTimestamp();
    message.channel.send(embed);
  }
  ////////////////////////////// SLAP //////////////////////////////
  let gifff = [
    "https://i.imgur.com/FZJOBUW.jpg",
    "https://i.imgur.com/AXS3l0D.png",
    "https://i.imgur.com/MSXa2yP.jpg",
    "https://bootyoftheday.co/wp-content/uploads/2012/07/sfw-xxx-1.gif"
  ]; /* Creamos un array con los GIFS que pueden salir */
  let randomIMGEEE =
    gifff[
      Math.floor(Math.random() * gifff.length)
    ]; /* Esto harÃÂ¡ que obtengamos un elemento aleatorio del array "GIFS" */
  if (command === "porn") {
    var user = message.mentions.members.first();
    if (!message.channel.nsfw) {
      return message.channel.send(
        `${message.author} usa este comando en un canal nsfw`
      );
    }
    const embed = new Discord.RichEmbed()
      .setDescription(`${message.author} pidio porn`)
      .setImage(randomIMGEEE)
      .setColor("RANDOM")
      .setFooter("🍆")
      .setTimestamp();
    message.channel.send(embed);
  }
  ////////////////////////////// SLAP //////////////////////////////
  let giff = [
    "https://i.imgur.com/FZJOBUW.jpg",
    "https://i.imgur.com/AXS3l0D.png",
    "https://i.imgur.com/MSXa2yP.jpg",
    "https://bootyoftheday.co/wp-content/uploads/2012/07/sfw-xxx-1.gif"
  ]; /* Creamos un array con los GIFS que pueden salir */
  let randomIMGEE =
    giff[
      Math.floor(Math.random() * giff.length)
    ]; /* Esto harÃÂ¡ que obtengamos un elemento aleatorio del array "GIFS" */
  if (command === "hentai") {
    var user = message.mentions.members.first();
    if (!message.channel.nsfw) {
      return message.channel.send(
        `${message.author} usa este comando en un canal nsfw`
      );
    }
    const embed = new Discord.RichEmbed()
      .setDescription(`${message.author} pidio hentai`)
      .setImage(randomIMGEE)
      .setColor("RANDOM")
      .setFooter("🍆")
      .setTimestamp();
    message.channel.send(embed);
  }
  ////////////////////////////// SLAP //////////////////////////////
  let gifsqd = [
    "https://media1.tenor.com/images/114c90ecd5ed4b3dbff76938f4143c4b/tenor.gif?itemid=17355724",
    "https://lh3.googleusercontent.com/proxy/kSt-Gh7kSoQP409rAFFvBpPqpR7MFGK7T6OKwtlVoc6iNM9HNGB16gcLIwaLHN65n0g8hxSY9OaNz1B7Zmv34GnxAgmdnUXSikbJC5Usv4Is-DSSIYg7hl8ottk",
    "https://i.pinimg.com/originals/0a/aa/27/0aaa27c725ae162ded47b851e88d153b.jpg",
    "https://i.imgflip.com/wcluo.jpg",
    "https://i.imgflip.com/4/2tbtew.jpg"
  ];
  let randomIMGEd = gifsqd[Math.floor(Math.random() * gifsqd.length)];
  if (command === "slap") {
    var user = message.mentions.members.first();
    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a un miembro.").catch(console.error);
    const embed = new Discord.RichEmbed()
      .setDescription(`${message.author} le dio una cachetada a **${user}**`)
      .setImage(randomIMGEd)
      .setColor("RANDOM")
      .setFooter(`👊`)
      .setTimestamp();
    message.channel.send(embed);
  }
  ////////////////////////////// KISS //////////////////////////////
  let gifs = [
    "https://media1.tenor.com/images/ef9687b36e36605b375b4e9b0cde51db/tenor.gif?itemid=12498627",
    "https://media1.tenor.com/images/e7036cbfd163f0925f0dc54d2b61dc61/tenor.gif?itemid=13795595",
    "https://media1.tenor.com/images/032e9030c99df76b4e191f1fce42a04d/tenor.gif?itemid=10053867",
    "https://cdn.discordapp.com/attachments/399448944889036801/591807897726353420/e3b67a7fd7a47e62f1b2cd98d3253887.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/597193605379129369/823f938940fad33774f557c8a45a68ac.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/712016513154023474/dasbj5r-910436e0-aacd-430b-a58c-954240190ab2.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/636967743312101376/e4c4a9b0752235cc4f0f85df8e4007e8.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/637064446354784256/1573fc819378104b601575239683.gif",
    "https://media.discordapp.net/attachments/399448944889036801/620708483398107186/tumblr_mvrlikAfPx1rkdga9o1_500.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/719691497511059456/9f81817f-255d-47a2-9fe4-194f67d6e6ec.gif",
    "https://cdn.discordapp.com/attachments/399448944889036801/664504696547049505/a20df960-756d-49f5-96e4-6383dcb75c35.gif",
    "https://media1.tenor.com/images/7fd98defeb5fd901afe6ace0dffce96e/tenor.gif?itemid=9670722",
    "https://media1.tenor.com/images/ba1841e4aeb5328e41530d3289616f46/tenor.gif?itemid=14240425",
    "https://media1.tenor.com/images/9fac3eab2f619789b88fdf9aa5ca7b8f/tenor.gif?itemid=12925177"
  ];
  let randomIMAGE = gifs[Math.floor(Math.random() * gifs.length)];
  if (command === "kiss") {
    var user = message.mentions.members.first();
    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a un miembro.").catch(console.error);
    const embed = new Discord.RichEmbed()
      .setDescription(`${message.author} le dio un beso a **${user}**`)
      .setImage(randomIMAGE)
      .setColor("RANDOM")
      .setFooter(`👊`)
      .setTimestamp();
    message.channel.send(embed);
  }
  ////////////////////////////// ABRAZO //////////////////////////////
  if (command === "abrazo") {
    message.delete();
    let aA = message.author;
    let aB = message.mentions.users.first(); //utilizamos las menciones
    if (!aB) return message.channel.send("Debe mencionar a un miembro."); //Si no se menciona a alguien, el bot enviará esto.
    const aC = new Discord.RichEmbed() //Podeis cambiar el embed a nuestro gusto
      .setDescription(aA.tag + " abrazó a " + aB.tag)
      .setImage(star.hug())
      .setFooter(`🤗`)
      .setTimestamp();
    message.channel.send(aC);
  }
  ////////////////////////////// NO INVITES //////////////////////////////
  const links = [
    "discord.gg",
    "discord.me",
    "discord.io/",
    "discordapp.com/invite",
    "https://discord.gg/"
  ];
  if (links.some(word => message.content.toLowerCase().includes(word))) {
    message.delete(100);
    message.reply("No links.").then(response => {
      response.delete(6000);
    });
  }
  ////////////////////////////// RESTART //////////////////////////////
  if (command === "restart") {
    if (message.author.bot) return; //Esto harÃ¡ que ningun bot pueda ejecutar el comando, incluyendo el nuestro.

    var ids = ["355866404714577920", "732707239026098196"]; //Aqui puedes poner las ids de los usuarios que quieres que puedan usar el comando, incluyendo la tuya.

    if (!ids.some(ids => message.author.id == ids))
      return message.channel.send(
        ":x: ¡No tienes permisos para usar ese comando!"
      ); //esta parte del codigo harÃ¡ que solo las ids que pusiste en el array "ids" sean las que puedan ejecutar el comando.
    console.log(`RESTART MANUAL`); //Se harÃ¡ un mensaje en la consola "asd", esto es opcional pero te harÃ¡ saber si se ejecuto el comando.
    message.channel.send("`> Recargado correctamente`").then(() => {
      client.destroy().then(() => {
        process.exit(); //estas 3 ultimas lineas son las que hacen que se reinicie el bot.
      });
    });
  } //cerramos partes del codigo
  ////////////////////////////// Reglas //////////////////////////////
  if (command === "reglas") {
    const embed = new Discord.RichEmbed()
      .setTitle("📜 | Reglas del servidor")
      .setColor(0xc556d8)
      .addField("•", "No insultar")
      .addField("•", "No spamear")
      .addField("͔•", "No molestar por privado")
      .addField("•", "No ser toxico")
      .addField("•", "No pasar contenido porno, hentai o gore por general")
      .addField("•", "No acosar a ninguna persona")
      .addField(
        "•",
        "No difundir informacion tanto publica como privada de las personas de dentro como externas a la comunidad"
      )
      .setFooter("SN Army", client.user.avatarURL)
      .setTimestamp();
    message.channel.send({ embed });
  }
  

  ////////////////////////////// SERVER //////////////////////////////
  var server = message.guild;
  if (command === "server") {
    const embed = new Discord.RichEmbed()
      .setThumbnail(server.iconURL)
      .setAuthor(server.name, server.iconURL)
      .addField("ID", server.id, true)
      .addField("Region", server.region, true)
      .addField("Creado el", server.joinedAt.toDateString(), true)
      .addField(
        "Dueño del Servidor",
        server.owner.user.tag + "(" + server.owner.user.id + ")",
        true
      )
      .addField("Miembros", server.memberCount, true)
      .addField("Roles", server.roles.size, true)
      .setColor(0x66b3ff);
    message.channel.send({ embed });
  }
  ////////////////////////////// Avatar //////////////////////////////
  let member = message.mentions.members.first();
  if (command === "avatar") {
    if (message.mentions.users.size < 1)
      return message.reply("Debe mencionar a un miembro.").catch(console.error);
    const embed = new Discord.RichEmbed()
      .setImage(member.user.displayAvatarURL)
      .setAuthor(server.name, server.iconURL)
      .addField("Aca tenes el avatar", `<@${member.id}>`)
      .setColor(0x66b3ff)
      .setTimestamp();
    message.channel.send({ embed });
  }
  ////////////////////////////// 8BALL //////////////////////////////
  let texto = args.join(" ");
  if (command === "8ball") {
    var rpts = [
      "Sí",
      "No",
      "¿Por qué?",
      "Por favor",
      "Tal vez",
      "No sé",
      "Definitivamente",
      " ¡Claro! ",
      " Sí ",
      " No ",
      " Por supuesto! ",
      " Por supuesto que no "
    ];
    if (!texto) return message.reply(`Escriba una pregunta.`);
    message.channel.send(
      `${message.author}` +
        " mi respuesta a su pregunta es: `" +
        rpts[Math.floor(Math.random() * rpts.length)] +
        "`"
    );
    ////////////////////////////// Mensaje de conosla Actualizado //////////////////////////////
    client.on("ready", () => {});
    console.log("Actualizado");
    if (message.content.startsWith("f")) {
      // message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
      message.channel.send("F, amigo sos alto pete");
    }
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