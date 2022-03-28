let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉───
║│➸ *Nama* : Rafi Aji
║│➸ *Umur* : 17
║│➸ *Kelas* :  2 SMK
║│➸ *Status* : Penyuka Tt kecil yang imut🤫
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉───
║│➸ *No.Owner* : wa.me/6288233481992
║│➸ *No.Bot* : wa.me/62882007331744
║│➸ *Chanel Youtube* : Rafi X1
║│➸ *Gmail* : Bokep@gmail.com
║│➸ *Github* : https://github.com/Rafiajiya
║╰────────────────
╰═════════════════
_Oke udah itu aja Ya Kontol_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Rafi')).buffer(), ext, 'Recoded By Rafi', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
