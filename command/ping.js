module.exports = ({
    name: 'ping',
    code: `
**Please wait, $toLowercase[$username[$clientID]] need time ...**
$editIn[5s;{newEmbed: {author:Latency $pingms:$userAvatar[$authorID]} {color:$getGlobalUserVar[color]}}]
`
})