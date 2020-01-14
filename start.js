const Discord = require("discord.js")
const client = new Discord.Client();


client.on("ready", async () => {

      require("./shard.js"); 

})

client.login(process.token)