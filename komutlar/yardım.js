const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Müzik Komutlar',`
**!çal <şarkıismi>** : Belirttiğiniz Şarkıyı Sesli Odada Söyler
**!duraklat** : Çalan Şarkıyı Durdurur
**!devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**!tekrar** : Çalan Şarkıyı Tekrarlar
**!geç** : Bi Sonraki Şarkıya Geçiş Yapar
**!durdur** : Şarkıyı Durdurur`)
.setThumbnail("https://media.giphy.com/media/l46CqqobS7VRaIpSE/giphy.gif")
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
  