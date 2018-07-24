
module.exports = {
	
    name: 'roleget',
	
    description: 'Gives a role.',
	
	cooldown: 2,
	
	serverOnly: true,
	
	usage: '(role)',
	
	args: true,
	
	argsMessage: 'You didnt give a role to add.',
	
    execute(message, args) {  
			   let Role = message.guild.roles.find("name", args[0]);
			
			if (args[0] === null) {
				message.channel.send(`${message.author.username}, you didnt state a role to add.`);
			}
		if(
		args[0] === 'GameDev' || 
		args[0] === 'Programmer' || 
		args[0] === 'Editor' || 
		args[0] === 'Artist' ||
		args[0] === 'Animator' ||
		args[0] === 'LevelDesigner' ||
		args[0] === 'MusicMaker' ||
		args[0] === 'Modeler'
		) {
	   let member = message.author;
	   message.member.addRole(Role)
	   message.channel.send(`${Role} role has been given to ${message.author.username}.`);
		}
	else {
		message.channel.send(`${message.author.username}, you didnt state a valid role or you're not allowed to add that role.`);
		}
		
    },
};