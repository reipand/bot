module.exports = ({
    name: 'announcements',
    type: 'interaction',
    prototype: 'slash',
    code: `
@everyone
$interactionReply[Announcements telah di siarkan.;;;;;yes]
$author[1;Announcements;$userAvatar[$authorID]]
$color[1;$getGlobalUserVar[color]]
$description[1;$slashOption[message]]
$footer[1;$userTag[$authorID]]
$addTimestamp[1]
$onlyperms[mentioneveryone;{
    "content":"Kamu tidak memiliki izin untuk menggunakan command ini, tidak memiliki izin **mention_everyone**",
    "ephemeral":true,
    "options":{
        "interaction":true
    }
}]
$useChannel[$getVar[announcement_ch]]
`
})