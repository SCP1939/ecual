const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();

const { prefix, token } = require('./config.json');
const { version, name } = require('./package.json');

const talkedRecently = new Set();
const MuchosHola = new Set();
var Advertencias = new Set(); // Var hacer que se pueda cambiar su valor, Const es una constante la cual NO cambiara su valor en ningún momento en el futuro. LET: Es una variable que también podra cambiar su valor, pero solo funcionará en el bloque donde fue declarada.
const Desactivado = new Set();
const Demasiados_Reportes = new Set();
const MensajesBorrados = new Discord.Collection();

const activities_list = [`${prefix}help`, `${prefix}ayuda`];

client.on('ready', () => {
  console.log("Manuela / Ecual te dice: ¡Hola!")
    setInterval(() => {
            client.user.setActivity(activities_list[Math.floor(activities_list.length * Math.random())], {type: 'WATCHING'});
      }, 10000);
    });

client.on('guildMemberAdd', async member => {
let SPACE = ('765669945308217365')
if(member.guild.id === SPACE){
  const cana = member.guild.channels.cache.find(xd => xd.id === '765669945815466020')
  const Emoji = client.emojis.cache.find(xd => xd.id === '775743426313322526')
  const Embed = new Discord.MessageEmbed()
  .setDescription(`${Emoji} **¡${member.user} se unió!**`) // En eventos de miembros, user es "lo mismo" que author
  .setImage('https://media.tenor.com/images/de8da320a327b77af29fa0f917a94d2f/tenor.gif')
  .setColor('RANDOM')

cana.send(Embed)

}
})

client.on('messageDelete', msg => {
  if(msg.guild.id === '765669945308217365'){ // ID del servidor de Space
    if(msg.author.bot || !msg.guild || msg.channel.id === '772079543388209153' || msg.channel.id === '776103777983266836') return; // <#772079543388209153> 
  const logs = msg.guild.channels.cache.find(abc => abc.id === '776103777983266836')
  if (msg.attachments.size > 0) {
  const ImagenBorrada = new Discord.MessageEmbed()
  .setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
  .setTitle('Archivo borrado')
  .addField(`Canal`, `${msg.channel}`, false)
  .setColor('RANDOM')
  .setTimestamp(msg.createdTimestamp)
  logs.send(ImagenBorrada)
  } else if(msg.content) {
  const Embed = new Discord.MessageEmbed()
  .setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
  .addField(`Mensaje`,`${msg.content}`, false)
  .addField(`Canal`, `${msg.channel}`, false)
  .setColor('RANDOM')
  .setTimestamp(msg.createdTimestamp)

  logs.send(Embed).catch(err => console.error(err));
  }
}
  MensajesBorrados.set(msg.channel.id, msg);
});

client.on("message", async msg => { 
 const args = msg.content.slice(prefix.length).trim().split(/ +/);
 const comando = args.shift().toLowerCase();

 let SCP = ('237160504974508034');
  // ------------------------------------------
if(comando === 'reacciona'){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
msg.react('🇳')
			.then(() => msg.react('🇴'))
			.catch(() => console.error('Uno de los emojis dio error.')); 

}  //if (member.hasPermission('KICK_MEMBERS')) {
  
    // ------------------------------------------

else if(comando === 'bienv'){
   if(msg.author.id === SCP){
    const Emoji = client.emojis.cache.find(xd => xd.id === '775743426313322526')
    const Embed = new Discord.MessageEmbed()
    .setDescription(`${Emoji} **¡${msg.author} se unió al servidor!**`)
    .setImage('https://media.tenor.com/images/de8da320a327b77af29fa0f917a94d2f/tenor.gif')
    .setColor('RANDOM')
  msg.channel.send(Embed)
   }
}
else if(comando === "gay" || comando === 'porcentaje-gay' || comando === 'gay%' || comando === '%gay'){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
      }
  const member = msg.mentions.members.first() || client.users.cache.get(args[0]);
  var com = Math.floor(Math.random() * 100) - 1;
  if(!member){
     const Eembed = new Discord.MessageEmbed()
    .setTitle('La máquina gay')
    .setDescription(`${msg.author.username} es ${com}% gay :gay_pride_flag:`)
    .setColor('RANDOM')
    msg.channel.send(Eembed)
  } else {
  if(member.id === client.user.id) return msg.reply('buen intento, pero te puedo asegurar que no lo soy.') .then(msg => { msg.delete({ timeout: 4000 }) });
  if(member.user.bot) return msg.reply('un bot no puede ser gay...') .then(msg => { msg.delete({ timeout: 4000 }) });
 const Embed = new Discord.MessageEmbed()
   .setTitle('La máquina gay')
   .setDescription(`${member.user.username} es ${com}% gay :gay_pride_flag:`)
   .setColor('RANDOM')
  msg.channel.send(Embed)
  }   
 }
  // ------------------------------------------
 else if (comando === "prueba-guilds"){
  if(msg.author.id === SCP){
    msg.delete()
   msg.channel.send(client.guilds.cache)
 }
}

else if (comando === "desactivar -automatico"){
  if(msg.author.id === SCP){
    msg.delete()
    const member1 = client.users.cache.get(SCP)
   if (!member1.hasPermission('ADMINISTRATOR')) {
   Desactivado.delete(msg.guild.id);
    msg.channel.send("OwO") .then(msg => { msg.delete({ timeout: 4000 }) }); return
  } else { msg.channel.send("Desactivado correctamente.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
 }
}
}
// ------------------------------------------
 else if (comando === "ping" || comando === "pong"){
 if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2500);
    }
   const Embed = new Discord.MessageEmbed() 
   .setTitle("🏓 Ping?")
   .setColor("YELLOW")
   const m = await msg.channel.send(Embed);
   const EmbedEditado = new Discord.MessageEmbed()
   .setTitle("🏓 Pong!")
   .setColor(0xff6e6e)
   .setDescription(`📨 Envío de mensajes: **${m.createdTimestamp - msg.createdTimestamp}ms**\n🛰️ API de Discord: **${Math.round(client.ws.ping)}ms**`);
   m.edit(EmbedEditado)
   msg.react("🏓")
		}
// ------------------------------------------
else if(comando === "insultame"){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
msg.channel.send("<@" + msg.author.id + "> ¡No!") 
    }
 // ------------------------------------------ 
else if(comando === "support" || comando === "soporte"){ //Añadir a el changelog y help
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
  const EmbedSoporte = new Discord.MessageEmbed() 
    .setTitle("Servidor de soporte")
    .setColor(0x0be6b7)
    .setDescription("Todavía no se ha implementado un servidor de soporte, posiblemente se añada en un futuro")
    .setTimestamp()
    .setFooter("Ecual [BETA]", client.user.avatarURL())
  msg.channel.send(EmbedSoporte)
}   
 // ------------------------------------------
else if(comando === "info"){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
  
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
const EmbedInfo = new Discord.MessageEmbed()
.setColor(0x0be6b7)
.setTitle("Información sobre Ecual")
.setThumbnail(client.user.avatarURL())
.setDescription("Soy Ecual, un bot desarrollado por <@237160504974508034> con cariño.\nFui creado para el servidor **Doge Clan 2.0** y ahora **Space**.\nMi objetivo como bot es entretenerte, con muchos comandos\npara entretenerte, como los comandos `" + prefix + "meme`, `" + prefix + "video`, etc...\nActualmente estoy en una etapa BETA, así que apreciaria que contaras a mi creador los posibles errores que pueda tener.\n**¡Espero serte de utilidad!**")
.setTimestamp()
.setFooter("Ecual [BETA]", client.user.avatarURL())
  msg.react("ℹ️")
  msg.channel.send(EmbedInfo)
    }  

// Comando help (ayuda y comandos también funcionan con este comando, ver linea 232)

