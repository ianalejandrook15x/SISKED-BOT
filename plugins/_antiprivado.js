export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`> "☁ Hola @${m.sender.split`@`[0]}, 𝘓𝘰 𝘴𝘪𝘦𝘯𝘵𝘰 🌟 𝘱𝘦𝘳𝘰 𝘯𝘰 𝘦𝘴𝘵𝘢́ 𝘱𝘦𝘳𝘮𝘪𝘵𝘪𝘥𝘰 𝘦𝘴𝘤𝘳𝘪𝘣𝘪𝘳𝘮𝘦 𝘢𝘭 𝘱𝘳𝘪𝘷𝘢𝘥𝘰, 𝘱𝘰𝘳 𝘭𝘰𝘴 𝘤𝘶𝘢́𝘭 𝘴𝘦𝘳𝘢́𝘴 𝘉𝘭𝘰𝘲𝘶𝘦𝘢𝘥𝘰 🚫/A\n\n> _*🌟Puedes Unirte Al Grupo Oficial Del Bot🌟 o Adqurir con mi Creador_* +584123989549\n\n\n${gp1}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
