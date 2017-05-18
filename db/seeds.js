const mongoose     = require('mongoose');
mongoose.Promise   = require('bluebird');
const env          = require('../config/env');

mongoose.connect(env.db);

const Level = require('../models/level');
const Users = require('../models/user');

Level.collection.drop();
Users.collection.drop();

Level
.create([
  {
    name: 'Journey Begins',
    image: 'https://oneinabillionblog.files.wordpress.com/2012/07/journey-road.jpg',
    content: `I am Jack the Cat and here my journey begins.`,
    index: 1,
    seconds: 30
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
    content: `I have got 1345 gold. This fancy sword costs 1000 gold. Buy it is mostly the brand you pay for. Another sword costs 800 gold. It is the same quality but you don't overpay for the brand. I buy the sword for 800 gold. And I buy a shiled for 400 gold. Now I have 145 gold left.`,
    index: 5,
    seconds: 45
  },
  {
    name: 'The Quest',
    image: 'https://cdn.instructables.com/F7K/ROMY/GQ5QBXEN/F7KROMYGQ5QBXEN.MEDIUM.jpg',
    content: `To start my journey, I had to pick up a quest. I searched for the quest and met Uvlucoharis the Wizzard. He told me about the lost princess which was taken hostage by Mr.Wolf - the most evil creature in the Fur Valley. Now I have the mission to find Mr.Wolf and save the princess.`,
    index: 6,
    seconds: 35
  },
  {
    name: 'The Princess',
    image: 'https://s-media-cache-ak0.pinimg.com/736x/73/5f/86/735f86224b16b32ce334f5565a43c5c1.jpg',
    content: `The princess was King's daughter.`,
    index: 7,
    seconds: 20
  }
])
.then(levels => {
  process.exit();
})
.catch(err => {
  console.log(err);
  process.exit();
});
