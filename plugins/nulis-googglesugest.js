import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks\nContoh : !gogglesugest teks1|teks2|teks3'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/gsuggest?&text1=${response[0]}&text2=${response[1]}&text3=${response[2]}&apikey=SadTeams`
  conn.sendFile(m.chat, res, 'secret.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['googlesugest'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(gg|googlesugest)$/i
handler.limit = true

export default handler
