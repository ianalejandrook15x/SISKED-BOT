let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return
global.db.data.users[m.sender].money += 50
global.db.data.users[m.sender].exp += 50  

if (/^Bermuda|bermud|bermu|🫂$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let img = 'https://qu.ax/kqDR.mp4'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { imagen: { url: vn }, fileName: 'error.jpg', mimetype: 'imagen/jpg', ptt: true }, { quoted: fkontak })}  

if (/^Purgatorio|purga|purgator|🫂$/i.test(m.text) && chat.audios) {  
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0    
let img = 'https://qu.ax/ExSQ.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { imagen: { url: vn }, fileName: 'error.jpg', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}  
