const mongoose     = require('mongoose');
mongoose.Promise   = require('bluebird');
const env          = require('../config/env');

mongoose.connect(env.db[process.env.NODE_ENV]);

const Level = require('../models/level');
// const Users = require('../models/user');

Level.collection.drop();
// Users.collection.drop();

Level
.create([
  {
    name: 'Journey Begins',
    image: 'https://oneinabillionblog.files.wordpress.com/2012/07/journey-road.jpg',
    content: `I am Jack the Cat and here my journey begins.`,
    index: 1,
    seconds: 20
  },
  {
    name: 'My Items',
    image: 'http://dungeonsmaster.com/wp-content/uploads/2011/07/magic-items-01.jpg',
    content: `Before my journey starts I need to collect useful items. I need a sword, a shield and some food which will help me to survive during my adventure.`,
    index: 2,
    seconds: 40
  },
  {
    name: 'The Village',
    image: 'http://himalayafairreisen.com/wp-content/uploads/2017/02/sirubari-village-tour-300x300.jpg',
    content: `I went to the village to search for the items. I found a shop - here I can buy a sword and a shield. But I have 0 coins. How can I get some gold to buy what I need?`,
    index: 3,
    seconds: 40
  },
  {
    name: 'Gold Rush',
    image: 'https://lh5.ggpht.com/06jSAupPqiA0SAohdOfWrN5h91y79304Yq8W0GZrvUmSHqMLiya4BmdP0ZN5bH6hhOk=w300',
    content: `I worked in the tavern and got some gold. I worked as a street joker and got some gold. I worked on the treadmill and got some gold. I worked in the fields and got some gold. I donated my blood and got some gold. I collected some food in the forest and got some gold. Now - I am rich.`,
    index: 4,
    seconds: 50
  },
  {
    name: 'Shopping Time',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41AvUVZRwdL.jpg',
    content: `I have got 1345 gold. This fancy sword costs 1000 gold, but the brand is what you pay for. Another sword costs 800 gold. It is the same quality but you don't overpay for the brand. I buy the sword for 800 gold. And I buy a shiled for 400 gold. Now I have 145 gold left.`,
    index: 5,
    seconds: 45
  },
  {
    name: 'The Quest',
    image: 'https://cdn.instructables.com/F7K/ROMY/GQ5QBXEN/F7KROMYGQ5QBXEN.MEDIUM.jpg',
    content: `To start my journey, I had to pick up a quest. I searched for the quest and met Uvlucoharis the wizzard. He told me about the lost princess which was taken hostage by Mr.Wolf - the most evil creature in Fur Valley. Now I have the mission to find Mr.Wolf and save the princess.`,
    index: 6,
    seconds: 35
  },
  {
    name: 'The Princess',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/73/5f/86/735f86224b16b32ce334f5565a43c5c1.jpg',
    content: `The princess was King's daughter and she loved to spend her time pruning her beloved primroses in the keep of Mr.Wolf.`,
    index: 7,
    seconds: 20
  },
  {
    name: 'The Sprint',
    image: 'https://d30y9cdsu7xlg0.cloudfront.net/png/11513-200.png',
    content: `I ran up to the keep.`,
    index: 8,
    seconds: 5
  },
  {
    name: 'Demon Warrior',
    image: 'https://cdn2.iconfinder.com/data/icons/halloween-9/500/devil-512.png',
    content: `Upon coming to the keep gates I saw a monster or great statue with a giant battle axe slung over his shoulder asleep by the lever to open the gates. In a brazened attempt I threw a rock at him; he stirred.`,
    index: 9,
    seconds: 30
  },
  {
    name: 'Blood',
    image: 'http://icons.iconarchive.com/icons/dapino/medical/256/blood-drop-icon.png',
    content: `He leapt over to me with axe in hand, I quivered in boots for moment by soon drew my sword and made pace over to it. Screaming and roaring 6 inches of hard steel plunged into the demon and he sank to the floor. Well that was easy, I opened the lever and walked into the keep. `,
    index: 10,
    seconds: 30
  },
  {
    name: 'Walk of lust',
    image: 'https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami13-54-512.png',
    content: `As I walked through the valley of the shadow of death I take a look at my life and realise there's nothin' left. I caught a glimpse of the princess leaning out the window looking down on myself, she called out to me and I was beside myself.  `,
    index: 11,
    seconds: 30
  },
  {
    name: 'Boss Fight',
    image: 'http://i13.photobucket.com/albums/a296/DrunkenHobo86/wolfcom_zps0652c68d.png',
    content: `doof, doof, doof, doof. I banged on the spire door. 'Who's there?' cried out Mr.Wolf. 'It is I, Jack the Cat, I have to come to smash you back to hell where you belong'. Mr.Wolf didnt take a liking to that statement and he ripped open the door, I felt the rush of mouldy air envelop me and stench of Mr.Wolf's breath was overwhelming. I reached for Ocrist though Mr.Wolf beat me to it and slashed me with his putrid claws. I collapsed to the floor and heard a pitiless laugh. Bruised and bloodied, I crawled back to my feet only to met by with another crushing blow. The world span around me as I collapsed to the floor tbc...`,
    index: 12,
    seconds: 40
  }
])
.then(() => {
  process.exit();
})
.catch(err => {
  console.log(err);
  process.exit();
});
