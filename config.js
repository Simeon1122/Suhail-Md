const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_56_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyLFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdHZzcyN1J1REdMWGdDTGlXWjRuenFNOUVqbXViZ3ZJV2NvZkdpUWlMYjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNSYzBsU085VHR5Mm1oX2RqcDNucUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODIwYWJhM2ItYjA0Zi00NWFlLWI0MTYtMzA0OGRlNzkzOTBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgNzQsXG4gICAgICAxMDEsXG4gICAgICA0NyxcbiAgICAgIDc2LFxuICAgICAgMjMxLFxuICAgICAgODcsXG4gICAgICA3LFxuICAgICAgMTI3LFxuICAgICAgMTc5LFxuICAgICAgMjM0LFxuICAgICAgMjUxLFxuICAgICAgNzksXG4gICAgICAyMTMsXG4gICAgICA5NixcbiAgICAgIDExOCxcbiAgICAgIDE4NSxcbiAgICAgIDQxLFxuICAgICAgMjEyLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDc1LFxuICAgICAgMTU0LFxuICAgICAgNzIsXG4gICAgICAxMTMsXG4gICAgICAxOSxcbiAgICAgIDI0OSxcbiAgICAgIDI5LFxuICAgICAgMyxcbiAgICAgIDE2OSxcbiAgICAgIDkwLFxuICAgICAgMTc4LFxuICAgICAgMTY1LFxuICAgICAgMjEzLFxuICAgICAgMzMsXG4gICAgICAyMzQsXG4gICAgICAyMjgsXG4gICAgICA0MCxcbiAgICAgIDE5MCxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNREs0REUxN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyODA1NjczMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NTg4MzE2OTE3Nzc2Nzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09lOGtSUVF5YlBFdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZFh0WFN5cUdrQUMzWjg1cTJZS0QxWUlzOEJCK1dsTnlNZEdqSjZjZmNYcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDNy9hUGlwQnVMWWZLYXJXWGQzTDNvOEVrSmdLSFRTVG1vclpRTUtkdVJ2SDB0c2hsZ1l2R2d0ZGJmQWEwVWhtekRkVG5QVHdGTmtBWXBKUnpVdWhEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWdTRzWEZha1Q0alFNMHYwbGQvMC9FOFA0aWNwTXhDbm1OQ2VydmVrQktQZ2d6OGhCNktVUnQwRGdQRzhKV2F6NEp6UWV1MnA4bytjU0lycTRac2pnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI4MDU2NzMwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3ODUzNTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJT0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlPTC5qc29uIjogIntcImtleURhdGFcIjpcIkE1aFZld1VkeE5oRnYwSEp4MkZncVZQQitRTlc0NG52WENuWm1NRkNLY1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIyMjkzNDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
