let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ღ Creador Wa.me/51929741688 SI QUIERES BOT COMUNICAME ${lenguajeGB['smsAddB5']()} ${pesan}`
let teks = `╭━〔 𝐌𝐚𝐭𝐞𝐨 𝐁𝐨𝐭 ☘️ 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃☘️ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃ ${wm}\n`
teks += `╰━━━━━[ 𝐌𝐚𝐭𝐞𝐨 𝐁𝐨𝐭 ${vs} ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
