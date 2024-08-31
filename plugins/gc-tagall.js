
const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join` `;
  const colombia = `🌟 *Mensaje:* ${pesan}`;
  let teks = `🌟 *INVOCANDO GRUPO*\n${colombia}\n\n☁️ *Tags:*\n`;
  for (const mem of participants) {
    teks += `@${mem.id.split('@')[0]}\n`;
  }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall *<mesaje>*', 'invocar *<mesaje>*'];
handler.tags = ['grupo'];
handler.command = ['tagall','todos','niñas', 'invocar'];
handler.admin = true;
handler.group = true;
export default handler;
