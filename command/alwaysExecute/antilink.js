module.exports = ({
    name: '$alwaysExecute',
    code: `
$deleteCommand
<@$authorID> Kamu tidak dapat share link ketika antilink sedang menyala.
$deleteIn[5s]
$onlyif[$getVar[antilink_st]==true;]
$onlyif[$hasAnyPerm[$guildID;$authorID;manageserver]==false;]
$onlyif[$checkContains[$message;http://;https://;discord.gg;https://discord.gg]==true;]
`
})