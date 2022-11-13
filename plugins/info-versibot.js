import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
  const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let info = `Bot ini menggunakan script by\n ᴹᴿ᭄ King Of Bear ×፝֟͜×\n\n*Version:* RPG MD V5`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Info Developer asli ? Klik',
                        url: 'https://wa.me/6288279268363'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Ke YouTube',
                        url: 'https://www.youtube.com/watch?v=cvAbJt3xQaA',
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://www.youtube.com/watch?v=cvAbJt3xQaA',
                        mediaType: 2,
                        description: `⚘ 𝕊𝕖𝕔𝕣𝕖𝕥 𝕄𝔻`,
                        title: `💌 Ultah mu : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `⚘ ᴄʀᴇᴀᴛᴇ by 𝓡𝓮𝓮𝔂𝓪`,          previewType: 0,
                        thumbnail: await (await fetch(giflogo2)).buffer(),
                        mediaUrl: 'https://www.youtube.com/watch?v=cvAbJt3xQaA'
                        
                      }}
})
  }
handler.help = ['cekversi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler
