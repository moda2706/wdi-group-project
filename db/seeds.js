const mongoose     = require('mongoose');
mongoose.Promise   = require('bluebird');
const env          = require('../config/env');

mongoose.connect(env.db);

const Level = require('../models/level');

Level.collection.drop();

Level
  .create([
    {
      score: 0,
      time: 60,
      content: 'Why am I always being put in the friend zone. I am a nice guy, work a nice job, and would do anything for m lady. In the end these girls always go after DOUCHEBAG guys who treat them like shit, and only talk to me to cry about it. I am sick of being considered \'beta\' or whatever you call it.',
      index: 1
    },
    {
      score: 0,
      time: 40,
      content: 'I am Harambe, and this is my zoo enclosure. I work here with my zoo keeper and my friend, cecil the lion. Everything in here has a story and a price. One thing I have learned after 21 years - you never know WHO is gonna come over that fence.',
      index: 2
    },
    {
      score: 0,
      time: 30,
      content: 'I am Rick Harrison, and this is my pawn shop. I work here with my old man and my son, Big Hoss. Everything in here has a story and a price. One thing I have learned after 21 years - you never know what is gonna come through that door.',
      index: 3
    },
    {
      score: 0,
      time: 20,
      content: 'I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I’m fucking retarded but I don’t care, I’m beautiful. I’m having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me “Apache” and respect my right to kill from above and kill needlessly. If you can’t accept me you’re a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.',
      index: 4
    },
    {
      score: 0,
      time: 10,
      content: 'What the fuck did you just fucking say about me, you little bitch? I will have you know I graduated top of my class in the Navy Seals, and I have been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I am the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You are fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that is just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.',
      index: 5
    },
    {
      score: 0,
      time: 10,
      content: 'On Monday he ate through one apple. But he was still hungry.',
      index: 6
    }
  ])
  .then(levels => {
    console.log(`${levels.length} levels were created`);
    process.exit();
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });
