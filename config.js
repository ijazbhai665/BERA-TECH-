//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Brucebera5@gmail.com";
global.location = "Nairobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/berabotsmd/BERA-TECH-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/ZHn1Xd1/IMG-20240802-WA0019.jpg";
global.devs = "https://t.me/Alphatrex";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254743982206";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/HtT3vjm/goku-gif-3.gif";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURZcFNIVlMyc09XUS9ERmk4bWM4c0ljMVFoRlNUdVhKSVhWWEU2MzFIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUtTMVlUY0tReHVvU2pQM2RlYU9RaUhQZWpBa1hQL3RlN25NSElNUU5pQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQXZCZzlGSk02YkJDUGVLQUxkNEhtclR2bllLYnNWN0FMSmFHeXFuRGtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS0NTbVlubXk3V29sN0VKa0NHcUxtSFJodnNXdUJNUWJhenJsS2g4Z2pzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGT29Vc1R2TGUrV1lZZUhEaGJPWWZ1Qk5MMEl6L0FSZE9JMlJCZ3FrM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkozS1h0K3pyaCtMcUxWTmJPdUJ3L3JFdHhNdmhsZEdjUGk1Z3RnVUZWRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VvWUNLUkwyTGRwTzB2U1VHR2t6a1lpMzZZQTVLSkROMlA3TUhQMFVsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlVWbGNIQzJ2QVlJVkJQN0haZVFua1NPcmo5MlQ4N3hRQ0hMK0JlZWlXYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOUWJ1NXhNZVFYOThnOFBiUktkU0ZOY0VUOWJTU3ZSbUJrc1M0NUNiUVlLSXk5YXV3NGtqbVJwUVNNMlJBYWRIbE5ud1pPL290YVRUWkhXS0Z0M2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJKVWt0VVBJSkwxeFJuZXNXTzg1c0RSSnI4RHhCSGxTTnYrdmtsWGFwdmFFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPbHpqckJqcVNpcWEwek5YVGpYUlJ3IiwicGhvbmVJZCI6ImYyZjE2MTI0LWViNWQtNGExNy1hY2MyLTBjZGI4NzQ1YjBlNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqSGNIVittbisyRU0yZjVyeFFibWpHaHNTWkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWJVanRBMEs3NXcyM0FWMUhEQXp2bVVac2dFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNLWUFGMjgxIiwibWUiOnsiaWQiOiI5MjMxMDUxNzEwMDk6OTZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ083Z2dOd0NFSXl0ZzdZR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdHMUVEMG5sWXBDOUVtK1Q5d2pTZU5qNkxXTGJXOGdxNG0wdXpOUlVxWHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpqczQrL3ZZOHBRamRUdHhNbXh0TXV2NndxSTNwMi9wUTR4VThXVExZREhkc1IxMjFGWTFwNXRVYWRXQ3NEK1FoNDhONGY4WW1FQm1jUGIzSkFUbENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJubkVydnNhU3RJeWNvRW1JeGNJb2V0c2EzZlUzbHBZSVhLaXZPRWEwMStuZi84MzFiNnl3ZC9XakE1L1Z2TU5pK3NKTTB0YXlKUGgyUmtnSWkyUFJqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEwNTE3MTAwOTo5NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZQnRSQTlKNVdLUXZSSnZrL2NJMG5qWStpMWkyMXZJS3VKdExzelVWS2w4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzOTEzODgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlueCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BERA-TECH-™`",
  author: process.env.PACK_AUTHER || "BERA-TECH-",
  packname: process.env.PACK_NAME || "B E R A",
  botname: process.env.BOT_NAME || "BERA-TECH-",
  ownername: process.env.OWNER_NAME || "Bruce Bera",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "B E R A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
