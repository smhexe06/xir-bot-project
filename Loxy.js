const ytdl = require('ytdl-core');
var opus = require('opusscript');
const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://boost-aktif.glitch.me/");
}, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const scream = new Discord.Client();

scream.login("NzE3MDUzMDQ4MDE0MzcyOTI1.XuaaaA.3G8241iMz5zMjepKx-NRN4rAOb4");