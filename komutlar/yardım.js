const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const venqtm= new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(`LoxyGUARD`, client.user.avatarURL) 
      .addField(`**Komutlar**`, 
                      `\n    
                      **ban-limit** : Ban Limit Sistemi
                      **banlananlar** : Banalananlar Listesi
                      **kullanıcı-bilgi** : Kullanıcı Bilgi Sistemi
                      **capslock-engelleme** : Caps Engel Sistemi
                      **temizle** : Gelimiş Temizle Sistemi
                      **notal** : Not Alma Sistemi
                      **forceban** : Force Ban Sistemi
                      **uyar** : Uyarı Sistemi
                      **reklam-engelleme** : Reklam Engel Sistemi
                      **küfür-engel** : Küfür Engel Sistemi
                      **sohbet-aç** : Sohbeti Açma Sistemi
                      **sohbet-kapat** : Sohbet Kapatma Sistemi
                      **ban** : Ban Sistemi
                      **kilit** : Kilit Sistemi
                      **rol-koruma** : Rol Koruma Sistemi
`)
    .setFooter(``, client.user.avatarURL)
    message.channel.send(venqtm).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yy'],
    permLevel: 0
};

exports.help = {
    name: 'yy',
      category: 'Yardım Menüsü',
      description: 'yy',
};