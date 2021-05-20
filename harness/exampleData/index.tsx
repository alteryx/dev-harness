const createKey = (primary) => { return primary; };

const metaDataFields = [
  [
    {
      connectionName:"",
      fieldsByName:
      {
        games: {
          name:"Games","type":"V_String","size":"21","source":"Formula: [_CurrentField_]"
          },
          candies: {
            "name":"Candies","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"
          },
          field3: {
            "name":"Address","type":"String","size":"16","source":"Formula: [_CurrentField_]"
          }
        },
        fields:[
          {"name":"Games","type":"V_String","size":"21","source":"Formula: [_CurrentField_]"},
          {"name":"Candies","type":"V_String","size":"27","source":"Formula: [_CurrentField_]"},
          {"name":"Address","type":"String","size":"16","source":"Formula: [_CurrentField_]"}
        ]
      }
    ]
  ]

const games = [
  'Pong',
  'Tank',
  'Dig Dug',
  'Joust',
  'Sea Wolf',
  'Tron',
  'Asteroids',
  'Frogger',
  'Galaxian',
  'Lunar Lander',
  'Battlezone',
  'Berzerk',
  'Centipede',
  'Defender',
  'Eagle',
  'Pac-Man',
  'Donkey Kong',
  'Qbert',
  'Gorf',
  'Space Invaders',
  'Ms Pac-Man',
  'Burgertime',
  'Tapper',
  'Double Dragon',
  'Street Fighter',
  'Ghosts n Goblins',
  'Tetris',
  'Golden Tee'
].map(name => createKey(name));

const candies = [
  'Lifesavers',
  'Hersheys Kiss',
  'Skittles',
  'Twizzlers',
  'Ferrero Rocher',
  'Reeses Pieces',
  'Dum Dums Pop',
  'Starburst',
  'Swedish Fish',
  'Airheads',
  'Kitkat',
  'Almond Joy',
  'Twix',
  '3 Musketeers',
  'Milky Way',
  'Tootsie Roll',
  'Tootsie Pop',
  'Werthers',
  'Andes Mint',
  'Sour Patch Kids',
  'Milk Duds',
  'Sweet Tarts',
  'Nerds',
  'Laffy Taffy',
  'Gobstopper',
  'Mounds',
  'Snickers',
  'York Peppermint Pattie',
  'Heath Bar',
  'Jolly Rancher',
  'Blow Pop',
  '100 Grand',
  'Crunch',
  'Butterfinger',
  'Baby Ruth',
  'Dove Bar',
  'Lemonhead',
  'Warheads',
  '5th Avenue',
  'Bar None',
  'Clark Bar',
  'Krackel',
  'Bueno',
  'Lindt Chocolate Bar',
  'Lindt Lindor Truffles',
  'Mars Bar',
  'Mr. Goodbar',
  'Milka',
  'Pay Day',
  'Take 5',
  'Toblerone',
  'U-No Bar',
  'Wonka Bar',
  'Whatchamacallit',
  'Runts',
  'Bubble Tape',
  'Candy Buttons',
  'Candy Cigarettes',
  'Candy Corn',
  'Dots',
  'Fun Dip',
  'Junior Mints',
  'Peeps',
  'Pop Rocks',
  'Pixie Stix',
  'Pez',
  'Raisinets',
  'Razzles',
  'Smarties',
  'Whoppers',
  'Topic',
  'Hot Tamales',
  'Life Savers Gummies',
  'Cookie Dough Bites',
  'Spree',
  'Mentos',
  'Tic Tac',
  'Sugar Babies',
  'Haribo Starmix'
].map((name) => createKey(name));

const planeswalkers = [
  'Ajani Goldmane',
  'Aminatou',
  'Angrath',
  'Arlinn Kord',
  'Ashiok',
  'Chandra Nalaar',
  'Dack Fayden',
  'Daretti',
  'Davriel Cane',
  'Domri Rade',
  'Estrid',
  'Elspeth Tirel',
  'Garruk Wildspeaker',
  'Gideon Jura',
  'Huatli',
  'Inzerva',
  'Jace Beleren',
  'Jaya Ballard',
  'Jiang Yanggu',
  'Karn',
  'Kasmina',
  'Kaya',
  'Kiora',
  'Koth',
  'Liliana Vess',
  'Mu Yanling',
  'Nahiri',
  'Narset',
  'Nicol Bolas',
  'Nissa Revane',
  'Ob Nixilis',
  'Ral Zarek',
  'Rowan Kenrith',
  'Saheeli Rai',
  'Samut',
  'Sarkhan Vol',
  'Sorin Markov',
  'Teferi',
  'Tezzeret',
  'Teyo Verada',
  'The Wanderer',
  'Tibalt',
  'Ugin',
  'Venser',
  'Vivien Reid',
  'Vraska',
  'Will Kenrith',
  'Wrenn',
  'Xenagos'
].map(name => createKey(name));

const address = [
  'Street Name',
  'City',
  'State',
  'Country',
  'Zip Code'
].map(name => createKey(name));

const mtg = [
  'Name',
  'Colors',
  'Power',
  'Mana Cost',
  'Toughness',
  'Loyalty',
  'Flavor Text'
].map(name => createKey(name));

export { games, metaDataFields, candies, planeswalkers, mtg, address };
  