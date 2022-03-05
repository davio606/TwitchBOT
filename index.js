const TWITCH_OAUTH_TOKEN=''

const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'p0giibot',
    password: TWITCH_OAUTH_TOKEN
  },
  channels: ['pogiipoints']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if(self) return;

  if(message.toLowerCase() === '!hello') {
    client.say(channel, `@${tags.username}, Yo what's up`);
  }

  if(message.toLowerCase() === '!cheesecake') {
    client.say(channel, `Eat your ass like a cheesecake mmmmmmmm`);
  }

  if(message.toLowerCase() === '!kyle') {
    client.say(channel, `Kyle Rager.`);
  }

  if(message.toLowerCase() === '!daddy') {
  	client.say(channel, `daddy chill`);
  } 

  if(message.toLowerCase() === '!simp') {
  	const result = Math.floor(Math.random() * 10) + 1;
    client.say(channel, `@${tags.username}, You a ${result} on the simp scale lmaooooo`);
  }

  if(message.toLowerCase() === '!yoyo') {
    client.say(channel, 'I dont lose, I learn.');
  }

  if(message.toLowerCase() == '!austin') {
	client.say(channel, '2021 we getting a girlfriend');
  }

  if(message.toLowerCase() == '!jake') {
	client.say(channel, 'fucking simp.');
  }

});

