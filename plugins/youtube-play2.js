import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗INFO❗] Masukan Link yang  Yang Ingin Di Download \n\n*—◉ Contoh:\n#play.1 https://www.youtube.com/watch?v=cvAbJt3xQaA*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳Wait,Audio Sedang Di Proses..._⏳*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'AUDIO',
body: 'Secret MD',         
previewType: 0, thumbnail: await (await fetch(`https://telegra.ph/file/b90042f0d70b230d7c72e.jpg`)).buffer(),
sourceUrl: `https://www.youtube.com/watch?v=cvAbJt3xQaA`}}})
let res = await fetch("https://api.lolhuman.xyz/api/ytaudio?apikey=SadTeams&url="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳ Wait,Video Sedang Di Proses...⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'VIDEO',
body: 'By Reeya',         
previewType: 0, thumbnail: await (await fetch('https://telegra.ph/file/b90042f0d70b230d7c72e.jpg')).buffer(),
sourceUrl: `https://www.youtube.com/watch?v=cvAbJt3xQaA`}}})
let res = await fetch("https://api.lolhuman.xyz/api/ytvideo?apikey=SadTeams&url="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `Secret MD`, m)}
}catch(e){
m.reply('*[❗INFO❗] ERROR,TIDAK DAPAT MENDOWNLOAD MP3/MP4 TERSEBUT*')
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