if(comando === "help" || comando === "comandos" || comando === 'ayuda'){ 
if (!msg.content.startsWith(prefix)|| msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
const Help = new Discord.MessageEmbed()
    .setTitle('Comandos de Ecual')
    .setDescription("`" + prefix + "reacciona` No es muy útil, la verdad.\n`" + prefix + "info` Información sobre el bot\n`" + prefix + "estado` Información sobre el estado del bot.\n`" + prefix + "insultame` El comando más inutil.\n`" + prefix + "ping` Te dice el ping que tiene el bot.\n`" + prefix + "perro` Te manda una imagén de un perro.\n`" + prefix + "gato`Te manda una imagén de un gato.\n`" + prefix + "meme` Un simple comando de memes.\n`" + prefix + "versión` Te informa sobre la versión del bot.\n`" + prefix + "invite` Una invitación para el bot.\n`" + prefix + "changelog` Información sobre la última versión.\n`" + prefix + "vídeo` Te manda un video. (EN PRUEBAS)\n`" + prefix + "suicidarse` Nadie lamentará tu perdida." + `\n\`${prefix}8ball\` Un clásico que no pasará de moda.\n\`${prefix}matar\` No lo intentes conmigo (EN PRUEBAS)\n\`${prefix}bug-report\` Para reportar bugs del bot.\n\`${prefix}sugerir-bot\` Para mandar sugerencias al bot.\n\`${prefix}decir\` Para que diga lo que quieras.\n\`${prefix}creditos\` Agradecimientos, creador del bot, etc...\n\`${prefix}gay\` Te da un porcentaje sobre lo gay que eres.\n\`${prefix}consejo\` Te da ~~malos~~ consejos para tu vida diaria.\n\`${prefix}besar\` No es recomendable hacerlo en estos momentos.\n**Y otros comandos ocultos...**`)
    .setColor(0x0be6b7)
    .setFooter('Usa e!help 1/2/3')
const Ayuda1 = new Discord.MessageEmbed()
    .setTitle('Comandos principales')
    .setDescription(`\`${prefix}info\` Proporciona información sobre el bot\n\`${prefix}ping\` Muestra la latencia actual de bot con el servidor\n\`${prefix}info-bot\` Proporciona algunos datos sobre el bot [BETA]\n\`${prefix}reportar-bug\` Reporta los errores que encuentres\n\`${prefix}sugerir\` Envía tus sugerencias sobre el bot\n\`${prefix}help\` Proporciona ayuda sobre los comandos del bot\n\`${prefix}creditos\` Créditos sobre el desarrolo de ${name}`)
    .setColor(0x0be6b7)
    .setTimestamp()
    .setFooter('1/3')
const Ayuda2 = new Discord.MessageEmbed()
    .setTitle('Comandos de entretenimiento')
    .setDescription(`\`${prefix}meme\` Envia un meme aleatorio\n\`${prefix}gato\` Te manda una foto aleatoria de un gato\n\`${prefix}perro\` Te manda una foto aleatoria de un perro\n\`${prefix}8ball\` Pregunta lo que quieras y diviertete\n\`${prefix}gay\` Determina lo "gay" que es alguien\n\`${prefix}consejo\` Envía un consejo que no debes seguir\n\`${prefix}decir\` El bot dirá lo que quieras que diga`)
    .setColor(0x0be6b7)
    .setTimestamp()
    .setFooter('2/3')
const Ayuda3 = new Discord.MessageEmbed()
    .setTitle('Otros comandos')
    .setDescription(`\`${prefix}snipe\` Muestra el último mensaje borrado\n\`${prefix}matar\` Acaba con tus enemigos\n\`${prefix}suicidio\` Muere por tus propias manos\n\`${prefix}besar\` Besa a quien quieras, literalmente\n\`${prefix}curar\` Sana o revive a quien quieras\n\`${prefix}version\` Muestra la versión actual del bot\n\`${prefix}insultame\` Uno de los primeros comandos\n\`${prefix}slowmode\` Activa el modo pausado en segundos\nTambién hay easter eggs, por si te interesa.`)
    .setColor(0x0be6b7)
    .setTimestamp()
    .setFooter('3/3') 
if(!args.length){ 
if(msg.author.id === SCP) return msg.channel.send(Help) .then(msg.react("ℹ️"));
  msg.channel.send(Ayuda1) .then(msg.react("ℹ️"))}
if(args[0] === '1' || args[0] === 'principal'){
  msg.channel.send(Ayuda1) .then(msg.react("ℹ️"))}
if(args[0] === '2' || args[0] === 'entretenimiento'){
  msg.channel.send(Ayuda2) .then(msg.react("ℹ️"))}
if(args[0] === '3' || args[0] === 'otros' || args[0] === 'extra'){
  msg.channel.send(Ayuda3) .then(msg.react("ℹ️"))}
}



  // ------------------------------------------
else if(comando === 'gato' || comando === "cat"){
const canal_general = msg.guild.channels.cache.find(ch => ch.name === '💬・general')
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild || msg.channel.id === canal_general) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const gatos = ['https://cdn.discordapp.com/attachments/630811127588061245/753221463946952764/gato-marron_0.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753221506212823081/14927777234619.png','https://cdn.discordapp.com/attachments/630811127588061245/753221555986759772/header-protech-gatos-1-732x732.png','https://cdn.discordapp.com/attachments/630811127588061245/753221627264761927/gato-siames-redes.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753272038742949978/gato-gafas.png','https://cdn.discordapp.com/attachments/630811127588061245/753272121756483615/00e8a05d02c85a48d3f2df476709c0e7.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753272338954584134/04chinaclone-06-articleLarge.png','https://cdn.discordapp.com/attachments/630811127588061245/753272578625372301/img_como_elegir_y_mantener_la_caja_de_arena_del_gato_10389_600.png',
  'https://cdn.discordapp.com/attachments/753341815410917457/756159480231755836/gato.jpg','https://st4.depositphotos.com/15880804/27567/i/450/depositphotos_275670424-stock-photo-a-cute-ginger-cat-sleeps.jpg',
  'https://www.hogarmania.com/archivos/201707/gato-dormido-668x400x80xX.jpg','https://www.feelcats.com/blog/wp-content/uploads/2018/07/cuanto-duermen-los-gatos.jpg'];
  
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
const GatoA = client.emojis.cache.find(e => e.id === '770270598126370857') // El animado es este
const GatoB = client.emojis.cache.find(e => e.id === '770278842463027251')
msg.react(`${GatoA}`)
const EmbedGato = new Discord.MessageEmbed()
	.setTitle(`${GatoB}・Aquí tienes un gato`)
  .setColor("RANDOM")
	.setImage(gatos[Math.floor(gatos.length * Math.random())])
  .setTimestamp()
	.setFooter('Ecual [BETA]', client.user.avatarURL());

msg.channel.send(EmbedGato); 
    } 
 else if(comando === 'info-bot' || comando === 'bot-info'){
 if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
  msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
} else {
talkedRecently.add(msg.author.id);
setTimeout(() => {
talkedRecently.delete(msg.author.id);
}, 2500);
}
let totalSeconds = (client.uptime / 1000);
let dias = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let horas = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutos = Math.floor(totalSeconds / 60);
let segundos = Math.floor(totalSeconds % 60);

let uptime = `${horas} hora/s y ${minutos} minuto/s`

