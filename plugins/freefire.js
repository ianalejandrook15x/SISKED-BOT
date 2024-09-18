import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
const res = (await axios.get(`https://raw.githubusercontent.com/shrkbadboy/LuffyBot-MD/master/src/JSON/anime-${command}.json`)).data;
const haha = await res[Math.floor(res.length * Math.random())];
conn.sendFile(m.chat, haha, 'error.jpg', `🌟 *${command}*`, m, null, rcanal);
};
handler.command = handler.help = ['menuff'];
handler.tags = ['Free Fire'];
export default handler;
