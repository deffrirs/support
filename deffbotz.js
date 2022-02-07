
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const Math_js = require('mathjs')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uploadImages } = require('./lib/uploadimage')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const setting = JSON.parse(fs.readFileSync('./apikey/setting.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\
const gember = fs.readFileSync("./img/Menunya.jpg"); 
const thumb = fs.readFileSync("./img/donasi.jpg");
//━━━━━━━━━━━━━━━[ APIKEY SETTING.JSON ]━━━━━━━━━━━━━━━\\

AlphaBot = 'Alphabot'
Leyscoders = 'IkyOgiwara'
ZeksKey = 'apivinz'

//━━━━━━━━━━━━━━━[  AUTO RESPON ]━━━━━━━━━━━━━━━\\

autorespon = true
autoread = true
autocomposing = true
autorecording = true
AutoRespon: true
menugif = false

//━━━━━━━━━━━━━━━[  PUBLIC ]━━━━━━━━━━━━━━━\\

publik = false

//━━━━━━━━━━━━━━━[EDIT DI SETTING.JSON]━━━━━━━━━━━━━━━\\

namabot = setting.BotName
namaowner = setting.OwnerName
nomorowner = setting.OwnerNumber
nomorbot = setting.BotNumber
thumbnail = setting.thumb
ig = "b4c00t.dtz"
tt = "wibusoft"
yt = "DEFFBOTz"
github = "deffrirs"

//━━━━━━━━━━━━━━━[ Sticker WM ]━━━━━━━━━━━━━━━\\

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif() 

//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  


module.exports = deff = async (deff, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

// Auto Read
        deff.chatRead(from, "read")
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\
			mess = {
				daftar: `Maaf kak, kakak belum daftar menjadi user ${namabot}.\n Silahkan daftar dengan mengetik *${prefix}daftar*`,
				wait: '*Scraping metadata . . .*',
				banned: 'Haha sorry lu di banned... Kalo mau di lepas banned harap hubungin .owner',
				success: 'SELESAI✓',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ PENGGUNAAN DALAM GROUP!!! ❌',
					premium: 'Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan ketik .owner',
					ownerG: '❌ LU BUKAN OWNER GROUP!!! ❌',
					ownerB: '❌ LU BUKAN OWNERKU!!! ❌',
					admin: '❌ LU BUKAN ADMIN GROUP!! ❌',
					Badmin: '❌ BOT BUKAN ADMIN!!! ❌'
				}
			}
//━━━━━━━━━━━━━━━[ Terakhir ]━━━━━━━━━━━━━━━\\
			const botNumber = deff.user.jid
			const ownerNumber = [`6282132805286@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = deff.contacts[sender] != undefined ? deff.contacts[sender].vname || deff.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await deff.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const runtime = process.uptime() 
			const isPremium= prem.includes(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
//━━━━━━━━━━━━━━━[ HARI HARI ]━━━━━━━━━━━━━━━\\
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			deff.sendMessage(from, teks, text, { thumbnail: gember, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} WIB - ${week}`,body:"Deffri Gans",previewType:"PHOTO",thumbnail:gember,sourceUrl:`https://wa.me/p/6349482305092740/6285697662826`}}})
		}
		const reply2 = (teks) => {
deff.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
        const fakethumb = (teks, yes) => {
            deff.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./lib/deff.jpg`),quoted:mek,caption:yes})
}
			const sendMess = (hehe, teks) => {
				deff.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? deff.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : deff.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && isBotGroupAdmins){
            if (budy.includes("https://chat.whatsapp.com/")) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                deff.groupRemove(from, [sender])
			}

}
//━━━━━━━━━━━━━━━[WAKTU]━━━━━━━━━━━━━━━\\
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━\\

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `Deffri Gans`, jpegThumbnail: fs.readFileSync(`./img/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./img/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `${namabot} \nRp. 999.999.999`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `by myzenix`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           deff.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./img/zenix.jpg"),
                                  "itemCount":100,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	deff.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	deff.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await deff.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    deff.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    deff.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await deff.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               deff.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      deff.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      deff.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = deff.contacts[from] != undefined ? deff.contacts[from].vname || deff.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Gweh'; if (!author) author = 'Zenix';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return deff.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }       
deff.updatePresence(from, Presence.composing)
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete caklontong[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!", `© ${botname} | ${ownername}`, [{"buttonId": `caklontong`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!", `© ${namabot} | ${namaowner}`, [{"buttonId": `tebakgambar`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted: mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
//━━━━━━━━━━━━━━━[ PUBLIC ]━━━━━━━━━━━━━━━\\
if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}
//━━━━━━━━━━━━━━━[ UCAPAN WAKTU ]━━━━━━━━━━━━━━━\\
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
//━━━━━━━━━━━━━━━[ FAKE MENU BOT ]━━━━━━━━━━━━━━━\\
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `hai kak ${pushname} ${ucapanWaktu}👋`,
                 "title": `Runtime : ${(kyun(os.uptime()))}`,
                 'jpegThumbnail': fs.readFileSync("./img/menunya.jpg"),
                        }
	                  } 
                     }
//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━\\
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
//━━━━━━━━━━━━━━━[ TEKS BUFFER ]━━━━━━━━━━━━━━━\\
const fakeText = (teks) => {
deff.sendMessage(from, teks, text, {quoted: froxx})
}
//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━\\

switch(command) {

case 'allmenu':
if (isBanned) return reply(mess.banned)
              if(menugif == false){          	     
              otod = `${sender}`
              dtod = `${nomorowner}`
              stod = "6282132805286@s.whatsapp.net"
				
       menu = `Hi ${pushname} ${ucapanWaktu}👋

❏ INFO ❏
Prefix : Multi Prefix
Mode : ${publik? "Public":"Self"}
Premium : ${isPremium? "Yes":"No"}

❏ Info Owner ❏
Nama Owner : ${namaowner}
Nomor : wa.me/${nomorowner}

*ASUPAN*
╭◪「 *Asupan Menu* 」
│➸ぁ ${prefix}asupangeayubi
│➸ぁ ${prefix}asupanaura
│➸ぁ ${prefix}bocil
│➸ぁ ${prefix}asupanbunga
│➸ぁ ${prefix}asupanayu
│➸ぁ ${prefix}asupancaca
╰─────────────╯

*Sertifikat Menu*
╭◪「 *Sertifikat Menu* 」
│➸ぁ ${prefix}serti1
│➸ぁ ${prefix}serti2
│➸ぁ ${prefix}serti3
╰─────────────╯

*Ocr Menu*
╭◪「 *Ocr Menu* 」
│➸ぁ ${prefix}namaninja
│➸ぁ ${prefix}pantun
│➸ぁ ${prefix}tongue
│➸ぁ ${prefix}ssweb
│➸ぁ ${prefix}nickepep
╰─────────────╯

*Maker And Sticker*
╭◪「 *Sticker Menu* 」
│➸ぁ ${prefix}sticker
│➸ぁ ${prefix}ttp
│➸ぁ ${prefix}attp
╰─────────────╯

*Group Menu And Main Menu*
╭◪「 *Group Menu* 」
│➸ぁ ${prefix}lapor
│➸ぁ ${prefix}request
│➸ぁ ${prefix}here
│➸ぁ ${prefix}setgrupname
│➸ぁ ${prefix}setdesc
│➸ぁ ${prefix}promote
│➸ぁ ${prefix}demote
│➸ぁ ${prefix}welcome
│➸ぁ ${prefix}add
│➸ぁ ${prefix}setppgrup
│➸ぁ ${prefix}kick
│➸ぁ ${prefix}antilink
│➸ぁ ${prefix}group
│➸ぁ ${prefix}wame
│➸ぁ ${prefix}notif
╰─────────────╯

*Download Menu*
╭◪「 *Download Menu* 」
│➸ぁ ${prefix}tiktok {link tiktok}
│➸ぁ ${prefix}play {Judul Lagu}
│➸ぁ ${prefix}lirik {Judul Lagu}
│➸ぁ ${prefix}herolist {Hero}
│➸ぁ ${prefix}herodetail {nama Hero}
╰─────────────╯

*Owner Menu*
╭◪「 *Owner Menu* 」
│➸ぁ ${prefix}addcmd
│➸ぁ ${prefix}addprem
│➸ぁ ${prefix}delprem
│➸ぁ ${prefix}premiumlist
│➸ぁ ${prefix}ban
│➸ぁ ${prefix}unban
│➸ぁ ${prefix}delcmd
│➸ぁ ${prefix}listcmd
│➸ぁ ${prefix}exif
│➸ぁ ${prefix}bc
│➸ぁ ${prefix}leaveall
│➸ぁ ${prefix}bc2
╰─────────────╯

*Kerang Menu*
╭◪「 *Kerang Menu* 」
│➸ぁ ${prefix}apakah [query]
│➸ぁ ${prefix}kapankah [query
│➸ぁ ${prefix}bisakah [query]
╰─────────────╯

*Game Menu*
╭◪「 *Game Menu* 」
│➸ぁ ${prefix}ganteng
│➸ぁ ${prefix}cantik
│➸ぁ ${prefix}jelek
│➸ぁ ${prefix}babi
│➸ぁ ${prefix}pinter
│➸ぁ ${prefix}kontol
│➸ぁ ${prefix}anjing
│➸ぁ ${prefix}bego
│➸ぁ ${prefix}nolep
│➸ぁ ${prefix}monyet
│➸ぁ ${prefix}beban
│➸ぁ ${prefix}baik
│➸ぁ ${prefix}jahat
│➸ぁ ${prefix}haram
│➸ぁ ${prefix}wibu
│➸ぁ ${prefix}pakboy
│➸ぁ ${prefix}pakgirl
│➸ぁ ${prefix}sadboy
│➸ぁ ${prefix}sadgirl
│➸ぁ ${prefix}hebat
╰─────────────╯

*Wibu Menu*
╭◪「 *Wibu Menu* 」
│➸ぁ ${prefix}ppcouple
│➸ぁ ${prefix}uniform
│➸ぁ ${prefix}cuckold
│➸ぁ ${prefix}zettairyouiki
│➸ぁ ${prefix}sfwneko
│➸ぁ ${prefix}sao
│➸ぁ ${prefix}cosplay
│➸ぁ ${prefix}milf
│➸ぁ ${prefix}loli
│➸ぁ ${prefix}lovelive
│➸ぁ ${prefix}hsdxd
│➸ぁ ${prefix}husbu
│➸ぁ ${prefix}wallml
│➸ぁ ${prefix}waifu
╰─────────────╯

*Hewan Menu*
╭◪「 *Hewan Menu* 」
│➸ぁ ${prefix}fox
│➸ぁ ${prefix}dog
│➸ぁ ${prefix}cat
│➸ぁ ${prefix}panda
│➸ぁ ${prefix}panda2
│➸ぁ ${prefix}bird
│➸ぁ ${prefix}koala
╰─────────────╯

*Image Random*
╭◪「 *Image Menu* 」
│➸ぁ ${prefix}waifu
│➸ぁ ${prefix}wallm
│➸ぁ ${prefix}loli
│➸ぁ ${prefix}cosplay
│➸ぁ ${prefix}milf
│➸ぁ ${prefix}husbu_
╰─────────────╯

*Gtts*
╭◪「 *GTTS Menu* 」
│➸ぁ ${prefix}tts
│➸ぁ ${prefix}kodenegara
│➸ぁ ${prefix}kodebahasa
╰─────────────╯

*TexPro Menu*
╭◪「 *TextPro Menu* 」
│➸ぁ ${prefix}pornhub
│➸ぁ ${prefix}halloween2
│➸ぁ ${prefix}space3d
│➸ぁ ${prefix}horror
│➸ぁ ${prefix}game8bit
│➸ぁ ${prefix}ninjalogo
│➸ぁ ${prefix}tiktokmt
╰─────────────╯

*Maker Menu*
╭◪「 *Maker Menu* 」
│➸ぁ ${prefix}blackpink {teks}
│➸ぁ ${prefix}pipe {teks}
│➸ぁ ${prefix}heloween {teks}
│➸ぁ ${prefix}heloween2 {teks}
│➸ぁ ${prefix}horor {teks}
│➸ぁ ${prefix}nulis {teks}
│➸ぁ ${prefix}sirkuit {teks}
│➸ぁ ${prefix}discovery {teks}
│➸ぁ ${prefix}fiction {teks}
│➸ぁ ${prefix}8bit {teks}
│➸ぁ ${prefix}demon {teks}
│➸ぁ ${prefix}transformer {teks
│➸ぁ ${prefix}berry {teks}
│➸ぁ ${prefix}leyered {teks}
│➸ぁ ${prefix}thunder {teks}
│➸ぁ ${prefix}magma {teks}
│➸ぁ ${prefix}stone {teks}
│➸ぁ ${prefix}neon3 {teks}
│➸ぁ ${prefix}glitch {teks}
│➸ぁ ${prefix}glitch2 {teks}
│➸ぁ ${prefix}broken {teks}
│➸ぁ ${prefix}nulis2 {teks}
│➸ぁ ${prefix}gradient {teks}
│➸ぁ ${prefix}glossy {teks}
│➸ぁ ${prefix}watercolor {teks}
│➸ぁ ${prefix}multicolor {teks}
│➸ぁ ${prefix}neondevil {teks}
│➸ぁ ${prefix}underwater {teks}
│➸ぁ ${prefix}bear {teks}
╰─────────────╯

*Logo Menu*
╭◪「 *Logo Menu* 」
│➸ぁ ${prefix}logokaneki [query]
│➸ぁ ${prefix}logololi [query]
│➸ぁ ${prefix}logosadboy [query]
│➸ぁ ${prefix}logorem [query]
│➸ぁ ${prefix}logogura [query]
╰─────────────╯

*Sound Menu*
╭◪「 *Sound Menu* 」
│➸ぁ ${prefix}sound1
│➸ぁ ${prefix}sound2
│➸ぁ ${prefix}sound3
│➸ぁ ${prefix}sound4
│➸ぁ ${prefix}sound5
│➸ぁ ${prefix}sound6
│➸ぁ ${prefix}sound7
│➸ぁ ${prefix}sound8
│➸ぁ ${prefix}sound9
│➸ぁ ${prefix}sound10
│➸ぁ ${prefix}sound11
│➸ぁ ${prefix}sound12
│➸ぁ ${prefix}sound13
│➸ぁ ${prefix}sound14
│➸ぁ ${prefix}sound15
│➸ぁ ${prefix}sound16
│➸ぁ ${prefix}sound17
│➸ぁ ${prefix}sound18
│➸ぁ ${prefix}sound19
│➸ぁ ${prefix}sound20
│➸ぁ ${prefix}sound21
│➸ぁ ${prefix}sound22
│➸ぁ ${prefix}sound23
│➸ぁ ${prefix}sound24
│➸ぁ ${prefix}sound25
│➸ぁ ${prefix}sound26
│➸ぁ ${prefix}sound27
│➸ぁ ${prefix}sound28
│➸ぁ ${prefix}sound29
│➸ぁ ${prefix}sound30
│➸ぁ ${prefix}sound31
│➸ぁ ${prefix}sound32
│➸ぁ ${prefix}sound33
│➸ぁ ${prefix}sound34
│➸ぁ ${prefix}sound35
│➸ぁ ${prefix}sound36
│➸ぁ ${prefix}sound37
│➸ぁ ${prefix}sound38
│➸ぁ ${prefix}sound39
│➸ぁ ${prefix}sound40
│➸ぁ ${prefix}sound41
│➸ぁ ${prefix}sound42
│➸ぁ ${prefix}sound43
│➸ぁ ${prefix}sound44
│➸ぁ ${prefix}sound45
│➸ぁ ${prefix}sound46
│➸ぁ ${prefix}sound47
│➸ぁ ${prefix}sound48
│➸ぁ ${prefix}sound49
│➸ぁ ${prefix}sound50
│➸ぁ ${prefix}sound51
│➸ぁ ${prefix}sound52
│➸ぁ ${prefix}sound53
│➸ぁ ${prefix}sound54
│➸ぁ ${prefix}sound55
│➸ぁ ${prefix}sound56
│➸ぁ ${prefix}sound57
│➸ぁ ${prefix}sound58
│➸ぁ ${prefix}sound59
│➸ぁ ${prefix}sound60
│➸ぁ ${prefix}sound61
│➸ぁ ${prefix}sound62
│➸ぁ ${prefix}sound63
│➸ぁ ${prefix}sound64
│➸ぁ ${prefix}sound65
│➸ぁ ${prefix}sound66
│➸ぁ ${prefix}sound67
│➸ぁ ${prefix}sound68
│➸ぁ ${prefix}sound69
│➸ぁ ${prefix}sound70
╰─────────────╯

*Other Menu*
╭◪「 *Other Menu* 」
│➸ぁ ${prefix}sticker
│➸ぁ ${prefix}tomp3
│➸ぁ ${prefix}tomp4
│➸ぁ ${prefix}kalkulator
│➸ぁ ${prefix}caklontong
│➸ぁ ${prefix}memegen [teks atas|teks bawah]
╰─────────────╯
 `
sendButLocation(from, `${menu}`, "Bot Masih Tahap Uji Coba,Jika Ada Fitur Yang Bermasalah Silahkan Hubungi Owner", {jpegThumbnail: fs.readFileSync('./img/zenix.jpeg'),name:""}, [{buttonId:`.command`,buttonText:{displayText:'LIST MENU'},type:1},{buttonId:`.owner`,buttonText:{displayText:'OWNER BOT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
              }
            
break
case 'help':
case 'menu':
if (isBanned) return reply(mess.banned)
              if(menugif == false){
          const hyj = await getBuffer(`https://telegra.ph/file/7613e9cf47a7f1c917a6b.jpg`)
             buttons = [{buttonId: `${prefix}allmenu`,buttonText:{displayText: `ALL MENU`},type:1}]
             videoMsg = (await deff.prepareMessageMedia(hyj, "videoMessage", {"mimetype" : 'video/gif', thumbnail: fs.readFileSync('./img/pronhub.jpg'), })).videoMessage
              buttonsMessage = {footerText:`Hi ${pushname} ${ucapanWaktu}👋

╭◪[ Info Botz ]
│➸ぁ *Name Bot* : ${namabot}
│➸ぁ *Mode* : ${publik? "Public":"Self"}
│➸ぁ *Runtime* : ${(kyun(os.uptime()))}
│➸ぁ *Baterai* : Tidak Terdeteksi
│➸ぁ *Version* : 1.0.0
│➸ぁ *Nama Own* : ${namaowner}
┗━━━━━━━━━━━>
   │➸ぁ *Tiktok* : ${tt}
   │➸ぁ *Instagram* : ${ig}
   │➸ぁ *Youtube* : ${yt}
   │➸ぁ *Github* : ${github}
   ┗━━━━━━━━━━━> `, videoMessage: videoMsg,
              contentText:`「 *DEFFBOTz* 」`,buttons,headerType:5}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              deff.relayWAMessage(prep)
              }
            
break
case 'simpelmenu':
case 'command':
case 'listmenu':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: 'DEFFBOTz',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Menunya disini`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "[🤍]Asupan Menu",
                       "description" :"Menampilkan Menu asupan",
                       "rowId": `${prefix}asupanmenu`
                           },
                           {                         
                              "title": "[📝]Maker Menu",
                              "description" :"Menampilkan Menu Maker",
                              "rowId": `${prefix}makermenu`
                           },
                           {                         
                              "title": "[🐚]Kerang Menu",
                              "description" :"Menampilkan Menu Anime",
                              "rowId": `${prefix}kerangmenu`
                           },
                           {                         
                              "title": "[🔰]Logo Maker Menu",
                              "description" :"Menampilkan Menu Anime",
                              "rowId": `${prefix}logomenu`
                           },
                           {                         
                              "title": "[🎮]Game Menu",
                              "description" :"Menampilkan Menu Game",
                              "rowId": `${prefix}gamemenu`
                           },
                           {                         
                              "title": "[🦊]Hewan Menu",
                              "description" :"Menampilkan Menu Hewan",
                              "rowId": `${prefix}hewanmenu`
                           },
                           {                         
                              "title": "[📤]Download Menu",
                              "description" :"Menampilkan Menu Download",
                              "rowId": `${prefix}downloadmenu`
                           },
                           {                         
                              "title": "[👩‍💻]Owner Menu",
                              "description" :"Menampilkan Menu Owner",
                              "rowId": `${prefix}ownermenu`
                           },
                           {                         
                              "title": "[🎩]Ocr Menu",
                              "description" :"Menampilkan Menu OCR",
                              "rowId": `${prefix}ocrmenu`
                           },
                           {                         
                              "title": "[🎧]Sound Menu",
                              "description" :"Menampilkan Menu Sound",
                              "rowId": `${prefix}soundmenu`
                           },
                           {                         
                              "title": "[🗿]Sticker Menu",
                              "description" :"Menampilkan Menu Sticker",
                              "rowId": `${prefix}stickermenu`
                           },
                           {                         
                              "title": "[🧐]Kode Menu",
                              "description" :"Menampilkan Menu Kode",
                              "rowId": `${prefix}kodemenu`
                           },
                           {                         
                              "title": "[🐣]Grup Menu",
                              "description" :"Menampilkan Menu Grup",
                              "rowId": `${prefix}grupmenu`
                           },
                           {                         
                              "title": "[🔎]Other Menu",
                              "description" :"Menampilkan Menu Other",
                              "rowId": `${prefix}othermenu`
                           },
                        ]
                     }],
 listType: 1
}
deff.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'sc':
case 'scrip':
if (isBanned) return reply(mess.banned)
reply2(`JANGAN LUPA SUBSCRIBE YouTube : DEFFBOTz`)
break

//══════════[ QnA MENU ]════════════════════════════//
case 'kapankah':
				if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await (sender)
					break
case 'bisakah':
		if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await (sender)
					break
case 'apakah':
           if (args.length < 1) return deff.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					deff.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await (sender)
					break
//══════════[ ASUPAN MENU ]════════════════════════════//
case 'grupmenu':
case 'groupmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Group Menu* 」
│➸ぁ ${prefix}lapor
│➸ぁ ${prefix}request
│➸ぁ ${prefix}here
│➸ぁ ${prefix}setgrupname
│➸ぁ ${prefix}setdesc
│➸ぁ ${prefix}promote
│➸ぁ ${prefix}demote
│➸ぁ ${prefix}welcome
│➸ぁ ${prefix}add
│➸ぁ ${prefix}setppgrup
│➸ぁ ${prefix}kick
│➸ぁ ${prefix}rkick
│➸ぁ ${prefix}radd
│➸ぁ ${prefix}antilink
│➸ぁ ${prefix}group
│➸ぁ ${prefix}wame
│➸ぁ ${prefix}notif
╰─────────────╯
`)
break
case 'kerangmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Kerang Menu* 」
│➸ぁ ${prefix}apakah [query]
│➸ぁ ${prefix}kapankah [query
│➸ぁ ${prefix}bisakah [query]
╰─────────────╯
`)
break
case 'gamemenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Game Menu* 」
│➸ぁ ${prefix}ganteng
│➸ぁ ${prefix}cantik
│➸ぁ ${prefix}jelek
│➸ぁ ${prefix}babi
│➸ぁ ${prefix}pinter
│➸ぁ ${prefix}kontol
│➸ぁ ${prefix}anjing
│➸ぁ ${prefix}bego
│➸ぁ ${prefix}nolep
│➸ぁ ${prefix}monyet
│➸ぁ ${prefix}beban
│➸ぁ ${prefix}baik
│➸ぁ ${prefix}jahat
│➸ぁ ${prefix}haram
│➸ぁ ${prefix}wibu
│➸ぁ ${prefix}pakboy
│➸ぁ ${prefix}pakgirl
│➸ぁ ${prefix}sadboy
│➸ぁ ${prefix}sadgirl
│➸ぁ ${prefix}hebat
╰─────────────╯
`)
break
case 'soundmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Sound Menu* 」
│➸ぁ ${prefix}sound1
│➸ぁ ${prefix}sound2
│➸ぁ ${prefix}sound3
│➸ぁ ${prefix}sound4
│➸ぁ ${prefix}sound5
│➸ぁ ${prefix}sound6
│➸ぁ ${prefix}sound7
│➸ぁ ${prefix}sound8
│➸ぁ ${prefix}sound9
│➸ぁ ${prefix}sound10
│➸ぁ ${prefix}sound11
│➸ぁ ${prefix}sound12
│➸ぁ ${prefix}sound13
│➸ぁ ${prefix}sound14
│➸ぁ ${prefix}sound15
│➸ぁ ${prefix}sound16
│➸ぁ ${prefix}sound17
│➸ぁ ${prefix}sound18
│➸ぁ ${prefix}sound19
│➸ぁ ${prefix}sound20
│➸ぁ ${prefix}sound21
│➸ぁ ${prefix}sound22
│➸ぁ ${prefix}sound23
│➸ぁ ${prefix}sound24
│➸ぁ ${prefix}sound25
│➸ぁ ${prefix}sound26
│➸ぁ ${prefix}sound27
│➸ぁ ${prefix}sound28
│➸ぁ ${prefix}sound29
│➸ぁ ${prefix}sound30
│➸ぁ ${prefix}sound31
│➸ぁ ${prefix}sound32
│➸ぁ ${prefix}sound33
│➸ぁ ${prefix}sound34
│➸ぁ ${prefix}sound35
│➸ぁ ${prefix}sound36
│➸ぁ ${prefix}sound37
│➸ぁ ${prefix}sound38
│➸ぁ ${prefix}sound39
│➸ぁ ${prefix}sound40
│➸ぁ ${prefix}sound41
│➸ぁ ${prefix}sound42
│➸ぁ ${prefix}sound43
│➸ぁ ${prefix}sound44
│➸ぁ ${prefix}sound45
│➸ぁ ${prefix}sound46
│➸ぁ ${prefix}sound47
│➸ぁ ${prefix}sound48
│➸ぁ ${prefix}sound49
│➸ぁ ${prefix}sound50
│➸ぁ ${prefix}sound51
│➸ぁ ${prefix}sound52
│➸ぁ ${prefix}sound53
│➸ぁ ${prefix}sound54
│➸ぁ ${prefix}sound55
│➸ぁ ${prefix}sound56
│➸ぁ ${prefix}sound57
│➸ぁ ${prefix}sound58
│➸ぁ ${prefix}sound59
│➸ぁ ${prefix}sound60
│➸ぁ ${prefix}sound61
│➸ぁ ${prefix}sound62
│➸ぁ ${prefix}sound63
│➸ぁ ${prefix}sound64
│➸ぁ ${prefix}sound65
│➸ぁ ${prefix}sound66
│➸ぁ ${prefix}sound67
│➸ぁ ${prefix}sound68
│➸ぁ ${prefix}sound69
│➸ぁ ${prefix}sound70
╰─────────────╯
`)
break
case 'ocrmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Ocr Menu* 」
│➸ぁ ${prefix}namaninja
│➸ぁ ${prefix}pantun
│➸ぁ ${prefix}tongue
│➸ぁ ${prefix}ssweb
│➸ぁ ${prefix}nickepep
╰─────────────╯
`)
break
case 'ownermenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Owner Menu* 」
│➸ぁ ${prefix}addcmd
│➸ぁ ${prefix}addprem
│➸ぁ ${prefix}delprem
│➸ぁ ${prefix}premiumlist
│➸ぁ ${prefix}ban
│➸ぁ ${prefix}unban
│➸ぁ ${prefix}setppajg
│➸ぁ ${prefix}setbio
│➸ぁ ${prefix}setname
│➸ぁ ${prefix}public
│➸ぁ ${prefix}self
│➸ぁ ${prefix}delcmd
│➸ぁ ${prefix}listcmd
│➸ぁ ${prefix}exif
│➸ぁ ${prefix}bc
│➸ぁ ${prefix}leaveall
│➸ぁ ${prefix}bc2
╰─────────────╯
`)
break
case 'downloadmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Download Menu* 」
│➸ぁ ${prefix}tiktok {link tiktok}
│➸ぁ ${prefix}play {Judul Lagu}
│➸ぁ ${prefix}lirik {Judul Lagu}
│➸ぁ ${prefix}herolist {Hero}
│➸ぁ ${prefix}herodetail {nama Hero}
╰─────────────╯

`)
break
case 'asupanmenu':
if (isBanned) return reply(mess.banned)
 listMsg = {
 buttonText: 'KLIK DISINI',
 footerText: 'DEFFBOTz',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih Asupan nya Disini`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "GeaYubi",
                       "description" :"Menampilkan Asupan",
                       "rowId": `${prefix}asupangeayubi`
                           },
                           {                         
                              "title": "Aura",
                              "description" :"Menampilkan Asupan",
                              "rowId": `${prefix}asupanaura`
                           },
                           {                         
                              "title": "Caca",
                              "description" :"Menampilkan Asupan",
                              "rowId": `${prefix}asupancaca`
                           },
                           {                         
                              "title": "Bocil",
                              "description" :"Menampilkan Asupan",
                              "rowId": `${prefix}asupanbocil`
                           },
                           {                         
                              "title": "Ayu",
                              "description" :"Menampilkan Asupan",
                              "rowId": `${prefix}adupanayu`
                           },
                           {                         
                              "title": "Bunga",
                              "description" :"Menampilkan Asupan",
                              "rowId": `${prefix}asupanbunga`
                           },
                        ]
                     }],
 listType: 1
}
deff.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
case 'makermenu':
if (isBanned) return reply(mess.banned)
anu = `╭◪「 *Maker Menu* 」
│➸ぁ ${prefix}blackpink {teks}
│➸ぁ ${prefix}pipe {teks}
│➸ぁ ${prefix}heloween {teks}
│➸ぁ ${prefix}heloween2 {teks}
│➸ぁ ${prefix}horor {teks}
│➸ぁ ${prefix}nulis {teks}
│➸ぁ ${prefix}sirkuit {teks}
│➸ぁ ${prefix}discovery {teks}
│➸ぁ ${prefix}fiction {teks}
│➸ぁ ${prefix}8bit {teks}
│➸ぁ ${prefix}demon {teks}
│➸ぁ ${prefix}transformer {teks
│➸ぁ ${prefix}berry {teks}
│➸ぁ ${prefix}leyered {teks}
│➸ぁ ${prefix}thunder {teks}
│➸ぁ ${prefix}magma {teks}
│➸ぁ ${prefix}stone {teks}
│➸ぁ ${prefix}neon3 {teks}
│➸ぁ ${prefix}glitch {teks}
│➸ぁ ${prefix}glitch2 {teks}
│➸ぁ ${prefix}broken {teks}
│➸ぁ ${prefix}nulis2 {teks}
│➸ぁ ${prefix}gradient {teks}
│➸ぁ ${prefix}glossy {teks}
│➸ぁ ${prefix}watercolor {teks}
│➸ぁ ${prefix}multicolor {teks}
│➸ぁ ${prefix}neondevil {teks}
│➸ぁ ${prefix}underwater {teks}
│➸ぁ ${prefix}bear {teks}
╰─────────────╯

*_TOTAL_* : 30`
deff.sendMessage(from, thumb, image, {caption: anu, quoted: mek})
break

case 'gttsmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *GTTS Menu* 」
│➸ぁ ${prefix}tts
│➸ぁ ${prefix}kodenegara
│➸ぁ ${prefix}kodebahasa
╰─────────────╯
`)
break
case 'logomenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Logo Menu* 」
│➸ぁ ${prefix}logokaneki [query]
│➸ぁ ${prefix}logololi [query]
│➸ぁ ${prefix}logosadboy [query1|query2]
│➸ぁ ${prefix}logorem [query]
│➸ぁ ${prefix}logogura [query]
╰─────────────╯
`)
break
case 'wibumenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Wibu Menu* 」
│➸ぁ ${prefix}ppcouple
│➸ぁ ${prefix}uniform
│➸ぁ ${prefix}cuckold
│➸ぁ ${prefix}zettairyouiki
│➸ぁ ${prefix}sfwneko
│➸ぁ ${prefix}sao
│➸ぁ ${prefix}cosplay
│➸ぁ ${prefix}milf
│➸ぁ ${prefix}loli
│➸ぁ ${prefix}lovelive
│➸ぁ ${prefix}hsdxd
│➸ぁ ${prefix}husbu
│➸ぁ ${prefix}wallml
│➸ぁ ${prefix}waifu
╰─────────────╯
`)
break
case 'hewanmenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Hewan Menu* 」
│➸ぁ ${prefix}fox
│➸ぁ ${prefix}dog
│➸ぁ ${prefix}cat
│➸ぁ ${prefix}panda
│➸ぁ ${prefix}panda2
│➸ぁ ${prefix}bird
│➸ぁ ${prefix}koala
╰─────────────╯
`)
break
case 'othermenu':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *Other Menu* 」
│➸ぁ ${prefix}sticker
│➸ぁ ${prefix}kalkulator
│➸ぁ ${prefix}caklontong
│➸ぁ ${prefix}memegen [teks atas|teks bawah]
╰─────────────╯
`)
break
case 'textpro':
if (isBanned) return reply(mess.banned)
reply2(`╭◪「 *TextPro Menu* 」
│➸ぁ ${prefix}pornhub
│➸ぁ ${prefix}halloween2
│➸ぁ ${prefix}space3d
│➸ぁ ${prefix}horror
│➸ぁ ${prefix}game8bit
│➸ぁ ${prefix}ninjalogo
│➸ぁ ${prefix}tiktokmt
╰─────────────╯
`)
break
case 'donasi':
if (isBanned) return reply(mess.banned)
l = '```'
huhi =`*── 「 ${l}DONATE${l} 」 ──*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${nomorowner} (Owner)`
sendButImage(from, huhi,`©CREATED : Deffri Gans\n${Tanggal}`, thumb, [
            {buttonId: `${prefix}gopay`, buttonText: {displayText: `GOPAY`, }, type: 1, },
            {buttonId: `${prefix}dana`, buttonText: { displayText: `DANA`, }, type: 1, },
            {buttonId: `${prefix}allp`, buttonText: { displayText: `QRIS(ALL PAYMENT)`, }, type: 1, },
            ]); 
break
break
             case 'asupangeayubi':
             if (isBanned) return reply(mess.banned)
             reply(mess.wait)
             const geayubi = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/geayubi?apikey=Alphabot`)
             buttons = [{buttonId: `${prefix}${command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await deff.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              deff.relayWAMessage(prep)
              break
             case 'asupanbocil':
             if (isBanned) return reply(mess.banned)
             reply(mess.wait)
             const bocil = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bocil?apikey=Alphabot`)
             buttons = [{buttonId: `${prefix}${command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await deff.prepareMessageMedia(bocil, "videoMessage", { thumbnail: bocil, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              deff.relayWAMessage(prep)
              break
             case 'asupanaura':
             if (isBanned) return reply(mess.banned)
             reply(mess.wait)
             const naura = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/aura?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}${command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await deff.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              deff.relayWAMessage(prep)
              break
            case 'asupanbunga':
            if (isBanned) return reply(mess.banned)
            reply(mess.wait)
            const bunga = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/bunga?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}${command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await deff.prepareMessageMedia(bunga, "videoMessage", { thumbnail: bunga, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              deff.relayWAMessage(prep)
              break
            case 'asupanayu':
            if (isBanned) return reply(mess.banned)
            reply(mess.wait)
            const ayu = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/ayu?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}${command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
             videoMsg = (await deff.prepareMessageMedia(ayu, "videoMessage", { thumbnail: ayu, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              deff.relayWAMessage(prep)
              break
             case 'asupancaca':
             if (isBanned) return reply(mess.banned)
             reply(mess.wait)
             const caca = await getBuffer(`https://api-alphabot.herokuapp.com/api/asupan/delvira?apikey=${AlphaBot}`)
             buttons = [{buttonId: `${prefix}${command}`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await deff.prepareMessageMedia(caca, "videoMessage", { thumbnail: caca, })).videoMessage
              buttonsMessage = {footerText:'KLIK NEXT UNTUK SELANJUTNYA', videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: fhidetag})
              deff.relayWAMessage(prep)
              break
//══════════[GAME MENU]════════════════════════════//
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      reply(mess.wait)
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      deff.sendMessage(from, omkeh, MessageType.audio, { quoted: froxx, mimetype: 'audio/mp4', ptt: true })
          break
//══════════[GAME MENU]════════════════════════════//
case 'tebakin': case 'tebakgambar':
		if (isBanned) return reply(mess.banned)
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${AlphaBot}/game/tebakgambar?apikey=${AlphaBot}`)
                    //resu = anu.data
                    tebak = anu.data.image
                    jawaban = `${anu.data.jawaban.replace('Jawaban ', '')}`
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    deff.sendMessage(from, tebakya, image, {quoted: froxx, caption: "\n\n⏰ Timeout : 120.00 seconds" })
                    await sleep(120000) // 1000 = 1s,
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                deff.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, { quoted:froxx }) // ur cods
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
					break   
					case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':  case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
					if (!isGroup) return reply(mess.only.group)
               	await (sender)
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `Yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
case 'caklontong':
          if (!isGroup) return reply(mess.only.group)
				data = fs.readFileSync('./lib/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					deff.sendMessage(from, Jawaban, text, { quoted:froxx })
					}, 30000)
					setTimeout( () => {
					deff.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					deff.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					deff.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s
					deff.sendMessage(from, Pertanyaan, text, { quoted:froxx })
					 
				   break
           case 'simi'://Herman Chanelꪶ😈ꫂ
           if (args.length == 0) return reply(`Hallo Kak ${pushname}`)
           teksni = args.join(" ")
           get_result = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=BayuPerkasa&text=${teksni}`)
           getresult = get_result.result
             reply(getresult)         
             break
//══════════[ANIME MENU]════════════════════════════//
            case 'ppcouple':
            if (isBanned) return reply(mess.banned)
             anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
             cewe = await getBuffer(anu.result.female)
              cowo = await getBuffer(anu.result.male)
              deff.sendMessage(from, cowo, image, {quoted: froxx, caption: 'Nih Versi Cowo Nya ^_^' })
              deff.sendMessage(from, cewe, image, {quoted: froxx, caption: 'Nih Versi Cewe Nya ^_^' })
              break
                case 'sao':
                if (isBanned) return reply(mess.banned)
				deff.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 deff.sendMessage(from, swordartonline, image, {quoted: froxx, caption: 'swort art online\nMEZ RazoR'})
				 break
				case 'hsdxd':
				if (isBanned) return reply(mess.banned)
				 deff.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 deff.sendMessage(from, highschooldxd, image, {quoted: froxx, caption: 'NIH BANG '})
				break
				 case 'lovelive':
				if (isBanned) return reply(mess.banned)
				 deff.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 deff.sendMessage(from, lovelive, image, {quoted: froxx, caption: 'NIH BANG '})
				break
                    case 'uniform':
					case 'sfwneko':
					case 'cuckold':
					case 'wpnsfwmobile':
					case 'zettairyouiki':
					if (isBanned) return reply(mess.banned)
					qute6 = await getBuffer(`https://api.xteam.xyz/randomimage/${command}?APIKEY=7415bc4287ad5ca8`)
					deff.sendMessage(from, qute6, image, { quoted: froxx, caption: ':)' })
					break
             case 'waifu':
             case 'loli':
            case 'husbu':
            case 'milf':
            case 'cosplay':
            case 'wallml':
            if (isBanned) return reply(mess.banned)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `.waifu`,buttonText:{displayText: `Next`},type:1},{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}]
              imageMsg = ( await deff.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Menuju Tak Terbatas', imageMessage: imageMsg,
              contentText:`Nih Kak Support DEFFBOTz Yah`,buttons,headerType:4}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              deff.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//══════════[ APIKEY ALPHA ]════════════════════════════//
case 'blackpink':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/blackpink?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'pipe':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'heloween':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'heloween2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'horor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${query}&text2=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'nulis':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'sirkuit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'discovery':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'fiction':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case '8bit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${query}&text2=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'demon':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'transformer':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'berry':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'leyered':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${query}&text2=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'thunder':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'magma':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'stone':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'neon3':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'glitch':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'glitch2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glitch2?text=${query}&text2=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'herrypoter':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'embosed':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/embossed?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'broken':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'nulis2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'gradient':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gradient?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'glossy':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'watercolor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'multicolor':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'neondevil':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neon_devil?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'underwater':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/underwater?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'bear':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/bear?text=${query}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'pornhub':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/pornhub?text=${m1}&text2=${m2}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'halloween2':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/halloween2?text=${m1}&text2=${m2}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'ninjalogo':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/ninja?text=${m1}&text2=${m2}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'game8bit':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/game8bit?text=${m1}&text2=${m2}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'horror':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${m1}&text2=${m2}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'tiktokmt':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/gtiktok?text=${m1}&text2=${m2}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'space3d':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/space3d?text=${m1}&text2=${m2}&apikey=${AlphaBot}`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logokaneki':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/kaneki?nama=${query}&apikey=xZiyy`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logololi':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/lolimaker?nama=${query}&apikey=xZiyy`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logosadboy':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/sadboy?text1=${m1}&text2=${m2}&apikey=xZiyy`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logorem':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/rem?nama=${query}&apikey=xZiyy`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logogura':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/Gura?nama=${query}&apikey=xZiyy`)
deff.sendMessage(from, bf, image, { quoted: froxx, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
//══════════[ ANIMASI HEWAN ]════════════════════════════//
                   case 'fox':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   buttons = [{buttonId: `.owner`,buttonText:{displayText: `OWNER`},type:1},{buttonId:`.fox`,buttonText:{displayText:'NEXT'},type:1}]
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'dog':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'cat':
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda1':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'bird': 
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'koala':  
                   if (isBanned) return reply(mess.banned)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   deff.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
              

      
//══════════[ SELF DAN PUBLIC ]════════════════════════════//
case 'public':
if (isBanned) return reply(mess.banned)
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (isBanned) return reply(mess.banned)
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
publik = false
fakeText('*Sukses mengubah mode self*')
break
case 'setppajg':
       if (isBanned) return reply(mess.banned)
       if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await deff.downloadMediaMessage(encmedia)
              await deff.updateProfilePicture(botNumber, media)        
              }
              break
//══════════[ EXIF NYA GAN ]════════════════════════════//
           case 'exif':
                    if (isBanned) return reply(mess.banned)
                      if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				     break
//══════════[ tts Gunakan Kode Bahasa ]════════════════════════════//
                     case 'bahasa':
                     if (isBanned) return reply(mess.banned)
                    deff.sendMessage(from, bahasa(), text, { quoted:froxx })
                    break 
                    case 'kodenegara':
                    if (isBanned) return reply(mess.banned)
					deff.sendMessage(from, negara(), text)
					break
                    case 'tts':
                    if (isBanned) return reply(mess.banned)
				    if (args.length < 1) return deff.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return deff.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							deff.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//══════════[ PREEMIUM ]════════════════════════════//
				case 'addprem':
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
  if (!isGroup) return reply(mess.only.group)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Pesan Targetnya!')
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
prmm = mek.message.extendedTextMessage.contextInfo.participant
prmm = mek.message.extendedTextMessage.contextInfo.mentionedJid
prem.splice(`${prmm}`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
  if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Pesan Targetnya!')
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
prmm = mek.message.extendedTextMessage.contextInfo.participant
prmm = mek.message.extendedTextMessage.contextInfo.mentionedJid
prem.splice(`${prmm}`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
                case 'premiumlist':
				deff.updatePresence(from, Presence.composing) 
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				deff.sendMessage(from, teks.trim(), extendedText, {quoted: froxx, contextInfo: {"mentionedJid": prem}})
				break
//══════════[ BAN MENU ]════════════════════════════//
case 'ban':
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
        case 'unban':
  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break

//══════════[ Sticker Menu ]════════════════════════════//
     
           case 'ttp':  
           if (isBanned) return reply(mess.banned)
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Deffri Gans Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    deff.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
          case 'attp':
          if (isBanned) return reply(mess.banned)
           if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
           buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
           deff.sendMessage(from, buffer, sticker, { quoted: mek })
            break          
            case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendMediaURL(from, pjr)
}
)
              break
            case 'toimg':
            if (isBanned) return reply(mess.banned)
			if (!isQuotedSticker) return reply('Reply Sticker Tod')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await deff.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
                    case 'sticker':
					case 'stiker':
					case 's':
					if (isBanned) return reply(mess.banned)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await deff.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											deff.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await deff.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											deff.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
case 'memegenerator': case 'memegen':
if (isBanned) return reply(mess.banned)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await deff.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										deff.sendMessage(from, resu, image, {caption:'.stiker', quoted: mek})
										fs.unlinkSync(media)
										} catch (e) {
											console.log(e)
										}
									break
case 'tomp4':
              if (isBanned) return reply(mess.banned)
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await deff.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
              if (isBanned) return reply(mess.banned)
					deff.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await deff.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						deff.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break

//══════════[ DOWNLOAD MENU ]════════════════════════════//
case 'play':
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}ytmp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}ytmp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'ytmp4':
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Link nya Mana banh?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
mp4 = await getBuffer(ini.results.result)
deff.sendMessage(from, mp4, video)
break
case 'ytmp3':
if (isBanned) return reply(mess.banned)
if (args.length ==0)return reply('Link Nya Mana Banh?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
mp3 = await getBuffer(ini.results.result)
deff.sendMessage(from, mp3, audio, {quoted: mek})
break
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'tiktok':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/dddtik?url=${q}&apikey=noapikey`)
              result = `Title : ${data.title}`
              juhi = await getBuffer(data.thumb)
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.thumb))
              imageMsg = ( await deff.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: juhi})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await deff.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              deff.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'buttons3': 
if (isBanned) return reply(mess.banned)
reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.dapuhy.xyz/api/socialmedia/ttdownloader?url=${q}&apikey=noapikey`)
              ini_video = await getBuffer(data.result.nowm)
              deff.sendMessage(from, ini_video, video, { quoted: froxx })
              break
          case 'buttons4': 
          if (isBanned) return reply(mess.banned)
           reply(mess.wait)
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              dati = fetchJson(`https://api.dapuhy.xyz/api/socialmedia/ttdownloader?url=${args[0]}&apikey=noapikey`)
              data = await getBuffer(data.result.audio)
              deff.sendMessage(from, data, audio, { quoted: froxx })
              break
              case 'buttons1':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${ZeksKey}&q=${q}`)
		     .then(res => {
			  deff.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: froxx, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
case 'mediafire':
if (isBanned) return reply(mess.banned)
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu bebepemuda menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'pinterest': {
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length < 1) return reply('mau nyari apa?')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                deff.sendMessage(from, pinterest, image, {quoted: froxx, caption: 'NIH BANG '})
            }
            break
case 'lirik':
if (isBanned) return reply(mess.banned)
reply(mess.wait)
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
if (isBanned) return reply(mess.banned)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (isBanned) return reply(mess.banned)
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'kalkulator':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`Nominal yg ingin dijumlahkan?\nContoh: ${prefix + command} 1000+999`)
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(`Results â€º *${teks}*`)
				 break
case 'addvn':
if (isBanned) return reply(mess.banned)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await deff.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					deff.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
case 'listvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					deff.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
case 'modapk':
case 'apkmod':
if (isBanned) return reply(mess.banned)
res = await herodetails(body.slice(12))
her = `Mod Aplikasi*
• Ingin mendownload sesuatu?


👾APLIKASI

• Minecraft (Original)
https://www.mediafire.com/file/4hixmktsfkhky91/Minecraft_v1.16.101.01_Terbaru.zip/file

• Geometry Dash (MOD)
http://www.mediafire.com/file/thnoi1wpa5ex2wn/Geometry_Dash_%2528MOD%2529.apk/file

• KineMaster (PRO)
https://www.mediafire.com/download/eshb8rra8eg5xa3

• KineMaster Diamond (MOD)
https://www.mediafire.com/download/9p8wsnwupnq0lun

• KineMaster Ruby (MOD)
https://www.mediafire.com/download/6b2wa08cmtsr8x8

• Adobe Photoshop (Original)
https://www.mediafire.com/download/whfh12tj4zjpedp

• Alight Motion (PRO)
http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file

• Avee Player (PRO)
https://www.mediafire.com/download/5vkde8d1gcyk33y

• Pixellab (PRO)
https://www.mediafire.com/download/kxj0xyvrkc8w6h0

• Inshot (PRO)
https://www.mediafire.com/download/7qcmrfdy2o1ynxf

• WavePad (PRO)
https://www.mediafire.com/download/oif50qb8ltdoe2x

• Vimage (PRO)
https://www.mediafire.com/download/egjumopr2wl89tl

• Zeotropic (PRO)
https://www.mediafire.com/download/tw9zwj2km2tjsnh

• 90s (PRO)
https://www.mediafire.com/download/0y2bba69f6wakuh


📦TEMPLATE

• Template Mine Imator
http://www.mediafire.com/file/cxa8io0j0i3a0x4/Mine-Imator_%2528Template_Pika_Gamer%2529_Edited.zip/file

• 50 Template Avee Player 1
https://realsht.mobi/teCTj

• 50 Template Avee Player 2
https://realsht.mobi/hhSMc

• Template Quotes Rainbow
https://realsht.mobi/LbmVw

• Template Quotes 1
https://realsht.mobi/GZuvl

• Template Quotes 2
https://realsht.mobi/lFLqm

• Template Quotes 3
https://realsht.mobi/prMyC

• Template Quotes 4
https://realsht.mobi/FyGha

• Template Quotes 5
https://realsht.mobi/LdpNd

• Template Quotes 6
https://realsht.mobi/BdlQe

• Template Quotes 7
https://realsht.mobi/fdZCs

• Template Quotes 8
https://realsht.mobi/YkqIk

• Template Quotes 9
https://realsht.mobi/BcKdr

• Template Quotes 10
https://realsht.mobi/MaZno

• Template Mega Colab
https://realsht.mobi/JinWs

• Template Colab 1
https://realsht.mobi/bocSM

• Template Colab 2
https://realsht.mobi/eJwLd

• Template Colab 3
https://realsht.mobi/tGMxp

• Template Colab 4
https://realsht.mobi/oQtWo

• Template Colab 5
https://realsht.mobi/rbvWQ

• Template Wajah Orang
https://realsht.mobi/tGMxp

• Template Kacamata
https://realsht.mobi/MpoKs

• Template Unix 1
https://realsht.mobi/dfToI

• Template Unix 2
https://realsht.mobi/hRMsq

• Template Partikel
https://realsht.mobi/wOMlc

• Template Pistol
https://realsht.mobi/exXCy

• Template Solo
https://realsht.mobi/MvYbm

📋FONT

• Kumpulan Font Untuk Quotes
https://realsht.mobi/JkmXx

• 800 Font Picsay/Pixelab
https://realsht.mobi/brKhI

• 400 Font Picsay/Pixelab
https://realsht.mobi/gBHyt

• 200 Font Picsay/Pixelab
https://realsht.mobi/iJQbj

• 100 Font Picsay/Pixelab
https://realsht.mobi/hrTdE

👾𝙎𝘾 𝘽𝙔 𝙄𝙎𝘼𝙇 𝙈𝙊𝘿𝙎👾

Tq To ISAL MODS`
reply(her)
break

//══════════[ sticker MENU ]════════════════════════════//
case 'awoo':
					if (isBanned) return reply(mess.banned)
					reply(mess.wait)

					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    deff.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
//══════════[ OWNER MENU ]════════════════════════════//
case 'addcmd': 
case 'setcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (isBanned) return reply(mess.banned)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 𝙻𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break
case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					deff.setStatus(`${iyek}`)
					reply(`Sukses Boss`)
					break
case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                deff.updateProfileName(anu)
                reply(`Sukses Boss`)
                break
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'bc': 
                    if (isBanned) return reply(mess.banned)
					  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await deff.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await deff.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							deff.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             deff.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": 'by Deffri Gans',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
        if (isBanned) return reply(mess.banned)
             if(!isOwner) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await deff.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await deff.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	deff.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             deff.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${(kyun(os.uptime()))}`
		            reply(teks)
		            break  
//══════════[ WELCOME MENU ]════════════════════════════//
case 'intro':
var intro = ` *𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆 𝐌𝐄𝐌𝐁𝐄𝐑 𝐁𝐀𝐑𝐔︎︎*

┌ 𝐍𝐚𝐦𝐚:
├ 𝐔𝐦𝐮𝐫:
├ 𝐀𝐬𝐚𝐥:
└ 𝐉𝐞𝐧𝐢𝐬 𝐤𝐞𝐥𝐚𝐦𝐢𝐧:
`
deff.sendMessage(from, intro, text, {quoted: ftrolMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
//══════════[ SETIFIKAT MENU]════════════════════════════//
case 'serti1':
case 'serti2':
case 'serti3':
if (isBanned) return reply(mess.banned)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
deff.sendMessage(from, buff, image, { quoted: froxx, caption: 'Nih Bro Hasil nya' })
break
//══════════[ BERMAIN MENU ]════════════════════════════//
case 'nickepep':
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=zakigansha`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'tongue':  
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'ssweb':
case 'ss':
if (isBanned) return reply(mess.banned)
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}_*`)
buff = await getBuffer(anu.screenshot)
deff.sendMessage(from, buff, image, {quoted: froxx, caption : teks})
break
//══════════[ PEMBATASAN]════════════════════════════//
case 'notif':
if (isBanned) return reply(mess.banned)
if (!isGroupAdmins) return reply(ind.only.admin)
deff.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await deff.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
} 
await deff.sendMessage(from, options, text)
break
case 'wa.me':
case 'wame':
if (isBanned) return reply(mess.banned)
deff.updatePresence(from, Presence.composing) 
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
deff.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return reply(data.error)
reply(data.result)
break
               case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  deff.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Butuh info tentang apa ya?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}menu`, buttonText: { displayText: `𝑴𝑬𝑵𝑼`, }, type: 1, },
]); 
                 break
                 case 'request':
                 if (isBanned) return reply(mess.banned)
					const rq = body.slice(8)
					if (args.length > 300) return deff.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const ress = `*[REQUEST FITUR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					deff.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Request anda sudah mendarat ke owner, Requests palsu atau main² tidak akan ditanggapi.')
					break
case 'report':
case 'lapor':
if (isBanned) return reply(mess.banned)
					const laporan = body.slice(7)
					if (args.length > 300) return deff.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					deff.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
      case 'shutdown':
      if (isBanned) return reply(mess.banned)
               if (!isOwner && !mek.key.fromMe) return   
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
      if (isBanned) return reply(mess.banned)
               if (!isOwner && !mek.key.fromMe) return   
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
      if (isBanned) return reply(mess.banned)
               if (!isOwner && !mek.key.fromMe) return    reply(mess.only.owner)
             let totalgroup = deff.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             deff.groupLeave(id)
}
             break
        case 'join':
        if (isBanned) return reply(mess.banned)
              if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await deff.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
        if (isBanned) return reply(mess.banned)
             if (!q) return reply('Linknya?')
               if (!isOwner && !mek.key.fromMe) return   reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = deff.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
        case 'ban':
        if (isBanned) return reply(mess.banned)
					  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	    break
        case 'unban':
        if (isBanned) return reply(mess.banned)
					  if (!isOwner && !mek.key.fromMe) return   reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
//GROUP MENU
       case 'online':
       case 'listonline':
       case 'here':                
       if (isBanned) return reply(mess.banned)
 if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(deff.chats.get(ido).presences), deff.user.jid]
             deff.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              deff.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
       if (isBanned) return reply(mess.banned)
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              deff.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       if (isBanned) return reply(mess.banned)
           if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await deff.downloadMediaMessage(encmedia)
              deff.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'demoteall':
if (isBanned) return reply(mess.banned)
		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  deff.groupDemoteAdmin(from, members_id)
              
		 		    break
                
		 		    case 'promoteall':
	if (isBanned) return reply(mess.banned)
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   deff.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
if (isBanned) return reply(mess.banned)
				apri = 'PILIH MANA MIN?'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
if (isBanned) return reply(mess.banned)
      if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        deff.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
      if (isBanned) return reply(mess.banned)
  if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        deff.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':        
   if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await deff.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					deff.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break;
									case 'tagall':
									if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n┌ *TAGALL*\n'
					for (let mem of groupMembers) {
						teks += `├ ⬣ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
                                if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						deff.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						deff.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						deff.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						deff.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						deff.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						deff.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						deff.groupRemove(from, mentioned)
					}
					break
case 'radd':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Pesan Targetnya!')
add = mek.message.extendedTextMessage.contextInfo.participant
deff.groupAdd(from, [add])
reply('Sukses menambahkan peserta')
break
case 'rkick':
if (isBanned) return reply(mess.banned)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Pesan targetnya!')
kick = mek.message.extendedTextMessage.contextInfo.participant
deff.groupRemove(from, [kick])
      reply('Sukses mengeluarkan peserta')
        break
				case 'listadmins':
				if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                if (isBanned) return reply(mess.banned)
                 if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await deff.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	deff.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'welcome':
if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                case 'antilink':
                if (isBanned) return reply(mess.banned)
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args[0] == 'on'){
						if (isAntiLink) return reply('Udah aktif um')
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply('Oke Antilink Di Nonaktifkan')
              } else if (args[0] == 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
        case 'd':
        case 'del':
        case 'delete': 
        if (isBanned) return reply(mess.banned)
     if (!isGroup) return reply(mess.only.group)
					deff.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await deff.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								deff.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await deff.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								deff.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break

//TOLS
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await deff.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
default:
if (budy.includes(`Assalamualaikum`)) {
deff.sendMessage(from, 'Waalaikumsalam, tmuben dahh salam', text, {quoted: mek})
                  }
if (budy.includes(`Bot`)) {
deff.sendMessage(from, 'Ada apa?, bot aktif kok', text, {quoted: mek})
                  }
if (budy.includes(`Tes`)) {
deff.sendMessage(from, 'Hmmm', text, {quoted: mek})
                  }
}
if (budy.startsWith('x')){
try {
return deff.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}