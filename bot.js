const Discord = require("discord.js");
var bot = new Discord.Client();

 

const prefix = '-';
bot.on('ready', () => {
console.log("Ready");
bot.user.setActivity(`LOCKDOWN|${prefix}help`);
bot.user.setStatus(`dnd`);
  
});


//------------
bot.on("message", msg => {
    var lc = msg.content.toLowerCase();
//-----------
    var Error1 = 'Error 101: Member not found, command cancelled.';
    var Error2 = 'Error 102: User is a moderator, command cancelled.';
    var Error3 = 'Error 103: Arguments missing, command cancelled.';
    var Error4 = 'Error 104: User higher/equal role, command cancelled.';
  var Error5 = 'Error 105: One or more things were not found, command cancelled.';
 var Error6 = "Error6: Moderator only, command cancelled.";

  //-------------
    var BannedID = msg.author.id == '001010';
    var Banned = ":x: **You're banned from using Hilton Hotels Bot commands, please send a request to the bot ADMINISTRATORS to appeal your ban. ** :x:";

 
   //----
    var BetaID = msg.author.id == '421931065423167508' || msg.author.id == '247189125797511168';
         // tor, ist ,max
  //-----
  //---- COMMANDS
 //--BETACMDs
 
 //-----
 ///--- houses
 if (lc.startsWith(prefix + "houses")){
  let args = msg.content.split(" ").slice(1);
   if (BannedID)return msg.channel.send(Banned).catch(console.error);
  var Embed = new Discord.RichEmbed()
  .setTitle("Gods of Grecee Houses")
  .setDescription("Below you will find information and the links to each official house that Gods of Greece haves. Remember that when you join a house you may be ranked up in the main group.")
  .setColor(0x868A08)
  .setFooter("BETA VERSION by iSt_xrm#3096")
  .addField("House of Zeus", "Zeus is the god of the sky and ruler of the Olympian gods. He overthrew his father, Cronus, and then drew lots with his brothers Poseidon and Hades, in order to decide who would succeed their father on the throne. Zeus won the draw and became the supreme ruler of the gods, as well as lord of the sky and rain.  \n House Link: [Click Here](https://www.roblox.com/Groups/Group.aspx?gid=4277015)")
  .addField("House of Hera", "Hera was the Olympian queen of the gods, and the goddess of marriage, women, the sky and the stars of heaven. She was usually depicted as a beautiful woman wearing a crown and holding a royal, lotus-tipped sceptre, and sometimes accompanied by a lion, cuckoo or hawk.  \n House Link: [Click Here](https://www.roblox.com/My/Groups.aspx?gid=4213761)")
  .addField("House of Persephone", "Persephone was the goddess queen of the underworld, wife of the god Haides (Hades). She was also the goddess of spring growth, who was worshipped alongside her mother Demeter in the Eleusinian Mysteries. This agricultural-based cult promised its initiates passage to a blessed afterlife.    \n House Link: [Click Here](https://www.roblox.com/My/Groups.aspx?gid=3764512)")
  .addField("House of Artemis", "Artemis is the Olympian goddess of the hunt, the moon, and chastity; in time, she also became associated with childbirth and nature. No more than few days old, she helped her mother Leto give birth to her twin brother Apollo. Artemis was very protective of her and her priestesses’ innocence.       \n House Link: [Click Here](https://www.roblox.com/My/Groups.aspx?gid=4032618)")
  .addField("House of Hades", "Hades is the Ancient Greek god of the Underworld, the place where human souls go after death. In time, his name became synonymous with his realm. It has to be said unsurprisingly – since he barely left it.        \n House Link: [Click Here](https://www.roblox.com/groups/group.aspx?gid=3195004)")
  .addField("House of Poseidon", "Poseidon is the violent and ill-tempered god of the sea. One of the Twelve Olympians, he was also feared as the provoker of earthquakes and worshipped as the creator of the horse. A hot-blooded deity, Poseidon had many disputes with both gods and men, most famously with Athena and Odysseus.      \n House Link: [Click Here](https://www.roblox.com/Groups/group.aspx?gid=4222082)")
  .addField("House of Selene", "Selene was the goddess of the moon. She was depicted as a woman riding sidesaddle on a horse or driving a chariot drawn by a pair of winged steeds. Her lunar sphere or crescent was either a crown set upon her head or the fold of a raised, shining cloak.         \n House Link: [Click Here](https://www.roblox.com/Groups/group.aspx?gid=3279712)")
  .addField("House of Apate", "Apate was the goddess/personification of fraud, deceit, trickery, deception and guile. She was one of the evil spirits released from Pandora's Box. Apate is the child of Nyx, the ancient goddess of night before the Olympians took over, and Erebus, the ancient god of darkness.          \n House Link: [Click Here](https://www.roblox.com/Groups/group.aspx?gid=4160423)")
msg.author.send(Embed).catch(console.error);
 };
  //------
//--RMEOVE ROLE
  
  if (lc.startsWith(prefix + "removerole")) {
   let args = msg.content.split(" ").slice(1);
   
        let rUser = msg.guild.member(msg.mentions.users.first());
        let mod = msg.guild.roles.find('name', "HH Admin");
 
   let reason = args.join(" ").slice(22);
  let role = msg.guild.roles.find('name', reason);
    if (BannedID)return msg.channel.send(Banned).catch(console.error);
  
      if (!mod) return msg.channel.send(Error6).catch(console.error);
  if (!reason) return msg.channel.send(Error3).catch(console.error);
  if (!role) return msg.channel.send(Error5).catch(console.error);
  
  if (msg.member.roles.has(mod.id)){
    rUser.removeRole(role.id);
    
    msg.delete();
   msg.channel.send(`**${rUser} was removed ${reason}.**`).catch(console.error);
    
  } else msg.channel.send(Error5).catch(console.error);
  
       }; 
  //---

 //-- add role
if (lc.startsWith(prefix + "addrole")) {
 let args = msg.content.split(" ").slice(1);
   
        let rUser = msg.guild.member(msg.mentions.users.first());
        let mod = msg.guild.roles.find('name', "HH Admin");
   let reason = args.join(" ").slice(22);
  let role = msg.guild.roles.find('name', reason);
    if (BannedID)return msg.channel.send(Banned).catch(console.error);
  
      if (!mod) return msg.channel.send(Error6).catch(console.error);
  if (!reason) return msg.channel.send(Error3).catch(console.error);
  if (!role) return msg.channel.send(Error5).catch(console.error);
  
  if (msg.member.roles.has(mod.id)){
    rUser.addRole(role.id);
    
    msg.delete();
   msg.channel.send(`**${rUser} was added ${reason}.**`).catch(console.error);
   
  } else msg.channel.send(Error5).catch(console.error);
  
  
       }; 
  
//---
 //-- report 
  if (lc.startsWith(prefix + "report")) {
  let args = msg.content.split(" ").slice(1);
   if (BannedID) return msg.channel.send(Banned).catch(console.error);
    
  
    let reportedchannel = msg.guild.channels.find(`name`, "reports");
    if (!reportedchannel) return msg.channel.send(Error5).catch(console.error)
    let rUser = msg.guild.member(msg.mentions.users.first());
    if (!rUser) return msg.channel.send(Error1).catch(console.error)
       let reason = args.join(" ").slice(22);
    if (!reason) return msg.channel.send(Error3).catch(console.error);
    msg.delete();
    
    var embed = new Discord.RichEmbed()
    
    .setTitle("Report")
    .setColor(0xFFFF00)  // yellow
    .addField("Report By", msg.author, true)
    .addField("Probable Reported User", rUser, true)
    .addField("Time:", msg.createdAt)
    .addField("Reason:", reason)
   
    reportedchannel.send(embed).catch(console.eror);
      msg.channel.send("**:white_check_mark: You're report has been submited succesfuly, soon you'll be contacted.**").catch(console.error);
      };
  
  //--
 //-- purge
  
      
  
  //--
 //-- notify
  
      if (lc.startsWith(prefix+ "notify")) {
       let args = msg.content.split(" ").slice(1);
        if (BannedID)return msg.channel.send(Banned).catch(console.error);
     
     let nUser = msg.guild.member(msg.mentions.users.first());
       if (!nUser) return msg.channel.send(Error1).catch(console.error);

nUser.send(`Hey ${nUser} ! ${msg.author} needs you at ${msg.channel} . :eyes: `).catch(console.error);
       msg.delete();
   };

   //----
 //-- ban
  if (lc.startsWith(prefix+"ban")){
      
        let role = msg.guild.roles.find('name', "HH Admin");
     let args = msg.content.split(" ").slice(1);
     let reason = args.join(" ").slice(22);
     let log = msg.guild.channels.find(`name`, "bot-logs");
     let kUser = msg.guild.member(msg.mentions.users.first());
     if (BannedID) return msg.channel.send(Banned).catch(console.error);
if (!kUser) return msg.channel.send(Error1).catch(console.error);
  
     if (kUser.roles.has(role.id)) return msg.channel.send(Error2).catch(console.error);
     if (!reason) return msg.channel.send(Error3).catch(console.error);
     if (!kUser.bannable) return msg.channel.send(Error4).catch(console.error);
    if (!role) return msg.channel.send(Error6).catch(console.error);
     if (msg.member.roles.has(role.id)){
       msg.delete();
       var Embed1 = new Discord.RichEmbed()
       .setTitle("Ban Report")
       .setColor(0x868A08) //--- weird
       .setDescription(`You have been banned from ${msg.guild}`)
       .addField("Moderator", msg.author, true)
       .addField("Reason", reason, true)
       .addField("Time", msg.createdAt)
        .setFooter("BETA VERSION by iSt_xrm#3096")
       kUser.send(Embed1).catch(console.error);
       kUser.ban(reason).catch(error => msg.channel.send(`Error: ${error}`));
       
var Embed2 = new Discord.RichEmbed()
.setTitle("Ban Log")
.setColor(0xFF0000) //-- red
 .setFooter("BETA VERSION by iSt_xrm#3096")
.addField("Moderator", msg.author,true)
.addField("Banned User", kUser,true)
.addField("Reason", reason,true)
.addField("Command Done In", msg.channel, true)
.addField("Time", msg.createdAt,true)
log.send(Embed2).catch(console.error);
     };
   };

  //-----
 //-- kick
  if (lc.startsWith(prefix+"kick")){
      
        let role = msg.guild.roles.find('name', "HH Admin");
     let args = msg.content.split(" ").slice(1);
     let reason = args.join(" ").slice(22);
     let log = msg.guild.channels.find(`name`, "bot-logs");
     let kUser = msg.guild.member(msg.mentions.users.first());
     if (BannedID) return msg.channel.send(Banned).catch(console.error);
  
    
if (!kUser) return msg.channel.send(Error1).catch(console.error);
     if (kUser.roles.has(role.id)) return msg.channel.send(Error2).catch(console.error);
     if (!reason) return msg.channel.send(Error3).catch(console.error);
     if (!kUser.kickable) return msg.channel.send(Error4).catch(console.error);
    if (!role) return msg.channel.send(Error6).catch(console.error);
     if (msg.member.roles.has(role.id)){
       msg.delete();
       var Embed1 = new Discord.RichEmbed()
       .setTitle("Kick Report")
       .setColor(0x868A08) //--- weird
       .setDescription(`You have been kicked from ${msg.guild}`)
       .addField("Moderator", msg.author, true)
       .addField("Reason", reason, true)
       .addField("Time", msg.createdAt)
        .setFooter("BETA VERSION by iSt_xrm#3096")
       kUser.send(Embed1).catch(console.error);
       kUser.kick(reason).catch(error => msg.channel.send(`Error: ${error}`));
       
var Embed2 = new Discord.RichEmbed()
.setTitle("Kick Log")
.setColor(0xFFFF00) //-- yellow
 .setFooter("BETA VERSION by iSt_xrm#3096")
.addField("Moderator", msg.author,true)
.addField("Kicked User", kUser,true)
.addField("Reason", reason,true)
.addField("Command Done In", msg.channel, true)
.addField("Time", msg.createdAt,true)
log.send(Embed2).catch(console.error);
     };
  
   
  
   
  };
 //--
});
  ///----     
//----



//---
console.log('Starting...')
bot.login(process.env.BOT_TOKEN)
console.log('Logged in')
//---
