import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/gtapassed?&text1=${response[0]}&text2=${response[1]}&apikey=SadTeams`
  conn.sendFile(m.chat, res, 'Secret.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['gta'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(gta)$/i
handler.limit = true
handler.premium = true

export default handler
