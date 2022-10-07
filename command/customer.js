module.exports = ({
    name: 'customer',
    code: `
$giveRoles[$guildID;$mentioned[1];$getVar[customer_role]]
$author[1;Telah memberikan role customer ke $userTag[$mentioned[1]];$userAvatar]
$color[1;$getGlobalUserVar[color]]
$onlyperms[admin;Kamu tidak memiliki izin untuk menggunakan command ini, tidak memiliki izin **Administrator**]
`
})