module.exports = ({
    name: 'dls',
    code: `
$onlyif[$isnumber[$message[1]]==false;{newEmbed: {author:Harga diamond lock (IDR):$userAvatar[$authorID]} {color:$getGlobalUserVar[color]} {description:**$message[1] diamond lock** seharga dengan **Rp. $numberSeparator[$math[$message[1]*$getVar[harga_dls]]]**}}]
$onlyif[$isnumber[$message[1]]==true;Itu bukan angka, silahkan coba lagi.]
$argsCheck[1;Jumlah tidak ditemukan, silahkan masukkan angka.]
`
})