const mes = new Discord.MessageEmbed()
   .setTitle(`Información sobre ${name}`)
   .setColor('0be6b7')
   .addField('Tiempo activo', `${uptime}`, true)
   .addField('Versión',`${version}`, true)
   .addField('Servidores',`${client.guilds.cache.size}`, true)
   msg.channel.send(mes)
}
 // ------------------------------------------
 else if(comando === 'a123a'){
 if(msg.author.id === SCP){
 const Emoji = client.emojis.cache.find(o => o.id === '770284050333564959') //Emoji developer
 const embed = new Discord.MessageEmbed()
     .setTitle(`${Emoji}・Inscribirse`)
     .setDescription('Si deseas incribirte y añadir tu bot al servidor, necesitarás cumplir unos requisitos:')
     .setColor('00ff3c')
     .addField('Primero', 'El bot debe estar conectado (al menos durante un tiempo).', true)
     .addField('Segundo', 'El bot debe ser codigo puro y tendrás que mostrarnoslo.', true)
     .addField('Tercero', 'El bot tiene que ser tuyo y debe tener al menos un comando.', true)
     .setFooter('Los administradores pueden decidir si eres apto o no independientemente de estos requisitos.')
     msg.channel.send(embed)
     msg.channel.send('Si cumples todos los requisitos y quieres añadir tu bot, no dudes en decirnoslo.')
 }
 }

 else if(comando === 'avatar'){
   if (!msg.content.startsWith(prefix)|| msg.author.bot || !msg.guild) return;
   if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2500);
    }
    let member = msg.mentions.members.first() || client.users.cache.get(args[0]);
    if(!msg.mentions.users.size && member){ await client.users.cache.get(args[0]).fetch()
    let member = client.users.cache.get(args[0])
    if(member.user.id === client.user.id) return msg.reply('eso es confidencial.').then(rea=> rea.delete({timeout: 5000}));
    const avatarEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Avatar de ${member.user.username}`)
      .setImage(member.user.displayAvatarURL()+'?size=512')
      .setFooter('¡Comando en pruebas!');
  msg.channel.send(avatarEmbed);
  }
    if(!member){
    const anEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`[URL del Avatar](${msg.author.displayAvatarURL()+'?size=512'})`)
      .setAuthor(`Avatar de ${msg.author.username}`)
      .setImage(msg.author.displayAvatarURL()+'?size=512')
      .setFooter('¡Comando en pruebas!',client.user.avatarURL);
  msg.channel.send(anEmbed);
    } else {
      if(member.user.id === client.user.id) return msg.reply('eso es confidencial.').then(rea=> rea.delete({timeout: 5000}));
    const avatarEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Avatar de ${member.user.username}`)
      .setImage(member.user.displayAvatarURL()+'?size=512')
      .setFooter('¡Comando en pruebas!');
  msg.channel.send(avatarEmbed);
    }
 }

 else if(comando === 'expulsar' || comando === 'kick'){
  if (!msg.content.startsWith(prefix)|| msg.author.bot || !msg.guild) return;
   if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2500);
    }
  if(msg.member.hasPermission("KICK_MEMBERS")){
   const member = msg.mentions.members.first() || client.users.cache.get(args[0]);
   if(!member) return msg.reply('¿A quien quieres que ~~mate~~ expulse?') .then(mse => mse.delete({timeout: 10000}))
   member.kick(`Expulsado por ${msg.author.tag}`) .then(() => {
    msg.channel.send(`${member.user.username} fue expulsado.`)
  }) .catch(err => {
    msg.channel.send('No he podido expulsar a ese miembro.')
  })
  } else {
    msg.reply('¡No tienes permisos para hacer eso!')
    
  }
 }

 else if(comando === 'banear' || comando === 'ban'){
  if (!msg.content.startsWith(prefix)|| msg.author.bot || !msg.guild) return;
   if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2500);
    }
  if(msg.member.hasPermission("BAN_MEMBERS")){
   const member = msg.mentions.members.first() || client.users.cache.get(args[0]);
   if(!member) return msg.reply('¿A quien quieres que ~~mate~~ banee?') .then(mse => mse.delete({timeout: 10000}))
    member.ban({ reason: `Baneado por ${msg.author.tag}` }) .then(() => {
      msg.channel.send(`${member.user.username} fue baneado.`)
    }) .catch(err => {
      msg.channel.send('No he podido banear a ese miembro.')
    })
    
  } else {
    msg.reply('¡No tienes permisos para hacer eso!')
  }
 }

 else if(comando === 'b123b'){
  if(msg.author.id === SCP){
  const Emoji = client.emojis.cache.find(o => o.id === '770284050333564959') //Emoji developer
  const embed = new Discord.MessageEmbed()
      .setTitle(`${Emoji}・Normas del servidor`)
      .setColor('00ff3c')
      .setDescription('**1.** No insultes a otros miembros, no queremos una comunidad tóxica.\n**2.** No hagas spam ni flood en el servidor ni en los mensajes directos.\n**3.** No publiques contenido que moleste a los usuarios (gore, etc...)\n**4.** Cada cosa tendrá que ir en su canal correspondiente, gracias.\n**5.** Si quieres añadir tu bot o tienes algún problema, haznoslo saber.')
      .setFooter('No cumplir cualquiera de estas normas tendrá un castigo leve o grave.')
      msg.channel.send(embed)
      msg.delete()
  }
  }

 else if(comando === 'rul31'){
   if(msg.author.id === SCP){
      const a = new Discord.MessageEmbed()
          .setTitle('Reglas del servidor')
          .setDescription('📌 **1)** Respeta a absolutamente todos los miembros, no queremos un server infectado con toxicidad.\n\n📌 **2)** No se permite ningún tipo de insultos ni toxicidad hacia los miembros del servidor\n\n📌 **3)** No se permite ningún tipo de acoso/bullying a los miembros\n\n📌 **4)** No Publiques ningún tipo de contenido NSFW (Gore masivo/pornografia)\n\n📌 **5)** Esta prohibido el spam o el flood por mensajes directos y/o por el servidor\n\n📌 **6)** Cada cosa deberá estar en su canal correspondiente\n\n📌 **7)** Las reglas se deben obedecer y apelar es un derecho de los miembros.\n\n📌 **8)** No hagas spam de ningún servidor al privado de los miembros del servidor y tampoco en el server\n\n📌 **9)** Copiarse del servidor, sus técnicas y su diseño terminara con un ban.\n\n📌 **10)** No se permite utilizar modulador en canales de voz ni hacer sonidos molestos Ej: petar\n\n📌 **11)** Recuerda no abusar del rol DJ ya que esto será penalizado muy fuertemente\n\n📌 **12)** No pidas roles, esto sera gravemente castigado ya que es muy molesto\n\n📌 **13)** En ningún canal de música se puede transmitir en vivo/compartir pantalla\n\n📌 **14)** No uses comandos administrativos o de moderación\n\n✏️ **1)** Ningún moderador podrá abusar de su poder si no se le descendera de rango\n\n✏️ **2)** No poner warns sin sentido, esto sera gravemente castigado\n\n✏️ **3)** No hacer cosas sin permisos de los altos cargos.\n\n✏️ ➤ **Reglas del staff**\n📌 ➤ **Reglas generales**')
          .setImage('https://media.discordapp.net/attachments/743535215724462176/743851099932459028/reglas.gif')
          .setColor('RED')
          msg.channel.send(a)
          msg.delete()
   }
 }

 else if(comando === 'consejo'){ // Mi ID
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
if (talkedRecently.has(msg.author.id)) {
  msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
} else {
talkedRecently.add(msg.author.id);
setTimeout(() => {
talkedRecently.delete(msg.author.id);
}, 2500); 
}

const Real = ["owo","uwu","uwu","uwu","uwu","uwu","uwu","uwu"]
const Consejos = ["Si un extraño te da caramelos, seguramente hay más en su coche 😉","Estos consejos son muy malos, no lo sigas... incluyendo este...","Mata a darwi y seguramente la gente te felicite y te den un premio.","El suicidio no es una opción, es la solución.","Si matas a alguien, te den un premio; ¡Ve a comprobarlo!","Si quieres matar a alguien no uses mascarilla."] // VI > 6
  const EmbedConsejo = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(Consejos[Math.floor(Consejos.length * Math.random())])
    .setFooter("Se recomienda no seguir estos consejos")
  const EmbedSinConsejo = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(Consejos[Math.floor(Consejos.length * Math.random())])
  if(Real[Math.floor(Real.length * Math.random())] === "owo"){ msg.channel.send(EmbedConsejo)
  } else {msg.channel.send(EmbedSinConsejo) }
}
 // ------------------------------------------
 else if(comando === 'embed-prueba'){
if (msg.author.id === "237160504974508034")  { // Mi ID
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
   
  const EmbedPrueba = new Discord.MessageEmbed()
    .setColor(0x00ffcc)
    .setTitle("¿Cual es tu color de helado favorito?")
    .setDescription("[ESTO ESTA HECHO ADREDE!]\nSolo es para probarlo\nQue más da la vida")
    .setTimestamp()
    .setFooter("Ecual [BETA]", client.user.avatarURL())
  
  msg.channel.send(EmbedPrueba)
 }
 }

 else if(comando === 'meme -jorge' || comando === 'meme -proman'){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild || msg.author.id === "406455063075094528") return;
msg.delete({timeout: 1000})
if (msg.author.id === "237160504974508034" || msg.author.id === "465217670703349760")  { // Mi ID y la de dani
//  const Memes_Jorge = ["https://i.imgflip.com/4fw3lj.jpg", "https://i.imgflip.com/4fvr2b.jpg"]
  const Memes_Jorge = ["https://i.imgflip.com/4fw3lj.jpg","https://i.imgflip.com/4gdfa9.jpg"]
  const EmbedPrueba = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Meme de Jorge")
    .setImage(Memes_Jorge[Math.floor(Memes_Jorge.length * Math.random())])
    //.setTimestamp()
    .setFooter("Sugerencia de ✞☬DaniShin☬✞#4525", client.user.avatarURL())
  
  msg.author.send(EmbedPrueba) .then(msg => { msg.delete({ timeout: 20000 }) }); return
  } else { msg.author.reply("no tienes permiso para usar este comando.") .then(msg => { msg.delete({ timeout: 10000 }) }); return
 }
 }  
 // ------------------------------------------
 else if(comando === 'snipe' || comando === 'ultimo-mensaje'){ // 237160504974508034 es mi id
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
  if (talkedRecently.has(msg.author.id)) {
    msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
} else {
talkedRecently.add(msg.author.id);
setTimeout(() => {
  talkedRecently.delete(msg.author.id);
 }, 2000);
 }
 const mesg = MensajesBorrados.get(msg.channel.id);
      if (!mesg) return msg.reply('no he encontrado ningún mensaje borrado en este canal.') .then(msg => { msg.delete({ timeout: 4000 }) });
      if (mesg.content.includes('discord.gg/') || mesg.content.includes('discordapp.com/invite/')) return msg.reply("el mensaje borrado contenía un enlace de invitación y no lo pude mandar.") .then(msg => { msg.delete({ timeout: 4000 }) });

      const embed = new Discord.MessageEmbed()
        .setAuthor(mesg.author.tag, mesg.author.avatarURL({ dynamic: true }))
        .setDescription(mesg.content)
        .setColor('RANDOM')
        .setTimestamp(mesg.createdTimestamp)

      msg.channel.send(embed).catch(err => console.error(err));
 }
 // ------------------------------------------
