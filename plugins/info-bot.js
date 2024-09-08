import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🌟 ¡Hola! Soy Sisked, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so*`, m, rcanal, )
}*/
if (/^.menuff$/i.test(m.text)) {
conn.reply(m.chat, `★ 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 ★
★ .Donarsala
★ .Sorteo 
★ .𝘉𝘦𝘳𝘮𝘶𝘥𝘢
★ .𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
★ .𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
★ .𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
★ .𝘈𝘭𝘱𝘦𝘴
★ .cuadrilista
★ .hexalista
★ .cuadrilatero
★ .Exagonal
★ .𝘳𝘦𝘨𝘭𝘢𝘴𝘤𝘭𝘬
★ .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
★ .𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2

★ LISTA DE VS ★

SIGNIFICADOS: HH:MM (HORA:MINUTOS) 
CP (CODIGO DE PAIS) PARA LA HORA (MX, CO, CL Y AR) 
CR (COLOR DE ROPA)
EJEMPLO: 4vs4 22:30 MX
EJEMPLO: 8vs8 22:50 NEGRO

★ .4vs4
★ .6vs6
★ .scrim
★ .interna4
★ .interna6
★ .8vs8
★ .12vs12
★ .16vs16 
★ .20vs20 
★ .24vs24
★ .Cuadrilatero`, m, rcanal, )
}

if (/^.bermuda/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido Bermuda 🐉*`, m, rcanal, )
}

if (/^.alpes/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido Alpes 🐉*`, m, rcanal, )
}

if (/^.purgatorio/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido Purgatorio 🐉*`, m, rcanal, )
}
  
if (/^.kalahari$/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido Kalahari 🐉*`, m, rcanal, )
}

if (/^.nexterra$/i.test(m.text)) {
conn.reply(m.chat, `*Mapa Eligido NexTerra 🐉*`, m, rcanal, )
}
  
if (/^duda$/i.test(m.text)) {
conn.reply(m.chat, `*Hola tienes alguna duda sobre el bot o sobre el hosting enviame mensaje al privado* ☁ Wa.me/584123989549`, m, rcanal, )
}
return !0;
};
export default handler;
