module.exports = ({
    name: '$alwaysExecute',
    code: `
<@$authorID> Prefix saya di discord server ini adalah **($getServerVar[prefix])**
$onlyif[$checkContains[$message;<@$clientID>]==true;]
`
})