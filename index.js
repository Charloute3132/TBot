const Discord = require("discord.js");
const bot = new Discord.Client();
const token = require("./token.json");

const activities_list = [
    "troxis.fr", 
    "mc.troxis.net",
    "Troxis Server", 
    "/help command"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    console.log("bot ready")
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000); // Runs this every 1 seconds.
});

bot.on("guildMemberAdd", member => {
    //member.send(`Bienvenue a toi ${member} sur le serveur pense a aller lire le réglement !`);
    bot.channels.cache.get('803681494257238036').send(`Bienvenue sur le serveur ${member.user.username}`);
    member.roles.add('802242787524345926');
})

bot.on("message", message => {

    if (message.content.startsWith("/clear")){
        message.delete();

        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            let args = message.content.trim().split(/ +/g);

            if(args[1]) {
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99) {
    
                    message.channel.bulkDelete(args[1])
                    message.channel.send(`Vous avez supprimmé ${args[1]} message(s)`)
                }
                else {
                    message.channel.send('Vous devez indiquer un nombre entre 1 et 99')
                }
            }
            else {
                message.channel.send(`Vous devez indiquer un nombre de message a suprimer !`)
            }
        }
        else {
            message.channel.send(`Vous devez avoir la permission de gérer les messages pour executé cette commande !`)
        }
    }
})

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);

bot.login(process.env.TOKEN);