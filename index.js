// Clear the console | Optional
console.clear();

// Required module | Required
const fs = require('fs');
const path = require('path');

// Aoi.js client token | Required
const { token, prefix_bot, sbar_color, customer_role, announcement_ch, antilink_status } = require('./config.json');

// Aoi.js module and variable | Required
const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
  token: token,
  prefix: prefix_bot,
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

// Aoi.js client event | Required
bot.onMessage();
bot.onInteractionCreate();

// Command handler | Required
const data = new aoijs.LoadCommands(bot)
data.load(bot.cmd, './command/')

// Aoi.js client status or activity | Optional
bot.status({
  text: new Date().toUTCString(),
  type: "WATCHING",
  status: "online",
  time: 5
})

bot.variables({
  prefix: prefix_bot,
  color: sbar_color,

  // Role id
  customer_role: customer_role,

  // Harga var
  harga_dls: "5800",

  // Server Var
  antilink_st: antilink_status,
  announcement_ch: announcement_ch
})