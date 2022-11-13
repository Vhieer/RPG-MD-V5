import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://botcahx.ddns.net/api/maker/attp?text=${response[0]}`
  conn.sendFile(m.chat, res, 'xynz.webp', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['attp2 <teks>']
handler.tags = ['sticker' , '']
handler.command = /^(attp2)$/i
handler.limit = true
handler.premium = false

export default handler
