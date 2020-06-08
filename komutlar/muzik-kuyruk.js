const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-dore');

module.exports = {
  name: "kuyruk",
  description: "eklenen şarkıların listesini al",
  execute: (client, message, args) => {
  const { channel } = message.member.voice;
    if (!channel) {
      
      return message.channel.send("**Ses Kanalına Katılın**");
    }
  
    const serverQueue = message.Client.queue.get(message.guild.id);
    
    if (!serverQueue) {
      return message.channel.send("**Kuyrukta çalan şarkı yok**");
    }
    
    message.channel.send(
    `${serverQueue.songs
      .map((song, index) => index + 1 + ". " + song.title)
      .join("\n\n")}`,
      { split: true}
    );
  }
}; 
    
