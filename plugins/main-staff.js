
let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🍁 *EQUIPO DE AYUDANTES*
🌟 *Bot:* ${global.botname}
✨️  *Versión:* ${global.vs}

👑 *Propietario:*

• Anuar
⭐ *Rol:* Propietario 👑
🌟 *Número:* ${creador}
✨️ *GitHub:* https://github.com/Sisked-Bot

🌸COLABORADORES

• Ian
⭐ *Rol:* Desarrollador ☁
🌟 *Número:* 543876631319
✨️ *GitHub:* https://github.com/ianalejandrook15x
await conn.sendFile(m.chat, icons, 'nino.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