else if(comando === 'matar' || comando === 'kill'){ // 237160504974508034 es mi id
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
  if (talkedRecently.has(msg.author.id)) {
    msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
} else {
talkedRecently.add(msg.author.id);
setTimeout(() => {
  talkedRecently.delete(msg.author.id);
}, 2000);
}
  const member = msg.mentions.members.first() || client.users.cache.get(args[0]);
  if(!member) return msg.reply("menciona a un usuario.") .then(msg => { msg.delete({ timeout: 5000 }) });
  if(member.id === msg.author.id) return msg.reply('no puedes matarte a ti mismo.') .then(msg => { msg.delete({ timeout: 5000 }) });
  if(member.id === '752913324668354630') return msg.reply('no puedes matarme... pero yo si puedo =)') .then(msg => { msg.delete({ timeout: 2000 }) });
  if(member.user.bot){ return msg.reply('no puedes matar a un bot.') .then(msg => { msg.delete({ timeout: 5000 }) });
  } else {
    const asesinatos = ['https://media1.tenor.com/images/bb4b7a7559c709ffa26c5301150e07e4/tenor.gif',
                        'https://media1.tenor.com/images/7c080ee3abd40c35aeee6899efc5b210/tenor.gif',
                        'https://media1.tenor.com/images/ef4993b593954811a0c0a1c98af698a3/tenor.gif',
                        'https://i.pinimg.com/originals/9b/bc/10/9bbc10969b7558185c4c6cc915f1ff41.gif',
                        'https://cdn.discordapp.com/attachments/635514890785652796/769314753214021662/unnamed.gif'];
  const EmbedPrueba = new Discord.MessageEmbed()
    .setColor(0xff6e6e)  
    .setDescription(`¡**${member.user.username}** fue asesinado por **${msg.author.username}**!`)
    .setImage(asesinatos[Math.floor(asesinatos.length * Math.random())])
    .setTimestamp()
    .setFooter('Pronto habrá más gifs, pero por ahora toca esperar')
 //   .setTitle("¡" + memberl + " fue asesinado por " + msg.author.username + "!")
  
  msg.channel.send(EmbedPrueba)
   }
 }
  // ------------------------------------------
else if(comando === 'besar' || comando === 'kiss'){ // 237160504974508034 es mi id
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
  if (talkedRecently.has(msg.author.id)) {
    msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
} else {
talkedRecently.add(msg.author.id);
setTimeout(() => {
  talkedRecently.delete(msg.author.id);
}, 2000);
}
  const member = msg.mentions.members.first() || client.users.cache.get(args[0]);
  if(!member) return msg.reply("menciona a un usuario.") .then(msg => { msg.delete({ timeout: 5000 }) });
  if(member.id === msg.author.id) return msg.reply('no puedes besarte a ti mismo.') .then(msg => { msg.delete({ timeout: 5000 }) });
  if(member.id === '752913324668354630') return msg.reply('no puedes besarme, lo siento.') .then(msg => { msg.delete({ timeout: 2000 }) });
  if(member.user.bot){ return msg.reply('no puedes besar a un bot.') .then(msg => { msg.delete({ timeout: 5000 }) });
  } else {
      const besos =    ['https://media.giphy.com/media/6d1HE6vVDfUze/giphy.gif', // 1º Robado
                        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif', // 2º Robado
                        'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif', // 3º Robado
                        'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif', // 4º Robado
    /* 5º "Original" */ 'https://i.pinimg.com/originals/d4/dc/09/d4dc09375712a7ed678c9a317f76ad40.gif'];
  const Embed = new Discord.MessageEmbed()
    .setColor(0xff6e6e)  
    .setDescription(`**${msg.author.username}** besó a **${member.user.username}**`)
    .setImage(besos[Math.floor(besos.length * Math.random())])
    .setTimestamp()
    .setFooter('Pronto habrá más gifs, pero por ahora toca esperar')
  msg.channel.send(Embed)
   }
 }
 // ------------------------------------------
 else if(comando === 'gato-durmiendo' || comando === "sleeping-cat"){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const gatos_muertos = 
  ['https://elpueblodeceuta.es/upload/img/periodico/img_40178.jpg',
  'https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg',
  'https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg',
  'https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg',
  'https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg','https://i.pinimg.com/originals/4f/24/14/4f2414175316ada65c072bfd430abc94.jpg'];
  
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
msg.react("🐱");
const EmbedGato = new Discord.MessageEmbed()
	.setTitle('Aquí tienes un gato durmiendo 🐱')
  .setColor("RANDOM")
	.setImage(gatos_muertos[Math.floor(gatos_muertos.length * Math.random())])
  .setTimestamp()
	.setFooter('Ecual [BETA]', client.user.avatarURL());

msg.channel.send(EmbedGato); 
  
    }   
  
else if(msg.content === "hola" || msg.content === "Hola" || msg.content === "¡Hola!" || msg.content === "Hola." || msg.content === "hola." || msg.content === "hola" || msg.content === "Hola!" || msg.content === "hola!" || msg.content === "¡hola!"){
  if (msg.author.bot || !msg.guild) return;
  if(msg.author.id === "237160504974508034") { return;
  if (MuchosHola.has(msg.author.id)) {
            return;
    } else {
        MuchosHola.add(msg.author.id);
        setTimeout(() => {
          MuchosHola.delete(msg.author.id);
        }, 10000);
    }
  msg.channel.send("¡Hola <@" + msg.author.id + ">!")
//  } else { msg.channel.send("No tienes permiso para usar este comando.")
  
  }
}
 // ------------------------------------------  
 else if(comando === 'creditos' || comando === 'credits' || comando === 'créditos'){
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;

  await client.users.fetch('406455063075094528')
  await client.users.fetch('465217670703349760')
  await client.users.fetch('237160504974508034')
  await client.users.fetch('603902580430733313')

  const Jorge = client.users.cache.find(u => u.id === '406455063075094528')
  const Dani = client.users.cache.find(u => u.id === '465217670703349760')
  const Yo = client.users.cache.find(u => u.id === '237160504974508034')
  const Rob = client.users.cache.find(u => u.id === '603902580430733313')

  const Embed = new Discord.MessageEmbed()
    .setTitle('Créditos')
    .setDescription('Ecual fue creado gracias a varios usuarios.')
    .addField('Creador del bot', `${Yo.tag}`)
    .addField('Agradecimientos', `${Dani.tag}, por ayudarme con el bot\n${Rob.tag}, por el diseño del bot\n${Jorge.tag}, por darme la idea`)
    .setColor("RANDOM")
    msg.channel.send(Embed)

 }
 else if(comando === 'hora'){
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
  //var time = msg.getHours() - 2;
  const d = new Date();
const UTC = d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();
const UTC_ESP = d.getUTCHours() + 1 + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();
const UTC_MEX = d.getUTCHours() - 6 + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();
  const Embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setDescription(`🕒 **Hora UTC:** ${UTC}\n\n🕕 **Hora española:** ${UTC_ESP}\n\n🕘 **Hora mexicana:** ${UTC_MEX}`)
     .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/3/37/Clock.gif')
  msg.channel.send(Embed);
 }
 else if(comando === 'adam-otaku'){
  
 }
 // ------------------------------------------  
 else if (msg.content.includes('discord.gg/') || msg.content.includes('discordapp.com/invite/')) { //if it contains an invite link
    if(msg.author.bot || !msg.guild) return;
    if(msg.guild.id === "757282582743220275") {
  var user = msg.member;
//  if (!msg.member.hasPermission("KICK_MEMBERS")) {
    msg.delete()
    if(Advertencias.has(msg.author.id, 3)){
    const EmbedSilenciado = new Discord.MessageEmbed() 
    .setAuthor(msg.author.tag + " ha sido silenciado", msg.author.avatarURL({ dynamic: true }))
    .setDescription("**Razón:** Demasiadas advertencias")
    msg.channel.send(EmbedSilenciado)
    const muteRole = msg.guild.roles.cache.find(x => x.name === "Silenciado");
//			if (!muteRole) msg.guild.createRole("name", "Silenciado");
      if (!muteRole) msg.channel.send("No encontre ningún rol con el nombre Silenciado :/");
			await user.roles.add(muteRole); // lo cambie de addRole a roles.add
      setTimeout(function() {
				user.roles.remove(muteRole); // Lo mismo aquí 
        Advertencias.delete(msg.author.id, 3);
			}, 300000); // 1 segundo = 1000 milisengudos | 10 segundos = 10000 milisegundos | 300000 milisegundos = 5 minutos
    } else {
     
    Advertencias.add(msg.author.id, 1)
    const EmbedInvitacionIlegal = new Discord.MessageEmbed()
    //.setTitle(msg.author.tag + " has been warned")
    .setAuthor(msg.author.tag + " ha sido advertido", msg.author.avatarURL({ dynamic: true })) //msg.author.avatarURL()
    .setDescription("**Razón:** Invitación a otro servidor")
    
    msg.channel.send(EmbedInvitacionIlegal)
   
 }
 }
} 
 // ------------------------------------------
else if(comando === 'decir' || comando === 'say'){
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
  if(!args.length) return msg.reply('que quieres que diga el bot?');
 // if(msg.author.id === '237160504974508034'){
  if(msg.content.includes('@everyone') || msg.content.includes('@here') || msg.content.includes('discord.gg/') || msg.content.includes('discordapp.com/invite/')){
    msg.reply('casi cuela.') .then(msg => msg.delete({timeout: 3000}))
  } else {
  msg.delete() .then(msg.channel.send(`${args.join(' ')}`))
  }
 //}
}

