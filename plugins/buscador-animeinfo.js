//comando de https://github.com/nicoTK1/NicoBotLite-MD
import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`🥀 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝘼𝙇𝙂𝙐𝙉 𝘼𝙉𝙄𝙈𝙀`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
🎀 • *Título:* ${result.title}
🎋 • *Formato:* ${result.type}
📈 • *Estado:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *Episodios totales:* ${result.episodes}
🎈 • *Duración: ${result.duration}*
✨ • *Basado en:* ${result.source.toUpperCase()}
💫 • *Estrenado:* ${result.aired.from}
🎗 • *Finalizado:* ${result.aired.to}
🎐 • *Popularidad:* ${result.popularity}
🎏 • *Favoritos:* ${result.favorites}
🎇 • *Clasificación:* ${result.rating}
🏅 • *Rango:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${resultes.text}
❄ • *Ringkasan:* ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*⚡️ Ocurrio un error*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
