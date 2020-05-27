const Discord = require('discord.js');
const bot = new Discord.Client()

const alpike = new Discord.ShardingManager('./bot.js', {
    totalShards: 2,
    token: ('NzE0MjE2Nzc4MjgwMDc1MzA0.Xs6AwA.yl6laoA0Sy139Znyavl5DNsnql8')
});

alpike.spawn(); 

alpike.on('launch', shard => {
    console.log(`${shard.id}. Shard açıldı.`);
});

setTimeout(() => {
    alpike.broadcastEval("process.exit()");
}, 21600000);