else if(comando === 'revivir' || comando === "resucitar" || comando === 'curar' || comando === 'revive' || comando === 'heal'){
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
   if (talkedRecently.has(msg.author.id)) {
              msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
      } else {
          talkedRecently.add(msg.author.id);
          setTimeout(() => {
            talkedRecently.delete(msg.author.id);
          }, 2000);
      }
  const revivi =
    ['https://media1.tenor.com/images/10bb901d44937544512191951e87a089/tenor.gif',
     'https://media1.tenor.com/images/ecd450114a2fa26efd43338d30e5b1b2/tenor.gif',
     'https://data.whicdn.com/images/33776258/original.gif',
     'https://cdn.discordapp.com/attachments/524608041501458452/785966498648424478/123456798.gif'];

    const member = msg.mentions.members.first() || client.users.cache.get(args[0]);
   if(!member) return msg.reply("menciona a un usuario.") .then(msg => { msg.delete({ timeout: 5000 }) });
   if(member.id === msg.author.id) return msg.reply('no puedes auto-revivirte, ¡Lo siento!') .then(msg => { msg.delete({ timeout: 5000 }) });
   if(member.id === '752913324668354630') return msg.reply('no puedes revivirme por que no puedo morir.') .then(msg => { msg.delete({ timeout: 2000 }) });
   if(member.user.bot){ return msg.reply('no puedes revivir a un bot.') .then(msg => { msg.delete({ timeout: 5000 }) });
    } else {
   const vida = client.emojis.cache.find(em => em.id === '770261116055322655')
   msg.react(`${vida}`);
   const Embed = new Discord.MessageEmbed()
    .setDescription(`**${msg.author.username}** revivió/curo a **${member.user.username}**`)
    .setColor("RANDOM")
    .setImage(revivi[Math.floor(revivi.length * Math.random())])
    .setTimestamp()
    .setFooter('Ecual [BETA]', client.user.avatarURL());
  
  msg.channel.send(Embed); 
    }
      }   

 // ------------------------------------------  
else if (comando === 'sugerir-bot' || comando === 'bot-sugerir' || comando === 'suggest-bot' || comando === 'bot-suggestion' || comando === 'bot-suggest' || comando === 'sugerir'){ 
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if(msg.author.id === SCP){
     if(args[1] === '-delete' || args[0] === '-delete' || args[1] === '-remove' || args[0] === '-remove'){
    Demasiados_Reportes.delete(msg.author.id)
    msg.reply('su cooldown fue desactivado correctamente.') .then(msg => msg.delete({timeout: 4000}));
     }
  } 
if(!args.length) return msg.reply("no has incluido tu sugerencia.") .then(msg => msg.delete({timeout: 4000}))
if (Demasiados_Reportes.has(msg.author.id)) {
            msg.reply("espere antes de volver a mandar otra sugerencia.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
      Demasiados_Reportes.add(msg.author.id);
        setTimeout(() => {
          Demasiados_Reportes.delete(msg.author.id);
        }, 60000);
    }
  const channel = client.channels.cache.find(ch => ch.id === '757597188980211842'); // Para una sugerencia para el bot
//const channel = msg.guild.channels.cache.find(ch => ch.id === '757597188980211842'); Para una sugerencia para un servidor individual
  const Embed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.avatarURL({dynamic: true}))
    .setDescription(args.join(' '))
    .setTimestamp()
    .setColor('ff0000')
    .setFooter(`Sugerencia desde ${msg.guild.name}`)
channel.send(Embed)
const Enviado = new Discord.MessageEmbed()
   .setTitle('Su sugerencia fue enviada exitosamente.')
   .setColor('BLUE')
   .setFooter('Abusar resultará en un baneo.')
   msg.channel.send(Enviado)
} 
// ------------------------------------------ 
else if (comando === 'args-info') {
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
if(msg.author.id === "237160504974508034"){
if (!args.length) {
	return msg.channel.send(`No has puesto ningún argumento, ${msg.author}!`);
	}

	msg.channel.send(`Arguments: ${args}`);
}
  }
  // ------------------------------------------ 
else if (comando === 'bug-report' || comando === 'reportar-bug' || comando === 'report-bug'){
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
     if(msg.author.id === SCP){
     if(args[1] === '-delete' || args[0] === '-delete' || args[1] === '-remove' || args[0] === '-remove'){
    Demasiados_Reportes.delete(msg.author.id)
    msg.reply('su cooldown fue desactivado correctamente.') .then(msg => msg.delete({timeout: 4000}));
     }
  } 
               if (Demasiados_Reportes.has(msg.author.id)) {
            msg.reply("espere antes de volver a mandar otro reporte.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
      Demasiados_Reportes.add(msg.author.id);
        setTimeout(() => {
          Demasiados_Reportes.delete(msg.author.id);
        }, 60000);
    }
  if(!args.length) return msg.reply("no has incluido tu reporte.");
  const channel = client.channels.cache.find(ch => ch.id === '769264539501068338'); // Para una sugerencia para el bot
  //const channel = msg.guild.channels.cache.find(ch => ch.id === '769264539501068338'); Para una sugerencia para un servidor individual
  if(!channel) return;
  msg.delete()
  const Enviado = new Discord.MessageEmbed()
   .setTitle('Su reporte fue enviado exitosamente.')
   .setColor('BLUE')
   .setFooter('Abusar resultará en un baneo.')
   msg.channel.send(Enviado)
  const Embed = new Discord.MessageEmbed()
   .setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL({ dynamic: true })}`)
   .setTitle('Nuevo reporte de bug')
   .setColor('ff0000')
   .setDescription(`${args.join(' ')}`)
   .setFooter(`Sugerencia desde ${msg.guild.name}`)
  channel.send(Embed)
}
 // ------------------------------------------ 
  if (!msg.guild) return;

  if (msg.content === prefix + 'join') {
  if (msg.author.id === "237160504974508034") {
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      msg.react("✅")
    } else {
        msg.reply('Primero debes unirte a un canal.');
    }
   } else {
    msg.reply("no tienes permisos para usar este comando.");
  }
}
  else if (comando === 'clear' || comando === 'purge' || comando === 'remove') {
    if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
    if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2500);
    }
    const amount = parseInt(args[0]) + 1;
      if (isNaN(amount)) {
      return msg.reply('eso no es un número.') .then(msg => {msg.delete({timeout: 5000 }) });
    } else if (amount <= 1 || amount > 100) {
      return msg.reply('tienes que poner un número entre 1 y 99.') .then(msg => {msg.delete({timeout: 5000 }) });   
    } else if (!msg.member.hasPermission("MANAGE_CHANNELS")) {
      return msg.reply('no tienes permiso para usar este comando.') .then(msg => {msg.delete({timeout: 5000 }) });
    }
    msg.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      msg.channel.send('¡Hubo un error al eliminar los mensajes de este canal!') .then(msg => {msg.delete({timeout: 5000 }) }); 
    });
  }
  
  else if(comando === 'slowmode' || comando === 'slow-mode' || comando === 'lento' || comando === 'modo-lento' || comando === 'slowmotion' || comando === 'modo pausado' || comando === 'modo-pausado'){
    if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
    if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2500);
    }
    const amount = parseInt(args[0]);
    if (isNaN(amount)) {
      return msg.reply('ese no es un número.') .then(msg => {msg.delete({timeout: 4000 }) });
    } else if (amount <= 0 || amount > 60) {
      return msg.reply('tiene que ser entre 1 y 60 segundos.') .then(msg => {msg.delete({timeout: 4000 }) });   
    } else if (!msg.member.hasPermission("ADMINISTRATOR")) {
      return msg.reply('no tienes permiso para usar este comando.') .then(msg => {msg.delete({timeout: 4000 }) });
    }
    msg.delete({timeout: 2000})
    msg.channel.setRateLimitPerUser(amount,`Comando efectuado por ${msg.author.tag}.`).catch(err => {
      console.error(err);
      msg.channel.send('¡Hubo un error al poner el modo lento!') .then(msg => {msg.delete({timeout: 5000 }) }); 
    });
    if(amount > 1){
    msg.channel.send(`Ahora el canal esta en modo \`l e n t o\`\nEl modo lento ahora es de ${amount} segundos.`) .then(msg => {msg.delete({timeout: 6000 }) });
    } else {
      msg.channel.send(`Ahora el canal esta en modo \`l e n t o\`\nEl modo lento ahora es de ${amount} segundo.`) .then(msg => {msg.delete({timeout: 6000 }) });
    }
  }
 // ------------------------------------------
  else if(msg.cotent === prefix + "leave")
    if (msg.author.id === SCP) {
    if (msg.member.voice.channel) {
//      dispatcher.destroy();
      msg.react("✅")
    } else {
        msg.reply('Primero debes unirte a un canal.');
    }
   } else {
    msg.reply("No tienes permisos para usar este comando.");
  }
   // ------------------------------------------
   
    if (comando === 'eval') {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    if(msg.content === `${prefix}eval token` || msg.content === `${prefix}eval config.token` || msg.content.includes('token'))
    return msg.channel.send('```[REDACTADO]```');
      if(msg.author.id !== SCP) return;

      const args2 = msg.content.split(" ").slice(1);
      
      if(!args2.length) return;

      const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
      
      try {
        const codigo = args2.join(" ");
        const evaled = eval(codigo);
      
          const hola_ = new Discord.MessageEmbed()
             .addField('✅・Resultado', `\`\`\`js\n${clean(evaled)}\`\`\``)
             .addField('ℹ️・Tipo', typeof evaled)
             .setColor("00FF00")
          msg.channel.send(hola_)
        } catch (err) {
          const aop = new Discord.MessageEmbed()
             .addField(`⚠️・Error`, `\`\`\`xl\n${clean(err)}\n\`\`\``)
             .setColor("ff1100")
             msg.channel.send(aop)
      }
    }

