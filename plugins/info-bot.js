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
if (/^free fire$/i.test(m.text)) {
conn.reply(m.chat, `*LISTAS PARA VS DE CLANES DE FREE FIRE Y MAS

SIGNIFICADOS: HH:MM (HORA:MINUTOS) 
CP (CODIGO DE PAIS) PARA LA HORA (MX, CO, CL Y AR) 
CR (COLOR DE ROPA)
EJEMPLO: 4vs4 22:30 MX
EJEMPLO: 8vs8 22:50 NEGRO

4vs4
6vs6
scrim
interna4
interna6
8vs8
12vs12
16vs16 
20vs20 
24vs24
Cuadrilatero
Donarsala 
Reglasclk
Reglaslideres 
Reglaslideres2*`, m, rcanal, )
}

if (/^Bot de mierda/i.test(m.text)) {
conn.reply(m.chat, `*He hey hey skibidi, no digas toilet. Eres perfecta*`, m, rcanal, )
}
  
if (/^que$/i.test(m.text)) {
conn.reply(m.chat, `*so*`, m, rcanal, )
}
if (/^duda$/i.test(m.text)) {
conn.reply(m.chat, `*Hola tienes alguna duda sobre el bot o sobre el hosting enviame mensaje al privado* ☁ Wa.me/584123989549`, m, rcanal, )
}
return !0;
};
export default handler;
