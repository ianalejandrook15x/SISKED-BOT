
let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🍁 *EQUIPO DE AYUDANTES*
🌟 *Bot:* ${global.botname}
✨️  *Versión:* ${global.vs}

👑 *Propietario:*

• Anuar
⭐ *Rol:* Propietario 👑
🌟 *Número:* ${creador}

🌸COLABORADORES

• Ian
⭐ *Rol:* Desarrollador ☁
🌟 *Número:* 584123989549
🌟 *Número:* 543876631319 

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
