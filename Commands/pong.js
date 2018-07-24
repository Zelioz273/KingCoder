module.exports = {
	
    name: 'pong',
	
    description: 'Pong!',
	
	cooldown: 3,
	
    execute(message) {
		
        message.channel.send('Ping.');
		
    },
};