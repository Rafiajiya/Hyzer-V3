let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('_Proses..._')
  let res = `https://velgrynd.herokuapp.com/api/gura?&apikey=8NKQzMp5jUBrGnGJoJaHJmCGZ&name=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `Nih kak`, m, false)
}
handler.help = ['gura'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(gura)$/i

module.exports = handler
