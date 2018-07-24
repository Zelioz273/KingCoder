
module.exports = {
	
    name: 'roles',
	
    description: 'Gives infomation on the roles available to add or remove.',
	
	cooldown: 2,
	
	serverOnly: true,
	
    execute(message) {  
message.channel.send('Here are all the roles available.\n\nGameDev -\ncreates games or puts everything together such as music, programming, art, ect...\n\nProgrammer -\nCodes games or applications.\n\nEditor -\nEdits photos or videos.\n\nArtist -\nDraws digitally or in real life.\n\nAnimator -\nPretty much an artist but animates instead of just drawing one picture.\n\nLevelDesigner -\nCreates the levels for a game or scenes.\n\nMusicMaker -\nMakes music.\n\nModeler -\nModeler or creates objects for a game or scene.Models/Creates objects for a game or scene.');
    }
};