/*else if(comando === 'reboot'){  
  if(msg.author.bot) return;
  const Emoji = client.emojis.cache.find(o => o.id === '770284050333564959')
  const gg_node_js = new Discord.MessageEmbed()
      .setTitle(`${Emoji}・Comando desactivado`)
      .setColor(`ff0000`)
      .setDescription('Literalmente este comando lo que hace es\nque se dupliquen los mensajes y no quiero eso.')
  msg.channel.send(gg_node_js)
  if(msg.author.id === SCP){
    console.log('==============REINICIANDO==============')
   console.log('Manuela te dice: ¡Hola!')
    const carga = client.emojis.cache.find(pepe => pepe.name === 'cargando')
    const Embed = new Discord.MessageEmbed()
        .setDescription(`${carga}・El bot se reinició`)
        .setColor('BLUE')
    msg.channel.send(Embed) 
    .then(msg => client.destroy())
    .then(() => { client.login(token);
        });
}
  }*/

else if(comando === "perro" || comando === "dog"){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const perros =
  ['https://cdn.discordapp.com/attachments/630811127588061245/753273216071499826/akita-2534986_1920.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753273259142807582/145655730.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753273347365666856/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753289548481560596/324103705_1.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753289598251040808/img_como_educar_a_mi_shiba_inu_22044_orig.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753289659324301352/341279003_1.png',
  'https://cdn.discordapp.com/attachments/630811127588061245/753290025050964088/nombres_para_perros_originales_y_bonitos_5579_600_square.png', //
  'https://cdn.discordapp.com/attachments/630811127588061245/753290561280147572/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.png',
  'https://images.clarin.com/2019/01/18/RBBMxtqH5_1256x620__1.jpg',
  'https://www.redaccionmedica.com/images/destacados/coronavirus-perros-no-necesitan-mascarillas-porque-no-se-contagian--5615.jpg',
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/15665/production/_107435678_perro1.jpg']; //
  
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
msg.react("🐶");
const EmbedPerro = new Discord.MessageEmbed()
	.setTitle('Aquí tienes un perro 🐶')
  .setColor("RANDOM")
	.setImage(perros[Math.floor(perros.length * Math.random())])
  .setTimestamp()
	.setFooter('Ecual [BETA]', client.user.avatarURL());

msg.channel.send(EmbedPerro); 
  
}
 // ------------------------------------------
else if(comando === "suicidio" || comando === "suicidarse" || comando === "suicide"){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const formas =
  ['https://media3.giphy.com/media/vkwAeqMEUSaoU/giphy.gif',
  'https://media4.giphy.com/media/lV8zIcGziCpiM/giphy.gif',
  'https://i.giphy.com/media/l2JeiuwmhZlkrVOkU/200.gif',
  'https://i.giphy.com/media/c6DIpCp1922KQ/200w.gif',
  'https://24.media.tumblr.com/tumblr_me4is26PaU1rv8iqgo1_500.gif',
  'https://media1.tenor.com/images/7920ef706f6248d52c99eba476911547/tenor.gif']
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
msg.react("😔");
const EmbedPerro = new Discord.MessageEmbed()
	.setTitle(msg.author.username + ' se suicidó 😔')
  .setColor("RANDOM")
	.setImage(formas[Math.floor(formas.length * Math.random())])
  .setTimestamp()
	.setFooter('Ecual [BETA]', client.user.avatarURL());

msg.channel.send(EmbedPerro); 
  
}
  
else if(comando === "video" || comando === "shitposting" || comando === "vídeo"){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const videos =
  ['https://cdn.discordapp.com/attachments/410197118263754753/729800576602341396/mmg_DIGO_GLUGLUGLUGLUGLU.mp4',
   'https://cdn.discordapp.com/attachments/631885597790699530/756548208976724079/video0_2.mp4',
   'https://cdn.discordapp.com/attachments/631885597790699530/756548098901147770/-_OSTIA_UN_NEGRO_gNJIq7yksrY_1080p.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/721922790483296267/upset.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/720521623576248340/video0-1-1.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/721922828542410862/video3-1.mp4',
   'https://cdn.discordapp.com/attachments/756904612186816583/757267923361464400/VID-20200613-WA0005.mp4',
   'https://cdn.discordapp.com/attachments/552209480318976036/722607620720033892/scary_hospital.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/730267570078482582/106473684_616951439226477_1495357471629955652_n.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/722558919666565150/103424301_268848407657945_1285935440793751391_n.mp4',
   'https://cdn.discordapp.com/attachments/524608041501458452/785967170718924870/gay_moment.mp4'];
  
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
msg.react("🎥");
  
const EmbedVideo = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setFooter('Este comando será eliminado, prueba a usar el comando '+prefix+'meme.')
  .attachFiles(videos[Math.floor(videos.length * Math.random())])

msg.channel.send(EmbedVideo); 
  
    }
  
else if(comando === "ch!suicide"){
if (msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
    const ch = new Discord.MessageEmbed()
        .setDescription(msg.author.username + ", el comando correcto es `m!suicide`...")
        .setColor(0xfafafa)
    msg.channel.send(ch) .then(msg => { msg.delete({ timeout: 5000 }) });
        
}
  
else if(comando === "8ball"){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const ball = ["¡Sí!","¡Pues claro!", "Depende.", "No.", "Posiblemente...","Seguramente no.", "Tal vez", "¿Tu que crees?", "¡Por supuesto!", "Pero que pregunta es esa...", "Claro que no."]
  
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
if (!args.length){ msg.channel.send("<@" + msg.author + ">," + " ¡Tienes que incluir tu pregunta!") .then(msg => { msg.delete({ timeout: 4000 }) }); 
} else {
  if(msg.content.includes('?')){
msg.react("🎱");
const Embed8ball = new Discord.MessageEmbed()
	.setTitle('🎱 Pregunta 8ball')
  //.setDescription("A tu pregunta, `" + args.join(' ') + "`, mi respuesta es: " + ball[Math.floor(ball.length * Math.random())])
  .setDescription(`**${msg.author.username} pregunta:** ${args.join(' ')}\n**Mi respuesta es:** ` + ball[Math.floor(ball.length * Math.random())])
  .setColor("RANDOM")
  .setTimestamp()
	.setFooter('Ecual [BETA]', client.user.avatarURL());

msg.channel.send(Embed8ball); 
   } else {
     msg.reply('¡Eso no es una pregunta!') .then(msg => { msg.delete({ timeout: 5000 }) });
    }
     }
      }
  
if(comando === "meme"){
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const memes =
  ['https://cdn.discordapp.com/attachments/410197118263754753/698583398532382761/IMG_20200409_043254_334.jpg', 
  'https://cdn.discordapp.com/attachments/410197118263754753/654624820155121665/IMG-20191127-WA0021.jpg', 
  'https://cdn.discordapp.com/attachments/630811127588061245/753288079875244032/97954aac03730520bd2937f406af1803.png', 
  'https://cdn.discordapp.com/attachments/630811127588061245/753287937713635419/4f691bb396e2e.png', 
  'https://cdn.discordapp.com/attachments/630811127588061245/753288631011115008/memes-1024x628.png',  
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Wikipedia_meme_vector_version.svg/1200px-Wikipedia_meme_vector_version.svg.png',
  'https://media.discordapp.net/attachments/410197118263754753/727914971354103880/105595662_1147566818935287_5116514191797221081_n.jpg?width=691&height=499',
  'https://cdn.discordapp.com/attachments/410197118263754753/635575377397284867/73074116_141702327153208_5781356826041778176_n.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/649022564945100800/76935496_155991129117791_9013383754244161536_n.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/715255608290312232/EY-avJ3WAAAXNqG.png',
  'https://cdn.discordapp.com/attachments/410197118263754753/641752930067939338/tghjkl.png',
  'https://cdn.discordapp.com/attachments/410197118263754753/652678719697059852/69701644_1379315478899840_4489972967450607616_n.png',
  'https://cdn.discordapp.com/attachments/410197118263754753/664882184829665300/7addec8.jpg',
  'https://cdn.discordapp.com/attachments/579441027836936218/585549076800471090/IMG-20190531-WA0070.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/573673086495490063/image0-10.jpg',
  'https://cdn.discordapp.com/attachments/552209480318976036/638030306234073098/FB_IMG_1572188671104.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/603422699779391498/IMG_20180705_081849.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/652678719697059850/68359882_1366237826874272_4637037174561177600_n.png',
  'https://cdn.discordapp.com/attachments/410197118263754753/592735025737236499/IMG_20190624_090824.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/652219031654498336/Screenshot_20191204-161336.png',
  'https://cdn.discordapp.com/attachments/410197118263754753/652862738389008384/37e0b34ab9b2e8c8666c72b605d0feb1.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/647266253232406567/Screenshot_20191121-184454.png',
  'https://cdn.discordapp.com/attachments/410197118263754753/593927269018238976/20190627_161445.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/641457533315317783/20191101_155111.JPG',
  'https://cdn.discordapp.com/attachments/410197118263754753/712427083359584336/FB_IMG_1589904176977.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/710387092907229275/hay_alguna_mujer_en__ka5qnibc.jpg',
  'https://cdn.discordapp.com/attachments/393262883221274624/596759300941021194/image0.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/558304958173151262/54436228_2220625584696012_8745077675544018944_n.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/600799688203042836/messageImage_1547830089550.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/709099438320123995/IMG-20200507-WA0402.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/655960877895516180/7b4494f.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/583142958337884181/FB_IMG_1558977146876.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/641455432757673994/image0-124.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/645267748469080065/20190910_021808.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/655831297356333089/837497e.jpg','https://cdn.discordapp.com/attachments/783364576468008990/785968670613569592/3983a5ad1029c0bd3993e81406700ec7IMG-20200130-WA0013.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/652002938302103583/PicsArt_12-04-08.11.16.jpg','https://cdn.discordapp.com/attachments/783364576468008990/785968074402168842/f0182ba474e470ea25351bf7c9c3f8cfimage0.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/583142958337884180/FB_IMG_1558994886671.jpg','https://cdn.discordapp.com/attachments/783364576468008990/785967384908922910/5171ca62091a4321b167ce53dd64b8ffIMG-20200130-WA0006.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/633315286770253874/unknown.png','https://cdn.discordapp.com/attachments/783364576468008990/785968369161207808/e0e28fde8eab06779042969cb11fe9ccIMG-20200130-WA0018.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/655830080966098975/64601fa.jpg','https://media.discordapp.net/attachments/410197118263754753/636205910175514624/FB_IMG_1571680665724.jpg','https://cdn.discordapp.com/attachments/410197118263754753/654624820155121664/FB_IMG_1574959676917.jpg', /* El segundo Meme plantas contra zombies y el tercero meme alumno llegar tarde vs profesor que llega tarde*/
  'https://media.discordapp.net/attachments/410197118263754753/563103441816256532/FB_IMG_1552009779457.jpg?width=387&height=500',
  'https://cdn.discordapp.com/attachments/410197118263754753/633397763509583873/FB_IMG_1566858701841.jpg','https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB14HAE5.img',
  'https://cdn.discordapp.com/attachments/410197118263754753/716672639921291265/Screenshot_2020-05-31-12-16-06-1.png','https://imgsnotigram.s3.amazonaws.com/uploads/2020/05/bb14hiwl.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/640763403668815882/FB_IMG_1572809649525.jpg','https://www.milenio.com/uploads/media/2020/06/10/meme-perro-grande-pequeno-especial.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/571502840061624336/images.jpeg','https://i.pinimg.com/originals/85/2b/d8/852bd87b62bfacca106da1f08c1c2880.jpg',
  'https://cdn.discordapp.com/attachments/410197118263754753/655829212304769024/cb44401.jpg',
  'https://cdn.discordapp.com/attachments/753036086548103288/753970336818790451/Mafia.jpg',
  'https://cdn.discordapp.com/attachments/765669946373832704/779077591217995836/unknown.png',
  'https://cdn.discordapp.com/attachments/410197118263754753/588544729327730688/IMG_20190612_222443_940.jpg',
  'https://media.discordapp.net/attachments/410197118263754753/593059453092495371/image0.jpg?width=315&height=499','https://media.discordapp.net/attachments/410197118263754753/588594533235818499/FB_IMG_1560374111233.jpg?width=499&height=499',
  'https://media.discordapp.net/attachments/410197118263754753/633818263817551882/download.jpg', 'https://media.discordapp.net/attachments/410197118263754753/641458717061152798/unknown.png?width=534&height=499', 'https://cdn.discordapp.com/attachments/410197118263754753/775867181727875072/FB_IMG_1605049736483.jpg']; // El último es: has hecho la tarea?
  const mem_o_vid = ['vid','mem','mem','mem','mem'];
  if(mem_o_vid[Math.floor(mem_o_vid.length * Math.random())] === 'mem'){

const EmojiMeme = client.emojis.cache.find(emoji => emoji.name === 'lol');
if(msg.guild.id === "743535215682781294") msg.react(EmojiMeme);
const EmbedEmoji = new Discord.MessageEmbed()
//  .setTitle('Aquí tienes un meme ' + " <:lol:" + EmojiMeme + ">")
  .setTitle('Aquí tienes un meme ' + ` ${EmojiMeme}`)
  .setColor("RANDOM")
	.setImage(memes[Math.floor(memes.length * Math.random())])
  .setTimestamp()
	.setFooter('Ecual [BETA]', client.user.avatarURL());
  
const EmbedSinEmoji = new Discord.MessageEmbed()
	.setTitle('Aquí tienes un meme 😂')
  .setColor("RANDOM")
	.setImage(memes[Math.floor(memes.length * Math.random())])
  .setTimestamp()
	.setFooter('Ecual [BETA]', client.user.avatarURL());
  
  if(msg.guild.id === "743535215682781294") { msg.channel.send(EmbedEmoji)
} else {
  msg.channel.send(EmbedSinEmoji);
  msg.react("😂")
 }
} else {
  const videos =
  ['https://cdn.discordapp.com/attachments/524608041501458452/788157515602722826/ooooo.mp4', // "just leave me alone!"
   'https://cdn.discordapp.com/attachments/631885597790699530/756548208976724079/video0_2.mp4',
   'https://cdn.discordapp.com/attachments/631885597790699530/756548098901147770/-_OSTIA_UN_NEGRO_gNJIq7yksrY_1080p.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/721922790483296267/upset.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/720521623576248340/video0-1-1.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/721922828542410862/video3-1.mp4',
   'https://cdn.discordapp.com/attachments/756904612186816583/757267923361464400/VID-20200613-WA0005.mp4','https://cdn.discordapp.com/attachments/524608041501458452/785967170718924870/gay_moment.mp4', // Gay moment
   'https://cdn.discordapp.com/attachments/552209480318976036/722607620720033892/scary_hospital.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/730267570078482582/106473684_616951439226477_1495357471629955652_n.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/722558919666565150/103424301_268848407657945_1285935440793751391_n.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/775499868264988693/fmnhHoXs-pFM-3zN.mp4',
   'https://cdn.discordapp.com/attachments/630811127588061245/781575192761729085/Roblox_Dancing_Germans.360p.mp4',
   'https://cdn.discordapp.com/attachments/630811127588061245/780832089867288586/6cf463f3-4587-4177-b02d-85f5fd2d4dd6.mp4',
   'https://cdn.discordapp.com/attachments/410197118263754753/730272430987411557/video0-89-1.mp4']; // El antepenúltimo es un video de nazis bailando roblox y el penultimo es el de tu vieja que te destruye de minecraft y el último es un video traumante sobre como se "reproducen" las sandias...
  
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
msg.react("🎥");

msg.channel.send(videos[Math.floor(videos.length * Math.random())]); 
    } 
}

else if(comando === 'meme-v2'){
  if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
  if(msg.author.id === SCP){
    var memes = fs.readdirSync('./memes')
    const final = memes[Math.floor(Math.random() * memes.length)]
    const attachment = new Discord.MessageAttachment(`./memes/${final}`, `${final}`); // No funciona :(
    const Embed = new Discord.MessageEmbed()
    fs.readFileSync
       .setImage(`${attachment}://${final}`)
    
    msg.channel.send(Embed)
    msg.channel.send(`${attachment}://${final}`)
  }
}

else if(comando === "pornhub"){
msg.delete({timeout: 100})
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const EmbedPornhub = new Discord.MessageEmbed()
     .setImage("https://media1.tenor.com/images/b6e34ed304fabc8ed733369b7d2d5226/tenor.gif")
  msg.channel.send(EmbedPornhub)
  .then(msg => {
    msg.delete({ timeout: 2950 })
  })
}
 
else if(comando === 'pacaste' || comando === 'pacaste'){
msg.delete({timeout: 100})
if (msg.author.bot || !msg.guild) return; // Poner en todos los comandos, también poner el cooldown.
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
msg.channel.send('¡Se dice PICASTE! `¿5/5?`')
  .then(msg => {
    msg.delete({ timeout: 10000 })
  })
}
  
else if(comando === 'typeracer'){
if(msg.author.id === "237160504974508034"){
let humanize = require("humanize-duration"); //Requerimos la dependencia humanize-duration
let palabras = ['Parentar', 'Romper', 'Poder', 'Dinero', 'Aldeano', 'Bomba', 'Golem', 'Suciedad', 'Agradecer'] //Este será nuestro array con las palabras a escribir
let palabra = palabras[Math.floor(Math.random() * palabras.length)] // Agarramos un elemento random del array con Math.floor(Math.random() * palabras.length) el cual nos permite sacar 1 número entre el 0 y la cantidad de palabras el cual sería el indice de la palabra random
let filtro = m => m.content === palabra //Creamos un filtro para el awaitMessages, En este caso que el contenido del mensaje recibido sea igual a la palabra
msg.channel.send(`Bien, Escriban la palabra \`${palabra}\` en el menor tiempo posible!`) //Enviamos un mensaje avisándole a los usuarios la palabra y a la vez, el inicio del juego
 /*
 Creamos el awaitMessages con su respectivo filtro y opciones las cuales explicaré ahora;
 max viene siendo la cantidad de respuestas correctas que queremos recibir, En mi caso será 1 pues solo podrá haber 1 ganador
 time viene siendo el tiempo que durará el awaitMessages, Debe estar en milisegundos
 errors viene siendo un array con las razones para que el awaitMessages se pare, en este caso sería time (Es necesario para que pasado el tiempo el juego se detenga)
 */
msg.channel.awaitMessages(filtro, {max: 1, time: 60000, errors: ["time"]}).then(msg => {
/*
Si se respondió correctamente en menos de 1 minuto le avisaremos al ganador con el tiempo que ha tardado.

Explicación de como sacar el tiempo que se tardo;

Restamos los mili segundos exactos de cuando fue creado el mensaje que sirvió para ejecutar el comando los cuales se obtienen con message.createdTimestamp()a los mili segundos actuales con Date.now(), Esto nos devolverá los milisegundos que se tardo el usuario ganador en responder

lo transformaremos a segundos utilizando la función que nos ofrece esta dependencia y lo traducimos al español con language

Nota: pueden utilizar una función hecha por ustedes o alguna otra dependencia, solo utilice esta dado que
lo principal era la funcionalidad del awaitMessages y no transformar mili segundos a segundos.
*/
msg.channel.send(`Gano ${msg.first().author} en ${humanize(Date.now() - msg.createdTimestamp, {language: 'es'})}`)
}).catch(() => { //¿Recuerdan que una de las opciones del awaitMessages era errors? Pues esto realmente devuelve un error! Por lo que debemos capturarlo con .catch
msg.channel.send(`Ninguno lo logro...`) //Enviaremos un mensaje avisando que ninguno logro escribir la palabra a tiempo
})  
} else { msg.reply("no tienes permiso para usar este comando");
}
}

if(msg.content.startsWith(prefix + "version") || msg.content.startsWith(prefix + "versión")){
 if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
msg.channel.send({ embed: {
  color: 0xfff700,
  description: `Ecual esta en la etapa **BETA**, en la versión **${version}**`,
//    timestamp: new Date(),
      footer: {
//        icon_url: "https://cdn.discordapp.com/avatars/752913324668354630/06b592573f5cbb595ac460f5fb281e75.png?size=512",
        text: "Puedes ver los ultimos cambios con el comando " + prefix + "changelog"
      }
  
}
                 })
if(msg.guild.id === "743535215682781294") msg.react(EmojiAfirmativo)
if(msg.guild.id === "757282582743220275") msg.react("✅");
}
if(msg.content.startsWith(prefix + "invite") || msg.content.startsWith(prefix + "invitación") || msg.content.startsWith(prefix + "invitacion")){
 if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
if(msg.guild.id === "743535215682781294") msg.react(EmojiAfirmativo);
if(msg.guild.id === "757282582743220275") msg.react("✅");
const embe = new Discord.MessageEmbed()
msg.channel.send(embe)
   .setTitle('Invitación para invitar al bot')
   .setColor('00c7ff')
   .setURL('https://discordapp.com/api/oauth2/authorize?client_id=752913324668354630&permissions=8&scope=bot')
   .setTimestamp()
   .setFooter(name + ' [BETA]', client.user.avatarURL())
/*  color: "RANDOM",
  title: "Invitación para "+ "\:milky_way: Space",
  url: "https://discord.gg/A25Qz75PTw",
    timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "Ecual [BETA]"
      }
  
}
                 })
*/
} 

if(comando === 'changelog' || comando === 'actualizacion' || comando === 'actualización' || comando === 'update'){
 if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
if(!args.length) return msg.reply('debes indicar que versión del bot quieres ver.') .then(msg => {msg.delete({timeout: 4000})});
const colores = [0x002fff,0xfff700,0x22ff00,0xff0000] // En orden: Azul, Amarillo, Verde y Rojo
const _5 = new Discord.MessageEmbed()
.setColor(colores[Math.floor(colores.length * Math.random())])
.addField("📝 Versión 0.5", "1. Se ha cambiado el sistema del cooldown (enfriamiento).\n2. Nuevos comandos: `" + prefix + "estado`, `" + prefix + "invite` y `" + prefix + "versión`.\n3. Nuevo comando para ver las versiones, `" + prefix + "changelog`.\n4. Se han mejorado y arreglado algunos comandos")
const _6 = new Discord.MessageEmbed()
.setColor(colores[Math.floor(colores.length * Math.random())])
.addField("📝 Versión 0.6", "1. Nuevo prefix, `" + prefix + "`, para comandos con el signo menos.\n2. Se ha mejorado el sistema de comandos.\n(Si escribes `" + prefix + "help hola`, ya no saldrá el comando)\n3. Más variedad de memes en el comando`" + prefix + "meme`.\n4. Nuevo comando para ver videos aleatorios, `" + prefix + "video`.")
const _7 = new Discord.MessageEmbed()
.setColor(colores[Math.floor(colores.length * Math.random())])
.addField("📝 Versión 0.7", "1. Se han arreglado muchos errores dentro del bot.\n2. Se han implementado mejoras respecto a otros servidores.\n3. Nuevo servidor de pruebas para el bot y otros bots.\n4.Nuevo easter egg, ¡Haber si lo encuentras!")
const _8 = new Discord.MessageEmbed()
.setColor(colores[Math.floor(colores.length * Math.random())])
.addField(`📝 Versión 0.8`, `1. Nuevos comandos: \`${prefix}8ball\`, \`${prefix}matar\` y \`${prefix}decir\`.\n2. Los vídeos fueron integrados en el comando \`${prefix}meme\`.\n3. Ahora el bot esta alojado en Visual Studio Code.\n4. Nuevo comando para reportar bugs: \`${prefix}bug-report\`.`)
const _9 = new Discord.MessageEmbed()
.setColor(colores[Math.floor(colores.length * Math.random())])
.addField(`📝 Versión 0.9`, `1. Muchos nuevos comandos: \`${prefix}gay\`, \`${prefix}besar\`, \`${prefix}consejo\`, \`${prefix}revivir\`, \`${prefix}slowmode\`.\n2. Se cambió el icono del bot y ahora se conocerá al bot como Ecual.\n3. Se han arreglado algunos bugs y pronto el bot será público\n4. Se ha modernizado el comando \`${prefix}changelog\` completamente.`)
if(args[0] === '0.5'){
  msg.channel.send(_5) .then(msg.react("📝"))}
else if(args[0] === '0.6'){
  msg.channel.send(_6) .then(msg.react("📝"))}
else if(args[0] === '0.7'){
  msg.channel.send(_7) .then(msg.react("📝"))}
else if(args[0] === '0.8'){
  msg.channel.send(_8) .then(msg.react("📝"))}  
else if(args[0] === '0.9'){
  msg.channel.send(_9) .then(msg.react("📝"))}  
else {
msg.reply(`¡Esa no es una versión válida!`) .then(msg => { msg.delete({ timeout: 4000 }) });
 }
}
                 
if(comando === "estado"){
 if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
const EmojiAfirmativo = msg.guild.emojis.cache.find(emoji => emoji.name === 'Afirmativo');
if(msg.guild.id === "743535215682781294"){ msg.react(EmojiAfirmativo)
} else { msg.react("✅")};
msg.channel.send({ embed: {
  color: "RANDOM",
  description: "Ecual estará activo cuando su creador (<@237160504974508034>) este conectado."
  
}
  })

}

if(comando === "rebuild"){
msg.delete({ timeout: 100 })
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
msg.channel.send({ embed: {
  color: 0xd9d630,
  description: "SERVER RAIDED! `1/4`"
  
}
                 })
.then(msg => {
    msg.delete({ timeout: 10000 })
  })

}

else if(comando === "scp"){
msg.delete({ timeout: 100 })
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
msg.channel.send({ embed: {
  color: 0xfcfcfc,
  description: "Has descubierto un [REDACTADO] `2/4`"
  
}
                 })
.then(msg => {
    msg.delete({ timeout: 10000 })
  })

}

else if(comando === "holamiguelperez"){
msg.delete({ timeout: 100 })
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
msg.channel.send({ embed: {
  color: 0xfcfcfc,
  description: "Has descubierto un ###### ###! `3/4`"
  
}
                 })
.then(msg => {
    msg.delete({ timeout: 10000 })
  })

}
  
else if(comando === "gato-muerto" || comando === "dead-cat"){
msg.delete({ timeout: 100 })
if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild) return;
 if (talkedRecently.has(msg.author.id)) {
            msg.reply("espere un poco antes de volver a usar este comando.") .then(msg => { msg.delete({ timeout: 4000 }) }); return
    } else {
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          talkedRecently.delete(msg.author.id);
        }, 2000);
    }
msg.channel.send({ embed: {
  color: 0xfcfcfc,
  description: "¡Miau~! `4/4`"
  
}
                 })
.then(msg => {
    msg.delete({ timeout: 10000 })
  })

}
  
})

client.login(token)