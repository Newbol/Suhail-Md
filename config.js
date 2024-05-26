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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/CXdKIGZMnyVHF7GWkDyBDY";
global.website=process.env.GURL || "https://chat.whatsapp.com/CXdKIGZMnyVHF7GWkDyBDY" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ BOLXY²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348138392770";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_16_34_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgMixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDc2LFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkltL3JKQzRUcnhQbnhvLzQrZ0FuNHB4STBZZ2JGb1hoSDFsazNELzJiU1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImprR3dCYU5NVGNDWG5SQjB2cl84aVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDkyZjY2MGItZjRkYi00ZTM5LThkZWQtNzg5NTI5NGM4ZWMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxNzEsXG4gICAgICA5NCxcbiAgICAgIDIwNyxcbiAgICAgIDE0NCxcbiAgICAgIDE0NSxcbiAgICAgIDIwNSxcbiAgICAgIDIxOSxcbiAgICAgIDExLFxuICAgICAgODcsXG4gICAgICA0OCxcbiAgICAgIDk1LFxuICAgICAgMjIxLFxuICAgICAgMTMsXG4gICAgICAyMjYsXG4gICAgICAyLFxuICAgICAgMjExLFxuICAgICAgMTQxLFxuICAgICAgMjMyLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgNTgsXG4gICAgICAxMTUsXG4gICAgICAyNTIsXG4gICAgICAyMzYsXG4gICAgICAxODcsXG4gICAgICAxMzUsXG4gICAgICAyMzksXG4gICAgICAyMTEsXG4gICAgICA0MCxcbiAgICAgIDYsXG4gICAgICA1NCxcbiAgICAgIDE0OSxcbiAgICAgIDcyLFxuICAgICAgMjQzLFxuICAgICAgMTM0LFxuICAgICAgMTE5LFxuICAgICAgMTcyLFxuICAgICAgMjM4LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZ3dFBvRkVKTEp6YklHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqdTZVYThTSlRNaGxObmJPdmQ1eGp3VkNBeHA4VUFUOGJlK3pOL0diRldVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVoWHVVVWk4TXYwaSsyQWVrRnlKdXRNYndFYlN6dkIvallEWi9jTmh1R3lPRkZBTkZHUmdJYlRpR1B0YS91S2FqZVdnTTl4a3UxaGUvQUpMZ3hia0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRUKzVlTS9vdkFnSHdDOW5CM2xPNDJTUEdzbUlaUTFXSzV5eVdwNUx6MHBWUVFXaEFFQ1FqV2EvNVVlK3pFUC9WL3NZQ0o2MFpDbC93MnQ5MnJENmhnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzODM5Mjc3MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg0NTI5MzYwNzk3Nzc4OjI0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzODM5Mjc3MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NzQxMjcwXG59Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ BAOLEX²²-ᴍᴅ 』`SAY HI TO BOLEXY``", //*『ON WHATSAPP https://wa.me/qr/3BGKYY7SMSQ4A1"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BOLEXY💪💪",
  ownername:process.env.OWNER_NAME|| "BOLXY☝☝",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-EWGotKcY6P8OBE0YIKZrT3BlbkFJJktcsaPZ6wvUibW64Yoe",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-6f9d4847-2adb-43e8-b61c-80acb7d58b2e",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "newl",
  antilink_va. ues:process.env.ANTILINK_VALUES|| "all",
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
