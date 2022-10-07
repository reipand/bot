module.exports = ({
    name: 'reload',
    code: `
$updateCommands
$author[1;All command has been reloaded;$userAvatar[$authorID]]
$color[1;$getGlobalUserVar[color]]
$onlyforids[$botownerid;Kamu tidak memiliki izin untuk menggunakan command ini, command ini hanya untuk owner dari bot.]
`
})