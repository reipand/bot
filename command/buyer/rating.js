module.exports = ({
    name: 'rating',
    type: 'interaction',
    prototype: 'slash',
    code: `
$djsEval[
const { MessageEmbed } = require('discord.js');

var rating_e = new MessageEmbed()
    .setAuthor({
        name: 'Rating from $username[$authorID]',
        iconURL: '$serverIcon'
    })
    .setColor('$getGlobalUserVar[color]')
    .setDescription('**Customer: **<@$authorID>\\n**Rating to: **$slashOption[who]\\n**Product name: **$slashOption[product]\\n\\\`\\\`\\\`diff\\n$slashOption[note]\\\`\\\`\\\`')
    .setFooter({
        text: '⭐'.repeat('$slashOption[star]')
    })
    .setThumbnail('$userAvatar[$authorID]')
    .setTimestamp()
channel.send({
    content: 'New rating.',
    embeds: [rating_e]
})
]
$interactionReply[;{newEmbed: {author: Thanks for rating $toLowercase[$username[$authorID]]:$userAvatar[$authorID]} {color:$getGlobalUserVar[color]}};;;;yes]
$onlyforroles[$getVar[customer_p];{
    "content":"Kamu tidak memiliki izin untuk menggunakan command ini, command hanya untuk customer.",
    "ephemeral":true,
    "options": {
        "interaction":true
    }
}]
$onlyif[$isNumber[$slashOption[star]]==true;{
    "content":"Ouch!, kamu hanya dapat memberikan jumlah star dengan angka, tidak dengan yang lain.",
    "ephemeral":true,
    "options":{
        "interaction":true
    }
}]
$onlyif[$checkContains[$slashOption[who];$authorID]==false;{
    "content":"Nope, jangan bodoh, kamu tidak dapat mention diri kamu sendiri.",
    "ephemeral":true,
    "options":{
        "interaction":true
    }
}]
$onlyif[$checkCondition[$slashOption[star]>5]==false;{
    "content":"Kamu tidak dapat memberikan bintang lebih dari 5.",
    "ephemeral":true,
    "options":{
        "interaction":true
    }
}]
`
})