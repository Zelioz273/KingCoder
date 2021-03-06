const fs = require('fs');
const Discord = require('discord.js');
const Client = new Discord.Client();

const { token, prefix } = require('./config.json');

Client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    Client.commands.set(command.name, command);
}

Client.on('ready', () => {
	console.log('Bot is online!');
});

Client.on('message', message => {
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	
	  if (!Client.commands.has(commandName)) return;

 const command = Client.commands.get(commandName);
 
 if (command.serverOnly && message.channel.type !== 'text') {
    return message.reply('I can\'t execute that command inside DMs!');
}
  if (command.args && !args.length) {
     let reply = `${command.argsMessage}`;

        if (command.usage) {
           reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
		
        return message.channel.send(reply);
    }
	
	
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (!timestamps.has(message.author.id)) {
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}

	else {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	
	try {
		 command.execute(message, args);
	}

	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
		}	

	
});


Client.login(token);