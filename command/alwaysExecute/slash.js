module.exports = ({
    name: '$alwaysExecute',
    code: `
$createApplicationCommand[$guildID;ping;Show bot latency;yes]
$createApplicationCommand[$guildID;announcements;Send announcements;true;slash;message:Message:true:3]
$createApplicationCommand[$guildID;embed;Embed message;yes]
$createApplicationCommand[$guildID;rating;Give rating to seller;true;slash;who:Mention seller:true:3;product:Product name / you can mention channels:true:3;star:Give seller star:true:3;note:Write note:true:3]
`
})