
module.exports = {
	
    name: 'roleremove',
	
    description: 'Removes a role.',
	
	cooldown: 2,
	
	serverOnly: true,
	
	usage: '(role)',
	
	args: true,
	
	argsMessage: 'You didnt state a role to remove.',
	
    execute(message, args) {  
			   let Role = message.guild.roles.find("name", args[0]);
			
			if (args[0] === null) {
				message.channel.send(`${message.author.username}, you didnt state a role to remove.`);
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
	   message.member.removeRole(Role)
	   message.channel.send(`${Role} role has been removed from ${message.author.username}.`);
		}
	else {
		message.channel.send(`${message.author.username}, you didnt state a valid role or you're not allowed to remove that role.`);
		}
		
    },
};