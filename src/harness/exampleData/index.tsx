const createOption = primary => ({
    primary,
    value: primary
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
  });

  const createKey = (primary, index) => ({
    [index]: primary
  });
  
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
  ].map(name => createOption(name));
  
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
  ].map((name, index) => createKey(name, index));
  
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
  ].map(name => createOption(name));

  const addresses = [
    {
      "ADDR": "943 RIVER RD",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "2884",
      "CONAME": "ABRAHAM'S HOME REPAIR",
      "SCORE": 81
    },
    {
      "ADDR": "90 INDUSTRIAL LN # 1",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "3133",
      "CONAME": "ATLAS FOUNDERS INC",
      "SCORE": 44
    },
    {
      "ADDR": "13 MAPLE ST",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "1303",
      "CONAME": "BOB'S BARBER SHOP",
      "SCORE": 37
    },
    {
      "ADDR": "1668 MAIN ST",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "2577",
      "CONAME": "COOKS IN THE KITCHEN",
      "SCORE": 31
    },
    {
      "ADDR": "84 RAMAH CIR N",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "1516",
      "CONAME": "CSC FORCE MEASUREMENT INC",
      "SCORE": 19
    },
    {
      "ADDR": "120 SHOEMAKER LN",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "3695",
      "CONAME": "EBTEC CORP",
      "SCORE": 37
    },
    {
      "ADDR": "PO BOX 628",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "628",
      "CONAME": "FORENSIC FINANCIAL INVESTIGTNS",
      "SCORE": 50
    },
    {
      "ADDR": "80 INDUSTRIAL LN",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "3134",
      "CONAME": "HAMPDEN FENCE SUPPLY INC",
      "SCORE": 15
    },
    {
      "ADDR": "153 BOWLES RD",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "3824",
      "CONAME": "OLYMPIC FASTENING SYSTEMS",
      "SCORE": 14
    },
    {
      "ADDR": "168 ELM ST # 2",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "2468",
      "CONAME": "PACKAGING SERVICE INC",
      "SCORE": 31
    },
    {
      "ADDR": "168 ELM ST",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "2461",
      "CONAME": "PECK BUILDING & RESTORATION",
      "SCORE": 79
    },
    {
      "ADDR": "312 SPRINGFIELD ST",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "1512",
      "CONAME": "POOLMAN POOLS",
      "SCORE": 47
    },
    {
      "ADDR": "1325 SPRINGFIELD ST",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "[Null]",
      "CONAME": "PRECISION DOOR SVC",
      "SCORE": 87
    },
    {
      "ADDR": "57 ALMGREN DR",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "3831",
      "CONAME": "QUILL CORP",
      "SCORE": 38
    },
    {
      "ADDR": "1811 MAIN ST",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "2516",
      "CONAME": "RIVERSIDE LIQUORS INC",
      "SCORE": 88
    },
    {
      "ADDR": "100 BOWLES RD",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "2901",
      "CONAME": "SCHIFFER DENTAL CARE PRODUCTS",
      "SCORE": 34
    },
    {
      "ADDR": "44 RAMAH CIR N",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "1516",
      "CONAME": "STANLEY MACHINE CORP",
      "SCORE": 12
    },
    {
      "ADDR": "9 ALFRED CT",
      "CITY": "AGAWAM",
      "STATE": "MA",
      "ZIP": 1001,
      "ZIP4": "3538",
      "CONAME": "TRI COUNTY BUILDING DESIGN",
      "SCORE": 99
    },
    {
      "ADDR": "485 WEST ST",
      "CITY": "AMHERST",
      "STATE": "MA",
      "ZIP": 1002,
      "ZIP4": "3320",
      "CONAME": "ANDIAMO",
      "SCORE": 18
    },
    {
      "ADDR": "28 HENRY ST",
      "CITY": "AMHERST",
      "STATE": "MA",
      "ZIP": 1002,
      "ZIP4": "1250",
      "CONAME": "GIFT BASKETS ETC",
      "SCORE": 24
    },
    {
      "ADDR": "191 POMEROY LN",
      "CITY": "AMHERST",
      "STATE": "MA",
      "ZIP": 1002,
      "ZIP4": "2908",
      "CONAME": "J & L CATERERS INC",
      "SCORE": 19
    },
    {
      "ADDR": "ROUTE 9",
      "CITY": "AMHERST",
      "STATE": "MA",
      "ZIP": 1002,
      "ZIP4": "[Null]",
      "CONAME": "MUSIC LIBRARY",
      "SCORE": 83
    },
    {
      "ADDR": "353 AMHERST RD",
      "CITY": "PELHAM",
      "STATE": "MA",
      "ZIP": 1002,
      "ZIP4": "9714",
      "CONAME": "PELHAM PUBLIC WORKS",
      "SCORE": 100
    },
    {
      "ADDR": "730 WEST ST",
      "CITY": "AMHERST",
      "STATE": "MA",
      "ZIP": 1002,
      "ZIP4": "3323",
      "CONAME": "THREE H WOODLOT CONSTRUCTION",
      "SCORE": 39
    },
    {
      "ADDR": "38 AMHERST RD # D",
      "CITY": "PELHAM",
      "STATE": "MA",
      "ZIP": 1002,
      "ZIP4": "9623",
      "CONAME": "TOM DOUBLEDAY CARPENTRY",
      "SCORE": 62
    },
    {
      "ADDR": "40 WARE RD",
      "CITY": "BELCHERTOWN",
      "STATE": "MA",
      "ZIP": 1007,
      "ZIP4": "9381",
      "CONAME": "AFLAC",
      "SCORE": 82
    },
    {
      "ADDR": "6 BERKSHIRE AVE",
      "CITY": "BELCHERTOWN",
      "STATE": "MA",
      "ZIP": 1007,
      "ZIP4": "8901",
      "CONAME": "BERKSHIRE SCHOOL",
      "SCORE": 37
    },
    {
      "ADDR": "40 AZALEA WAY",
      "CITY": "BELCHERTOWN",
      "STATE": "MA",
      "ZIP": 1007,
      "ZIP4": "9166",
      "CONAME": "EDUCATIONAL JOURNEYS",
      "SCORE": 70
    },
    {
      "ADDR": "8 BERKSHIRE AVE",
      "CITY": "BELCHERTOWN",
      "STATE": "MA",
      "ZIP": 1007,
      "ZIP4": "8901",
      "CONAME": "MEADOW SCHOOL",
      "SCORE": 60
    },
    {
      "ADDR": "260 MILL VALLEY RD",
      "CITY": "BELCHERTOWN",
      "STATE": "MA",
      "ZIP": 1007,
      "ZIP4": "9567",
      "CONAME": "NATIVE LUMBER CO",
      "SCORE": 17
    },
    {
      "ADDR": "111 SARGENT ST",
      "CITY": "BELCHERTOWN",
      "STATE": "MA",
      "ZIP": 1007,
      "ZIP4": "9428",
      "CONAME": "QUABBIN WELL DRILLING INC",
      "SCORE": 92
    },
    {
      "ADDR": "7 BERKSHIRE AVE",
      "CITY": "BELCHERTOWN",
      "STATE": "MA",
      "ZIP": 1007,
      "ZIP4": "8910",
      "CONAME": "TADGELL HALL SCHOOL",
      "SCORE": 100
    },
    {
      "ADDR": "TOWN HALL",
      "CITY": "BRIMFIELD",
      "STATE": "MA",
      "ZIP": 1010,
      "ZIP4": "[Null]",
      "CONAME": "BRIMFIELD BOARD OF HEALTH",
      "SCORE": 72
    },
    {
      "ADDR": "21 MAIN ST",
      "CITY": "BRIMFIELD",
      "STATE": "MA",
      "ZIP": 1010,
      "ZIP4": "9744",
      "CONAME": "BRIMFIELD TOWN ASSESSORS",
      "SCORE": 66
    },
    {
      "ADDR": "TOWN HALL",
      "CITY": "BRIMFIELD",
      "STATE": "MA",
      "ZIP": 1010,
      "ZIP4": "[Null]",
      "CONAME": "BRIMFIELD TOWN CLERK",
      "SCORE": 26
    },
    {
      "ADDR": "21 MAIN ST",
      "CITY": "BRIMFIELD",
      "STATE": "MA",
      "ZIP": 1010,
      "ZIP4": "9744",
      "CONAME": "BRIMFILED TAX COLLECTOR",
      "SCORE": 33
    },
    {
      "ADDR": "68 MILL LN",
      "CITY": "BRIMFIELD",
      "STATE": "MA",
      "ZIP": 1010,
      "ZIP4": "9749",
      "CONAME": "MED SOURCE TECHNOLOGIES INC",
      "SCORE": 44
    },
    {
      "ADDR": "5 NORTH RD",
      "CITY": "CHESTERFIELD",
      "STATE": "MA",
      "ZIP": 1012,
      "ZIP4": "[Null]",
      "CONAME": "CHESTERFIELD TOWN FIRE DEPT",
      "SCORE": 66
    },
    {
      "ADDR": "45 PLAINFIELD ST",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1013,
      "ZIP4": "1561",
      "CONAME": "BUXTON DOPP",
      "SCORE": 93
    },
    {
      "ADDR": "759 MEADOW ST",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1013,
      "ZIP4": "4820",
      "CONAME": "FRONTLINE MOTORS INC",
      "SCORE": 82
    },
    {
      "ADDR": "63 CABOT ST",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1013,
      "ZIP4": "1601",
      "CONAME": "POLGOLD JEWELERS",
      "SCORE": 76
    },
    {
      "ADDR": "165 FRONT ST # D12",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1013,
      "ZIP4": "1289",
      "CONAME": "SCHERMERHORN INC",
      "SCORE": 56
    },
    {
      "ADDR": "40 PROSPECT ST",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1013,
      "ZIP4": "4029",
      "CONAME": "UNIQUE AUTO INC",
      "SCORE": 33
    },
    {
      "ADDR": "300 BURNETT RD",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1020,
      "ZIP4": "4695",
      "CONAME": "DIELECTRICS INC",
      "SCORE": 8
    },
    {
      "ADDR": "1066 GRANBY RD",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1020,
      "ZIP4": "1539",
      "CONAME": "JOEL L TILLMAN DDS",
      "SCORE": 70
    },
    {
      "ADDR": "1840 MEMORIAL DR",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1020,
      "ZIP4": "3149",
      "CONAME": "ROUTE 33 AUTO SALES",
      "SCORE": 0
    },
    {
      "ADDR": "1271 MEMORIAL DR",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1020,
      "ZIP4": "3967",
      "CONAME": "TWISTY'S SOFT SERVE",
      "SCORE": 59
    },
    {
      "ADDR": "118 DULONG CIR",
      "CITY": "CHICOPEE",
      "STATE": "MA",
      "ZIP": 1022,
      "ZIP4": "1153",
      "CONAME": "MASSASOIT/TACKBAND INC",
      "SCORE": 94
    },
    {
      "ADDR": "35 BROOK ST",
      "CITY": "EASTHAMPTON",
      "STATE": "MA",
      "ZIP": 1027,
      "ZIP4": "2520",
      "CONAME": "B & G TREE & LANDSCAPING",
      "SCORE": 22
    },
    {
      "ADDR": "34 HOLLY CIR",
      "CITY": "EASTHAMPTON",
      "STATE": "MA",
      "ZIP": 1027,
      "ZIP4": "2737",
      "CONAME": "RUNNALS & SONS CONSTR SVC INC",
      "SCORE": 92
    },
    {
      "ADDR": "116 PLEASANT ST",
      "CITY": "EASTHAMPTON",
      "STATE": "MA",
      "ZIP": 1027,
      "ZIP4": "2752",
      "CONAME": "TURN IT UP INC",
      "SCORE": 8
    },
    {
      "ADDR": "116 PLEASANT ST",
      "CITY": "EASTHAMPTON",
      "STATE": "MA",
      "ZIP": 1027,
      "ZIP4": "2752",
      "CONAME": "VALLEY MARKETING",
      "SCORE": 96
    },
    {
      "ADDR": "[Null]",
      "CITY": "WESTHAMPTON",
      "STATE": "MA",
      "ZIP": 1027,
      "ZIP4": "[Null]",
      "CONAME": "WESTHAMPTON FIRE DEPT",
      "SCORE": 45
    },
    {
      "ADDR": "443 SHAKER RD",
      "CITY": "EAST LONGMEADOW",
      "STATE": "MA",
      "ZIP": 1028,
      "ZIP4": "3801",
      "CONAME": "HASBRO GAMES",
      "SCORE": 35
    },
    {
      "ADDR": "6 ROGERS RD",
      "CITY": "EAST LONGMEADOW",
      "STATE": "MA",
      "ZIP": 1028,
      "ZIP4": "2124",
      "CONAME": "INDIAN HEAD CAPITAL CORP",
      "SCORE": 87
    },
    {
      "ADDR": "341 SHAKER RD",
      "CITY": "EAST LONGMEADOW",
      "STATE": "MA",
      "ZIP": 1028,
      "ZIP4": "3125",
      "CONAME": "JOHN C OTTO CO INC",
      "SCORE": 90
    },
    {
      "ADDR": "16 MAPLE ST",
      "CITY": "EAST LONGMEADOW",
      "STATE": "MA",
      "ZIP": 1028,
      "ZIP4": "2783",
      "CONAME": "PIONEER PREMIER PROMOTIONS",
      "SCORE": 100
    },
    {
      "ADDR": "6 SOMERS RD",
      "CITY": "EAST LONGMEADOW",
      "STATE": "MA",
      "ZIP": 1028,
      "ZIP4": "2918",
      "CONAME": "WESTBANK",
      "SCORE": 76
    },
    {
      "ADDR": "525 SPRINGFIELD ST",
      "CITY": "FEEDING HILLS",
      "STATE": "MA",
      "ZIP": 1030,
      "ZIP4": "2151",
      "CONAME": "BAY STATE INSTRUMENT REPAIR",
      "SCORE": 84
    },
    {
      "ADDR": "820 SPRINGFIELD ST",
      "CITY": "FEEDING HILLS",
      "STATE": "MA",
      "ZIP": 1030,
      "ZIP4": "2127",
      "CONAME": "BEAN'S AUTO GLASS",
      "SCORE": 62
    },
    {
      "ADDR": "43 S WEST ST",
      "CITY": "FEEDING HILLS",
      "STATE": "MA",
      "ZIP": 1030,
      "ZIP4": "1040",
      "CONAME": "LABCO",
      "SCORE": 18
    },
    {
      "ADDR": "525 SPRINGFIELD ST",
      "CITY": "FEEDING HILLS",
      "STATE": "MA",
      "ZIP": 1030,
      "ZIP4": "2151",
      "CONAME": "MICHAEL'S CAFE",
      "SCORE": 2
    },
    {
      "ADDR": "PO BOX 157",
      "CITY": "FEEDING HILLS",
      "STATE": "MA",
      "ZIP": 1030,
      "ZIP4": "157",
      "CONAME": "STELLATO BROTHERS LANDSCAPING",
      "SCORE": 7
    },
    {
      "ADDR": "511 SPRINGFIELD ST",
      "CITY": "FEEDING HILLS",
      "STATE": "MA",
      "ZIP": 1030,
      "ZIP4": "2163",
      "CONAME": "W J DONOVAN CO BARBER SUPPLIES",
      "SCORE": 83
    },
    {
      "ADDR": "135 BERKSHIRE TRL W",
      "CITY": "GOSHEN",
      "STATE": "MA",
      "ZIP": 1032,
      "ZIP4": "9600",
      "CONAME": "ACCUFAB IRONWORKS INC",
      "SCORE": 67
    },
    {
      "ADDR": "15 LYNN DR",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9772",
      "CONAME": "CHARLES K STEPHENSON",
      "SCORE": 34
    },
    {
      "ADDR": "74 W STATE ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9450",
      "CONAME": "CROWN DRY CLEANING & TUXEDO",
      "SCORE": 58
    },
    {
      "ADDR": "156 KENDALL ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9577",
      "CONAME": "DRAPEAU & PATLA",
      "SCORE": 93
    },
    {
      "ADDR": "77 W STATE ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9422",
      "CONAME": "FIVE CORNER CUTS",
      "SCORE": 39
    },
    {
      "ADDR": "24 W STATE ST # 3",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9416",
      "CONAME": "LECCA CONSTRUCTION INC",
      "SCORE": 32
    },
    {
      "ADDR": "72 PLEASANT ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "3319",
      "CONAME": "NATIONAL TOWING ALLIANCE",
      "SCORE": 52
    },
    {
      "ADDR": "147 SOUTH ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9547",
      "CONAME": "NEW ENGLAND SECURITY & TECH",
      "SCORE": 28
    },
    {
      "ADDR": "31 W STATE ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9467",
      "CONAME": "PIZZA PALACE RESTAURANT",
      "SCORE": 90
    },
    {
      "ADDR": "183 W STATE ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9611",
      "CONAME": "STONEBROOK SADDLERY",
      "SCORE": 73
    },
    {
      "ADDR": "204 SCHOOL ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9583",
      "CONAME": "TUSCARORA COMMUNICATIONS",
      "SCORE": 25
    },
    {
      "ADDR": "100 SOUTH ST",
      "CITY": "GRANBY",
      "STATE": "MA",
      "ZIP": 1033,
      "ZIP4": "9547",
      "CONAME": "WESTOVER PUB ON THE GREEN",
      "SCORE": 82
    },
    {
      "ADDR": "341 RUSSELL ST",
      "CITY": "HADLEY",
      "STATE": "MA",
      "ZIP": 1035,
      "ZIP4": "3536",
      "CONAME": "EASTERN MOUNTAIN SPORTS INC",
      "SCORE": 86
    },
    {
      "ADDR": "S MAPLE ST",
      "CITY": "HADLEY",
      "STATE": "MA",
      "ZIP": 1035,
      "ZIP4": "[Null]",
      "CONAME": "GOUKLER EYECARE",
      "SCORE": 67
    },
    {
      "ADDR": "230 MIDDLE ST",
      "CITY": "HADLEY",
      "STATE": "MA",
      "ZIP": 1035,
      "ZIP4": "9717",
      "CONAME": "HADLEY TOWN VEHICLE MNTNC",
      "SCORE": 53
    },
    {
      "ADDR": "230 MIDDLE ST",
      "CITY": "HADLEY",
      "STATE": "MA",
      "ZIP": 1035,
      "ZIP4": "9717",
      "CONAME": "HADLEY WATER DEPT",
      "SCORE": 32
    },
    {
      "ADDR": "100 VENTURE WAY",
      "CITY": "HADLEY",
      "STATE": "MA",
      "ZIP": 1035,
      "ZIP4": "9462",
      "CONAME": "M J FINANCIAL",
      "SCORE": 91
    },
    {
      "ADDR": "498 MAIN ST",
      "CITY": "HAMPDEN",
      "STATE": "MA",
      "ZIP": 1036,
      "ZIP4": "9697",
      "CONAME": "ENVIRONMENTAL COMPLIANCE SVC",
      "SCORE": 66
    },
    {
      "ADDR": "482 LOWER RD",
      "CITY": "HARDWICK",
      "STATE": "MA",
      "ZIP": 1037,
      "ZIP4": "[Null]",
      "CONAME": "ELITE TRANSPORT",
      "SCORE": 0
    },
    {
      "ADDR": "16 DWIGHT ST",
      "CITY": "HATFIELD",
      "STATE": "MA",
      "ZIP": 1038,
      "ZIP4": "9709",
      "CONAME": "BROCK'S ELECTRIC SVC",
      "SCORE": 64
    },
    {
      "ADDR": "141 MAIN ST",
      "CITY": "HAYDENVILLE",
      "STATE": "MA",
      "ZIP": 1039,
      "ZIP4": "9704",
      "CONAME": "WILLIAMSBURG TOWN ASSESSOR",
      "SCORE": 86
    },
    {
      "ADDR": "141 MAIN ST",
      "CITY": "HAYDENVILLE",
      "STATE": "MA",
      "ZIP": 1039,
      "ZIP4": "9704",
      "CONAME": "WILLIAMSBURG TOWN CLERK",
      "SCORE": 17
    },
    {
      "ADDR": "141 MAIN ST",
      "CITY": "HAYDENVILLE",
      "STATE": "MA",
      "ZIP": 1039,
      "ZIP4": "9704",
      "CONAME": "WILLIAMSBURG TOWN COLLECTOR",
      "SCORE": 70
    },
    {
      "ADDR": "141 MAIN ST",
      "CITY": "HAYDENVILLE",
      "STATE": "MA",
      "ZIP": 1039,
      "ZIP4": "9704",
      "CONAME": "WILLIAMSBURG TOWN HEALTH BOARD",
      "SCORE": 20
    },
    {
      "ADDR": "295 HIGH ST",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "6566",
      "CONAME": "AUBREY DIXON & RILEY",
      "SCORE": 81
    },
    {
      "ADDR": "10 HOSPITAL DR # 302",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "6603",
      "CONAME": "DHIRENDRA MOHAN MD",
      "SCORE": 10
    },
    {
      "ADDR": "555 HIGH ST",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "5253",
      "CONAME": "FAMILY DOLLAR STORE",
      "SCORE": 37
    },
    {
      "ADDR": "50 HOLYOKE ST",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "2709",
      "CONAME": "FOREVER 21",
      "SCORE": 69
    },
    {
      "ADDR": "399 MAIN ST",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "5607",
      "CONAME": "MAIN STREET MARKET",
      "SCORE": 95
    },
    {
      "ADDR": "1678 NORTHAMPTON ST",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "1942",
      "CONAME": "MARCEL C CARTIER DDS",
      "SCORE": 18
    },
    {
      "ADDR": "2 CABOT ST",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "6051",
      "CONAME": "MASTEX INDUSTRIES INC",
      "SCORE": 16
    },
    {
      "ADDR": "84 SARGEANT ST",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "5691",
      "CONAME": "PARSONS PAPER NVF CO",
      "SCORE": 26
    },
    {
      "ADDR": "98 LOWER WESTFIELD RD # 5",
      "CITY": "HOLYOKE",
      "STATE": "MA",
      "ZIP": 1040,
      "ZIP4": "2744",
      "CONAME": "VALLEY CHIROPRACTIC & REHAB",
      "SCORE": 75
    },
    {
      "ADDR": "PARK",
      "CITY": "HUNTINGTON",
      "STATE": "MA",
      "ZIP": 1050,
      "ZIP4": "[Null]",
      "CONAME": "HUNTINGTON BOARD OF ASSESSORS",
      "SCORE": 74
    },
    {
      "ADDR": "26 RUSSELL RD",
      "CITY": "HUNTINGTON",
      "STATE": "MA",
      "ZIP": 1050,
      "ZIP4": "9776",
      "CONAME": "HUNTINGTON NUTRITION CTR",
      "SCORE": 15
    },
    {
      "ADDR": "PARK",
      "CITY": "HUNTINGTON",
      "STATE": "MA",
      "ZIP": 1050,
      "ZIP4": "[Null]",
      "CONAME": "TOWN SELECTMEN",
      "SCORE": 41
    },
    {
      "ADDR": "421 N MAIN ST",
      "CITY": "LEEDS",
      "STATE": "MA",
      "ZIP": 1053,
      "ZIP4": "9700",
      "CONAME": "VA MEDICAL CTR LIBR",
      "SCORE": 33
    },
    {
      "ADDR": "130 RATTLESNAKE GUTTER RD",
      "CITY": "LEVERETT",
      "STATE": "MA",
      "ZIP": 1054,
      "ZIP4": "9726",
      "CONAME": "RECTOR PRESS LTD",
      "SCORE": 40
    },
    {
      "ADDR": "136 WILSON ST",
      "CITY": "LUDLOW",
      "STATE": "MA",
      "ZIP": 1056,
      "ZIP4": "2387",
      "CONAME": "EMMETT ROONEY CONGREGATE",
      "SCORE": 79
    },
    {
      "ADDR": "100 STATE ST # 125-225",
      "CITY": "LUDLOW",
      "STATE": "MA",
      "ZIP": 1056,
      "ZIP4": "3435",
      "CONAME": "STATE LINE FOOD DISTRUBTORS",
      "SCORE": 61
    },
    {
      "ADDR": "159 BUTLER RD",
      "CITY": "MONSON",
      "STATE": "MA",
      "ZIP": 1057,
      "ZIP4": "9208",
      "CONAME": "TRUST DISTRIBUTION INC",
      "SCORE": 97
    },
    {
      "ADDR": "19 STAFFORD RD",
      "CITY": "MONSON",
      "STATE": "MA",
      "ZIP": 1057,
      "ZIP4": "9318",
      "CONAME": "ZERO MANUFACTURING",
      "SCORE": 18
    },
    {
      "ADDR": "46 BRIDGE ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "2428",
      "CONAME": "HISTORIC NORTHAMPTON ARCHIVES",
      "SCORE": 22
    },
    {
      "ADDR": "264 ELM ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "2857",
      "CONAME": "JEFFREY M KORFF MD",
      "SCORE": 34
    },
    {
      "ADDR": "244 KING ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "2332",
      "CONAME": "MEDEIROS MITSUBISHI",
      "SCORE": 48
    },
    {
      "ADDR": "518 PLEASANT ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "3997",
      "CONAME": "MOLECULAR METROLOGY INC",
      "SCORE": 66
    },
    {
      "ADDR": "42 GOTHIC ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "3018",
      "CONAME": "NORTHAMPTON POLICE DEPT",
      "SCORE": 72
    },
    {
      "ADDR": "16 ARMORY ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "3857",
      "CONAME": "ROBINSON DONOVAN",
      "SCORE": 69
    },
    {
      "ADDR": "125 PLEASANT ST # A",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "3924",
      "CONAME": "SPAGHETTI FREDDY'S",
      "SCORE": 92
    },
    {
      "ADDR": "53 CENTER ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "3000",
      "CONAME": "TAMASKO MARGRET PHYSO THRPST",
      "SCORE": 83
    },
    {
      "ADDR": "2 BRIDGE ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "2401",
      "CONAME": "THAI GARDEN",
      "SCORE": 10
    },
    {
      "ADDR": "150 MAIN ST",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1060,
      "ZIP4": "3131",
      "CONAME": "TOOTH PIX",
      "SCORE": 54
    },
    {
      "ADDR": "263 RYAN RD",
      "CITY": "FLORENCE",
      "STATE": "MA",
      "ZIP": 1062,
      "ZIP4": "3411",
      "CONAME": "SERVICEMASTER",
      "SCORE": 2
    },
    {
      "ADDR": "ALUMNAE GYMNASIUM",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1063,
      "ZIP4": "1",
      "CONAME": "COLLEGE ARCHIVES",
      "SCORE": 85
    },
    {
      "ADDR": "NEILSON LIBRARY",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1063,
      "ZIP4": "1",
      "CONAME": "MORTIMER RARE BOOK ROOM",
      "SCORE": 10
    },
    {
      "ADDR": "ALUMNAE GYMNASIUM",
      "CITY": "NORTHAMPTON",
      "STATE": "MA",
      "ZIP": 1063,
      "ZIP4": "1",
      "CONAME": "SOPHIA SMITH COLLECTION",
      "SCORE": 81
    },
    {
      "ADDR": "1221 S MAIN ST",
      "CITY": "PALMER",
      "STATE": "MA",
      "ZIP": 1069,
      "ZIP4": "[Null]",
      "CONAME": "BALDYGA'S AUTO SALES & SVC",
      "SCORE": 69
    },
    {
      "ADDR": "1018 THORNDIKE ST",
      "CITY": "PALMER",
      "STATE": "MA",
      "ZIP": 1069,
      "ZIP4": "1505",
      "CONAME": "CRAIG D ROBINSON LAW OFFICE",
      "SCORE": 20
    },
    {
      "ADDR": "1307 PARK ST",
      "CITY": "PALMER",
      "STATE": "MA",
      "ZIP": 1069,
      "ZIP4": "1608",
      "CONAME": "JACKSON'S AUTO SALES & SVC",
      "SCORE": 87
    },
    {
      "ADDR": "1127 S MAIN ST",
      "CITY": "PALMER",
      "STATE": "MA",
      "ZIP": 1069,
      "ZIP4": "1884",
      "CONAME": "NATIONAL METAL INDUSTRIES",
      "SCORE": 73
    },
    {
      "ADDR": "21 WILBRAHAM ST",
      "CITY": "PALMER",
      "STATE": "MA",
      "ZIP": 1069,
      "ZIP4": "9605",
      "CONAME": "WAYNE'S TRUCK SVC",
      "SCORE": 45
    },
    {
      "ADDR": "1311 PARK ST",
      "CITY": "PALMER",
      "STATE": "MA",
      "ZIP": 1069,
      "ZIP4": "1625",
      "CONAME": "YANKEE FIRE & RESCUE INC",
      "SCORE": 10
    },
    {
      "ADDR": "4 BECARRI LN",
      "CITY": "SOUTHAMPTON",
      "STATE": "MA",
      "ZIP": 1073,
      "ZIP4": "9569",
      "CONAME": "DIRECT MAIL PLUS",
      "SCORE": 61
    },
    {
      "ADDR": "8 EAST ST",
      "CITY": "SOUTHAMPTON",
      "STATE": "MA",
      "ZIP": 1073,
      "ZIP4": "9634",
      "CONAME": "SOUTHAMPTON POLICE DEPT",
      "SCORE": 15
    },
    {
      "ADDR": "30 CAMP JAHN RD",
      "CITY": "SOUTHAMPTON",
      "STATE": "MA",
      "ZIP": 1073,
      "ZIP4": "9568",
      "CONAME": "TIMBERLAND EXCAVATING",
      "SCORE": 35
    },
    {
      "ADDR": "55 GUNN RD",
      "CITY": "SOUTHAMPTON",
      "STATE": "MA",
      "ZIP": 1073,
      "ZIP4": "9366",
      "CONAME": "TOUCH OF LOVE WEDDING FLOWERS",
      "SCORE": 38
    },
    {
      "ADDR": "17 COLLEGE ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "6458",
      "CONAME": "BRIDAL HEIRLOOMS",
      "SCORE": 61
    },
    {
      "ADDR": "30 CAREW ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2705",
      "CONAME": "CANAL VILLAGE SCHOOL",
      "SCORE": 44
    },
    {
      "ADDR": "15 COLLEGE ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "1422",
      "CONAME": "COMFORT SHOES",
      "SCORE": 63
    },
    {
      "ADDR": "22 INDUSTRIAL DR",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2622",
      "CONAME": "COMMUNITY SELF STORAGE INC",
      "SCORE": 45
    },
    {
      "ADDR": "250 OLD LYMAN RD",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2653",
      "CONAME": "COMMUNITY TRANSPORTATION",
      "SCORE": 36
    },
    {
      "ADDR": "470 NEWTON ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2027",
      "CONAME": "FALLS DRIVING SCHOOL",
      "SCORE": 41
    },
    {
      "ADDR": "130 COLLEGE ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "1493",
      "CONAME": "JEAN REAL ESTATE",
      "SCORE": 43
    },
    {
      "ADDR": "439 GRANBY RD",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2159",
      "CONAME": "MEDIA DATA TECHNOLOGY INC",
      "SCORE": 60
    },
    {
      "ADDR": "50 COLLEGE ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "1461",
      "CONAME": "MT HOLYOKE COLLEGE LIBRARY",
      "SCORE": 71
    },
    {
      "ADDR": "21 MOUNTAIN VIEW ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2133",
      "CONAME": "NEW FRONTIER",
      "SCORE": 81
    },
    {
      "ADDR": "130 COLLEGE ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "1493",
      "CONAME": "PAIN RELEIF & WELLNESS CTR",
      "SCORE": 0
    },
    {
      "ADDR": "27 COLLEGE ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "6461",
      "CONAME": "PEN COR CONSULTING INC",
      "SCORE": 95
    },
    {
      "ADDR": "2094 MEMORIAL DR",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "3044",
      "CONAME": "PETERJONS GOURMET ICE CREAM",
      "SCORE": 39
    },
    {
      "ADDR": "91 MAIN ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2706",
      "CONAME": "PLEASANT STREET AUTO BODY",
      "SCORE": 81
    },
    {
      "ADDR": "3 MAIN ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2706",
      "CONAME": "QUALITY AUTO REPAIR",
      "SCORE": 48
    },
    {
      "ADDR": "502 GRANBY RD",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2194",
      "CONAME": "RAY'S AUTO SPECIALTIES",
      "SCORE": 52
    },
    {
      "ADDR": "129 COLLEGE ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "1494",
      "CONAME": "RYAN BOUDREAU RANDALL",
      "SCORE": 33
    },
    {
      "ADDR": "116 MAIN ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2833",
      "CONAME": "SOUTH HADLEY DATA PROCESSING",
      "SCORE": 30
    },
    {
      "ADDR": "15 DAYTON ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "1999",
      "CONAME": "SOUTH HADLEY DENTAL ASSOC INC",
      "SCORE": 12
    },
    {
      "ADDR": "116 MAIN ST # 108",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2833",
      "CONAME": "SOUTH HADLEY PAYROLL OFFICE",
      "SCORE": 4
    },
    {
      "ADDR": "25 COLLEGE ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "6460",
      "CONAME": "STEMS FLOWERS & GIFTS",
      "SCORE": 81
    },
    {
      "ADDR": "488 NEWTON ST # 1",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2010",
      "CONAME": "SUSAN V SCHIFFMAN DDS",
      "SCORE": 24
    },
    {
      "ADDR": "470 NEWTON ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2027",
      "CONAME": "TECHNIQUE STUDIO OF DANCE",
      "SCORE": 16
    },
    {
      "ADDR": "485 NEWTON ST",
      "CITY": "SOUTH HADLEY",
      "STATE": "MA",
      "ZIP": 1075,
      "ZIP4": "2017",
      "CONAME": "US AIR FORCE RECRUITING",
      "SCORE": 68
    },
    {
      "ADDR": "4226 CHURCH ST",
      "CITY": "THORNDIKE",
      "STATE": "MA",
      "ZIP": 1079,
      "ZIP4": "[Null]",
      "CONAME": "OAK TREE PACKAGEING CORP",
      "SCORE": 93
    },
    {
      "ADDR": "150 MAIN ST",
      "CITY": "THREE RIVERS",
      "STATE": "MA",
      "ZIP": 1080,
      "ZIP4": "1100",
      "CONAME": "AMVETS POST 74 COMMANDEER",
      "SCORE": 50
    },
    {
      "ADDR": "251 SYKES ST",
      "CITY": "THREE RIVERS",
      "STATE": "MA",
      "ZIP": 1080,
      "ZIP4": "[Null]",
      "CONAME": "THREE RIVERS FIRE DEPT PUMP",
      "SCORE": 100
    },
    {
      "ADDR": "MAIN",
      "CITY": "WALES",
      "STATE": "MA",
      "ZIP": 1081,
      "ZIP4": "[Null]",
      "CONAME": "WALES HIGHWAY DEPT",
      "SCORE": 70
    },
    {
      "ADDR": "41 MAIN ST",
      "CITY": "WALES",
      "STATE": "MA",
      "ZIP": 1081,
      "ZIP4": "9777",
      "CONAME": "WALES PRESCHOOL",
      "SCORE": 62
    },
    {
      "ADDR": "3 HOLLOW RD",
      "CITY": "WALES",
      "STATE": "MA",
      "ZIP": 1081,
      "ZIP4": "9611",
      "CONAME": "WALES TOWN ASSESSORS",
      "SCORE": 16
    },
    {
      "ADDR": "104 MAIN ST",
      "CITY": "WALES",
      "STATE": "MA",
      "ZIP": 1081,
      "ZIP4": "9787",
      "CONAME": "WALES TOWN FIRE DEPT",
      "SCORE": 59
    },
    {
      "ADDR": "3 HOLLOW RD",
      "CITY": "WALES",
      "STATE": "MA",
      "ZIP": 1081,
      "ZIP4": "9755",
      "CONAME": "WALES TOWN POLICE DEPT",
      "SCORE": 78
    },
    {
      "ADDR": "2 HOLLOW RD",
      "CITY": "WALES",
      "STATE": "MA",
      "ZIP": 1081,
      "ZIP4": "9755",
      "CONAME": "WALES TOWN SELECTMEN",
      "SCORE": 94
    },
    {
      "ADDR": "40 E MAIN ST",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "1384",
      "CONAME": "D & D FITNESS FACTORY INC",
      "SCORE": 20
    },
    {
      "ADDR": "40 E MAIN ST",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "1384",
      "CONAME": "ENDLESS SUN TANNING",
      "SCORE": 59
    },
    {
      "ADDR": "340 MONSON TURNPIKE RD",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "9449",
      "CONAME": "GREG'S BURNER SVC",
      "SCORE": 91
    },
    {
      "ADDR": "83 SOUTH ST # 111",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "1659",
      "CONAME": "MARY LANE MEDICAL ASSOC",
      "SCORE": 24
    },
    {
      "ADDR": "83 SOUTH ST",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "1660",
      "CONAME": "PIONEER VALLEY SURGICAL",
      "SCORE": 77
    },
    {
      "ADDR": "7 HILLSIDE TER",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "9764",
      "CONAME": "RICHARD C CHOUINARD CPA",
      "SCORE": 27
    },
    {
      "ADDR": "[Null]",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "[Null]",
      "CONAME": "SHERMAN OIL CO",
      "SCORE": 44
    },
    {
      "ADDR": "[Null]",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "[Null]",
      "CONAME": "STUCK ON MAGNETS",
      "SCORE": 71
    },
    {
      "ADDR": "[Null]",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "[Null]",
      "CONAME": "SYSTEMS SYNTHESIS INC",
      "SCORE": 29
    },
    {
      "ADDR": "85 SOUTH ST",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "1667",
      "CONAME": "THEODORE P MASON MD",
      "SCORE": 36
    },
    {
      "ADDR": "40 E MAIN ST",
      "CITY": "WARE",
      "STATE": "MA",
      "ZIP": 1082,
      "ZIP4": "1384",
      "CONAME": "TRAINER JOE",
      "SCORE": 40
    },
    {
      "ADDR": "2162 MAIN",
      "CITY": "WARREN",
      "STATE": "MA",
      "ZIP": 1083,
      "ZIP4": "[Null]",
      "CONAME": "DANCE FACTORY",
      "SCORE": 96
    },
    {
      "ADDR": "[Null]",
      "CITY": "WARREN",
      "STATE": "MA",
      "ZIP": 1083,
      "ZIP4": "[Null]",
      "CONAME": "S S SKOWYRA",
      "SCORE": 89
    },
    {
      "ADDR": "126 MAPLE",
      "CITY": "WARREN",
      "STATE": "MA",
      "ZIP": 1083,
      "ZIP4": "[Null]",
      "CONAME": "SQUARE BUSINESS",
      "SCORE": 82
    },
    {
      "ADDR": "16 MILTON O FOUNTAIN WAY",
      "CITY": "WARREN",
      "STATE": "MA",
      "ZIP": 1083,
      "ZIP4": "9701",
      "CONAME": "US POST OFFICE",
      "SCORE": 99
    },
    {
      "ADDR": "260 N ELM ST",
      "CITY": "WESTFIELD",
      "STATE": "MA",
      "ZIP": 1085,
      "ZIP4": "1614",
      "CONAME": "BEACON-MORRIS",
      "SCORE": 14
    },
    {
      "ADDR": "245 E MAIN ST",
      "CITY": "WESTFIELD",
      "STATE": "MA",
      "ZIP": 1085,
      "ZIP4": "3307",
      "CONAME": "FIRST US DOLLAR",
      "SCORE": 51
    },
    {
      "ADDR": "260 N ELM ST",
      "CITY": "WESTFIELD",
      "STATE": "MA",
      "ZIP": 1085,
      "ZIP4": "1614",
      "CONAME": "MESTEK INC",
      "SCORE": 54
    },
    {
      "ADDR": "403 PAPER MILL RD",
      "CITY": "WESTFIELD",
      "STATE": "MA",
      "ZIP": 1085,
      "ZIP4": "1735",
      "CONAME": "WESTFIELD CONCRETE SVC",
      "SCORE": 17
    },
    {
      "ADDR": "3 CENTURY WAY",
      "CITY": "WEST SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1089,
      "ZIP4": "4235",
      "CONAME": "CHIMERA COSTUME & SCENIC SVC",
      "SCORE": 75
    },
    {
      "ADDR": "1115 MEMORIAL AVE",
      "CITY": "WEST SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1089,
      "ZIP4": "3521",
      "CONAME": "ELECTROLUX",
      "SCORE": 92
    },
    {
      "ADDR": "492 PROSPECT AVE",
      "CITY": "WEST SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1089,
      "ZIP4": "4596",
      "CONAME": "FOUNTAIN PLATING CO",
      "SCORE": 61
    },
    {
      "ADDR": "31 PEARSON WAY # 2",
      "CITY": "WEST SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1089,
      "ZIP4": "4093",
      "CONAME": "GRAYBAR ELECTRIC CO",
      "SCORE": 85
    },
    {
      "ADDR": "225 PARK ST",
      "CITY": "WEST SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1089,
      "ZIP4": "3310",
      "CONAME": "LORAC LEASING CORP",
      "SCORE": 90
    },
    {
      "ADDR": "174 BRUSH HILL AVE",
      "CITY": "WEST SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1089,
      "ZIP4": "1298",
      "CONAME": "WESTERN MASSACHUSETTS ELEC CO",
      "SCORE": 0
    },
    {
      "ADDR": "[Null]",
      "CITY": "WEST WARREN",
      "STATE": "MA",
      "ZIP": 1092,
      "ZIP4": "[Null]",
      "CONAME": "CHIT-CHAT THE CLOWN",
      "SCORE": 23
    },
    {
      "ADDR": "2400 MAIN ST",
      "CITY": "WEST WARREN",
      "STATE": "MA",
      "ZIP": 1092,
      "ZIP4": "[Null]",
      "CONAME": "COMO'S INC",
      "SCORE": 43
    },
    {
      "ADDR": "144 SOUTH ST",
      "CITY": "WEST WARREN",
      "STATE": "MA",
      "ZIP": 1092,
      "ZIP4": "[Null]",
      "CONAME": "ST STANISLAUS SOCIETY INC",
      "SCORE": 18
    },
    {
      "ADDR": "16 MAIN ST",
      "CITY": "WILLIAMSBURG",
      "STATE": "MA",
      "ZIP": 1096,
      "ZIP4": "9428",
      "CONAME": "HELEN E JAMES SCHOOL",
      "SCORE": 38
    },
    {
      "ADDR": "111 MAIN",
      "CITY": "WORTHINGTON",
      "STATE": "MA",
      "ZIP": 1098,
      "ZIP4": "[Null]",
      "CONAME": "WORTHINGTON TOWN FIRE DEPT",
      "SCORE": 21
    },
    {
      "ADDR": "1592 MAIN ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1103,
      "ZIP4": "1271",
      "CONAME": "ASYLUM",
      "SCORE": 3
    },
    {
      "ADDR": "1134 MAIN ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1103,
      "ZIP4": "2108",
      "CONAME": "GLORY GIFT & VARIETY",
      "SCORE": 40
    },
    {
      "ADDR": "133 STATE ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1103,
      "ZIP4": "1905",
      "CONAME": "NEW YORK JEWELRY",
      "SCORE": 53
    },
    {
      "ADDR": "1402 MAIN ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1103,
      "ZIP4": "1671",
      "CONAME": "SNEAKER WORLD",
      "SCORE": 90
    },
    {
      "ADDR": "20 CARANDO DR",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1104,
      "ZIP4": "3203",
      "CONAME": "FARMLAND FOODS INC",
      "SCORE": 73
    },
    {
      "ADDR": "907 CAREW ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1104,
      "ZIP4": "1208",
      "CONAME": "FORTUNE COOKIE CHINESE RSTRNT",
      "SCORE": 93
    },
    {
      "ADDR": "85 UPLAND ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1104,
      "ZIP4": "2050",
      "CONAME": "GLOBAS LINK TRANSLATIONS",
      "SCORE": 79
    },
    {
      "ADDR": "262 LIBERTY ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1104,
      "ZIP4": "3706",
      "CONAME": "HBA CAST PRODUCTS CO",
      "SCORE": 96
    },
    {
      "ADDR": "2001 ROOSEVELT AVE",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1104,
      "ZIP4": "1657",
      "CONAME": "MEAD WESTVACO CORP",
      "SCORE": 98
    },
    {
      "ADDR": "6 PROGRESS AVE",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1104,
      "ZIP4": "3231",
      "CONAME": "SUPERIOR RUG CLEANING CO",
      "SCORE": 37
    },
    {
      "ADDR": "955 WORTHINGTON ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1105,
      "ZIP4": "1012",
      "CONAME": "M J'S PIZZA",
      "SCORE": 13
    },
    {
      "ADDR": "74 WALNUT ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1105,
      "ZIP4": "1524",
      "CONAME": "SPRINGFIELD HOME FOR THE ELDLY",
      "SCORE": 48
    },
    {
      "ADDR": "86 SALEM RD",
      "CITY": "LONGMEADOW",
      "STATE": "MA",
      "ZIP": 1106,
      "ZIP4": "1624",
      "CONAME": "PIONEER VALLEY RADIATION",
      "SCORE": 3
    },
    {
      "ADDR": "20 LAFAYETTE ST",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1109,
      "ZIP4": "3404",
      "CONAME": "TORRES INSURANCE",
      "SCORE": 74
    },
    {
      "ADDR": "1585 BOSTON RD",
      "CITY": "SPRINGFIELD",
      "STATE": "MA",
      "ZIP": 1129,
      "ZIP4": "1174",
      "CONAME": "SEARS ROEBUCK & CO",
      "SCORE": 22
    },
    {
      "ADDR": "12 PULASKI ST",
      "CITY": "INDIAN ORCHARD",
      "STATE": "MA",
      "ZIP": 1151,
      "ZIP4": "2215",
      "CONAME": "CHMURA'S BAKERY",
      "SCORE": 35
    },
    {
      "ADDR": "1295 WORCESTER ST",
      "CITY": "INDIAN ORCHARD",
      "STATE": "MA",
      "ZIP": 1151,
      "ZIP4": "1621",
      "CONAME": "EL RINCON MINI MARKET",
      "SCORE": 63
    },
    {
      "ADDR": "45 PARKER ST",
      "CITY": "INDIAN ORCHARD",
      "STATE": "MA",
      "ZIP": 1151,
      "ZIP4": "2221",
      "CONAME": "OLDIES FROM THE ESTATES",
      "SCORE": 100
    },
    {
      "ADDR": "24 NORTH ST",
      "CITY": "PITTSFIELD",
      "STATE": "MA",
      "ZIP": 1201,
      "ZIP4": "5106",
      "CONAME": "BERKSHIRE BANK",
      "SCORE": 65
    },
    {
      "ADDR": "146 FENN ST",
      "CITY": "PITTSFIELD",
      "STATE": "MA",
      "ZIP": 1201,
      "ZIP4": "5203",
      "CONAME": "ELEGANT STITCHES",
      "SCORE": 8
    },
    {
      "ADDR": "255 BERKSHIRE CMN # 255",
      "CITY": "PITTSFIELD",
      "STATE": "MA",
      "ZIP": 1201,
      "ZIP4": "6127",
      "CONAME": "GEORGE DE GREGORIO MASSIMIANO",
      "SCORE": 84
    },
    {
      "ADDR": "1020 SOUTH ST",
      "CITY": "PITTSFIELD",
      "STATE": "MA",
      "ZIP": 1201,
      "ZIP4": "8225",
      "CONAME": "GUIDO'S WHOLESALE DIV",
      "SCORE": 75
    },
    {
      "ADDR": "740 CRANE AVE",
      "CITY": "PITTSFIELD",
      "STATE": "MA",
      "ZIP": 1201,
      "ZIP4": "1708",
      "CONAME": "ROYAL PLATING & POLISHING CO",
      "SCORE": 46
    },
    {
      "ADDR": "1015 SOUTH ST",
      "CITY": "PITTSFIELD",
      "STATE": "MA",
      "ZIP": 1201,
      "ZIP4": "8211",
      "CONAME": "SOUTH MOUNTAIN GRILLE",
      "SCORE": 40
    },
    {
      "ADDR": "34 DEPOT ST",
      "CITY": "PITTSFIELD",
      "STATE": "MA",
      "ZIP": 1201,
      "ZIP4": "5130",
      "CONAME": "UNIVERSAL PAYROLL ASSOC INC",
      "SCORE": 16
    },
    {
      "ADDR": "311 NORTH ST",
      "CITY": "PITTSFIELD",
      "STATE": "MA",
      "ZIP": 1201,
      "ZIP4": "4609",
      "CONAME": "VAL-PAK",
      "SCORE": 63
    },
    {
      "ADDR": "200 HOWLAND AVE",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "1124",
      "CONAME": "BOUNTI-FARE RESTAURANT INC",
      "SCORE": 12
    },
    {
      "ADDR": "201 HOWLAND AVE",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "1103",
      "CONAME": "BROWN PACKAGING INC",
      "SCORE": 49
    },
    {
      "ADDR": "41 PARK ST # 9",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2033",
      "CONAME": "BRUCE D DUMOUCHEL PHD",
      "SCORE": 98
    },
    {
      "ADDR": "1 BERKSHIRE SQ # 110",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "1341",
      "CONAME": "CATARACT & LASER CTR ASSOC",
      "SCORE": 9
    },
    {
      "ADDR": "1 COMMERCIAL ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2169",
      "CONAME": "DONOVAN & O'CONNOR",
      "SCORE": 3
    },
    {
      "ADDR": "79 PARK ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2012",
      "CONAME": "EXPERIENCED ATTIRE",
      "SCORE": 53
    },
    {
      "ADDR": "44 SPRING ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "1846",
      "CONAME": "GREYLOCK ENVIRONMENTAL",
      "SCORE": 98
    },
    {
      "ADDR": "153 HOWLAND AVE",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "1199",
      "CONAME": "HOLLAND CO",
      "SCORE": 81
    },
    {
      "ADDR": "11 PINNACLE DR # A",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2126",
      "CONAME": "JIM GANCARZ",
      "SCORE": 41
    },
    {
      "ADDR": "224 COLUMBIA ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "1396",
      "CONAME": "MC ANDREWS-KING PONTIAC BUICK",
      "SCORE": 41
    },
    {
      "ADDR": "17 1/2 GROVE ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2115",
      "CONAME": "MR ROOTER",
      "SCORE": 48
    },
    {
      "ADDR": "32 N SUMMER ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "1574",
      "CONAME": "RASCAL'S LOUNGE",
      "SCORE": 93
    },
    {
      "ADDR": "25 PARK ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2062",
      "CONAME": "SAMSON'S PET PALACE",
      "SCORE": 14
    },
    {
      "ADDR": "2 CENTER ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2328",
      "CONAME": "SOUTH ADAMS SAVINGS BANK",
      "SCORE": 70
    },
    {
      "ADDR": "260 COLUMBIA ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "1399",
      "CONAME": "SPECIALTY MINERALS INC",
      "SCORE": 75
    },
    {
      "ADDR": "89 PARK ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2012",
      "CONAME": "STATE ARMORY",
      "SCORE": 60
    },
    {
      "ADDR": "22 CRANDALL ST",
      "CITY": "ADAMS",
      "STATE": "MA",
      "ZIP": 1220,
      "ZIP4": "2216",
      "CONAME": "WELLINGTON DESIGN",
      "SCORE": 17
    },
    {
      "ADDR": "829 ASHLEY FALLS RD",
      "CITY": "ASHLEY FALLS",
      "STATE": "MA",
      "ZIP": 1222,
      "ZIP4": "[Null]",
      "CONAME": "BANG'S WELDING & FABRICATION",
      "SCORE": 54
    },
    {
      "ADDR": "25 SCHOOL ST",
      "CITY": "ASHLEY FALLS",
      "STATE": "MA",
      "ZIP": 1222,
      "ZIP4": "[Null]",
      "CONAME": "HYDROSORBENT PRODUCTS",
      "SCORE": 2
    },
    {
      "ADDR": "201 BUNCE RD",
      "CITY": "ASHLEY FALLS",
      "STATE": "MA",
      "ZIP": 1222,
      "ZIP4": "9726",
      "CONAME": "MAC LEAY CONSTRUCTION CO",
      "SCORE": 6
    },
    {
      "ADDR": "1180 ASHLEY FALLS RD",
      "CITY": "ASHLEY FALLS",
      "STATE": "MA",
      "ZIP": 1222,
      "ZIP4": "9705",
      "CONAME": "US POST OFFICE",
      "SCORE": 81
    },
    {
      "ADDR": "41 S MAIN ST",
      "CITY": "CHESHIRE",
      "STATE": "MA",
      "ZIP": 1225,
      "ZIP4": "[Null]",
      "CONAME": "CHRISTINA'S RESTAURANT",
      "SCORE": 69
    },
    {
      "ADDR": "725 N STATE RD",
      "CITY": "CHESHIRE",
      "STATE": "MA",
      "ZIP": 1225,
      "ZIP4": "9668",
      "CONAME": "HARBOUR HOUSE BED/BREAKFAST",
      "SCORE": 2
    },
    {
      "ADDR": "265 MAIN ST",
      "CITY": "DALTON",
      "STATE": "MA",
      "ZIP": 1226,
      "ZIP4": "1614",
      "CONAME": "CRANEVILLE PLACE OF DALTON",
      "SCORE": 92
    },
    {
      "ADDR": "83 CURTIS AVE",
      "CITY": "DALTON",
      "STATE": "MA",
      "ZIP": 1226,
      "ZIP4": "1508",
      "CONAME": "DANFORTH HEALTHCARE INC",
      "SCORE": 5
    },
    {
      "ADDR": "78 E HOUSATONIC ST",
      "CITY": "DALTON",
      "STATE": "MA",
      "ZIP": 1226,
      "ZIP4": "1927",
      "CONAME": "PIERCE MACHINE CO",
      "SCORE": 51
    },
    {
      "ADDR": "208 NORFOLK RD",
      "CITY": "NEW MARLBOROUGH",
      "STATE": "MA",
      "ZIP": 1230,
      "ZIP4": "[Null]",
      "CONAME": "BUGGY WHIP FACTORY",
      "SCORE": 62
    },
    {
      "ADDR": "ROUTE 23",
      "CITY": "GREAT BARRINGTON",
      "STATE": "MA",
      "ZIP": 1230,
      "ZIP4": "[Null]",
      "CONAME": "BUTTERNUT SKI AREA",
      "SCORE": 25
    },
    {
      "ADDR": "109 STOCKBRIDGE RD",
      "CITY": "GREAT BARRINGTON",
      "STATE": "MA",
      "ZIP": 1230,
      "ZIP4": "1227",
      "CONAME": "COVE BOWLING LANES",
      "SCORE": 86
    },
    {
      "ADDR": "780 MAIN ST",
      "CITY": "GREAT BARRINGTON",
      "STATE": "MA",
      "ZIP": 1230,
      "ZIP4": "2148",
      "CONAME": "EAST MOUNTAIN MEDICAL",
      "SCORE": 58
    },
    {
      "ADDR": "2 BUTTON BALL LN",
      "CITY": "GREAT BARRINGTON",
      "STATE": "MA",
      "ZIP": 1230,
      "ZIP4": "[Null]",
      "CONAME": "EGREMONT FREE LIBRARY",
      "SCORE": 24
    },
    {
      "ADDR": "29 LEWIS AVE",
      "CITY": "GREAT BARRINGTON",
      "STATE": "MA",
      "ZIP": 1230,
      "ZIP4": "1796",
      "CONAME": "FAIRVIEW HOSPITAL",
      "SCORE": 61
    },
    {
      "ADDR": "ROUTE 57",
      "CITY": "GREAT BARRINGTON",
      "STATE": "MA",
      "ZIP": 1230,
      "ZIP4": "[Null]",
      "CONAME": "OLD INN ON THE GREEN",
      "SCORE": 48
    },
    {
      "ADDR": "84 ALFORD RD",
      "CITY": "GREAT BARRINGTON",
      "STATE": "MA",
      "ZIP": 1230,
      "ZIP4": "2499",
      "CONAME": "SIMON'S ROCK COLLEGE",
      "SCORE": 74
    },
    {
      "ADDR": "RICHMOND RD",
      "CITY": "HANCOCK",
      "STATE": "MA",
      "ZIP": 1237,
      "ZIP4": "[Null]",
      "CONAME": "HENRY V ROBOUIN INC",
      "SCORE": 43
    },
    {
      "ADDR": "[Null]",
      "CITY": "HANCOCK",
      "STATE": "MA",
      "ZIP": 1237,
      "ZIP4": "[Null]",
      "CONAME": "IRON KETTLE BOOKS",
      "SCORE": 57
    },
    {
      "ADDR": "[Null]",
      "CITY": "HANCOCK",
      "STATE": "MA",
      "ZIP": 1237,
      "ZIP4": "[Null]",
      "CONAME": "RCI RESORT MANAGEMENT",
      "SCORE": 13
    },
    {
      "ADDR": "17 MAIN ST",
      "CITY": "LEE",
      "STATE": "MA",
      "ZIP": 1238,
      "ZIP4": "1679",
      "CONAME": "G B ADVERTISING CONSULTANTS",
      "SCORE": 80
    },
    {
      "ADDR": "620 LAUREL ST",
      "CITY": "LEE",
      "STATE": "MA",
      "ZIP": 1238,
      "ZIP4": "9181",
      "CONAME": "LAUREL LAKE CTR FOR HEALTH",
      "SCORE": 33
    },
    {
      "ADDR": "33 MAIN ST",
      "CITY": "LEE",
      "STATE": "MA",
      "ZIP": 1238,
      "ZIP4": "1611",
      "CONAME": "MORGAN HOUSE",
      "SCORE": 3
    },
    {
      "ADDR": "7 MAIN ST",
      "CITY": "LENOX",
      "STATE": "MA",
      "ZIP": 1240,
      "ZIP4": "2312",
      "CONAME": "LENOX NATIONAL BANK",
      "SCORE": 80
    },
    {
      "ADDR": "1 MILL RIVER-GT BARRINGTON RD",
      "CITY": "MILL RIVER",
      "STATE": "MA",
      "ZIP": 1244,
      "ZIP4": "[Null]",
      "CONAME": "NEW MARLBOROUGH PUBLIC LIBRARY",
      "SCORE": 41
    },
    {
      "ADDR": "25 LEONARD ST",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "2221",
      "CONAME": "BERKSHIRE COMPUTER REPAIR",
      "SCORE": 39
    },
    {
      "ADDR": "1466 CURRAN HWY",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3964",
      "CONAME": "EXCELSIOR PROCESS & ENGRAVING",
      "SCORE": 47
    },
    {
      "ADDR": "510 STATE RD",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3056",
      "CONAME": "FAMILY BILLIARDS",
      "SCORE": 55
    },
    {
      "ADDR": "56 N COUNTY RD",
      "CITY": "FLORIDA",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "9614",
      "CONAME": "FLORIDA FREE LIBRARY",
      "SCORE": 49
    },
    {
      "ADDR": "6 ROBERTS DR",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3235",
      "CONAME": "GEM ENVIRONMENTAL INC",
      "SCORE": 32
    },
    {
      "ADDR": "1028 STATE RD",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3090",
      "CONAME": "GREYLOCK ANIMAL HOSPITAL INC",
      "SCORE": 5
    },
    {
      "ADDR": "1669 CURRAN HWY",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3906",
      "CONAME": "GRINGO'S",
      "SCORE": 4
    },
    {
      "ADDR": "51 W MAIN ST",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3399",
      "CONAME": "K-M MOTOR SALES INC",
      "SCORE": 40
    },
    {
      "ADDR": "22 AMERICAN LEGION DR",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3913",
      "CONAME": "MOVIE GALLERY",
      "SCORE": 17
    },
    {
      "ADDR": "41 ROBERTS DR",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3234",
      "CONAME": "MT GREYLOCK BOWL",
      "SCORE": 87
    },
    {
      "ADDR": "10 MAIN ST # 206",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3419",
      "CONAME": "NORTH ADAMS BUILDING DEPT",
      "SCORE": 78
    },
    {
      "ADDR": "NORTH ADAMS CITY HALL",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "[Null]",
      "CONAME": "NORTH ADAMS HANDICAPPED COMM",
      "SCORE": 90
    },
    {
      "ADDR": "71 HOSPITAL AVE",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "2584",
      "CONAME": "NORTH ADAMS REGIONAL HOSPITAL",
      "SCORE": 66
    },
    {
      "ADDR": "245 ASHLAND ST",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "4512",
      "CONAME": "NORTH ADAMS WATER DEPT",
      "SCORE": 2
    },
    {
      "ADDR": "244 NOTCH RD",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3617",
      "CONAME": "STEPHEN J SENAY CARPENTRY",
      "SCORE": 51
    },
    {
      "ADDR": "151 ASHLAND ST",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "4522",
      "CONAME": "TANZMAN MASELLI & ASSOC",
      "SCORE": 27
    },
    {
      "ADDR": "37 MAIN ST",
      "CITY": "NORTH ADAMS",
      "STATE": "MA",
      "ZIP": 1247,
      "ZIP4": "3426",
      "CONAME": "US SOCIAL SECURITY ADM",
      "SCORE": 67
    },
    {
      "ADDR": "231 MAIN ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9545",
      "CONAME": "AVC VIDEO SHOWCASE",
      "SCORE": 59
    },
    {
      "ADDR": "103 N MAIN ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "[Null]",
      "CONAME": "BERKSHIRE BANK",
      "SCORE": 5
    },
    {
      "ADDR": "173 S MAIN ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9670",
      "CONAME": "CENTURYHURST ANTIQUES",
      "SCORE": 97
    },
    {
      "ADDR": "378 S MAIN ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9676",
      "CONAME": "COLLINGWOOD TRANSPORT",
      "SCORE": 19
    },
    {
      "ADDR": "296 S MAIN ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9632",
      "CONAME": "CUPBOARDS & ROSES",
      "SCORE": 73
    },
    {
      "ADDR": "ROUTE 7 MAIN ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "[Null]",
      "CONAME": "CYPRESS APPAREL GROUP",
      "SCORE": 60
    },
    {
      "ADDR": "316 MILLER AVE",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9776",
      "CONAME": "DEBON-HAIR DESIGN",
      "SCORE": 25
    },
    {
      "ADDR": "100 LIME KILN RD",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9512",
      "CONAME": "GEORGE MIELKE USED AUTO PARTS",
      "SCORE": 3
    },
    {
      "ADDR": "535 HOME RD",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "[Null]",
      "CONAME": "HUTCHISON WOODWORKING",
      "SCORE": 68
    },
    {
      "ADDR": "199 SILVER ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9626",
      "CONAME": "JACK BLUME",
      "SCORE": 97
    },
    {
      "ADDR": "96 SALISBURY RD",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9705",
      "CONAME": "MARTIN EXCAVATING",
      "SCORE": 4
    },
    {
      "ADDR": "779 ROUTE 7",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "[Null]",
      "CONAME": "MAY'S EVERYTHING SHOP",
      "SCORE": 39
    },
    {
      "ADDR": "750 BERKSHIRE SCHOOL RD",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "[Null]",
      "CONAME": "RACE MOUNTAIN TREE SVC INC",
      "SCORE": 12
    },
    {
      "ADDR": "400 S UNDERMOUNTAIN RD",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9640",
      "CONAME": "RAMBLEWOOD INN",
      "SCORE": 93
    },
    {
      "ADDR": "159 S MAIN ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9670",
      "CONAME": "SHEFFIELD HISTORICAL SOCIETY",
      "SCORE": 43
    },
    {
      "ADDR": "119 SALISBURY RD",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9706",
      "CONAME": "SHEFFIELD PLASTICS INC",
      "SCORE": 83
    },
    {
      "ADDR": "21 DEPOT SQ",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "[Null]",
      "CONAME": "SHEFFIELD SELECTMEN",
      "SCORE": 68
    },
    {
      "ADDR": "HEWINS ST",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "[Null]",
      "CONAME": "SHEFFIELD SOD FARM",
      "SCORE": 60
    },
    {
      "ADDR": "1080 S UNDERMOUNTAIN RD",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9642",
      "CONAME": "SHEFFIELD WATER CO",
      "SCORE": 54
    },
    {
      "ADDR": "234 BEARS DEN RD",
      "CITY": "SHEFFIELD",
      "STATE": "MA",
      "ZIP": 1257,
      "ZIP4": "9675",
      "CONAME": "TOMICH LANDSCAPE DESIGN",
      "SCORE": 50
    },
    {
      "ADDR": "25 MAIN ST",
      "CITY": "STOCKBRIDGE",
      "STATE": "MA",
      "ZIP": 1262,
      "ZIP4": "[Null]",
      "CONAME": "AUSTEN FOX RIGGS LIBRARY",
      "SCORE": 34
    },
    {
      "ADDR": "25 MAIN ST",
      "CITY": "STOCKBRIDGE",
      "STATE": "MA",
      "ZIP": 1262,
      "ZIP4": "[Null]",
      "CONAME": "AUSTEN RIGGS CTR",
      "SCORE": 0
    },
    {
      "ADDR": "2 PROSPECT HL",
      "CITY": "STOCKBRIDGE",
      "STATE": "MA",
      "ZIP": 1263,
      "ZIP4": "1",
      "CONAME": "MARIAN HELPERS CTR",
      "SCORE": 22
    },
    {
      "ADDR": "5 W CENTER RD",
      "CITY": "WEST STOCKBRIDGE",
      "STATE": "MA",
      "ZIP": 1266,
      "ZIP4": "9382",
      "CONAME": "ARTIFACTS",
      "SCORE": 47
    },
    {
      "ADDR": "1525 HANCOCK RD",
      "CITY": "WILLIAMSTOWN",
      "STATE": "MA",
      "ZIP": 1267,
      "ZIP4": "3029",
      "CONAME": "BRYAN S GURNEY GEN CONTRACTOR",
      "SCORE": 82
    },
    {
      "ADDR": "26 HOPKINS HALL DR",
      "CITY": "WILLIAMSTOWN",
      "STATE": "MA",
      "ZIP": 1267,
      "ZIP4": "2553",
      "CONAME": "CHAPIN LIBRARY",
      "SCORE": 40
    },
    {
      "ADDR": "1090 MAIN ST",
      "CITY": "WILLIAMSTOWN",
      "STATE": "MA",
      "ZIP": 1267,
      "ZIP4": "2620",
      "CONAME": "CLASSIC GIFTS CORP",
      "SCORE": 92
    },
    {
      "ADDR": "169 BLAIR RD",
      "CITY": "WILLIAMSTOWN",
      "STATE": "MA",
      "ZIP": 1267,
      "ZIP4": "3103",
      "CONAME": "JIM GALUSHA CONTRACTING",
      "SCORE": 54
    },
    {
      "ADDR": "1611 COLD SPRING RD",
      "CITY": "WILLIAMSTOWN",
      "STATE": "MA",
      "ZIP": 1267,
      "ZIP4": "2782",
      "CONAME": "SWEETWOOD CONTINUING CARE COMM",
      "SCORE": 80
    },
    {
      "ADDR": "880 MAIN ST",
      "CITY": "WILLIAMSTOWN",
      "STATE": "MA",
      "ZIP": 1267,
      "ZIP4": "2600",
      "CONAME": "WILLIAMS COLLEGE",
      "SCORE": 32
    },
    {
      "ADDR": "197 ADAMS RD",
      "CITY": "WILLIAMSTOWN",
      "STATE": "MA",
      "ZIP": 1267,
      "ZIP4": "2930",
      "CONAME": "WILLIAMSTOWN MEDICAL ASSOC",
      "SCORE": 82
    },
    {
      "ADDR": "400 CHAPMAN ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "1736",
      "CONAME": "A R SANDRI INC",
      "SCORE": 88
    },
    {
      "ADDR": "117 MAIN ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "3209",
      "CONAME": "AINSWORTH ASSOCIATES INC",
      "SCORE": 28
    },
    {
      "ADDR": "30 FEDERAL ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "2547",
      "CONAME": "BILL'S RESTAURANT INC",
      "SCORE": 72
    },
    {
      "ADDR": "39 BEACON ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "2004",
      "CONAME": "BROWN MOTORS INC",
      "SCORE": 53
    },
    {
      "ADDR": "54 MAIN ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "3256",
      "CONAME": "DILLON CHEVROLET",
      "SCORE": 75
    },
    {
      "ADDR": "382 DEERFIELD ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "3499",
      "CONAME": "GREENFIELD & MONTAGUE TRANS",
      "SCORE": 66
    },
    {
      "ADDR": "63 FEDERAL ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "2543",
      "CONAME": "GREENFIELD COOPERATIVE BANK",
      "SCORE": 65
    },
    {
      "ADDR": "400 MAIN ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "3323",
      "CONAME": "GREENFIELD SAVINGS BANK",
      "SCORE": 31
    },
    {
      "ADDR": "91 MAIN ST # 5",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "3248",
      "CONAME": "HERM'S",
      "SCORE": 75
    },
    {
      "ADDR": "1173 BERNARDSTON RD",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "1150",
      "CONAME": "LORENZ HONDA",
      "SCORE": 19
    },
    {
      "ADDR": "74 MAIN ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "3238",
      "CONAME": "LOUISE G AMYOT",
      "SCORE": 41
    },
    {
      "ADDR": "4 GERRETT ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "2746",
      "CONAME": "MADISON CIRCLE PROGRAM",
      "SCORE": 60
    },
    {
      "ADDR": "45 BANK ROW ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "3511",
      "CONAME": "NAILS BY VICKY",
      "SCORE": 31
    },
    {
      "ADDR": "359 HIGH ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "2689",
      "CONAME": "POET'S SEAT NURSING HOME",
      "SCORE": 100
    },
    {
      "ADDR": "111 SUMMER ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "1481",
      "CONAME": "UNITED ARC",
      "SCORE": 38
    },
    {
      "ADDR": "192 MAIN ST",
      "CITY": "GREENFIELD",
      "STATE": "MA",
      "ZIP": 1301,
      "ZIP4": "3210",
      "CONAME": "YOUR COLLECTABLE TREASURES",
      "SCORE": 92
    },
    {
      "ADDR": "463 MAIN ST",
      "CITY": "ASHFIELD",
      "STATE": "MA",
      "ZIP": 1330,
      "ZIP4": "[Null]",
      "CONAME": "ASHFIELD NEWS",
      "SCORE": 53
    },
    {
      "ADDR": "[Null]",
      "CITY": "ASHFIELD",
      "STATE": "MA",
      "ZIP": 1330,
      "ZIP4": "[Null]",
      "CONAME": "FIRE DEPT",
      "SCORE": 16
    },
    {
      "ADDR": "69 MAIN ST",
      "CITY": "ASHFIELD",
      "STATE": "MA",
      "ZIP": 1330,
      "ZIP4": "9773",
      "CONAME": "HIGHWAY DEPT",
      "SCORE": 76
    },
    {
      "ADDR": "412 MAIN ST",
      "CITY": "ASHFIELD",
      "STATE": "MA",
      "ZIP": 1330,
      "ZIP4": "[Null]",
      "CONAME": "SELECTMAN'S OFFICE",
      "SCORE": 79
    },
    {
      "ADDR": "19 SOUTH ST",
      "CITY": "BERNARDSTON",
      "STATE": "MA",
      "ZIP": 1337,
      "ZIP4": "9449",
      "CONAME": "FOUR LEAF CLOVER",
      "SCORE": 74
    },
    {
      "ADDR": "157 MAIN ST",
      "CITY": "CHARLEMONT",
      "STATE": "MA",
      "ZIP": 1339,
      "ZIP4": "9703",
      "CONAME": "TYLER MEMORIAL LIBRARY",
      "SCORE": 69
    },
    {
      "ADDR": "68 HAMILTON DR",
      "CITY": "CONWAY",
      "STATE": "MA",
      "ZIP": 1341,
      "ZIP4": "9605",
      "CONAME": "POWERS AIR",
      "SCORE": 67
    },
    {
      "ADDR": "13 COUNTY RD",
      "CITY": "DEERFIELD",
      "STATE": "MA",
      "ZIP": 1342,
      "ZIP4": "9702",
      "CONAME": "EAGLEBROOK SCHOOL HOCKEY RINK",
      "SCORE": 6
    },
    {
      "ADDR": "84B OLD MAIN ST",
      "CITY": "DEERFIELD",
      "STATE": "MA",
      "ZIP": 1342,
      "ZIP4": "[Null]",
      "CONAME": "HISTORIC DEERFIELD INC",
      "SCORE": 28
    },
    {
      "ADDR": "E MAIN",
      "CITY": "ERVING",
      "STATE": "MA",
      "ZIP": 1344,
      "ZIP4": "[Null]",
      "CONAME": "ERVING TOWN OFFICE",
      "SCORE": 24
    },
    {
      "ADDR": "E MAIN",
      "CITY": "ERVING",
      "STATE": "MA",
      "ZIP": 1344,
      "ZIP4": "[Null]",
      "CONAME": "ERVING WASTE WATER TREATMENT",
      "SCORE": 72
    },
    {
      "ADDR": "3 BRIDGE",
      "CITY": "ERVING",
      "STATE": "MA",
      "ZIP": 1344,
      "ZIP4": "[Null]",
      "CONAME": "FARLEY WASTE WATER TREATMENT",
      "SCORE": 84
    },
    {
      "ADDR": "1 E MAIN ST",
      "CITY": "HEATH",
      "STATE": "MA",
      "ZIP": 1346,
      "ZIP4": "9706",
      "CONAME": "HEATH PUBLIC LIBRARY",
      "SCORE": 23
    },
    {
      "ADDR": "32 FEDERAL ST",
      "CITY": "MILLERS FALLS",
      "STATE": "MA",
      "ZIP": 1349,
      "ZIP4": "1223",
      "CONAME": "RT 63 ROADHOUSE",
      "SCORE": 87
    },
    {
      "ADDR": "68 SUNDERLAND RD",
      "CITY": "MONTAGUE",
      "STATE": "MA",
      "ZIP": 1351,
      "ZIP4": "9565",
      "CONAME": "WINDY HOLLOW VETERINARY CLINIC",
      "SCORE": 31
    },
    {
      "ADDR": "236 NEILSON RD",
      "CITY": "NEW SALEM",
      "STATE": "MA",
      "ZIP": 1355,
      "ZIP4": "9505",
      "CONAME": "AMY FAGIN",
      "SCORE": 90
    },
    {
      "ADDR": "22 WENDELL RD",
      "CITY": "NEW SALEM",
      "STATE": "MA",
      "ZIP": 1355,
      "ZIP4": "9500",
      "CONAME": "HIGHWAY DEPT GARAGE",
      "SCORE": 88
    },
    {
      "ADDR": "3 LOVERS LN",
      "CITY": "NEW SALEM",
      "STATE": "MA",
      "ZIP": 1355,
      "ZIP4": "9718",
      "CONAME": "MILLINGTON TOOL SVC",
      "SCORE": 5
    },
    {
      "ADDR": "15 S MAIN ST",
      "CITY": "NEW SALEM",
      "STATE": "MA",
      "ZIP": 1355,
      "ZIP4": "9713",
      "CONAME": "TAX COLLECTOR",
      "SCORE": 79
    },
    {
      "ADDR": "15 S MAIN ST",
      "CITY": "NEW SALEM",
      "STATE": "MA",
      "ZIP": 1355,
      "ZIP4": "9713",
      "CONAME": "TOWN CLERK",
      "SCORE": 95
    },
    {
      "ADDR": "216 MT HERMON STATION RD",
      "CITY": "NORTHFIELD",
      "STATE": "MA",
      "ZIP": 1360,
      "ZIP4": "9506",
      "CONAME": "LANE CONSTRUCTION CORP",
      "SCORE": 15
    },
    {
      "ADDR": "164 DANIEL SHAYS HWY",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "2020",
      "CONAME": "202 SUNOCO",
      "SCORE": 80
    },
    {
      "ADDR": "25 CENTER DR",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9645",
      "CONAME": "A & O TRANSPORTATION",
      "SCORE": 79
    },
    {
      "ADDR": "301 S MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1736",
      "CONAME": "A STITCH IN TIME DESIGNS",
      "SCORE": 43
    },
    {
      "ADDR": "54 E MYRTLE ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1741",
      "CONAME": "AFFORDABLE CATERING",
      "SCORE": 1
    },
    {
      "ADDR": "112 E MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1217",
      "CONAME": "ALLIED OVERHEAD DOOR CO",
      "SCORE": 67
    },
    {
      "ADDR": "360 E MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1233",
      "CONAME": "ANNE'S DAIRY DRIVE IN",
      "SCORE": 99
    },
    {
      "ADDR": "30 E MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1500",
      "CONAME": "BANKNORTH",
      "SCORE": 7
    },
    {
      "ADDR": "450 W RIVER ST # 4A",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1440",
      "CONAME": "DANIEL C BERLIN",
      "SCORE": 33
    },
    {
      "ADDR": "1 COURT SQ # 2",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1234",
      "CONAME": "DISTRICT ATTORNEY",
      "SCORE": 58
    },
    {
      "ADDR": "119 NEW ATHOL RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9603",
      "CONAME": "DONALD Y STILES OD",
      "SCORE": 76
    },
    {
      "ADDR": "620 E MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9605",
      "CONAME": "E Z ACCESS SELF STORAGE",
      "SCORE": 94
    },
    {
      "ADDR": "210 WENDELL DEPOT RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9717",
      "CONAME": "ENCHANTED FOREST",
      "SCORE": 33
    },
    {
      "ADDR": "34 R W MOORE AVE",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "6414",
      "CONAME": "EXPRESS TEST SVC",
      "SCORE": 60
    },
    {
      "ADDR": "158 S MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1731",
      "CONAME": "INTERIORS BY JANIS STONE",
      "SCORE": 42
    },
    {
      "ADDR": "590 E RIVER ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1812",
      "CONAME": "J V AIRCRAFT",
      "SCORE": 7
    },
    {
      "ADDR": "119 NEW ATHOL RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9603",
      "CONAME": "LEONARD OPTICIAN INC",
      "SCORE": 86
    },
    {
      "ADDR": "30 NEW ATHOL RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9602",
      "CONAME": "LITTLEWOOD PEST CONTROL",
      "SCORE": 86
    },
    {
      "ADDR": "184 GOV DUKAKIS DR",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "2033",
      "CONAME": "MBW INC",
      "SCORE": 55
    },
    {
      "ADDR": "31 TULLY RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9678",
      "CONAME": "MINUTEMAN COOLING & HEATING",
      "SCORE": 66
    },
    {
      "ADDR": "34 N MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1034",
      "CONAME": "NELCWI ORANGE ATHOL",
      "SCORE": 26
    },
    {
      "ADDR": "16 N PROSPECT ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1112",
      "CONAME": "NEW ENGLAND EXOTIC BIRD SNCTRY",
      "SCORE": 37
    },
    {
      "ADDR": "119 NEW ATHOL RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9603",
      "CONAME": "NORTH QUABBIN COMPUTER",
      "SCORE": 36
    },
    {
      "ADDR": "15 W RIVER ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1408",
      "CONAME": "NORTH QUABBIN FAMILY PHYSICIAN",
      "SCORE": 84
    },
    {
      "ADDR": "445 W RIVER ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1433",
      "CONAME": "NORTHERN LIGHTS LOG HOMES",
      "SCORE": 46
    },
    {
      "ADDR": "9 GROVE ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1050",
      "CONAME": "ORANGE DENTAL GROUP",
      "SCORE": 42
    },
    {
      "ADDR": "181 E MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1236",
      "CONAME": "ORANGE LAUNDROMAT",
      "SCORE": 2
    },
    {
      "ADDR": "3 DEXTER ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1007",
      "CONAME": "ORANGE PRE-SCHOOL",
      "SCORE": 23
    },
    {
      "ADDR": "104 S MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1729",
      "CONAME": "ORANGE UNITED METHODIST CHURCH",
      "SCORE": 28
    },
    {
      "ADDR": "140 ATHOL RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9635",
      "CONAME": "OVER THE ANVIL STABLE",
      "SCORE": 74
    },
    {
      "ADDR": "313 S MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1745",
      "CONAME": "PRESSMASTERS",
      "SCORE": 27
    },
    {
      "ADDR": "1 COURT SQ",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1232",
      "CONAME": "PROBATION OFFICE",
      "SCORE": 4
    },
    {
      "ADDR": "25 BROOKSIDE RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9615",
      "CONAME": "RANDY'S TRUCK & EQUIPMENT RPR",
      "SCORE": 77
    },
    {
      "ADDR": "34 N MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1034",
      "CONAME": "REACH PROGRAMS",
      "SCORE": 100
    },
    {
      "ADDR": "28 FOUNTAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1616",
      "CONAME": "RICHARD K PIERSON GENL CONTR",
      "SCORE": 47
    },
    {
      "ADDR": "28 E RIVER ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1802",
      "CONAME": "RUSTY FELLOWS BLACKSMITH",
      "SCORE": 2
    },
    {
      "ADDR": "JONES ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "[Null]",
      "CONAME": "TOWN LANDFILL & RECYCLING",
      "SCORE": 75
    },
    {
      "ADDR": "119 NEW ATHOL RD",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9603",
      "CONAME": "TRYSB NET",
      "SCORE": 5
    },
    {
      "ADDR": "65 WHITNEY ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "1319",
      "CONAME": "UNIGLOBE VALLEY TRAVEL",
      "SCORE": 5
    },
    {
      "ADDR": "610 S MAIN ST",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "9501",
      "CONAME": "WESTERN MA HOME IMPROVEMENT",
      "SCORE": 25
    },
    {
      "ADDR": "[Null]",
      "CITY": "ORANGE",
      "STATE": "MA",
      "ZIP": 1364,
      "ZIP4": "[Null]",
      "CONAME": "WHITCOMB'S COMMERCIAL CLEANING",
      "SCORE": 79
    },
    {
      "ADDR": "5 EAST ST",
      "CITY": "PETERSHAM",
      "STATE": "MA",
      "ZIP": 1366,
      "ZIP4": "9739",
      "CONAME": "PETERSHAM BREAD CO",
      "SCORE": 61
    },
    {
      "ADDR": "904 MOHAWK TRL",
      "CITY": "SHELBURNE FALLS",
      "STATE": "MA",
      "ZIP": 1370,
      "ZIP4": "9710",
      "CONAME": "ANCHORAGE NURSING HOME",
      "SCORE": 75
    },
    {
      "ADDR": "47 BRIDGE ST",
      "CITY": "SHELBURNE FALLS",
      "STATE": "MA",
      "ZIP": 1370,
      "ZIP4": "1102",
      "CONAME": "SUBWAY SANDWICHES & SALADS",
      "SCORE": 71
    },
    {
      "ADDR": "42 S MAPLE ST",
      "CITY": "SHELBURNE FALLS",
      "STATE": "MA",
      "ZIP": 1370,
      "ZIP4": "1220",
      "CONAME": "SWEETHEART RESTAURANT",
      "SCORE": 44
    },
    {
      "ADDR": "4 INDUSTRIAL DR E",
      "CITY": "SOUTH DEERFIELD",
      "STATE": "MA",
      "ZIP": 1373,
      "ZIP4": "7301",
      "CONAME": "MANSIR HOLDEN PRINTING CO",
      "SCORE": 31
    },
    {
      "ADDR": "16 YANKEE CANDLE WAY",
      "CITY": "SOUTH DEERFIELD",
      "STATE": "MA",
      "ZIP": 1373,
      "ZIP4": "7325",
      "CONAME": "YANKEE CANDLE CO INC",
      "SCORE": 74
    },
    {
      "ADDR": "338 MONTAGUE CITY RD",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "1830",
      "CONAME": "COMMUNITY HEALTH CTR",
      "SCORE": 46
    },
    {
      "ADDR": "187 AVENUE A",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "1298",
      "CONAME": "COUTURE BROTHERS INC",
      "SCORE": 57
    },
    {
      "ADDR": "340 MONTAGUE CITY RD",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "2533",
      "CONAME": "FARREN CARE CTR INC",
      "SCORE": 11
    },
    {
      "ADDR": "330 MONTAGUE CITY RD # 1",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "2529",
      "CONAME": "FRANKLIN COUNTY HOME CARE CORP",
      "SCORE": 36
    },
    {
      "ADDR": "241 MILLERS FALLS RD",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "1604",
      "CONAME": "HALLMARK INSTITUTE-PHOTOGRAPHY",
      "SCORE": 41
    },
    {
      "ADDR": "251 MILLERS FALLS RD",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "1604",
      "CONAME": "JONATHAN EDWARDS ACADEMY",
      "SCORE": 94
    },
    {
      "ADDR": "124 TURNPIKE RD",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "2699",
      "CONAME": "JUDD WIRE INC",
      "SCORE": 56
    },
    {
      "ADDR": "20 LYONS HILL RD",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "9606",
      "CONAME": "PATRICK BENNETT FARM",
      "SCORE": 75
    },
    {
      "ADDR": "7 AVENUE A",
      "CITY": "TURNERS FALLS",
      "STATE": "MA",
      "ZIP": 1376,
      "ZIP4": "1104",
      "CONAME": "SHADY GLEN",
      "SCORE": 79
    },
    {
      "ADDR": "122 HASTINGS POND RD",
      "CITY": "WARWICK",
      "STATE": "MA",
      "ZIP": 1378,
      "ZIP4": "9309",
      "CONAME": "CADWELL JOINERY",
      "SCORE": 71
    },
    {
      "ADDR": "WINCHESTER RD",
      "CITY": "WARWICK",
      "STATE": "MA",
      "ZIP": 1378,
      "ZIP4": "[Null]",
      "CONAME": "WARWICK HIGHWAY DEPT",
      "SCORE": 60
    },
    {
      "ADDR": "600 N CENTRAL",
      "CITY": "WENDELL",
      "STATE": "MA",
      "ZIP": 1379,
      "ZIP4": "[Null]",
      "CONAME": "ADVANCED SIDING",
      "SCORE": 33
    },
    {
      "ADDR": "51 LOCKE HILL RD",
      "CITY": "WENDELL",
      "STATE": "MA",
      "ZIP": 1379,
      "ZIP4": "9728",
      "CONAME": "CONGREGATIONAL UNITED CHURCH",
      "SCORE": 13
    },
    {
      "ADDR": "[Null]",
      "CITY": "WENDELL",
      "STATE": "MA",
      "ZIP": 1379,
      "ZIP4": "[Null]",
      "CONAME": "PAUL COSTELLO",
      "SCORE": 69
    },
    {
      "ADDR": "49 SPRING ST",
      "CITY": "WENDELL",
      "STATE": "MA",
      "ZIP": 1379,
      "ZIP4": "[Null]",
      "CONAME": "RAMSEY'S AUTO SALES",
      "SCORE": 57
    },
    {
      "ADDR": "MAIN ST",
      "CITY": "WENDELL",
      "STATE": "MA",
      "ZIP": 1379,
      "ZIP4": "[Null]",
      "CONAME": "WENDELL TOWN OFFICE",
      "SCORE": 0
    },
    {
      "ADDR": "107 WENDELL DEPOT RD",
      "CITY": "WENDELL DEPOT",
      "STATE": "MA",
      "ZIP": 1380,
      "ZIP4": "9706",
      "CONAME": "ARSENAULT TOWING SVC",
      "SCORE": 100
    },
    {
      "ADDR": "33 ELECTRIC AVE # 103",
      "CITY": "FITCHBURG",
      "STATE": "MA",
      "ZIP": 1420,
      "ZIP4": "7954",
      "CONAME": "BRIAN E RUSAK PERIODONTICS",
      "SCORE": 24
    },
    {
      "ADDR": "264 ELM ST",
      "CITY": "FITCHBURG",
      "STATE": "MA",
      "ZIP": 1420,
      "ZIP4": "7580",
      "CONAME": "ELM STREET CONGREGATIONAL",
      "SCORE": 13
    },
    {
      "ADDR": "83 WINTER",
      "CITY": "FITCHBURG",
      "STATE": "MA",
      "ZIP": 1420,
      "ZIP4": "[Null]",
      "CONAME": "FIRST CALL MEDICAL INC",
      "SCORE": 2
    },
    {
      "ADDR": "244 WALTON ST",
      "CITY": "FITCHBURG",
      "STATE": "MA",
      "ZIP": 1420,
      "ZIP4": "5368",
      "CONAME": "FURNITURE-HOSPITAL",
      "SCORE": 78
    },
    {
      "ADDR": "571 JOHN FITCH HWY",
      "CITY": "FITCHBURG",
      "STATE": "MA",
      "ZIP": 1420,
      "ZIP4": "8404",
      "CONAME": "LUCKY'S PIZZERIA",
      "SCORE": 78
    },
    {
      "ADDR": "499 ELECTRIC AVE",
      "CITY": "FITCHBURG",
      "STATE": "MA",
      "ZIP": 1420,
      "ZIP4": "5316",
      "CONAME": "PAK MAIL CTR",
      "SCORE": 0
    },
    {
      "ADDR": "419 ASHBY WEST RD",
      "CITY": "FITCHBURG",
      "STATE": "MA",
      "ZIP": 1420,
      "ZIP4": "6617",
      "CONAME": "SOINI EROSION CONTROL INC",
      "SCORE": 86
    },
    {
      "ADDR": "70 FREDETTE ST",
      "CITY": "GARDNER",
      "STATE": "MA",
      "ZIP": 1440,
      "ZIP4": "3722",
      "CONAME": "DENNECREPE",
      "SCORE": 72
    },
    {
      "ADDR": "127 TEMPLE ST",
      "CITY": "GARDNER",
      "STATE": "MA",
      "ZIP": 1440,
      "ZIP4": "2354",
      "CONAME": "RETAIL WASTE SOLUTIONS INC",
      "SCORE": 6
    },
    {
      "ADDR": "49 ROOT RD",
      "CITY": "HUBBARDSTON",
      "STATE": "MA",
      "ZIP": 1452,
      "ZIP4": "1334",
      "CONAME": "BUNKSHERE FARM",
      "SCORE": 74
    },
    {
      "ADDR": "37 HAMILTON ST # 4",
      "CITY": "LEOMINSTER",
      "STATE": "MA",
      "ZIP": 1453,
      "ZIP4": "2344",
      "CONAME": "EVERFRESH",
      "SCORE": 61
    },
    {
      "ADDR": "36 PRESCOTT ST",
      "CITY": "PEPPERELL",
      "STATE": "MA",
      "ZIP": 1463,
      "ZIP4": "1115",
      "CONAME": "MIKE MC LAUGHLIN PLUMBING HTG",
      "SCORE": 18
    },
    {
      "ADDR": "777 WASHINGTON ST",
      "CITY": "AUBURN",
      "STATE": "MA",
      "ZIP": 1501,
      "ZIP4": "1817",
      "CONAME": "B J'S WHOLESALE CLUB",
      "SCORE": 3
    },
    {
      "ADDR": "889 SOUTHBRIDGE ST",
      "CITY": "AUBURN",
      "STATE": "MA",
      "ZIP": 1501,
      "ZIP4": "1343",
      "CONAME": "CROSSPOINT CHRISTIAN CHURCH",
      "SCORE": 44
    },
    {
      "ADDR": "13 HARDSCRABBLE RD",
      "CITY": "AUBURN",
      "STATE": "MA",
      "ZIP": 1501,
      "ZIP4": "1003",
      "CONAME": "HARDSCRABBLE REALTY INC",
      "SCORE": 12
    },
    {
      "ADDR": "52 GATES POND RD",
      "CITY": "BERLIN",
      "STATE": "MA",
      "ZIP": 1503,
      "ZIP4": "1308",
      "CONAME": "EMPAC ASSOC",
      "SCORE": 7
    },
    {
      "ADDR": "[Null]",
      "CITY": "BERLIN",
      "STATE": "MA",
      "ZIP": 1503,
      "ZIP4": "[Null]",
      "CONAME": "EUSA",
      "SCORE": 89
    },
    {
      "ADDR": "45 BLACKSTONE ST",
      "CITY": "BLACKSTONE",
      "STATE": "MA",
      "ZIP": 1504,
      "ZIP4": "1671",
      "CONAME": "TSC CONSTRUCTION",
      "SCORE": 9
    },
    {
      "ADDR": "2 BURNS LN",
      "CITY": "CHARLTON",
      "STATE": "MA",
      "ZIP": 1507,
      "ZIP4": "1462",
      "CONAME": "KEL LIVE SOUND RECORDING",
      "SCORE": 86
    },
    {
      "ADDR": "120 GILBOA ST",
      "CITY": "DOUGLAS",
      "STATE": "MA",
      "ZIP": 1516,
      "ZIP4": "2000",
      "CONAME": "TOLTEC FABRICS INC",
      "SCORE": 82
    },
    {
      "ADDR": "10 GRAFTON CMN # 2",
      "CITY": "GRAFTON",
      "STATE": "MA",
      "ZIP": 1519,
      "ZIP4": "1534",
      "CONAME": "SCHOFIELD LAW OFFICES",
      "SCORE": 72
    },
    {
      "ADDR": "1 GRAFTON CMN",
      "CITY": "GRAFTON",
      "STATE": "MA",
      "ZIP": 1519,
      "ZIP4": "1570",
      "CONAME": "SUSAN B NISSENBAUM",
      "SCORE": 97
    },
    {
      "ADDR": "1403 WACHUSETT ST",
      "CITY": "JEFFERSON",
      "STATE": "MA",
      "ZIP": 1522,
      "ZIP4": "1530",
      "CONAME": "LEAHY EXCAVATING CO",
      "SCORE": 2
    },
    {
      "ADDR": "148 ROUTE 146",
      "CITY": "MILLBURY",
      "STATE": "MA",
      "ZIP": 1527,
      "ZIP4": "2500",
      "CONAME": "LENNY'S LIQUORS",
      "SCORE": 87
    },
    {
      "ADDR": "29 MAIN ST",
      "CITY": "MILLBURY",
      "STATE": "MA",
      "ZIP": 1527,
      "ZIP4": "2005",
      "CONAME": "PROVIDENCE HOUSE NURSING HOME",
      "SCORE": 37
    },
    {
      "ADDR": "1529 GRAFTON RD",
      "CITY": "MILLBURY",
      "STATE": "MA",
      "ZIP": 1527,
      "ZIP4": "4300",
      "CONAME": "WYMAN GORDON CO",
      "SCORE": 38
    },
    {
      "ADDR": "[Null]",
      "CITY": "NEW BRAINTREE",
      "STATE": "MA",
      "ZIP": 1531,
      "ZIP4": "[Null]",
      "CONAME": "NEW BRAINTREE POLICE DEPT",
      "SCORE": 52
    },
    {
      "ADDR": "100 OAKHAM RD",
      "CITY": "NEW BRAINTREE",
      "STATE": "MA",
      "ZIP": 1531,
      "ZIP4": "1714",
      "CONAME": "NEW BRAINTREE TOWN TAX CLLCTR",
      "SCORE": 83
    },
    {
      "ADDR": "172 OTIS ST",
      "CITY": "NORTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1532,
      "ZIP4": "2415",
      "CONAME": "ATS CASES INC",
      "SCORE": 32
    },
    {
      "ADDR": "1 E MAIN ST # 101",
      "CITY": "NORTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1532,
      "ZIP4": "1662",
      "CONAME": "FRAIER & MAILLET",
      "SCORE": 28
    },
    {
      "ADDR": "154 MAIN ST",
      "CITY": "NORTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1532,
      "ZIP4": "1930",
      "CONAME": "SUBURBAN FAMILY COUNSELING CTR",
      "SCORE": 26
    },
    {
      "ADDR": "37 GROVE ST",
      "CITY": "NORTH BROOKFIELD",
      "STATE": "MA",
      "ZIP": 1535,
      "ZIP4": "1944",
      "CONAME": "LITTLE CANADA RESTAURANT",
      "SCORE": 91
    },
    {
      "ADDR": "79 WORCESTER ST",
      "CITY": "NORTH GRAFTON",
      "STATE": "MA",
      "ZIP": 1536,
      "ZIP4": "1040",
      "CONAME": "CRISTINI SALES & MARKETING INC",
      "SCORE": 59
    },
    {
      "ADDR": "13 CENTENNIAL DR",
      "CITY": "NORTH GRAFTON",
      "STATE": "MA",
      "ZIP": 1536,
      "ZIP4": "1860",
      "CONAME": "INFORMATION MANAGEMENT CO",
      "SCORE": 70
    },
    {
      "ADDR": "214 WORCESTER ST",
      "CITY": "NORTH GRAFTON",
      "STATE": "MA",
      "ZIP": 1536,
      "ZIP4": "1257",
      "CONAME": "LAND PLANNING INC",
      "SCORE": 13
    },
    {
      "ADDR": "28 CREEPER HILL RD",
      "CITY": "NORTH GRAFTON",
      "STATE": "MA",
      "ZIP": 1536,
      "ZIP4": "1402",
      "CONAME": "MITCHELL CONSTRUCTION CO",
      "SCORE": 4
    },
    {
      "ADDR": "267 MAIN ST",
      "CITY": "OXFORD",
      "STATE": "MA",
      "ZIP": 1540,
      "ZIP4": "2356",
      "CONAME": "COONAN INSURANCE INC",
      "SCORE": 100
    },
    {
      "ADDR": "731 PLEASANT ST",
      "CITY": "ROCHDALE",
      "STATE": "MA",
      "ZIP": 1542,
      "ZIP4": "1128",
      "CONAME": "ROCHDALE VIDEO & VARIETY",
      "SCORE": 47
    },
    {
      "ADDR": "394 PLEASANTDALE RD",
      "CITY": "RUTLAND",
      "STATE": "MA",
      "ZIP": 1543,
      "ZIP4": "1208",
      "CONAME": "BOY SCOUTS OF AMERICA",
      "SCORE": 44
    },
    {
      "ADDR": "200 BOSTON TPKE",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "2500",
      "CONAME": "BANKNORTH",
      "SCORE": 61
    },
    {
      "ADDR": "20 TOPSFIELD CIR",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "3914",
      "CONAME": "CODE 3 OFF ROAD NEW ENGLAND",
      "SCORE": 50
    },
    {
      "ADDR": "382 BOSTON TPKE # 101",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "3466",
      "CONAME": "DAVINI CHIROPRACTIC",
      "SCORE": 58
    },
    {
      "ADDR": "382 BOSTON TPKE # 104",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "3466",
      "CONAME": "DENNIS MOLINARI INSURANCE",
      "SCORE": 67
    },
    {
      "ADDR": "50 BOSTON TPKE",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "3540",
      "CONAME": "DOLLAR FOREVER",
      "SCORE": 5
    },
    {
      "ADDR": "294 BOSTON TPKE",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "3800",
      "CONAME": "GOODYEAR AUTO SVC CTR",
      "SCORE": 18
    },
    {
      "ADDR": "12 OLD FARM CIR",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "6106",
      "CONAME": "LOPA'S TRAVELS",
      "SCORE": 25
    },
    {
      "ADDR": "1000 BOSTON TPKE",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "3380",
      "CONAME": "OLDE SHREWSBURY VILLAGE",
      "SCORE": 9
    },
    {
      "ADDR": "604 MAIN ST",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "5639",
      "CONAME": "SHREWSBURY OB-GYN",
      "SCORE": 65
    },
    {
      "ADDR": "179 BOSTON TPKE",
      "CITY": "SHREWSBURY",
      "STATE": "MA",
      "ZIP": 1545,
      "ZIP4": "3604",
      "CONAME": "TILE WORKS",
      "SCORE": 46
    },
    {
      "ADDR": "126 ASHLAND AVE",
      "CITY": "SOUTHBRIDGE",
      "STATE": "MA",
      "ZIP": 1550,
      "ZIP4": "2804",
      "CONAME": "LE BOEUF RUBBISH REMOVAL",
      "SCORE": 76
    },
    {
      "ADDR": "29 LEGATE HILL RD",
      "CITY": "STERLING",
      "STATE": "MA",
      "ZIP": 1564,
      "ZIP4": "2311",
      "CONAME": "TRI TOWN VENDING CO",
      "SCORE": 19
    },
    {
      "ADDR": "194 MILFORD ST",
      "CITY": "UPTON",
      "STATE": "MA",
      "ZIP": 1568,
      "ZIP4": "1309",
      "CONAME": "ANICETO INC",
      "SCORE": 92
    },
    {
      "ADDR": "PO BOX 268",
      "CITY": "UXBRIDGE",
      "STATE": "MA",
      "ZIP": 1569,
      "ZIP4": "268",
      "CONAME": "GENERICWARE COMPUTERS",
      "SCORE": 17
    },
    {
      "ADDR": "504 QUAKER HWY",
      "CITY": "UXBRIDGE",
      "STATE": "MA",
      "ZIP": 1569,
      "ZIP4": "2277",
      "CONAME": "SHADES OF GRAY TATTOO",
      "SCORE": 65
    },
    {
      "ADDR": "PO BOX 63",
      "CITY": "WESTBOROUGH",
      "STATE": "MA",
      "ZIP": 1581,
      "ZIP4": "63",
      "CONAME": "ANDREWS SALES & DISTRIBUTION",
      "SCORE": 91
    },
    {
      "ADDR": "297 TURNPIKE RD # 122",
      "CITY": "WESTBOROUGH",
      "STATE": "MA",
      "ZIP": 1581,
      "ZIP4": "2822",
      "CONAME": "BOSTONIAN EXECUTIVE SEDAN",
      "SCORE": 1
    },
    {
      "ADDR": "176 E MAIN ST # 7",
      "CITY": "WESTBOROUGH",
      "STATE": "MA",
      "ZIP": 1581,
      "ZIP4": "1763",
      "CONAME": "NIELDS & LEMACK",
      "SCORE": 41
    },
    {
      "ADDR": "178 TURNPIKE RD",
      "CITY": "WESTBOROUGH",
      "STATE": "MA",
      "ZIP": 1581,
      "ZIP4": "2850",
      "CONAME": "SONITROL",
      "SCORE": 43
    },
    {
      "ADDR": "67 MALDEN ST",
      "CITY": "WEST BOYLSTON",
      "STATE": "MA",
      "ZIP": 1583,
      "ZIP4": "1018",
      "CONAME": "W BOYLSTON LIMOUSINE SVC INC",
      "SCORE": 91
    },
    {
      "ADDR": "218 WIGWAM RD",
      "CITY": "WEST BROOKFIELD",
      "STATE": "MA",
      "ZIP": 1585,
      "ZIP4": "3203",
      "CONAME": "BROOKFIELD OPTICAL SYSTEMS",
      "SCORE": 76
    },
    {
      "ADDR": "1027 MAIN ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1603,
      "ZIP4": "2425",
      "CONAME": "BRAMAN TERMITE & PEST ELMNTN",
      "SCORE": 15
    },
    {
      "ADDR": "178 APRICOT ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1603,
      "ZIP4": "1225",
      "CONAME": "EVERLAST TREE CARE CO",
      "SCORE": 93
    },
    {
      "ADDR": "93 STAFFORD ST # 2",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1603,
      "ZIP4": "1459",
      "CONAME": "PEOPLE FOREVER COMPUTER TRNNG",
      "SCORE": 90
    },
    {
      "ADDR": "65 JAMES ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1603,
      "ZIP4": "1026",
      "CONAME": "SNELLING PERSONNEL SVC",
      "SCORE": 0
    },
    {
      "ADDR": "10 WINTHROP ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1604,
      "ZIP4": "4435",
      "CONAME": "DANYLEVICH & MCGILLICUDDY",
      "SCORE": 30
    },
    {
      "ADDR": "10 WINTHROP ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1604,
      "ZIP4": "4435",
      "CONAME": "DIGESTIVE & LIVER DISEASE",
      "SCORE": 86
    },
    {
      "ADDR": "245 LINCOLN ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1605,
      "ZIP4": "2139",
      "CONAME": "EAST WEST KARATE",
      "SCORE": 10
    },
    {
      "ADDR": "119 BELMONT ST # N1",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1605,
      "ZIP4": "2903",
      "CONAME": "NEW ENGLAND GASTROENTEROLOGY",
      "SCORE": 11
    },
    {
      "ADDR": "5 NEPONSET ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1606,
      "ZIP4": "2714",
      "CONAME": "DEUTSCH BABCOCK CAPITAL CORP",
      "SCORE": 87
    },
    {
      "ADDR": "6 ALLISON CIR",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1606,
      "ZIP4": "1183",
      "CONAME": "MORTGAGE CONCEPTS INC",
      "SCORE": 58
    },
    {
      "ADDR": "175 MAIN ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1608,
      "ZIP4": "1106",
      "CONAME": "SAFELITE GLASS CO",
      "SCORE": 19
    },
    {
      "ADDR": "120 CHANDLER ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1609,
      "ZIP4": "2923",
      "CONAME": "IN BRANCH PROMOTIONS",
      "SCORE": 31
    },
    {
      "ADDR": "39 SALISBURY ST",
      "CITY": "WORCESTER",
      "STATE": "MA",
      "ZIP": 1609,
      "ZIP4": "3160",
      "CONAME": "SALISBURY PLASTIC SURGERY",
      "SCORE": 48
    },
    {
      "ADDR": "96 STEREO LN",
      "CITY": "PAXTON",
      "STATE": "MA",
      "ZIP": 1612,
      "ZIP4": "1376",
      "CONAME": "WSRS",
      "SCORE": 37
    },
    {
      "ADDR": "5 EDGELL RD",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1701,
      "ZIP4": "4874",
      "CONAME": "AUDIOLOGY AFFILIATES-HEAR BTTR",
      "SCORE": 76
    },
    {
      "ADDR": "12 WEST ST",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1701,
      "ZIP4": "4737",
      "CONAME": "BISHOP TERRACE CONDO",
      "SCORE": 68
    },
    {
      "ADDR": "1253 WORCESTER RD",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1701,
      "ZIP4": "5208",
      "CONAME": "BRONIEC ASSOCIATES",
      "SCORE": 49
    },
    {
      "ADDR": "1 WORCESTER RD",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1701,
      "ZIP4": "5359",
      "CONAME": "CAMBRIDGE SOUND WORKS",
      "SCORE": 86
    },
    {
      "ADDR": "42 ANGELICA DR",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1701,
      "ZIP4": "3644",
      "CONAME": "CARDSERVICE INTERNATIONAL",
      "SCORE": 68
    },
    {
      "ADDR": "1583 WORCESTER RD",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1701,
      "ZIP4": "5403",
      "CONAME": "CHEF ORIENT RESTAURANT",
      "SCORE": 89
    },
    {
      "ADDR": "4 GROVE ST",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1701,
      "ZIP4": "4728",
      "CONAME": "DEMALLIE CONSULTING INC",
      "SCORE": 52
    },
    {
      "ADDR": "13 HAMPSHIRE RD",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1702,
      "ZIP4": "2335",
      "CONAME": "ACCURATE HOME INSPECTIONS",
      "SCORE": 17
    },
    {
      "ADDR": "186 UNION AVE # A",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1702,
      "ZIP4": "8295",
      "CONAME": "ADVANCED APPRAISAL SVC",
      "SCORE": 24
    },
    {
      "ADDR": "48 CLINTON ST",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1702,
      "ZIP4": "6703",
      "CONAME": "BRAZILIAN ASSEMBLY OF GOD",
      "SCORE": 76
    },
    {
      "ADDR": "74 PEARL ST",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1702,
      "ZIP4": "6634",
      "CONAME": "BRAZILIAN COMMUNITY CHRISTIAN",
      "SCORE": 66
    },
    {
      "ADDR": "100 MOUNT WAYTE AVE",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1702,
      "ZIP4": "5705",
      "CONAME": "GREAT COMMISSION BROADCASTING",
      "SCORE": 67
    },
    {
      "ADDR": "600 WORCESTER RD",
      "CITY": "FRAMINGHAM",
      "STATE": "MA",
      "ZIP": 1702,
      "ZIP4": "5303",
      "CONAME": "STEPHEN L BITSOLI",
      "SCORE": 36
    },
    {
      "ADDR": "29 BICENTENIAL WAY",
      "CITY": "BOXBOROUGH",
      "STATE": "MA",
      "ZIP": 1719,
      "ZIP4": "2111",
      "CONAME": "ON THE MARKET INC",
      "SCORE": 65
    },
    {
      "ADDR": "36 GREAT RD",
      "CITY": "ACTON",
      "STATE": "MA",
      "ZIP": 1720,
      "ZIP4": "5604",
      "CONAME": "GINGER COURT RESTAURANT",
      "SCORE": 28
    },
    {
      "ADDR": "158 MAIN ST # A",
      "CITY": "ASHLAND",
      "STATE": "MA",
      "ZIP": 1721,
      "ZIP4": "1177",
      "CONAME": "ASHES AWAY",
      "SCORE": 35
    },
    {
      "ADDR": "54 FRONT ST",
      "CITY": "ASHLAND",
      "STATE": "MA",
      "ZIP": 1721,
      "ZIP4": "1647",
      "CONAME": "LINDA'S LOVELY DOLLS",
      "SCORE": 0
    },
    {
      "ADDR": "50 OAK ST",
      "CITY": "ASHLAND",
      "STATE": "MA",
      "ZIP": 1721,
      "ZIP4": "1009",
      "CONAME": "WOOD N WORKS",
      "SCORE": 26
    },
    {
      "ADDR": "211 VAUGHN HILL RD",
      "CITY": "BOLTON",
      "STATE": "MA",
      "ZIP": 1740,
      "ZIP4": "1049",
      "CONAME": "ESI TECHNOLOGY CORP",
      "SCORE": 19
    },
    {
      "ADDR": "12 DALTON RD",
      "CITY": "CONCORD",
      "STATE": "MA",
      "ZIP": 1742,
      "ZIP4": "2628",
      "CONAME": "STEVEN NG INC",
      "SCORE": 100
    },
    {
      "ADDR": "60 CURVE ST",
      "CITY": "HOLLISTON",
      "STATE": "MA",
      "ZIP": 1746,
      "ZIP4": "1801",
      "CONAME": "ACCU-BOOKS",
      "SCORE": 99
    },
    {
      "ADDR": "83 HANLON RD",
      "CITY": "HOLLISTON",
      "STATE": "MA",
      "ZIP": 1746,
      "ZIP4": "1465",
      "CONAME": "BAKERY CONCEPTS IND EQUIP INC",
      "SCORE": 65
    },
    {
      "ADDR": "425 NORFOLK ST",
      "CITY": "HOLLISTON",
      "STATE": "MA",
      "ZIP": 1746,
      "ZIP4": "2333",
      "CONAME": "C & C PLUMBING & HEATING",
      "SCORE": 96
    },
    {
      "ADDR": "330 WOODLAND ST",
      "CITY": "HOLLISTON",
      "STATE": "MA",
      "ZIP": 1746,
      "ZIP4": "1824",
      "CONAME": "CARLTON TELEMARKETING",
      "SCORE": 90
    },
    {
      "ADDR": "81 RAILROAD ST",
      "CITY": "HOLLISTON",
      "STATE": "MA",
      "ZIP": 1746,
      "ZIP4": "2100",
      "CONAME": "CASEY'S CROSSING",
      "SCORE": 20
    },
    {
      "ADDR": "1475 HIGHLAND ST",
      "CITY": "HOLLISTON",
      "STATE": "MA",
      "ZIP": 1746,
      "ZIP4": "2627",
      "CONAME": "INDUSTRIAL ADVERTISING",
      "SCORE": 24
    },
    {
      "ADDR": "85 HOLLIS ST",
      "CITY": "HOLLISTON",
      "STATE": "MA",
      "ZIP": 1746,
      "ZIP4": "1724",
      "CONAME": "JOA RESTAURANT",
      "SCORE": 74
    },
    {
      "ADDR": "50 MELLEN ST",
      "CITY": "HOPEDALE",
      "STATE": "MA",
      "ZIP": 1747,
      "ZIP4": "1522",
      "CONAME": "REC MFG CORP",
      "SCORE": 40
    },
    {
      "ADDR": "37 MILL ST",
      "CITY": "HOPEDALE",
      "STATE": "MA",
      "ZIP": 1747,
      "ZIP4": "2101",
      "CONAME": "TOMASO ASSOCIATES INC",
      "SCORE": 69
    },
    {
      "ADDR": "1 ASH ST",
      "CITY": "HOPKINTON",
      "STATE": "MA",
      "ZIP": 1748,
      "ZIP4": "1886",
      "CONAME": "BOSTON RESEARCH GROUP",
      "SCORE": 84
    },
    {
      "ADDR": "225 WOOD ST",
      "CITY": "HOPKINTON",
      "STATE": "MA",
      "ZIP": 1748,
      "ZIP4": "1013",
      "CONAME": "RUSSELL SUNSHINE INC",
      "SCORE": 85
    },
    {
      "ADDR": "401 RIVER RD",
      "CITY": "HUDSON",
      "STATE": "MA",
      "ZIP": 1749,
      "ZIP4": "2627",
      "CONAME": "KAS AUTO BODY",
      "SCORE": 74
    },
    {
      "ADDR": "420 MAPLE ST",
      "CITY": "MARLBOROUGH",
      "STATE": "MA",
      "ZIP": 1752,
      "ZIP4": "6202",
      "CONAME": "CREDENCE SYSTEMS",
      "SCORE": 0
    },
    {
      "ADDR": "55 MECHANIC ST",
      "CITY": "MARLBOROUGH",
      "STATE": "MA",
      "ZIP": 1752,
      "ZIP4": "4403",
      "CONAME": "JUMA GROCERY",
      "SCORE": 29
    },
    {
      "ADDR": "170 MORRISSEY RD",
      "CITY": "MARLBOROUGH",
      "STATE": "MA",
      "ZIP": 1752,
      "ZIP4": "6027",
      "CONAME": "WER HOLDINGS LTD",
      "SCORE": 26
    },
    {
      "ADDR": "1 EMERSON ST",
      "CITY": "MENDON",
      "STATE": "MA",
      "ZIP": 1756,
      "ZIP4": "1202",
      "CONAME": "CURVES FOR WOMEN",
      "SCORE": 42
    },
    {
      "ADDR": "23 PROVIDENCE ST",
      "CITY": "MENDON",
      "STATE": "MA",
      "ZIP": 1756,
      "ZIP4": "1316",
      "CONAME": "CUSTOM ALARM SVC",
      "SCORE": 73
    },
    {
      "ADDR": "PO BOX 540",
      "CITY": "MILFORD",
      "STATE": "MA",
      "ZIP": 1757,
      "ZIP4": "540",
      "CONAME": "COFFEE MAN",
      "SCORE": 87
    },
    {
      "ADDR": "321 FORTUNE BLVD",
      "CITY": "MILFORD",
      "STATE": "MA",
      "ZIP": 1757,
      "ZIP4": "1750",
      "CONAME": "HOLLISTON PEDIATRIC GROUP",
      "SCORE": 94
    },
    {
      "ADDR": "100 PURCHASE ST",
      "CITY": "MILFORD",
      "STATE": "MA",
      "ZIP": 1757,
      "ZIP4": "1158",
      "CONAME": "LEANNA'S UNIQUE CATERING",
      "SCORE": 89
    },
    {
      "ADDR": "159 S MAIN ST",
      "CITY": "MILFORD",
      "STATE": "MA",
      "ZIP": 1757,
      "ZIP4": "3287",
      "CONAME": "MILFORD DAILY NEWS",
      "SCORE": 12
    },
    {
      "ADDR": "222 MAIN ST",
      "CITY": "MILFORD",
      "STATE": "MA",
      "ZIP": 1757,
      "ZIP4": "2507",
      "CONAME": "UNITED FUNDING",
      "SCORE": 1
    },
    {
      "ADDR": "20 MAIN ST",
      "CITY": "NATICK",
      "STATE": "MA",
      "ZIP": 1760,
      "ZIP4": "4525",
      "CONAME": "ANDOVER CAPITAL MANAGEMENT GRP",
      "SCORE": 12
    },
    {
      "ADDR": "87 MIDDLESEX AVE",
      "CITY": "NATICK",
      "STATE": "MA",
      "ZIP": 1760,
      "ZIP4": "4518",
      "CONAME": "H S AWNING & TENT CO",
      "SCORE": 96
    },
    {
      "ADDR": "10 SOUTH AVE",
      "CITY": "NATICK",
      "STATE": "MA",
      "ZIP": 1760,
      "ZIP4": "4623",
      "CONAME": "MASTER MECHANICS AUTOMOTIVE",
      "SCORE": 46
    },
    {
      "ADDR": "25 ARBOR CIR",
      "CITY": "NATICK",
      "STATE": "MA",
      "ZIP": 1760,
      "ZIP4": "2954",
      "CONAME": "PRODUCT WORKS INC",
      "SCORE": 79
    },
    {
      "ADDR": "20 BOGASTOW BROOK RD",
      "CITY": "SHERBORN",
      "STATE": "MA",
      "ZIP": 1770,
      "ZIP4": "1263",
      "CONAME": "APEX BENEFITS CONSULTANTS INC",
      "SCORE": 1
    },
    {
      "ADDR": "333 TURNPIKE RD",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "1755",
      "CONAME": "ABB POWER T & D",
      "SCORE": 10
    },
    {
      "ADDR": "23 TURNPIKE RD",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "2108",
      "CONAME": "CHERUBINO WHOLE HEALTH CTR",
      "SCORE": 58
    },
    {
      "ADDR": "136 TURNPIKE RD # 3",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "2118",
      "CONAME": "CIRCON CORP",
      "SCORE": 73
    },
    {
      "ADDR": "7 TURNPIKE RD",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "2107",
      "CONAME": "FMG MARBLE",
      "SCORE": 13
    },
    {
      "ADDR": "66 BREAKNECK HILL RD",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "1809",
      "CONAME": "HARDING BOTANICALS",
      "SCORE": 55
    },
    {
      "ADDR": "11 MAIN ST # 4",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "1661",
      "CONAME": "INVESTORS CAPITAL CORP",
      "SCORE": 18
    },
    {
      "ADDR": "30 TURNPIKE RD # 2R",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "2100",
      "CONAME": "PROTEUS RESEARCH",
      "SCORE": 34
    },
    {
      "ADDR": "74 PINE HILL RD",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "1322",
      "CONAME": "RADLER & HAMBY BALLROOM DANCE",
      "SCORE": 99
    },
    {
      "ADDR": "245 TURNPIKE RD",
      "CITY": "SOUTHBOROUGH",
      "STATE": "MA",
      "ZIP": 1772,
      "ZIP4": "1747",
      "CONAME": "WILLIAM S DROWNE INSURANCE INC",
      "SCORE": 47
    },
    {
      "ADDR": "124 GREAT RD",
      "CITY": "STOW",
      "STATE": "MA",
      "ZIP": 1775,
      "ZIP4": "1125",
      "CONAME": "STOW MOBIL STATION",
      "SCORE": 21
    },
    {
      "ADDR": "131 BARTON DR",
      "CITY": "SUDBURY",
      "STATE": "MA",
      "ZIP": 1776,
      "ZIP4": "2545",
      "CONAME": "A J WILLIAMSON TERMITE CONTROL",
      "SCORE": 28
    },
    {
      "ADDR": "277 OLD SUDBURY RD",
      "CITY": "SUDBURY",
      "STATE": "MA",
      "ZIP": 1776,
      "ZIP4": "1842",
      "CONAME": "ARABIAN HORSE INN",
      "SCORE": 60
    },
    {
      "ADDR": "71 ATKINSON LN",
      "CITY": "SUDBURY",
      "STATE": "MA",
      "ZIP": 1776,
      "ZIP4": "1938",
      "CONAME": "LEXZ9 INC",
      "SCORE": 76
    },
    {
      "ADDR": "203 MARLBORO RD",
      "CITY": "SUDBURY",
      "STATE": "MA",
      "ZIP": 1776,
      "ZIP4": "1349",
      "CONAME": "THOMAS & CO",
      "SCORE": 6
    },
    {
      "ADDR": "36 SHAW DR",
      "CITY": "WAYLAND",
      "STATE": "MA",
      "ZIP": 1778,
      "ZIP4": "3214",
      "CONAME": "HOMEEC INC",
      "SCORE": 53
    },
    {
      "ADDR": "454 OLD CONNECTICUT PATH",
      "CITY": "WAYLAND",
      "STATE": "MA",
      "ZIP": 1778,
      "ZIP4": "4048",
      "CONAME": "LINE-I ACCOUNTING SVC",
      "SCORE": 3
    },
    {
      "ADDR": "3 CABOT RD",
      "CITY": "WAYLAND",
      "STATE": "MA",
      "ZIP": 1778,
      "ZIP4": "3707",
      "CONAME": "S B PROMOTIONS",
      "SCORE": 82
    },
    {
      "ADDR": "6 HIGHLAND ST",
      "CITY": "WOBURN",
      "STATE": "MA",
      "ZIP": 1801,
      "ZIP4": "4305",
      "CONAME": "SPORTS ARENA",
      "SCORE": 3
    },
    {
      "ADDR": "67 S BEDFORD ST",
      "CITY": "BURLINGTON",
      "STATE": "MA",
      "ZIP": 1803,
      "ZIP4": "5152",
      "CONAME": "CORPORATE KITCHEN",
      "SCORE": 77
    },
    {
      "ADDR": "61 MAIN ST",
      "CITY": "ANDOVER",
      "STATE": "MA",
      "ZIP": 1810,
      "ZIP4": "3701",
      "CONAME": "ANDOVER PREFERRED CAPITAL CORP",
      "SCORE": 95
    },
    {
      "ADDR": "61 MAIN ST",
      "CITY": "ANDOVER",
      "STATE": "MA",
      "ZIP": 1810,
      "ZIP4": "3701",
      "CONAME": "ASB DEVELOPMENT CORP",
      "SCORE": 66
    },
    {
      "ADDR": "7 SUMMER ST",
      "CITY": "CHELMSFORD",
      "STATE": "MA",
      "ZIP": 1824,
      "ZIP4": "3076",
      "CONAME": "COLORWORKS PAINT & DECORATING",
      "SCORE": 54
    },
    {
      "ADDR": "197 MERRIMACK AVE",
      "CITY": "DRACUT",
      "STATE": "MA",
      "ZIP": 1826,
      "ZIP4": "5744",
      "CONAME": "ANDY & LEO LIQUOR INC",
      "SCORE": 70
    },
    {
      "ADDR": "79 GERRISH AVE",
      "CITY": "DRACUT",
      "STATE": "MA",
      "ZIP": 1826,
      "ZIP4": "4404",
      "CONAME": "POTVIN'S SMALL ENGINE REPAIR",
      "SCORE": 29
    },
    {
      "ADDR": "1086 LAKEVIEW AVE",
      "CITY": "DRACUT",
      "STATE": "MA",
      "ZIP": 1826,
      "ZIP4": "4737",
      "CONAME": "ROBERT'S JEWELERS",
      "SCORE": 20
    },
    {
      "ADDR": "977 AMESBURY RD",
      "CITY": "HAVERHILL",
      "STATE": "MA",
      "ZIP": 1830,
      "ZIP4": "1710",
      "CONAME": "GEORGE SACCO AUCTIONEERS",
      "SCORE": 88
    },
    {
      "ADDR": "56 HILLDALE AVE",
      "CITY": "HAVERHILL",
      "STATE": "MA",
      "ZIP": 1832,
      "ZIP4": "3828",
      "CONAME": "BLADES BARBER SHOP",
      "SCORE": 31
    },
    {
      "ADDR": "17 LAFAYETTE ST",
      "CITY": "HAVERHILL",
      "STATE": "MA",
      "ZIP": 1832,
      "ZIP4": "3833",
      "CONAME": "FCC AUTOBODY & REPAIR INC",
      "SCORE": 16
    },
    {
      "ADDR": "17 WASHINGTON ST",
      "CITY": "HAVERHILL",
      "STATE": "MA",
      "ZIP": 1832,
      "ZIP4": "5523",
      "CONAME": "JEWELRY BY TINA",
      "SCORE": 62
    },
    {
      "ADDR": "31 NORTH ST",
      "CITY": "GEORGETOWN",
      "STATE": "MA",
      "ZIP": 1833,
      "ZIP4": "2019",
      "CONAME": "EDUCATION JOB SEARCH",
      "SCORE": 53
    },
    {
      "ADDR": "990 SALEM ST",
      "CITY": "GROVELAND",
      "STATE": "MA",
      "ZIP": 1834,
      "ZIP4": "2025",
      "CONAME": "FABRIC PALACE CORP",
      "SCORE": 33
    },
    {
      "ADDR": "63 LINCOLNSHIRE DR",
      "CITY": "HAVERHILL",
      "STATE": "MA",
      "ZIP": 1835,
      "ZIP4": "8167",
      "CONAME": "CAL CLINICAL",
      "SCORE": 96
    },
    {
      "ADDR": "445 ESSEX ST",
      "CITY": "LAWRENCE",
      "STATE": "MA",
      "ZIP": 1840,
      "ZIP4": "1213",
      "CONAME": "SABOR A QUISQUEYA RESTAURANT",
      "SCORE": 54
    },
    {
      "ADDR": "370 BROADWAY",
      "CITY": "LAWRENCE",
      "STATE": "MA",
      "ZIP": 1841,
      "ZIP4": "3529",
      "CONAME": "7-ELEVEN FOOD STORE",
      "SCORE": 29
    },
    {
      "ADDR": "93 E HAVERHILL ST",
      "CITY": "LAWRENCE",
      "STATE": "MA",
      "ZIP": 1841,
      "ZIP4": "1900",
      "CONAME": "CHRISTIAN FELLOWSHIP CHR",
      "SCORE": 27
    },
    {
      "ADDR": "368 BROADWAY",
      "CITY": "LAWRENCE",
      "STATE": "MA",
      "ZIP": 1841,
      "ZIP4": "3529",
      "CONAME": "JADE GARDEN",
      "SCORE": 61
    },
    {
      "ADDR": "8 SILESIA CT",
      "CITY": "LAWRENCE",
      "STATE": "MA",
      "ZIP": 1841,
      "ZIP4": "2115",
      "CONAME": "YOUR BEST FRIEND TRAINING SCHO",
      "SCORE": 50
    },
    {
      "ADDR": "499 S BROADWAY",
      "CITY": "LAWRENCE",
      "STATE": "MA",
      "ZIP": 1843,
      "ZIP4": "3532",
      "CONAME": "MIKE'S PIZZA",
      "SCORE": 23
    },
    {
      "ADDR": "5 BALLARD WAY",
      "CITY": "LAWRENCE",
      "STATE": "MA",
      "ZIP": 1843,
      "ZIP4": "1045",
      "CONAME": "T & T SALES & RETAIL SVC",
      "SCORE": 13
    },
    {
      "ADDR": "[Null]",
      "CITY": "METHUEN",
      "STATE": "MA",
      "ZIP": 1844,
      "ZIP4": "[Null]",
      "CONAME": "AARON ELECTRIC CO INC",
      "SCORE": 43
    },
    {
      "ADDR": "163 PELHAM ST",
      "CITY": "METHUEN",
      "STATE": "MA",
      "ZIP": 1844,
      "ZIP4": "1519",
      "CONAME": "ABE'S GETTY",
      "SCORE": 4
    },
    {
      "ADDR": "[Null]",
      "CITY": "METHUEN",
      "STATE": "MA",
      "ZIP": 1844,
      "ZIP4": "[Null]",
      "CONAME": "ANN S BOR",
      "SCORE": 75
    },
    {
      "ADDR": "[Null]",
      "CITY": "METHUEN",
      "STATE": "MA",
      "ZIP": 1844,
      "ZIP4": "[Null]",
      "CONAME": "CASTLEROCK CARPETS",
      "SCORE": 13
    },
    {
      "ADDR": "143 JACKSON ST",
      "CITY": "METHUEN",
      "STATE": "MA",
      "ZIP": 1844,
      "ZIP4": "5060",
      "CONAME": "CHEFS OF THE OLD WORLD",
      "SCORE": 100
    },
    {
      "ADDR": "[Null]",
      "CITY": "METHUEN",
      "STATE": "MA",
      "ZIP": 1844,
      "ZIP4": "[Null]",
      "CONAME": "DENNIS THE MENACE PEST CONTROL",
      "SCORE": 88
    },
    {
      "ADDR": "[Null]",
      "CITY": "METHUEN",
      "STATE": "MA",
      "ZIP": 1844,
      "ZIP4": "[Null]",
      "CONAME": "EASTERN SECURITY SYSTEMS",
      "SCORE": 72
    },
    {
      "ADDR": "[Null]",
      "CITY": "NORTH ANDOVER",
      "STATE": "MA",
      "ZIP": 1845,
      "ZIP4": "[Null]",
      "CONAME": "KEY PROGRAM INC",
      "SCORE": 45
    },
    {
      "ADDR": "[Null]",
      "CITY": "NORTH ANDOVER",
      "STATE": "MA",
      "ZIP": 1845,
      "ZIP4": "[Null]",
      "CONAME": "MODERN PEST SVC",
      "SCORE": 63
    },
    {
      "ADDR": "[Null]",
      "CITY": "NORTH ANDOVER",
      "STATE": "MA",
      "ZIP": 1845,
      "ZIP4": "[Null]",
      "CONAME": "PRINICPAL METALS INC",
      "SCORE": 16
    },
    {
      "ADDR": "1538 TURNPIKE ST",
      "CITY": "NORTH ANDOVER",
      "STATE": "MA",
      "ZIP": 1845,
      "ZIP4": "6200",
      "CONAME": "TOUCH STONE SOFTWARE CORP",
      "SCORE": 58
    },
    {
      "ADDR": "300 ARCAND DR",
      "CITY": "LOWELL",
      "STATE": "MA",
      "ZIP": 1852,
      "ZIP4": "6700",
      "CONAME": "LOWELL LOCK MONSTERS",
      "SCORE": 47
    },
    {
      "ADDR": "135 JACKSON ST",
      "CITY": "LOWELL",
      "STATE": "MA",
      "ZIP": 1852,
      "ZIP4": "2103",
      "CONAME": "METTA CENTER LOWELL COMM HLTH",
      "SCORE": 4
    },
    {
      "ADDR": "767 E MERRIMACK ST",
      "CITY": "LOWELL",
      "STATE": "MA",
      "ZIP": 1852,
      "ZIP4": "1444",
      "CONAME": "R S ADJUSTING",
      "SCORE": 75
    },
    {
      "ADDR": "57 LAPLUME AVE",
      "CITY": "LOWELL",
      "STATE": "MA",
      "ZIP": 1854,
      "ZIP4": "1316",
      "CONAME": "A 1 SVC CO",
      "SCORE": 14
    },
    {
      "ADDR": "61 MAMMOTH RD",
      "CITY": "LOWELL",
      "STATE": "MA",
      "ZIP": 1854,
      "ZIP4": "2608",
      "CONAME": "CHEN'S KITCHEN",
      "SCORE": 25
    },
    {
      "ADDR": "11 DUNVEGAN DR",
      "CITY": "MERRIMAC",
      "STATE": "MA",
      "ZIP": 1860,
      "ZIP4": "2139",
      "CONAME": "FITZPATRICK PATRICK S CONSTR",
      "SCORE": 3
    },
    {
      "ADDR": "[Null]",
      "CITY": "NORTH CHELMSFORD",
      "STATE": "MA",
      "ZIP": 1863,
      "ZIP4": "[Null]",
      "CONAME": "MUSIC MILL REHEARSAL COMPLEX",
      "SCORE": 59
    },
    {
      "ADDR": "12 KIBERD DR",
      "CITY": "NORTH CHELMSFORD",
      "STATE": "MA",
      "ZIP": 1863,
      "ZIP4": "1622",
      "CONAME": "PAGE ONE PRODUCTIONS",
      "SCORE": 92
    },
    {
      "ADDR": "34 MAIN ST",
      "CITY": "NORTH READING",
      "STATE": "MA",
      "ZIP": 1864,
      "ZIP4": "2299",
      "CONAME": "PARKER'S PITSTOP",
      "SCORE": 69
    },
    {
      "ADDR": "9 PERCY AVE",
      "CITY": "READING",
      "STATE": "MA",
      "ZIP": 1867,
      "ZIP4": "3551",
      "CONAME": "BULLDOG INC",
      "SCORE": 93
    },
    {
      "ADDR": "20 RANDOLPH DR",
      "CITY": "TEWKSBURY",
      "STATE": "MA",
      "ZIP": 1876,
      "ZIP4": "1962",
      "CONAME": "PETER STARK & ASSOC INC",
      "SCORE": 5
    },
    {
      "ADDR": "87 PROGRESS AVE",
      "CITY": "TYNGSBORO",
      "STATE": "MA",
      "ZIP": 1879,
      "ZIP4": "1436",
      "CONAME": "ABSOLUTE GYMNASTICS ACADEMY",
      "SCORE": 85
    },
    {
      "ADDR": "34 CHESTNUT ST",
      "CITY": "WAKEFIELD",
      "STATE": "MA",
      "ZIP": 1880,
      "ZIP4": "2320",
      "CONAME": "ANN'S ESTHETIQUE",
      "SCORE": 100
    },
    {
      "ADDR": "376 WATER ST",
      "CITY": "WAKEFIELD",
      "STATE": "MA",
      "ZIP": 1880,
      "ZIP4": "3452",
      "CONAME": "FRIENDS OF PLEASURE ISLAND INC",
      "SCORE": 74
    },
    {
      "ADDR": "496 GROTON RD",
      "CITY": "WESTFORD",
      "STATE": "MA",
      "ZIP": 1886,
      "ZIP4": "1100",
      "CONAME": "ALL-PRO GLASS CO",
      "SCORE": 63
    },
    {
      "ADDR": "332 LOWELL ST",
      "CITY": "WILMINGTON",
      "STATE": "MA",
      "ZIP": 1887,
      "ZIP4": "3024",
      "CONAME": "CREATIVE WINDOW DESIGN",
      "SCORE": 87
    },
    {
      "ADDR": "56 FIORENZA DR",
      "CITY": "WILMINGTON",
      "STATE": "MA",
      "ZIP": 1887,
      "ZIP4": "4427",
      "CONAME": "R T CONSULTING INC",
      "SCORE": 46
    },
    {
      "ADDR": "1 MANOMET RD",
      "CITY": "WINCHESTER",
      "STATE": "MA",
      "ZIP": 1890,
      "ZIP4": "3317",
      "CONAME": "FLETCHER TECHNOLOGIES INC",
      "SCORE": 63
    },
    {
      "ADDR": "43 GROVE ST",
      "CITY": "WINCHESTER",
      "STATE": "MA",
      "ZIP": 1890,
      "ZIP4": "3839",
      "CONAME": "NORTHTEK.COM",
      "SCORE": 38
    },
    {
      "ADDR": "9 FLORENCE ST",
      "CITY": "WINCHESTER",
      "STATE": "MA",
      "ZIP": 1890,
      "ZIP4": "2020",
      "CONAME": "SHACK NET",
      "SCORE": 14
    },
    {
      "ADDR": "193 UNION ST",
      "CITY": "LYNN",
      "STATE": "MA",
      "ZIP": 1901,
      "ZIP4": "1312",
      "CONAME": "B & V JEWELRY",
      "SCORE": 76
    },
    {
      "ADDR": "85 NAHANT",
      "CITY": "LYNN",
      "STATE": "MA",
      "ZIP": 1902,
      "ZIP4": "[Null]",
      "CONAME": "BIEN HARDWOOD FLOORS SVC",
      "SCORE": 41
    },
    {
      "ADDR": "425 EASTERN AVE",
      "CITY": "LYNN",
      "STATE": "MA",
      "ZIP": 1902,
      "ZIP4": "1631",
      "CONAME": "NORM'S VARIETY",
      "SCORE": 46
    },
    {
      "ADDR": "80 BOSTON ST",
      "CITY": "LYNN",
      "STATE": "MA",
      "ZIP": 1904,
      "ZIP4": "2526",
      "CONAME": "BASKIN-ROBBINS",
      "SCORE": 27
    },
    {
      "ADDR": "182 ALLEY ST",
      "CITY": "LYNN",
      "STATE": "MA",
      "ZIP": 1905,
      "ZIP4": "2902",
      "CONAME": "MARCELINO AUTO REPAIR",
      "SCORE": 75
    },
    {
      "ADDR": "759 LYNNWAY",
      "CITY": "LYNN",
      "STATE": "MA",
      "ZIP": 1905,
      "ZIP4": "3017",
      "CONAME": "RON COSTA'S AUTO WORLD",
      "SCORE": 2
    },
    {
      "ADDR": "206 LINCOLN AVE",
      "CITY": "SAUGUS",
      "STATE": "MA",
      "ZIP": 1906,
      "ZIP4": "2876",
      "CONAME": "AMATO'S DISCOUNT LIQUORS",
      "SCORE": 29
    },
    {
      "ADDR": "855 BROADWAY",
      "CITY": "SAUGUS",
      "STATE": "MA",
      "ZIP": 1906,
      "ZIP4": "3208",
      "CONAME": "ARTERY GARDEN CTR",
      "SCORE": 29
    },
    {
      "ADDR": "4 HOWARD ST",
      "CITY": "SAUGUS",
      "STATE": "MA",
      "ZIP": 1906,
      "ZIP4": "4050",
      "CONAME": "BACCI'S NORTH END PIZZERIA",
      "SCORE": 52
    },
    {
      "ADDR": "1277 BROADWAY",
      "CITY": "SAUGUS",
      "STATE": "MA",
      "ZIP": 1906,
      "ZIP4": "4700",
      "CONAME": "CLAIRE'S BOUTIQUE",
      "SCORE": 21
    },
    {
      "ADDR": "1277 BROADWAY",
      "CITY": "SAUGUS",
      "STATE": "MA",
      "ZIP": 1906,
      "ZIP4": "4700",
      "CONAME": "LADY GRACE STORES INC",
      "SCORE": 41
    },
    {
      "ADDR": "356 CENTRAL ST",
      "CITY": "SAUGUS",
      "STATE": "MA",
      "ZIP": 1906,
      "ZIP4": "2329",
      "CONAME": "MUSIC 101",
      "SCORE": 55
    },
    {
      "ADDR": "1277 BROADWAY",
      "CITY": "SAUGUS",
      "STATE": "MA",
      "ZIP": 1906,
      "ZIP4": "4700",
      "CONAME": "VICTORIA'S SECRET",
      "SCORE": 85
    },
    {
      "ADDR": "44 PURITAN AVE",
      "CITY": "SWAMPSCOTT",
      "STATE": "MA",
      "ZIP": 1907,
      "ZIP4": "2421",
      "CONAME": "SMITHCO INC",
      "SCORE": 77
    },
    {
      "ADDR": "110 HAVERHILL RD",
      "CITY": "AMESBURY",
      "STATE": "MA",
      "ZIP": 1913,
      "ZIP4": "2119",
      "CONAME": "DARK HORSE MUSIC",
      "SCORE": 37
    },
    {
      "ADDR": "100 CUMMINGS CTR # 444C",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "6132",
      "CONAME": "AXYA MEDICAL",
      "SCORE": 12
    },
    {
      "ADDR": "6 KNOWLTON ST",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "4518",
      "CONAME": "BEVERLY MUSCULAR THERAPY",
      "SCORE": 3
    },
    {
      "ADDR": "5 DODGE ST",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "1703",
      "CONAME": "CHINA WOK",
      "SCORE": 82
    },
    {
      "ADDR": "100 CUMMINGS CTR",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "6115",
      "CONAME": "CINTRA SOFTWARE & SVC INC",
      "SCORE": 24
    },
    {
      "ADDR": "75 HERRICK ST # 206",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "2761",
      "CONAME": "ESSEX CARDIOLOGY ASSOC INC",
      "SCORE": 99
    },
    {
      "ADDR": "100 CUMMINGS CTR # 207P",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "6104",
      "CONAME": "INOVAGE",
      "SCORE": 24
    },
    {
      "ADDR": "1 DICKINSON WAY",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "1364",
      "CONAME": "INTRAWARE INC",
      "SCORE": 54
    },
    {
      "ADDR": "100 CUMMINGS CTR",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "6115",
      "CONAME": "L & T INFORMATION TECHNOLOGY",
      "SCORE": 79
    },
    {
      "ADDR": "275 CABOT ST",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "4526",
      "CONAME": "MICHELLE PLACE'S",
      "SCORE": 83
    },
    {
      "ADDR": "587 CABOT ST",
      "CITY": "BEVERLY",
      "STATE": "MA",
      "ZIP": 1915,
      "ZIP4": "2509",
      "CONAME": "SOVEREIGN BANK",
      "SCORE": 74
    },
    {
      "ADDR": "26 TOPSFIELD RD",
      "CITY": "BOXFORD",
      "STATE": "MA",
      "ZIP": 1921,
      "ZIP4": "2614",
      "CONAME": "DAVIS CLARK",
      "SCORE": 68
    },
    {
      "ADDR": "80 LINDALL ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "2135",
      "CONAME": "ALLERGY & ASTHMA AFFILIATES",
      "SCORE": 38
    },
    {
      "ADDR": "8 MAPLE ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "2812",
      "CONAME": "CUSTOM CUP CAFFE",
      "SCORE": 3
    },
    {
      "ADDR": "75 HIGH ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "3105",
      "CONAME": "FAMILY PC OUTLETS INC",
      "SCORE": 34
    },
    {
      "ADDR": "130 CENTRE ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "1400",
      "CONAME": "GLADIEUX & GOODWIN ASSOC",
      "SCORE": 36
    },
    {
      "ADDR": "320 NEWBURY ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "1050",
      "CONAME": "HAWTHORNE GREEN POOL",
      "SCORE": 46
    },
    {
      "ADDR": "31 RAND CIR",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "1158",
      "CONAME": "INTERNATIONAL ROCK CLIMBING",
      "SCORE": 65
    },
    {
      "ADDR": "151 ENDICOTT ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "3682",
      "CONAME": "MORIARTY & GORDON FLOOR CVRNG",
      "SCORE": 42
    },
    {
      "ADDR": "85 CONSTITUTION LN # 1E",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "3658",
      "CONAME": "PLACEMENT PROS",
      "SCORE": 97
    },
    {
      "ADDR": "80 LINDALL ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "2135",
      "CONAME": "ROGER W SACHS & ASSOC",
      "SCORE": 90
    },
    {
      "ADDR": "175 ANDOVER ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "1443",
      "CONAME": "T4 HEALTH CARE",
      "SCORE": 19
    },
    {
      "ADDR": "44 GARDEN ST",
      "CITY": "DANVERS",
      "STATE": "MA",
      "ZIP": 1923,
      "ZIP4": "1451",
      "CONAME": "TULSA COMPUTER GROUP",
      "SCORE": 31
    },
    {
      "ADDR": "65 EASTERN AVE",
      "CITY": "ESSEX",
      "STATE": "MA",
      "ZIP": 1929,
      "ZIP4": "1300",
      "CONAME": "CAPE ANN PIZZA & SUBS",
      "SCORE": 40
    },
    {
      "ADDR": "75 ESSEX AVE",
      "CITY": "GLOUCESTER",
      "STATE": "MA",
      "ZIP": 1930,
      "ZIP4": "4908",
      "CONAME": "CAPE ANN MARINE SALES & SVC",
      "SCORE": 69
    },
    {
      "ADDR": "PO BOX 5557",
      "CITY": "GLOUCESTER",
      "STATE": "MA",
      "ZIP": 1930,
      "ZIP4": "7",
      "CONAME": "NORSTAR REALTY",
      "SCORE": 9
    },
    {
      "ADDR": "298 WASHINGTON ST",
      "CITY": "GLOUCESTER",
      "STATE": "MA",
      "ZIP": 1930,
      "ZIP4": "4832",
      "CONAME": "NURSE MIDWIVES OF THE NSBC",
      "SCORE": 86
    },
    {
      "ADDR": "56 NEWBURY PORT TPKE",
      "CITY": "IPSWICH",
      "STATE": "MA",
      "ZIP": 1938,
      "ZIP4": "1050",
      "CONAME": "ACCURATE MACHINING CO",
      "SCORE": 0
    },
    {
      "ADDR": "77 TURNPIKE RD",
      "CITY": "IPSWICH",
      "STATE": "MA",
      "ZIP": 1938,
      "ZIP4": "1003",
      "CONAME": "BARBARA DUPRAY COOK",
      "SCORE": 60
    },
    {
      "ADDR": "21 ALLEN LN",
      "CITY": "IPSWICH",
      "STATE": "MA",
      "ZIP": 1938,
      "ZIP4": "1130",
      "CONAME": "E W CONTRACTING INC",
      "SCORE": 18
    },
    {
      "ADDR": "112 CENTRAL ST",
      "CITY": "IPSWICH",
      "STATE": "MA",
      "ZIP": 1938,
      "ZIP4": "1952",
      "CONAME": "SOVEREIGN BANK",
      "SCORE": 17
    },
    {
      "ADDR": "77 TURNPIKE RD # 3C",
      "CITY": "IPSWICH",
      "STATE": "MA",
      "ZIP": 1938,
      "ZIP4": "1000",
      "CONAME": "TOKYO JOE'S STUDIO SELF DFNS",
      "SCORE": 6
    },
    {
      "ADDR": "40 SALEM ST",
      "CITY": "LYNNFIELD",
      "STATE": "MA",
      "ZIP": 1940,
      "ZIP4": "2665",
      "CONAME": "BAYSTATE WINDOW COVERINGS INC",
      "SCORE": 31
    },
    {
      "ADDR": "932 LYNNFIELD ST",
      "CITY": "LYNNFIELD",
      "STATE": "MA",
      "ZIP": 1940,
      "ZIP4": "1579",
      "CONAME": "CUSTOM COMPUTER WORKS INC",
      "SCORE": 15
    },
    {
      "ADDR": "801 SALEM ST",
      "CITY": "LYNNFIELD",
      "STATE": "MA",
      "ZIP": 1940,
      "ZIP4": "2308",
      "CONAME": "HI INTENSI TEES",
      "SCORE": 65
    },
    {
      "ADDR": "8 PYBURN RD",
      "CITY": "LYNNFIELD",
      "STATE": "MA",
      "ZIP": 1940,
      "ZIP4": "2214",
      "CONAME": "OMNI CONSTRUCTION CORP",
      "SCORE": 28
    },
    {
      "ADDR": "3 SPY ROCK HILL RD",
      "CITY": "MANCHESTER",
      "STATE": "MA",
      "ZIP": 1944,
      "ZIP4": "1514",
      "CONAME": "R & R DIRECT MARKETING INC",
      "SCORE": 85
    },
    {
      "ADDR": "71 BUBIER RD",
      "CITY": "MARBLEHEAD",
      "STATE": "MA",
      "ZIP": 1945,
      "ZIP4": "3630",
      "CONAME": "PHEASANT HILL INN",
      "SCORE": 9
    },
    {
      "ADDR": "221 S MAIN ST",
      "CITY": "MIDDLETON",
      "STATE": "MA",
      "ZIP": 1949,
      "ZIP4": "3301",
      "CONAME": "BALLOON'S BY JAN PRINTING",
      "SCORE": 92
    },
    {
      "ADDR": "36 VILLAGE RD # 401",
      "CITY": "MIDDLETON",
      "STATE": "MA",
      "ZIP": 1949,
      "ZIP4": "1220",
      "CONAME": "JEFFY ROSS DEMETER CPA",
      "SCORE": 89
    },
    {
      "ADDR": "50 WATER ST",
      "CITY": "NEWBURYPORT",
      "STATE": "MA",
      "ZIP": 1950,
      "ZIP4": "2889",
      "CONAME": "BIRDWATCHER OF NEWBURYPORT",
      "SCORE": 4
    },
    {
      "ADDR": "4 MULLIKEN WAY",
      "CITY": "NEWBURYPORT",
      "STATE": "MA",
      "ZIP": 1950,
      "ZIP4": "4020",
      "CONAME": "FOILMARK HOLOGRAPHICS",
      "SCORE": 2
    },
    {
      "ADDR": "9 ERIE AVE",
      "CITY": "NEWBURYPORT",
      "STATE": "MA",
      "ZIP": 1950,
      "ZIP4": "1703",
      "CONAME": "INDUSTRIAL GLOBAL ACCESS LTD",
      "SCORE": 59
    },
    {
      "ADDR": "23 S POND ST",
      "CITY": "NEWBURY",
      "STATE": "MA",
      "ZIP": 1951,
      "ZIP4": "1219",
      "CONAME": "MORE THAN SPORTS",
      "SCORE": 1
    },
    {
      "ADDR": "85 SCOTLAND RD",
      "CITY": "NEWBURY",
      "STATE": "MA",
      "ZIP": 1951,
      "ZIP4": "1002",
      "CONAME": "THOMAS V GALLIGAN LAW OFC",
      "SCORE": 31
    },
    {
      "ADDR": "11 BROADWAY A",
      "CITY": "SALISBURY",
      "STATE": "MA",
      "ZIP": 1952,
      "ZIP4": "[Null]",
      "CONAME": "ATLANTIC ATM",
      "SCORE": 56
    },
    {
      "ADDR": "147 SUMMIT ST",
      "CITY": "PEABODY",
      "STATE": "MA",
      "ZIP": 1960,
      "ZIP4": "5101",
      "CONAME": "CENTENNIAL AUTO BODY",
      "SCORE": 49
    },
    {
      "ADDR": "300 ANDOVER ST",
      "CITY": "PEABODY",
      "STATE": "MA",
      "ZIP": 1960,
      "ZIP4": "1526",
      "CONAME": "KIDDIE KANDIDS",
      "SCORE": 27
    },
    {
      "ADDR": "240 JUBILEE DR",
      "CITY": "PEABODY",
      "STATE": "MA",
      "ZIP": 1960,
      "ZIP4": "4062",
      "CONAME": "LUMINA POWER INC",
      "SCORE": 42
    },
    {
      "ADDR": "144 NEWBURYPORT TPKE",
      "CITY": "ROWLEY",
      "STATE": "MA",
      "ZIP": 1969,
      "ZIP4": "2132",
      "CONAME": "BRICK COMPUTER",
      "SCORE": 87
    },
    {
      "ADDR": "355 HIGHLAND AVE",
      "CITY": "SALEM",
      "STATE": "MA",
      "ZIP": 1970,
      "ZIP4": "1738",
      "CONAME": "HIGHLAND GARDENS",
      "SCORE": 97
    },
    {
      "ADDR": "116 HIGHLAND AVE",
      "CITY": "SALEM",
      "STATE": "MA",
      "ZIP": 1970,
      "ZIP4": "2723",
      "CONAME": "LYNNFIELD MEDICAL ASSOC",
      "SCORE": 86
    },
    {
      "ADDR": "274 DERBY ST",
      "CITY": "SALEM",
      "STATE": "MA",
      "ZIP": 1970,
      "ZIP4": "3635",
      "CONAME": "NEW ENGLAND PIRATE MUSEUM",
      "SCORE": 87
    },
    {
      "ADDR": "1 OLDE VILLAGE DR",
      "CITY": "SALEM",
      "STATE": "MA",
      "ZIP": 1970,
      "ZIP4": "1779",
      "CONAME": "PLAY TO LEARN PRESCHOOL & DYCR",
      "SCORE": 56
    },
    {
      "ADDR": "75 RAILROAD AVE",
      "CITY": "SOUTH HAMILTON",
      "STATE": "MA",
      "ZIP": 1982,
      "ZIP4": "2218",
      "CONAME": "ANTHONY & DODGE",
      "SCORE": 75
    },
    {
      "ADDR": "60 RAILROAD AVE",
      "CITY": "SOUTH HAMILTON",
      "STATE": "MA",
      "ZIP": 1982,
      "ZIP4": "2219",
      "CONAME": "CROCKER & CO",
      "SCORE": 86
    },
    {
      "ADDR": "30 APPALOOSA LN",
      "CITY": "SOUTH HAMILTON",
      "STATE": "MA",
      "ZIP": 1982,
      "ZIP4": "1531",
      "CONAME": "RICHARD BROWN",
      "SCORE": 12
    },
    {
      "ADDR": "461 BOSTON ST",
      "CITY": "TOPSFIELD",
      "STATE": "MA",
      "ZIP": 1983,
      "ZIP4": "1234",
      "CONAME": "BRICK COMPUTER",
      "SCORE": 9
    },
    {
      "ADDR": "152 MAIN ST",
      "CITY": "WENHAM",
      "STATE": "MA",
      "ZIP": 1984,
      "ZIP4": "1422",
      "CONAME": "WILLIAM F MARTIN",
      "SCORE": 86
    },
    {
      "ADDR": "1001 S MAIN ST",
      "CITY": "BELLINGHAM",
      "STATE": "MA",
      "ZIP": 2019,
      "ZIP4": "1826",
      "CONAME": "BELLINGHAM MEDICAL ASSOC",
      "SCORE": 25
    },
    {
      "ADDR": "WRENTHAM RD",
      "CITY": "BELLINGHAM",
      "STATE": "MA",
      "ZIP": 2019,
      "ZIP4": "[Null]",
      "CONAME": "BELLINGHAM WATER DEPT",
      "SCORE": 5
    },
    {
      "ADDR": "90 MENDON ST",
      "CITY": "BELLINGHAM",
      "STATE": "MA",
      "ZIP": 2019,
      "ZIP4": "1599",
      "CONAME": "FUTURE BEARINGS INC",
      "SCORE": 77
    },
    {
      "ADDR": "612 MAPLE BROOK RD",
      "CITY": "BELLINGHAM",
      "STATE": "MA",
      "ZIP": 2019,
      "ZIP4": "1671",
      "CONAME": "M J CATERING INC",
      "SCORE": 75
    },
    {
      "ADDR": "490 CHAPMAN ST # 301",
      "CITY": "CANTON",
      "STATE": "MA",
      "ZIP": 2021,
      "ZIP4": "2039",
      "CONAME": "CENTRAL BUREAU-INVESTIGATION",
      "SCORE": 56
    },
    {
      "ADDR": "PO BOX 621",
      "CITY": "DEDHAM",
      "STATE": "MA",
      "ZIP": 2027,
      "ZIP4": "621",
      "CONAME": "CLEAN & GREEN LANDSCAPE",
      "SCORE": 32
    },
    {
      "ADDR": "[Null]",
      "CITY": "DOVER",
      "STATE": "MA",
      "ZIP": 2030,
      "ZIP4": "[Null]",
      "CONAME": "A A MR HANDYMAN",
      "SCORE": 15
    },
    {
      "ADDR": "[Null]",
      "CITY": "DOVER",
      "STATE": "MA",
      "ZIP": 2030,
      "ZIP4": "[Null]",
      "CONAME": "DOVER STUDIO",
      "SCORE": 65
    },
    {
      "ADDR": "[Null]",
      "CITY": "DOVER",
      "STATE": "MA",
      "ZIP": 2030,
      "ZIP4": "[Null]",
      "CONAME": "NEW ENGLAND TREE CO",
      "SCORE": 37
    },
    {
      "ADDR": "3 WHITING RD",
      "CITY": "DOVER",
      "STATE": "MA",
      "ZIP": 2030,
      "ZIP4": "2452",
      "CONAME": "NICHOLAS CHRISTIES DAY SPA",
      "SCORE": 47
    },
    {
      "ADDR": "12 SOUTH ST",
      "CITY": "FOXBORO",
      "STATE": "MA",
      "ZIP": 2035,
      "ZIP4": "2326",
      "CONAME": "COMEY'S CLEANERS",
      "SCORE": 41
    },
    {
      "ADDR": "35 NEPONSET AVE",
      "CITY": "FOXBORO",
      "STATE": "MA",
      "ZIP": 2035,
      "ZIP4": "2005",
      "CONAME": "FOXBORO HUMAN SVC",
      "SCORE": 49
    },
    {
      "ADDR": "12 MORSE PL",
      "CITY": "FOXBORO",
      "STATE": "MA",
      "ZIP": 2035,
      "ZIP4": "2270",
      "CONAME": "INTERSTATE REFRIDGERANT RCVRY",
      "SCORE": 44
    },
    {
      "ADDR": "65 S GROVE ST",
      "CITY": "FOXBORO",
      "STATE": "MA",
      "ZIP": 2035,
      "ZIP4": "2834",
      "CONAME": "KORSLUND LE NORMAND & QUANN",
      "SCORE": 84
    },
    {
      "ADDR": "40 MECHANIC ST # 101",
      "CITY": "FOXBORO",
      "STATE": "MA",
      "ZIP": 2035,
      "ZIP4": "2074",
      "CONAME": "MIDLEY LAW ASSOC",
      "SCORE": 23
    },
    {
      "ADDR": "18 WASHINGTON ST",
      "CITY": "FOXBORO",
      "STATE": "MA",
      "ZIP": 2035,
      "ZIP4": "1021",
      "CONAME": "STURDY MEMORIAL ASSOC",
      "SCORE": 61
    },
    {
      "ADDR": "124 WASHINGTON ST # 101",
      "CITY": "FOXBORO",
      "STATE": "MA",
      "ZIP": 2035,
      "ZIP4": "1368",
      "CONAME": "VERDOLINO & LOWEY",
      "SCORE": 68
    },
    {
      "ADDR": "130 CONSTITUTION BLVD",
      "CITY": "FRANKLIN",
      "STATE": "MA",
      "ZIP": 2038,
      "ZIP4": "2544",
      "CONAME": "ADVANCED INTERCONNECT INC",
      "SCORE": 32
    },
    {
      "ADDR": "345 LINCOLN ST",
      "CITY": "FRANKLIN",
      "STATE": "MA",
      "ZIP": 2038,
      "ZIP4": "1527",
      "CONAME": "BINA CORP",
      "SCORE": 85
    },
    {
      "ADDR": "W CENTRAL & EMMONS",
      "CITY": "FRANKLIN",
      "STATE": "MA",
      "ZIP": 2038,
      "ZIP4": "[Null]",
      "CONAME": "FRANKLIN RECREATION & YOUTH",
      "SCORE": 18
    },
    {
      "ADDR": "OAK",
      "CITY": "FRANKLIN",
      "STATE": "MA",
      "ZIP": 2038,
      "ZIP4": "[Null]",
      "CONAME": "FRANKLIN SCHOOL SUPERINTENDENT",
      "SCORE": 75
    },
    {
      "ADDR": "150 EMMONS ST",
      "CITY": "FRANKLIN",
      "STATE": "MA",
      "ZIP": 2038,
      "ZIP4": "2041",
      "CONAME": "FRANKLIN TOWN GARAGE",
      "SCORE": 82
    },
    {
      "ADDR": "20 FREEDOM WAY",
      "CITY": "FRANKLIN",
      "STATE": "MA",
      "ZIP": 2038,
      "ZIP4": "2585",
      "CONAME": "LINDENMEYR MUNROE",
      "SCORE": 51
    },
    {
      "ADDR": "109 CONSTITUTION BLVD",
      "CITY": "FRANKLIN",
      "STATE": "MA",
      "ZIP": 2038,
      "ZIP4": "2584",
      "CONAME": "SMTC",
      "SCORE": 30
    },
    {
      "ADDR": "ROUTE 139 DIKE RD",
      "CITY": "GREEN HARBOR",
      "STATE": "MA",
      "ZIP": 2041,
      "ZIP4": "[Null]",
      "CONAME": "GARY VOLLER'S YACHT SALES",
      "SCORE": 69
    },
    {
      "ADDR": "292 LINCOLN ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "1722",
      "CONAME": "AUGUST WEST CHIMNEY CO INC",
      "SCORE": 8
    },
    {
      "ADDR": "94 STATION ST # 200",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "2254",
      "CONAME": "BAKER SALES & MARKETING INC",
      "SCORE": 11
    },
    {
      "ADDR": "30 POND PARK RD # 2",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "4340",
      "CONAME": "BRADLEY BROTHERS INC",
      "SCORE": 94
    },
    {
      "ADDR": "19 MAIN ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "2522",
      "CONAME": "BREWED AWAKENINGS",
      "SCORE": 67
    },
    {
      "ADDR": "11 LINSCOTT RD",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "4715",
      "CONAME": "COASTAL TRADING",
      "SCORE": 42
    },
    {
      "ADDR": "81 SUMMER ST # R",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "1962",
      "CONAME": "COMPUTER CRAFTERS",
      "SCORE": 99
    },
    {
      "ADDR": "190 OLD DERBY ST # 211",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "4066",
      "CONAME": "CRAWLEY & CO INC",
      "SCORE": 24
    },
    {
      "ADDR": "191 LINCOLN ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "1717",
      "CONAME": "CROW POINT PIZZERIA",
      "SCORE": 42
    },
    {
      "ADDR": "35 STATION ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "2214",
      "CONAME": "DRY CLEANING BY DOROTHY",
      "SCORE": 22
    },
    {
      "ADDR": "[Null]",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "[Null]",
      "CONAME": "GLYNN TREE EXPERTS",
      "SCORE": 34
    },
    {
      "ADDR": "504 MAIN ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "4706",
      "CONAME": "HINGHAM PAINTING & DECORATING",
      "SCORE": 42
    },
    {
      "ADDR": "7 TALBOT RD",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "4524",
      "CONAME": "HRONES & GARRITY LAW OFFICES",
      "SCORE": 68
    },
    {
      "ADDR": "39 PINE ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "1473",
      "CONAME": "JEFFREY CONTI SANDBLASTING CO",
      "SCORE": 78
    },
    {
      "ADDR": "344 ROCKLAND ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "1471",
      "CONAME": "JOHN M BURNS DDS",
      "SCORE": 26
    },
    {
      "ADDR": "11 LEAVITT ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "2801",
      "CONAME": "KEVIN D PERRUZZI DDS",
      "SCORE": 13
    },
    {
      "ADDR": "4 KEITH WAY",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "4258",
      "CONAME": "MASSACHUSETTS GYMNASTICS CTR",
      "SCORE": 72
    },
    {
      "ADDR": "96 CENTRAL ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "2503",
      "CONAME": "MILITARY DEPT ARMORIES",
      "SCORE": 39
    },
    {
      "ADDR": "49 ROCKLAND ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "1000",
      "CONAME": "MUZZI DRAIN CLEANING",
      "SCORE": 25
    },
    {
      "ADDR": "175 DERBY ST # 27",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "4054",
      "CONAME": "NORRIS & CAMPBELL",
      "SCORE": 37
    },
    {
      "ADDR": "296 LINCOLN ST",
      "CITY": "HINGHAM",
      "STATE": "MA",
      "ZIP": 2043,
      "ZIP4": "1722",
      "CONAME": "WASH 'N DRY CTR",
      "SCORE": 90
    },
    {
      "ADDR": "15 TIERNEY AVE",
      "CITY": "HULL",
      "STATE": "MA",
      "ZIP": 2045,
      "ZIP4": "1423",
      "CONAME": "CARDS & SHARDS",
      "SCORE": 86
    },
    {
      "ADDR": "293 NANTASKET AVE",
      "CITY": "HULL",
      "STATE": "MA",
      "ZIP": 2045,
      "ZIP4": "2911",
      "CONAME": "HULL GLASS PLUS",
      "SCORE": 57
    },
    {
      "ADDR": "8 NANTASKET AVE",
      "CITY": "HULL",
      "STATE": "MA",
      "ZIP": 2045,
      "ZIP4": "3266",
      "CONAME": "PASQUALES PRINTS & FRAMING",
      "SCORE": 78
    },
    {
      "ADDR": "84 COPELAND DR",
      "CITY": "MANSFIELD",
      "STATE": "MA",
      "ZIP": 2048,
      "ZIP4": "1223",
      "CONAME": "FIRST FEDERAL SAVINGS BANK",
      "SCORE": 100
    },
    {
      "ADDR": "71 COPELAND DR",
      "CITY": "MANSFIELD",
      "STATE": "MA",
      "ZIP": 2048,
      "ZIP4": "1220",
      "CONAME": "NORTH EASTON SAVINGS BANK",
      "SCORE": 46
    },
    {
      "ADDR": "241 FRANCIS AVE",
      "CITY": "MANSFIELD",
      "STATE": "MA",
      "ZIP": 2048,
      "ZIP4": "1548",
      "CONAME": "PLM TRAILER LEASING",
      "SCORE": 6
    },
    {
      "ADDR": "16 PARK ST",
      "CITY": "MEDFIELD",
      "STATE": "MA",
      "ZIP": 2052,
      "ZIP4": "2518",
      "CONAME": "ALLEN L WEINER DDS",
      "SCORE": 26
    },
    {
      "ADDR": "41 PLEASANT ST",
      "CITY": "MEDFIELD",
      "STATE": "MA",
      "ZIP": 2052,
      "ZIP4": "2603",
      "CONAME": "AMERICAN INDEX SYSTEMS",
      "SCORE": 12
    },
    {
      "ADDR": "158 NORTH ST",
      "CITY": "MEDFIELD",
      "STATE": "MA",
      "ZIP": 2052,
      "ZIP4": "1701",
      "CONAME": "JANE PARTIS MC CARTY",
      "SCORE": 4
    },
    {
      "ADDR": "58 INDIAN HILL RD",
      "CITY": "MEDFIELD",
      "STATE": "MA",
      "ZIP": 2052,
      "ZIP4": "2922",
      "CONAME": "MAESTROTEC INC",
      "SCORE": 89
    },
    {
      "ADDR": "17 GRANITE ST",
      "CITY": "MEDFIELD",
      "STATE": "MA",
      "ZIP": 2052,
      "ZIP4": "3123",
      "CONAME": "SUBURBAN APPRAISAL ASSOC",
      "SCORE": 4
    },
    {
      "ADDR": "88R SOUTH ST",
      "CITY": "MEDFIELD",
      "STATE": "MA",
      "ZIP": 2052,
      "ZIP4": "2600",
      "CONAME": "T A BLAKE MIDDLE SCHOOL",
      "SCORE": 21
    },
    {
      "ADDR": "31 ADAMS ST",
      "CITY": "MEDFIELD",
      "STATE": "MA",
      "ZIP": 2052,
      "ZIP4": "1601",
      "CONAME": "TODAY'S BUTLER CLEANING SVC",
      "SCORE": 55
    },
    {
      "ADDR": "28 HIGH ST",
      "CITY": "MEDWAY",
      "STATE": "MA",
      "ZIP": 2053,
      "ZIP4": "1604",
      "CONAME": "ENVIRONMENTAL LANDWORKS INC",
      "SCORE": 94
    },
    {
      "ADDR": "89 MAIN ST",
      "CITY": "MEDWAY",
      "STATE": "MA",
      "ZIP": 2053,
      "ZIP4": "1828",
      "CONAME": "R TUCKER REYNOLDS",
      "SCORE": 72
    },
    {
      "ADDR": "124 WASHINGTON ST",
      "CITY": "NORWELL",
      "STATE": "MA",
      "ZIP": 2061,
      "ZIP4": "1731",
      "CONAME": "53 SOUTH",
      "SCORE": 15
    },
    {
      "ADDR": "334 WASHINGTON ST",
      "CITY": "NORWELL",
      "STATE": "MA",
      "ZIP": 2061,
      "ZIP4": "1746",
      "CONAME": "MILLENNIUM TRAVEL",
      "SCORE": 40
    },
    {
      "ADDR": "738 GROVE ST",
      "CITY": "NORWELL",
      "STATE": "MA",
      "ZIP": 2061,
      "ZIP4": "1202",
      "CONAME": "RE VERSE GREETINGS CO",
      "SCORE": 18
    },
    {
      "ADDR": "825 WASHINGTON ST # 360",
      "CITY": "NORWOOD",
      "STATE": "MA",
      "ZIP": 2062,
      "ZIP4": "3486",
      "CONAME": "CARITAS OB/GYN OF NORWOOD",
      "SCORE": 65
    },
    {
      "ADDR": "433 WALPOLE ST",
      "CITY": "NORWOOD",
      "STATE": "MA",
      "ZIP": 2062,
      "ZIP4": "3034",
      "CONAME": "L Z LIMOUSINE SVC",
      "SCORE": 79
    },
    {
      "ADDR": "315 NORWOOD PARK S",
      "CITY": "NORWOOD",
      "STATE": "MA",
      "ZIP": 2062,
      "ZIP4": "4663",
      "CONAME": "MOVE CENTRAL INC",
      "SCORE": 32
    },
    {
      "ADDR": "364 CLAPP RD # A",
      "CITY": "SCITUATE",
      "STATE": "MA",
      "ZIP": 2066,
      "ZIP4": "3029",
      "CONAME": "DAUPHINEE AUTO BODY",
      "SCORE": 3
    },
    {
      "ADDR": "769 COUNTRY WAY",
      "CITY": "SCITUATE",
      "STATE": "MA",
      "ZIP": 2066,
      "ZIP4": "1714",
      "CONAME": "PRECIOUS PETALS",
      "SCORE": 54
    },
    {
      "ADDR": "1595 CENTRAL ST",
      "CITY": "STOUGHTON",
      "STATE": "MA",
      "ZIP": 2072,
      "ZIP4": "1694",
      "CONAME": "A WINNING PAIR HAIR SALON",
      "SCORE": 36
    },
    {
      "ADDR": "801 WASHINGTON ST",
      "CITY": "STOUGHTON",
      "STATE": "MA",
      "ZIP": 2072,
      "ZIP4": "2939",
      "CONAME": "ARMY NATIONAL GUARD RECURITER",
      "SCORE": 5
    },
    {
      "ADDR": "294 PLEASANT ST",
      "CITY": "STOUGHTON",
      "STATE": "MA",
      "ZIP": 2072,
      "ZIP4": "2571",
      "CONAME": "SOUTH SHORE ACCOUNTING SVC",
      "SCORE": 38
    },
    {
      "ADDR": "1426 MAIN ST # 6",
      "CITY": "WALPOLE",
      "STATE": "MA",
      "ZIP": 2081,
      "ZIP4": "1700",
      "CONAME": "BRISTOL SQUARE CHIROPRACTIC",
      "SCORE": 56
    },
    {
      "ADDR": "1428 MAIN ST",
      "CITY": "WALPOLE",
      "STATE": "MA",
      "ZIP": 2081,
      "ZIP4": "1729",
      "CONAME": "DEDHAM INSTITUTION FOR SAVINGS",
      "SCORE": 5
    },
    {
      "ADDR": "56 SOUTH ST",
      "CITY": "WRENTHAM",
      "STATE": "MA",
      "ZIP": 2093,
      "ZIP4": "1527",
      "CONAME": "DEJA VU DINER INC",
      "SCORE": 93
    },
    {
      "ADDR": "59 GEORDAN AVE",
      "CITY": "WRENTHAM",
      "STATE": "MA",
      "ZIP": 2093,
      "ZIP4": "1101",
      "CONAME": "ST5 SEPTIC INC",
      "SCORE": 73
    },
    {
      "ADDR": "8 WINTER ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2108,
      "ZIP4": "4705",
      "CONAME": "CONSTRUCTION JOBS INC",
      "SCORE": 20
    },
    {
      "ADDR": "27 SCHOOL ST # 400",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2108,
      "ZIP4": "4303",
      "CONAME": "GRAYER & DILDAY",
      "SCORE": 30
    },
    {
      "ADDR": "15 COURT SQ # 360",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2108,
      "ZIP4": "2503",
      "CONAME": "LAURANO & LAURANO",
      "SCORE": 50
    },
    {
      "ADDR": "45 SCHOOL ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2108,
      "ZIP4": "3204",
      "CONAME": "STEFFENSEN HERMAN DOGGETT",
      "SCORE": 51
    },
    {
      "ADDR": "8 WINTER ST # 807",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2108,
      "ZIP4": "4725",
      "CONAME": "TOTAL CLERICAL SVC",
      "SCORE": 27
    },
    {
      "ADDR": "142 COMMERCIAL ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "1313",
      "CONAME": "ATLANTIC AD PUBLISHING CO",
      "SCORE": 53
    },
    {
      "ADDR": "170 MILK ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "3406",
      "CONAME": "BEST FOR LESS TICKET AGENCY",
      "SCORE": 47
    },
    {
      "ADDR": "71 COMMERCIAL ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "1320",
      "CONAME": "CYBERSTITCH",
      "SCORE": 97
    },
    {
      "ADDR": "4 FANEUIL HALL MARKETPLACE",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "1611",
      "CONAME": "EDWARD FEGREUS LAW OFFICE",
      "SCORE": 71
    },
    {
      "ADDR": "85 DEVONSHIRE ST # 250",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "3504",
      "CONAME": "FAQ INC",
      "SCORE": 84
    },
    {
      "ADDR": "75 STATE ST # 700",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "1807",
      "CONAME": "FERRITER SCOBBO",
      "SCORE": 66
    },
    {
      "ADDR": "60 STATE ST # 910",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "1800",
      "CONAME": "LOURIE & CUTLER",
      "SCORE": 54
    },
    {
      "ADDR": "28 STATE ST # 34",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "1775",
      "CONAME": "MC DERMOTT WILL & EMERY",
      "SCORE": 97
    },
    {
      "ADDR": "40 BROAD ST # 925",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "4317",
      "CONAME": "MILLER WACHMAN & CO",
      "SCORE": 75
    },
    {
      "ADDR": "DOCK SQ",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "[Null]",
      "CONAME": "SIGNATURE GALLERY FINE ARTS",
      "SCORE": 26
    },
    {
      "ADDR": "148 STATE ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2109,
      "ZIP4": "2506",
      "CONAME": "VIVID LOUNGE",
      "SCORE": 100
    },
    {
      "ADDR": "100 SUMMER ST # R18A",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2110,
      "ZIP4": "2106",
      "CONAME": "FIDELITY PERSONAL INVESTMENTS",
      "SCORE": 83
    },
    {
      "ADDR": "160 FEDERAL ST # 20",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2110,
      "ZIP4": "1722",
      "CONAME": "TAYLOR GANSON & PERRIN",
      "SCORE": 93
    },
    {
      "ADDR": "100 FEDERAL ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2110,
      "ZIP4": "1840",
      "CONAME": "UTLITY CONSULTANTS INC",
      "SCORE": 3
    },
    {
      "ADDR": "655 ATLANTIC AVE",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2111,
      "ZIP4": "[Null]",
      "CONAME": "MARCIA S WAGNER ASSOC",
      "SCORE": 1
    },
    {
      "ADDR": "151 TREMONT ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2111,
      "ZIP4": "1125",
      "CONAME": "REAL ESTATE ACCOUNTING SVC",
      "SCORE": 32
    },
    {
      "ADDR": "52 TEMPLE PL # 2",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2111,
      "ZIP4": "1306",
      "CONAME": "TMP CONSULTING ENGINEERS INC",
      "SCORE": 22
    },
    {
      "ADDR": "10 DERNE ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2114,
      "ZIP4": "4203",
      "CONAME": "DANGEL DONLAN & FINE",
      "SCORE": 89
    },
    {
      "ADDR": "100 BLOSSOM ST # COX201",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2114,
      "ZIP4": "2606",
      "CONAME": "HEMATOLOGY ONCOLOGY",
      "SCORE": 51
    },
    {
      "ADDR": "6 BOWDOIN SQ",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2114,
      "ZIP4": "2911",
      "CONAME": "KEN R BROWN LAW OFFICES",
      "SCORE": 87
    },
    {
      "ADDR": "243 CHARLES ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2114,
      "ZIP4": "3002",
      "CONAME": "PEDIATRIC OPTHALMOLOGY",
      "SCORE": 85
    },
    {
      "ADDR": "44 BINNEY ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2115,
      "ZIP4": "6084",
      "CONAME": "DANA-FARBER CANCER INSTITUTE",
      "SCORE": 41
    },
    {
      "ADDR": "74 FENWOOD RD",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2115,
      "ZIP4": "6113",
      "CONAME": "HARVARD MEDICAL SCHOOL",
      "SCORE": 30
    },
    {
      "ADDR": "188 LONGWOOD AVE",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2115,
      "ZIP4": "5888",
      "CONAME": "HARVARD SCHL OF DENTAL MED",
      "SCORE": 18
    },
    {
      "ADDR": "362 COMMONWEALTH AVE # LE",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2115,
      "ZIP4": "2157",
      "CONAME": "ORPHEUS PERFORMING ARTS",
      "SCORE": 79
    },
    {
      "ADDR": "174 NEWBURY ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2116,
      "ZIP4": "2871",
      "CONAME": "BEN & JERRY'S ICE CREAM YOGURT",
      "SCORE": 97
    },
    {
      "ADDR": "80 NEWBURY ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2116,
      "ZIP4": "3005",
      "CONAME": "GUESS INC",
      "SCORE": 94
    },
    {
      "ADDR": "342 TREMONT ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2116,
      "ZIP4": "5621",
      "CONAME": "MILLENIUM DAY CARE CTR",
      "SCORE": 56
    },
    {
      "ADDR": "175 NEWBURY ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2116,
      "ZIP4": "2835",
      "CONAME": "NEMROW & NEMROW",
      "SCORE": 41
    },
    {
      "ADDR": "253 NEWBURY ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2116,
      "ZIP4": "2435",
      "CONAME": "NIALL ROBERTS AT CAPELLI'S",
      "SCORE": 97
    },
    {
      "ADDR": "20 PARK PLZ",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2116,
      "ZIP4": "4303",
      "CONAME": "REX REAL ESTATE",
      "SCORE": 26
    },
    {
      "ADDR": "441 STUART ST # 7",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2116,
      "ZIP4": "5019",
      "CONAME": "ROSS ANAPOLLE DDS",
      "SCORE": 38
    },
    {
      "ADDR": "266 NEWBURY ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2116,
      "ZIP4": "2403",
      "CONAME": "TAPAS AT TAPEO RESTAURANT",
      "SCORE": 93
    },
    {
      "ADDR": "720 HARRISON AVE # 606",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2118,
      "ZIP4": "2334",
      "CONAME": "BOSTON U MED CTR UROLOGISTS",
      "SCORE": 0
    },
    {
      "ADDR": "700 ALBANY ST # 408",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2118,
      "ZIP4": "2518",
      "CONAME": "CENTER FOR HUMAN GENETICS",
      "SCORE": 99
    },
    {
      "ADDR": "585 N TREE ST",
      "CITY": "ROXBURY",
      "STATE": "MA",
      "ZIP": 2118,
      "ZIP4": "[Null]",
      "CONAME": "JADE CHEF",
      "SCORE": 55
    },
    {
      "ADDR": "218 BLUE HILL AVE",
      "CITY": "ROXBURY",
      "STATE": "MA",
      "ZIP": 2119,
      "ZIP4": "2153",
      "CONAME": "CENTRAL CONVENIENCE",
      "SCORE": 3
    },
    {
      "ADDR": "344 WARREN ST",
      "CITY": "ROXBURY",
      "STATE": "MA",
      "ZIP": 2119,
      "ZIP4": "1814",
      "CONAME": "WARREN STREET HOUSE OF PIZZA",
      "SCORE": 17
    },
    {
      "ADDR": "8 GLENWAY ST",
      "CITY": "DORCHESTER",
      "STATE": "MA",
      "ZIP": 2121,
      "ZIP4": "4008",
      "CONAME": "COUSIN'S MARKET",
      "SCORE": 22
    },
    {
      "ADDR": "PO BOX 230801",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2123,
      "ZIP4": "801",
      "CONAME": "BARRIO RECORDS",
      "SCORE": 33
    },
    {
      "ADDR": "1996 DORCHESTER AVE",
      "CITY": "DORCHESTER CTR",
      "STATE": "MA",
      "ZIP": 2124,
      "ZIP4": "4703",
      "CONAME": "ASHMONT CONVENIENCE STORE",
      "SCORE": 83
    },
    {
      "ADDR": "90 SAINT GREGORY ST",
      "CITY": "DORCHESTER CTR",
      "STATE": "MA",
      "ZIP": 2124,
      "ZIP4": "5518",
      "CONAME": "COMING OF AGE INC",
      "SCORE": 98
    },
    {
      "ADDR": "793 ADAMS ST",
      "CITY": "DORCHESTER CTR",
      "STATE": "MA",
      "ZIP": 2124,
      "ZIP4": "5103",
      "CONAME": "FINNEGAN LAW & REAL ESTATE",
      "SCORE": 55
    },
    {
      "ADDR": "1082 DORCHESTER AVE",
      "CITY": "DORCHESTER",
      "STATE": "MA",
      "ZIP": 2125,
      "ZIP4": "1405",
      "CONAME": "TONY TRUONG LEGAL SVC",
      "SCORE": 48
    },
    {
      "ADDR": "855 RIVER ST",
      "CITY": "MATTAPAN",
      "STATE": "MA",
      "ZIP": 2126,
      "ZIP4": "1910",
      "CONAME": "HYDE PARK HOUSE OF PIZZA",
      "SCORE": 50
    },
    {
      "ADDR": "189 DELHI ST",
      "CITY": "MATTAPAN",
      "STATE": "MA",
      "ZIP": 2126,
      "ZIP4": "2357",
      "CONAME": "LENANE SHEET METAL",
      "SCORE": 2
    },
    {
      "ADDR": "552 RIVER ST",
      "CITY": "MATTAPAN",
      "STATE": "MA",
      "ZIP": 2126,
      "ZIP4": "3015",
      "CONAME": "RADIO UNION INTL",
      "SCORE": 67
    },
    {
      "ADDR": "734 E BROADWAY",
      "CITY": "SOUTH BOSTON",
      "STATE": "MA",
      "ZIP": 2127,
      "ZIP4": "1504",
      "CONAME": "BOSTON BEER GARDEN",
      "SCORE": 71
    },
    {
      "ADDR": "32 W BROADWAY",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2127,
      "ZIP4": "1016",
      "CONAME": "TERIYAKI HOUSE",
      "SCORE": 64
    },
    {
      "ADDR": "141 ADDISON ST",
      "CITY": "EAST BOSTON",
      "STATE": "MA",
      "ZIP": 2128,
      "ZIP4": "1180",
      "CONAME": "AUTOMATED FOOD SVC",
      "SCORE": 32
    },
    {
      "ADDR": "294 PRINCETON ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2128,
      "ZIP4": "1435",
      "CONAME": "E BOSTON MORTGAGES CORP",
      "SCORE": 12
    },
    {
      "ADDR": "22 BENNINGTON ST",
      "CITY": "EAST BOSTON",
      "STATE": "MA",
      "ZIP": 2128,
      "ZIP4": "1704",
      "CONAME": "FAMILY DOLLAR STORE",
      "SCORE": 17
    },
    {
      "ADDR": "24 CHELSEA ST",
      "CITY": "EAST BOSTON",
      "STATE": "MA",
      "ZIP": 2128,
      "ZIP4": "1914",
      "CONAME": "PALACE OF MUSIC",
      "SCORE": 13
    },
    {
      "ADDR": "44 BROOKS ST",
      "CITY": "EAST BOSTON",
      "STATE": "MA",
      "ZIP": 2128,
      "ZIP4": "1755",
      "CONAME": "THOMPSON MARKET",
      "SCORE": 100
    },
    {
      "ADDR": "198 BUNKER HILL ST",
      "CITY": "CHARLESTOWN",
      "STATE": "MA",
      "ZIP": 2129,
      "ZIP4": "2540",
      "CONAME": "NANCY'S DONUT SHOP",
      "SCORE": 42
    },
    {
      "ADDR": "1153 CENTRE ST",
      "CITY": "JAMAICA PLAIN",
      "STATE": "MA",
      "ZIP": 2130,
      "ZIP4": "3446",
      "CONAME": "BETH ISRAEL DEACONESS MED CTR",
      "SCORE": 25
    },
    {
      "ADDR": "3694 WASHINGTON ST",
      "CITY": "JAMAICA PLAIN",
      "STATE": "MA",
      "ZIP": 2130,
      "ZIP4": "3701",
      "CONAME": "CARIBBEAN WINE & SPIRITS",
      "SCORE": 49
    },
    {
      "ADDR": "31 WHITFORD ST",
      "CITY": "ROSLINDALE",
      "STATE": "MA",
      "ZIP": 2131,
      "ZIP4": "4210",
      "CONAME": "BOSTON COMPUTER CLINIC",
      "SCORE": 76
    },
    {
      "ADDR": "4186 WASHINGTON ST",
      "CITY": "ROSLINDALE",
      "STATE": "MA",
      "ZIP": 2131,
      "ZIP4": "1731",
      "CONAME": "MILLY CREATIONS FASHION",
      "SCORE": 9
    },
    {
      "ADDR": "4443 WASHINGTON ST",
      "CITY": "ROSLINDALE",
      "STATE": "MA",
      "ZIP": 2131,
      "ZIP4": "3408",
      "CONAME": "ROSLINDALE FOOD MART",
      "SCORE": 87
    },
    {
      "ADDR": "1580 VFW PKWY",
      "CITY": "WEST ROXBURY",
      "STATE": "MA",
      "ZIP": 2132,
      "ZIP4": "5500",
      "CONAME": "PAC FLOORING",
      "SCORE": 92
    },
    {
      "ADDR": "320 SPRING ST",
      "CITY": "WEST ROXBURY",
      "STATE": "MA",
      "ZIP": 2132,
      "ZIP4": "5419",
      "CONAME": "SPRING STREET CAFE",
      "SCORE": 16
    },
    {
      "ADDR": "5059 WASHINGTON ST",
      "CITY": "WEST ROXBURY",
      "STATE": "MA",
      "ZIP": 2132,
      "ZIP4": "4749",
      "CONAME": "TEA TIME TREASURES",
      "SCORE": 23
    },
    {
      "ADDR": "20 GUEST ST # 200",
      "CITY": "BRIGHTON",
      "STATE": "MA",
      "ZIP": 2135,
      "ZIP4": "2040",
      "CONAME": "AMICAS INC",
      "SCORE": 59
    },
    {
      "ADDR": "7 KNIGHT ST # 4",
      "CITY": "HYDE PARK",
      "STATE": "MA",
      "ZIP": 2136,
      "ZIP4": "2029",
      "CONAME": "LA CHEMINEE",
      "SCORE": 27
    },
    {
      "ADDR": "1419 HYDE PARK AVE",
      "CITY": "HYDE PARK",
      "STATE": "MA",
      "ZIP": 2136,
      "ZIP4": "2617",
      "CONAME": "PIMPGEAR",
      "SCORE": 72
    },
    {
      "ADDR": "950 HYDE PARK AVE",
      "CITY": "HYDE PARK",
      "STATE": "MA",
      "ZIP": 2136,
      "ZIP4": "3225",
      "CONAME": "PIZZA HUT",
      "SCORE": 63
    },
    {
      "ADDR": "1277 RIVER ST",
      "CITY": "HYDE PARK",
      "STATE": "MA",
      "ZIP": 2136,
      "ZIP4": "2807",
      "CONAME": "TALK & WOK CAFE",
      "SCORE": 50
    },
    {
      "ADDR": "725 CONCORD AVE # 3500",
      "CITY": "CAMBRIDGE",
      "STATE": "MA",
      "ZIP": 2138,
      "ZIP4": "1040",
      "CONAME": "FRESHPOND WOMENS HEALTH",
      "SCORE": 93
    },
    {
      "ADDR": "640 MEMORIAL DR # 4",
      "CITY": "CAMBRIDGE",
      "STATE": "MA",
      "ZIP": 2139,
      "ZIP4": "4853",
      "CONAME": "PATHOLOGY SERVICES",
      "SCORE": 38
    },
    {
      "ADDR": "125 CAMBRIDGEPARK DR # 6",
      "CITY": "CAMBRIDGE",
      "STATE": "MA",
      "ZIP": 2140,
      "ZIP4": "2314",
      "CONAME": "MDT ADVISERS INC",
      "SCORE": 44
    },
    {
      "ADDR": "14 DUDLEY ST # 1",
      "CITY": "CAMBRIDGE",
      "STATE": "MA",
      "ZIP": 2140,
      "ZIP4": "1828",
      "CONAME": "STOP POP & ROLL INC",
      "SCORE": 31
    },
    {
      "ADDR": "289 COLUMBIA ST # 291",
      "CITY": "CAMBRIDGE",
      "STATE": "MA",
      "ZIP": 2141,
      "ZIP4": "1309",
      "CONAME": "AICHA AFRICAN HAIR BRAIDING",
      "SCORE": 38
    },
    {
      "ADDR": "700 BROADWAY",
      "CITY": "MALDEN",
      "STATE": "MA",
      "ZIP": 2148,
      "ZIP4": "2057",
      "CONAME": "ARMANDO'S AUTO DETAILING",
      "SCORE": 62
    },
    {
      "ADDR": "308 MAIN ST",
      "CITY": "MALDEN",
      "STATE": "MA",
      "ZIP": 2148,
      "ZIP4": "5011",
      "CONAME": "JOTI PALACE",
      "SCORE": 89
    },
    {
      "ADDR": "101 MAIN ST",
      "CITY": "MALDEN",
      "STATE": "MA",
      "ZIP": 2148,
      "ZIP4": "7639",
      "CONAME": "PREMIER PROPERTIES RE INC",
      "SCORE": 2
    },
    {
      "ADDR": "108 DEVIR ST # 208",
      "CITY": "MALDEN",
      "STATE": "MA",
      "ZIP": 2148,
      "ZIP4": "7252",
      "CONAME": "PROGRESSIVE MUSCLE & FITNESS",
      "SCORE": 48
    },
    {
      "ADDR": "420 PEARL ST # 2",
      "CITY": "MALDEN",
      "STATE": "MA",
      "ZIP": 2148,
      "ZIP4": "6697",
      "CONAME": "SPACEWORKS INC",
      "SCORE": 38
    },
    {
      "ADDR": "130 PEARL ST",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "2724",
      "CONAME": "APPROPRIATE INDUSTRIAL STAFFNG",
      "SCORE": 20
    },
    {
      "ADDR": "69 EVERETT AVE",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "2372",
      "CONAME": "AUTO CONNECTION",
      "SCORE": 90
    },
    {
      "ADDR": "500 BROADWAY",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "2948",
      "CONAME": "CHELSEA CITY BLDG INSPECTOR",
      "SCORE": 3
    },
    {
      "ADDR": "[Null]",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "[Null]",
      "CONAME": "CHELSEA ELECTRICAL INSPECTOR",
      "SCORE": 64
    },
    {
      "ADDR": "[Null]",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "[Null]",
      "CONAME": "CHELSEA HEALTH INSPECTOR",
      "SCORE": 60
    },
    {
      "ADDR": "500 BROADWAY",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "2948",
      "CONAME": "CHELSEA PLUMBING INSPECTOR",
      "SCORE": 37
    },
    {
      "ADDR": "500 BROADWAY",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "2948",
      "CONAME": "CHELSEA WEIGHTS & MEASURES",
      "SCORE": 3
    },
    {
      "ADDR": "111 EVERETT AVE # 1A",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "2370",
      "CONAME": "DORU C IANCOVICI MD",
      "SCORE": 97
    },
    {
      "ADDR": "35 COTTAGE ST",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "3211",
      "CONAME": "G VINCENT",
      "SCORE": 13
    },
    {
      "ADDR": "128 PEARL ST",
      "CITY": "CHELSEA",
      "STATE": "MA",
      "ZIP": 2150,
      "ZIP4": "2724",
      "CONAME": "JASONS BIG SCOOP",
      "SCORE": 74
    },
    {
      "ADDR": "38 BELGRADE ST",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "2710",
      "CONAME": "ANDY'S FLOOR SVC",
      "SCORE": 72
    },
    {
      "ADDR": "140 TAFT ST",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "3921",
      "CONAME": "B T CUTTERY",
      "SCORE": 60
    },
    {
      "ADDR": "1456 N SHORE RD",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "2670",
      "CONAME": "BOB'S AUTO BODY",
      "SCORE": 49
    },
    {
      "ADDR": "121 TAFT ST",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "5324",
      "CONAME": "CHAMBER FLOOR SVC",
      "SCORE": 62
    },
    {
      "ADDR": "570 BROADWAY",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "3041",
      "CONAME": "DOMINO'S PIZZA",
      "SCORE": 57
    },
    {
      "ADDR": "319 BROADWAY # A",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "5017",
      "CONAME": "FOREIGN AUTOPART",
      "SCORE": 14
    },
    {
      "ADDR": "466 AMERICAN LEGION HWY",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "1354",
      "CONAME": "MASSACHUSETTS BAIT SHOP",
      "SCORE": 3
    },
    {
      "ADDR": "346 RESERVOIR AVE",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "5808",
      "CONAME": "MONROE INC",
      "SCORE": 9
    },
    {
      "ADDR": "350 SQUIRE RD",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "4316",
      "CONAME": "NORTHGATE MOBIL",
      "SCORE": 16
    },
    {
      "ADDR": "1330 BROADWAY",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "1363",
      "CONAME": "ROCHE PLUMBING",
      "SCORE": 60
    },
    {
      "ADDR": "381 BROADWAY",
      "CITY": "REVERE",
      "STATE": "MA",
      "ZIP": 2151,
      "ZIP4": "3029",
      "CONAME": "TAVILLA JEWELERY",
      "SCORE": 54
    },
    {
      "ADDR": "12 REVERE ST",
      "CITY": "WINTHROP",
      "STATE": "MA",
      "ZIP": 2152,
      "ZIP4": "1605",
      "CONAME": "COFFEE BEANS",
      "SCORE": 17
    },
    {
      "ADDR": "559 SHIRLEY ST",
      "CITY": "WINTHROP",
      "STATE": "MA",
      "ZIP": 2152,
      "ZIP4": "1325",
      "CONAME": "COVE CONVENIENCE",
      "SCORE": 51
    },
    {
      "ADDR": "42 WOODSIDE AVE",
      "CITY": "WINTHROP",
      "STATE": "MA",
      "ZIP": 2152,
      "ZIP4": "2920",
      "CONAME": "EYE CENTER",
      "SCORE": 25
    },
    {
      "ADDR": "52 CREST AVE # 6",
      "CITY": "WINTHROP",
      "STATE": "MA",
      "ZIP": 2152,
      "ZIP4": "1058",
      "CONAME": "FOOT & ANKLE ASSOC",
      "SCORE": 0
    },
    {
      "ADDR": "144 MYSTIC AVE",
      "CITY": "MEDFORD",
      "STATE": "MA",
      "ZIP": 2155,
      "ZIP4": "4651",
      "CONAME": "JDV AUTO CLINIC",
      "SCORE": 6
    },
    {
      "ADDR": "187 SHARON ST",
      "CITY": "MEDFORD",
      "STATE": "MA",
      "ZIP": 2155,
      "ZIP4": "3540",
      "CONAME": "PEDRICK MECHANICAL SVC INC",
      "SCORE": 64
    },
    {
      "ADDR": "165 QUINCY AVE",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2169,
      "ZIP4": "6721",
      "CONAME": "EXECUTIVE AUTO GLASS",
      "SCORE": 54
    },
    {
      "ADDR": "1305 HANCOCK ST",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2169,
      "ZIP4": "5119",
      "CONAME": "QUINCY ELECTIONS",
      "SCORE": 94
    },
    {
      "ADDR": "26 QUINCY AVE",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2169,
      "ZIP4": "6712",
      "CONAME": "QUINCY FIRE DEPT-ALARM SUPT",
      "SCORE": 80
    },
    {
      "ADDR": "26 QUINCY AVE",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2169,
      "ZIP4": "6712",
      "CONAME": "QUINCY FIRE DEPT-PERSONNEL",
      "SCORE": 58
    },
    {
      "ADDR": "1305 HANCOCK ST",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2169,
      "ZIP4": "5119",
      "CONAME": "QUINCY PLANNING BOARD INFO",
      "SCORE": 81
    },
    {
      "ADDR": "1610 HANCOCK ST",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2169,
      "ZIP4": "5206",
      "CONAME": "US ARMY RECRUITING",
      "SCORE": 3
    },
    {
      "ADDR": "QUINCY SHORE DR",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2169,
      "ZIP4": "[Null]",
      "CONAME": "WOLLASTON BEACH RESERVATION",
      "SCORE": 97
    },
    {
      "ADDR": "81 PROSPECT AVE",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2170,
      "ZIP4": "4016",
      "CONAME": "CORNERSTONE CAMPUS PRE-SCHOOL",
      "SCORE": 31
    },
    {
      "ADDR": "1 MERRYMOUNT PKWY",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2170,
      "ZIP4": "3836",
      "CONAME": "QUINCY FIRE-PERSONAL DEPT",
      "SCORE": 39
    },
    {
      "ADDR": "1 MERRYMOUNT PKWY",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2170,
      "ZIP4": "3836",
      "CONAME": "QUINCY TRAFFIC ENGINEER",
      "SCORE": 20
    },
    {
      "ADDR": "100 NEWPORT AVE",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2171,
      "ZIP4": "[Null]",
      "CONAME": "BLUE CROSS & BLUE SHIELD",
      "SCORE": 22
    },
    {
      "ADDR": "304 VICTORY RD",
      "CITY": "QUINCY",
      "STATE": "MA",
      "ZIP": 2171,
      "ZIP4": "3122",
      "CONAME": "MARINA BAY CLEANERS",
      "SCORE": 14
    },
    {
      "ADDR": "21 AVON ST",
      "CITY": "STONEHAM",
      "STATE": "MA",
      "ZIP": 2180,
      "ZIP4": "3805",
      "CONAME": "GOLINI BUILDERS",
      "SCORE": 62
    },
    {
      "ADDR": "44 POMEWORTH ST",
      "CITY": "STONEHAM",
      "STATE": "MA",
      "ZIP": 2180,
      "ZIP4": "1221",
      "CONAME": "MAG MELL SOLUTIONS INC",
      "SCORE": 66
    },
    {
      "ADDR": "6 WATER ST",
      "CITY": "BRAINTREE",
      "STATE": "MA",
      "ZIP": 2184,
      "ZIP4": "8625",
      "CONAME": "ABSOLUTE PEST CONTROL",
      "SCORE": 47
    },
    {
      "ADDR": "25 BROW AVE",
      "CITY": "BRAINTREE",
      "STATE": "MA",
      "ZIP": 2184,
      "ZIP4": "6309",
      "CONAME": "MEETING HOUSE MONTESSORI",
      "SCORE": 19
    },
    {
      "ADDR": "629 RANDOLPH AVE",
      "CITY": "MILTON",
      "STATE": "MA",
      "ZIP": 2186,
      "ZIP4": "4509",
      "CONAME": "PUBLIC WORKS YARD",
      "SCORE": 48
    },
    {
      "ADDR": "220 BROAD ST",
      "CITY": "WEYMOUTH",
      "STATE": "MA",
      "ZIP": 2188,
      "ZIP4": "2940",
      "CONAME": "CONNELL POOL",
      "SCORE": 89
    },
    {
      "ADDR": "12 CHANNEL ST # 804",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2210,
      "ZIP4": "2323",
      "CONAME": "MAGELLAN DISTRIBUTION CORP",
      "SCORE": 48
    },
    {
      "ADDR": "22 THOMSON PL",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2210,
      "ZIP4": "1212",
      "CONAME": "THOMSON MARKETING RESOURCES",
      "SCORE": 68
    },
    {
      "ADDR": "31 PETERBOROUGH ST",
      "CITY": "BOSTON",
      "STATE": "MA",
      "ZIP": 2215,
      "ZIP4": "4442",
      "CONAME": "HAJJAR REALTY & MANAGEMENT",
      "SCORE": 25
    },
    {
      "ADDR": "38 COLLEGE DR",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "4644",
      "CONAME": "BROCKTON CITY COUNCIL",
      "SCORE": 79
    },
    {
      "ADDR": "10 FATHER KENNEY WAY",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "5202",
      "CONAME": "BROCKTON COUNCIL ON AGING",
      "SCORE": 50
    },
    {
      "ADDR": "830 OAK ST # 105W",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "1168",
      "CONAME": "CARITAS GOOD SAMARITAN MED",
      "SCORE": 42
    },
    {
      "ADDR": "215 MAIN ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "4306",
      "CONAME": "COUNTY COURTS",
      "SCORE": 68
    },
    {
      "ADDR": "830 OAK ST # 201W",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "1191",
      "CONAME": "GOOD SAMARITAN MEDICAL PRCTC",
      "SCORE": 52
    },
    {
      "ADDR": "215 MAIN ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "4306",
      "CONAME": "HOUSING COURT",
      "SCORE": 88
    },
    {
      "ADDR": "192 OAK ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "1354",
      "CONAME": "JACY'S",
      "SCORE": 13
    },
    {
      "ADDR": "215 MAIN ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "4306",
      "CONAME": "JUVENILE COURT CLERK",
      "SCORE": 55
    },
    {
      "ADDR": "53 N MAIN ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "3906",
      "CONAME": "LA CASA OF LATINO",
      "SCORE": 94
    },
    {
      "ADDR": "70 WESTGATE DR",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "1811",
      "CONAME": "PET SUPPLIES PLUS",
      "SCORE": 33
    },
    {
      "ADDR": "215 MAIN ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "4306",
      "CONAME": "PROBATE & FAMILY COURT",
      "SCORE": 88
    },
    {
      "ADDR": "139 PLEASANT ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "3841",
      "CONAME": "PROGRESSO MARKET INC",
      "SCORE": 83
    },
    {
      "ADDR": "72 BELMONT ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "5248",
      "CONAME": "SUPERIOR COURT",
      "SCORE": 39
    },
    {
      "ADDR": "180 OAK ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "1354",
      "CONAME": "TIME OUT CAFE",
      "SCORE": 18
    },
    {
      "ADDR": "529 PEARL ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "2825",
      "CONAME": "WAYNE R MATHEWS",
      "SCORE": 67
    },
    {
      "ADDR": "1285 BELMONT ST",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "4440",
      "CONAME": "WELLS FARGO FINANCIAL ACCPTNCE",
      "SCORE": 44
    },
    {
      "ADDR": "1285 BELMONT ST # 1285",
      "CITY": "BROCKTON",
      "STATE": "MA",
      "ZIP": 2301,
      "ZIP4": "4440",
      "CONAME": "WESTSIDE MINI MART",
      "SCORE": 79
    },
    {
      "ADDR": "225 BODWELL ST",
      "CITY": "AVON",
      "STATE": "MA",
      "ZIP": 2322,
      "ZIP4": "1121",
      "CONAME": "CUMING CORP",
      "SCORE": 30
    },
    {
      "ADDR": "75 MAIN ST",
      "CITY": "BRIDGEWATER",
      "STATE": "MA",
      "ZIP": 2324,
      "ZIP4": "1498",
      "CONAME": "BRIDGEWATER CREDIT UNION",
      "SCORE": 89
    },
    {
      "ADDR": "1446 SOUTH ST",
      "CITY": "BRIDGEWATER",
      "STATE": "MA",
      "ZIP": 2324,
      "ZIP4": "3517",
      "CONAME": "METROPOLITAN MASONRY & BLDG",
      "SCORE": 20
    },
    {
      "ADDR": "2 MONTELLO ST",
      "CITY": "CARVER",
      "STATE": "MA",
      "ZIP": 2330,
      "ZIP4": "1026",
      "CONAME": "ALDERSLEY'S CARVER APPLIANCE",
      "SCORE": 14
    },
    {
      "ADDR": "22 DEPOT ST",
      "CITY": "DUXBURY",
      "STATE": "MA",
      "ZIP": 2332,
      "ZIP4": "4453",
      "CONAME": "ARTICA GALLERY",
      "SCORE": 47
    },
    {
      "ADDR": "182 SUMMER ST",
      "CITY": "DUXBURY",
      "STATE": "MA",
      "ZIP": 2332,
      "ZIP4": "4205",
      "CONAME": "BACK & BODY PILATES YOGA STDIO",
      "SCORE": 80
    },
    {
      "ADDR": "546 PLYMOUTH ST",
      "CITY": "HALIFAX",
      "STATE": "MA",
      "ZIP": 2338,
      "ZIP4": "2254",
      "CONAME": "HALIFAX BAIT & TACKLE",
      "SCORE": 72
    },
    {
      "ADDR": "965 WASHINGTON ST",
      "CITY": "HANOVER",
      "STATE": "MA",
      "ZIP": 2339,
      "ZIP4": "1614",
      "CONAME": "EASTCOAST FIREPLACE & STOVE",
      "SCORE": 70
    },
    {
      "ADDR": "803 WASHINGTON ST",
      "CITY": "HANOVER",
      "STATE": "MA",
      "ZIP": 2339,
      "ZIP4": "1610",
      "CONAME": "VERTICALS ETC FACTORY OUTLET",
      "SCORE": 44
    },
    {
      "ADDR": "849 STATE RD",
      "CITY": "MANOMET",
      "STATE": "MA",
      "ZIP": 2345,
      "ZIP4": "[Null]",
      "CONAME": "MANN PLUMBING & HEATING CO",
      "SCORE": 75
    },
    {
      "ADDR": "36 POINT RD",
      "CITY": "MANOMET",
      "STATE": "MA",
      "ZIP": 2345,
      "ZIP4": "[Null]",
      "CONAME": "MANOMET ANIMAL HOSPITAL",
      "SCORE": 50
    },
    {
      "ADDR": "4 BARQUE DR",
      "CITY": "MANOMET",
      "STATE": "MA",
      "ZIP": 2345,
      "ZIP4": "[Null]",
      "CONAME": "PILGRIM FLOOR CO",
      "SCORE": 94
    },
    {
      "ADDR": "101 CAPE COD AVE",
      "CITY": "MANOMET",
      "STATE": "MA",
      "ZIP": 2345,
      "ZIP4": "[Null]",
      "CONAME": "PLYMOUTH COUNTY HOMES INC",
      "SCORE": 50
    },
    {
      "ADDR": "687 STATE RD",
      "CITY": "MANOMET",
      "STATE": "MA",
      "ZIP": 2345,
      "ZIP4": "[Null]",
      "CONAME": "RICHARD KOTWAS DDS",
      "SCORE": 63
    },
    {
      "ADDR": "2 POINT RD",
      "CITY": "MANOMET",
      "STATE": "MA",
      "ZIP": 2345,
      "ZIP4": "[Null]",
      "CONAME": "US POST OFFICE",
      "SCORE": 56
    },
    {
      "ADDR": "728 STATE RD",
      "CITY": "MANOMET",
      "STATE": "MA",
      "ZIP": 2345,
      "ZIP4": "[Null]",
      "CONAME": "WILLIAM F NOLAN INSURANCE",
      "SCORE": 82
    },
    {
      "ADDR": "35 KATRINA RD",
      "CITY": "MIDDLEBORO",
      "STATE": "MA",
      "ZIP": 2346,
      "ZIP4": "2648",
      "CONAME": "LOVSTAD FLOORS INC",
      "SCORE": 68
    },
    {
      "ADDR": "105 KINGMAN ST",
      "CITY": "LAKEVILLE",
      "STATE": "MA",
      "ZIP": 2347,
      "ZIP4": "1715",
      "CONAME": "BAY STATE SEWAGE DISPOSAL INC",
      "SCORE": 43
    },
    {
      "ADDR": "121 COUNTY ST",
      "CITY": "LAKEVILLE",
      "STATE": "MA",
      "ZIP": 2347,
      "ZIP4": "1811",
      "CONAME": "BILL BACHANT BUILDERS INC",
      "SCORE": 9
    },
    {
      "ADDR": "108 HIGHLAND RD",
      "CITY": "LAKEVILLE",
      "STATE": "MA",
      "ZIP": 2347,
      "ZIP4": "1829",
      "CONAME": "LEATHER MEDIC",
      "SCORE": 86
    },
    {
      "ADDR": "10 RIVERSIDE DR # 105",
      "CITY": "LAKEVILLE",
      "STATE": "MA",
      "ZIP": 2347,
      "ZIP4": "1689",
      "CONAME": "MUSCULAR DYSTROPHY ASSN",
      "SCORE": 52
    },
    {
      "ADDR": "[Null]",
      "CITY": "ABINGTON",
      "STATE": "MA",
      "ZIP": 2351,
      "ZIP4": "[Null]",
      "CONAME": "CUSTOM KITCHENS & CABINETRY",
      "SCORE": 48
    },
    {
      "ADDR": "168 WASHINGTON ST",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "1121",
      "CONAME": "A A WILL MATERIALS CORP",
      "SCORE": 34
    },
    {
      "ADDR": "28 HILLINGTON DR",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "2652",
      "CONAME": "AMERICAN HEALTH RESOURCES",
      "SCORE": 21
    },
    {
      "ADDR": "17 SUMMER ST",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "2133",
      "CONAME": "B & B CONSTRUCTION",
      "SCORE": 56
    },
    {
      "ADDR": "507 FOUNDRY ST",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "2716",
      "CONAME": "BANK OF EASTON",
      "SCORE": 38
    },
    {
      "ADDR": "700 DEPOT ST",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "2704",
      "CONAME": "DUNKIN DONUTS",
      "SCORE": 56
    },
    {
      "ADDR": "101 MAIN ST",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "1406",
      "CONAME": "EASTON LEARNING ADVENTURES",
      "SCORE": 46
    },
    {
      "ADDR": "71 WASHINGTON ST",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "1010",
      "CONAME": "ENTERPRISE LANDSCAPING",
      "SCORE": 48
    },
    {
      "ADDR": "122 RANDALL ST",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "2200",
      "CONAME": "GAMMONS HEATING & AIR COND",
      "SCORE": 91
    },
    {
      "ADDR": "14 CENTER ST",
      "CITY": "NORTH EASTON",
      "STATE": "MA",
      "ZIP": 2356,
      "ZIP4": "1880",
      "CONAME": "PIRES & SONS HARDWARE",
      "SCORE": 65
    },
    {
      "ADDR": "8 EDWARD DR",
      "CITY": "PEMBROKE",
      "STATE": "MA",
      "ZIP": 2359,
      "ZIP4": "3259",
      "CONAME": "BONAFIDE HOME INSPECTIONS",
      "SCORE": 39
    },
    {
      "ADDR": "18 COLUMBIA RD",
      "CITY": "PEMBROKE",
      "STATE": "MA",
      "ZIP": 2359,
      "ZIP4": "1824",
      "CONAME": "ENHANCED SERVICE PROVIDERS",
      "SCORE": 56
    },
    {
      "ADDR": "254 CHURCH ST",
      "CITY": "PEMBROKE",
      "STATE": "MA",
      "ZIP": 2359,
      "ZIP4": "1977",
      "CONAME": "GUNTHER TOOTIES BAGEL CO INC",
      "SCORE": 1
    },
    {
      "ADDR": "507 STATE RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "5185",
      "CONAME": "7-ELEVEN FOOD STORE",
      "SCORE": 14
    },
    {
      "ADDR": "95 CAMELOT DR # 1B",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "3024",
      "CONAME": "ALARM CONCEPTS",
      "SCORE": 74
    },
    {
      "ADDR": "108 SANDWICH ST",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "2401",
      "CONAME": "ANTIQUES AT 108 SANDWICH ST",
      "SCORE": 44
    },
    {
      "ADDR": "HILLSIDE DR",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "[Null]",
      "CONAME": "CENTER FOR LEISURE ACTIVITY",
      "SCORE": 19
    },
    {
      "ADDR": "6 RESNIK RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "4873",
      "CONAME": "COMMERCIAL MASONRY CORP",
      "SCORE": 66
    },
    {
      "ADDR": "20 HEDGES POND RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "2216",
      "CONAME": "J D WELDING",
      "SCORE": 80
    },
    {
      "ADDR": "2291 STATE RD # 7",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "5199",
      "CONAME": "K C'S DRAPERY & BLIND DESIGN",
      "SCORE": 93
    },
    {
      "ADDR": "31 HOWLAND",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "[Null]",
      "CONAME": "MAC FARLANE MOTORS",
      "SCORE": 81
    },
    {
      "ADDR": "70 MANOMET POINT RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "1126",
      "CONAME": "MANOMET ELEMENTARY SCHOOL",
      "SCORE": 6
    },
    {
      "ADDR": "590 STATE RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "5107",
      "CONAME": "MAYFLOWER PACKAGE STORE INC",
      "SCORE": 35
    },
    {
      "ADDR": "26 SAMOSET AVE",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "1104",
      "CONAME": "MICRO BLEND",
      "SCORE": 32
    },
    {
      "ADDR": "2 COD RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "1230",
      "CONAME": "MILES D HERMAN",
      "SCORE": 78
    },
    {
      "ADDR": "80 CORNISH FIELD RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "3288",
      "CONAME": "PINEWOODS DANCE CAMP",
      "SCORE": 12
    },
    {
      "ADDR": "529 STATE RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "5110",
      "CONAME": "PLYMOUTH FLORIST",
      "SCORE": 11
    },
    {
      "ADDR": "10 SEVER ST",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "3908",
      "CONAME": "POWDERPOINT CREATIVE INC",
      "SCORE": 29
    },
    {
      "ADDR": "506 STATE RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "5153",
      "CONAME": "U-HAUL CO",
      "SCORE": 53
    },
    {
      "ADDR": "1067 OLD SANDWICH RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "2526",
      "CONAME": "VALINOR FARM",
      "SCORE": 43
    },
    {
      "ADDR": "130 TAYLOR AVE",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "1073",
      "CONAME": "WHITE HORSE BEACH MOTEL",
      "SCORE": 34
    },
    {
      "ADDR": "190 W LONG POND RD",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2360,
      "ZIP4": "3240",
      "CONAME": "WIND IN THE PINES GIRLS SCOUT",
      "SCORE": 1
    },
    {
      "ADDR": "PO BOX 1899",
      "CITY": "PLYMOUTH",
      "STATE": "MA",
      "ZIP": 2361,
      "ZIP4": "[Null]",
      "CONAME": "CYGNETWORKS INC",
      "SCORE": 71
    },
    {
      "ADDR": "33 WARREN AVE",
      "CITY": "RANDOLPH",
      "STATE": "MA",
      "ZIP": 2368,
      "ZIP4": "3506",
      "CONAME": "H & R BLOCK TAX SVC",
      "SCORE": 39
    },
    {
      "ADDR": "42 THOMAS PATTEN DR",
      "CITY": "RANDOLPH",
      "STATE": "MA",
      "ZIP": 2368,
      "ZIP4": "3975",
      "CONAME": "LANDA & ALTSHER",
      "SCORE": 98
    },
    {
      "ADDR": "41 S MAIN ST",
      "CITY": "RANDOLPH",
      "STATE": "MA",
      "ZIP": 2368,
      "ZIP4": "4824",
      "CONAME": "TOWN OF RANDOLPH",
      "SCORE": 42
    },
    {
      "ADDR": "863 WASHINGTON ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1924",
      "CONAME": "A JANITOR'S CLOSET",
      "SCORE": 58
    },
    {
      "ADDR": "855 WASHINGTON ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1133",
      "CONAME": "A M RONKIN",
      "SCORE": 91
    },
    {
      "ADDR": "632 WASHINGTON ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1169",
      "CONAME": "EASTON CHIROPRACTIC OFFICES",
      "SCORE": 94
    },
    {
      "ADDR": "125 EASTMAN ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1212",
      "CONAME": "EASTON CONCRETE CUTTING DRILL",
      "SCORE": 18
    },
    {
      "ADDR": "7 LOIS LN",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1191",
      "CONAME": "EDWARD'S MOVERS",
      "SCORE": 56
    },
    {
      "ADDR": "795 WASHINGTON ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1137",
      "CONAME": "FOLAN WATERPROOFING & CONSTR",
      "SCORE": 84
    },
    {
      "ADDR": "863 WASHINGTON ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1924",
      "CONAME": "G & S CLEANING SVC",
      "SCORE": 63
    },
    {
      "ADDR": "19 BELMONT ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1908",
      "CONAME": "I WANNA HOLD YOUR HAND",
      "SCORE": 66
    },
    {
      "ADDR": "594 WASHINGTON ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1918",
      "CONAME": "MURPHY & CO",
      "SCORE": 87
    },
    {
      "ADDR": "447 TURNPIKE ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1778",
      "CONAME": "NOAH'S PETS",
      "SCORE": 42
    },
    {
      "ADDR": "580 WASHINGTON ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1184",
      "CONAME": "PEOPLES MORTGAGE CORP",
      "SCORE": 10
    },
    {
      "ADDR": "859 WASHINGTON ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1133",
      "CONAME": "POWERS & WAITT",
      "SCORE": 9
    },
    {
      "ADDR": "559 FOUNDRY ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1319",
      "CONAME": "PROGRESSIVE RE APPRAISAL SVC",
      "SCORE": 53
    },
    {
      "ADDR": "32 NORFOLK AVE",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1907",
      "CONAME": "STONEBRIDGE REALTY TRUST",
      "SCORE": 94
    },
    {
      "ADDR": "594 TURNPIKE ST",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1797",
      "CONAME": "STORAGE USA",
      "SCORE": 99
    },
    {
      "ADDR": "448 TURNPIKE ST # 2-5",
      "CITY": "SOUTH EASTON",
      "STATE": "MA",
      "ZIP": 2375,
      "ZIP4": "1776",
      "CONAME": "WALTER KORZENIOWSKI LAW OFFICE",
      "SCORE": 98
    },
    {
      "ADDR": "453 E CENTER ST",
      "CITY": "WEST BRIDGEWATER",
      "STATE": "MA",
      "ZIP": 2379,
      "ZIP4": "1815",
      "CONAME": "ELECTRO-VAC",
      "SCORE": 4
    },
    {
      "ADDR": "250 MATFIELD ST",
      "CITY": "WEST BRIDGEWATER",
      "STATE": "MA",
      "ZIP": 2379,
      "ZIP4": "1314",
      "CONAME": "J & J HOME IMPROVEMENT",
      "SCORE": 91
    },
    {
      "ADDR": "7 CYR ST",
      "CITY": "WEST BRIDGEWATER",
      "STATE": "MA",
      "ZIP": 2379,
      "ZIP4": "1303",
      "CONAME": "WEST BRIDGEWATER WATER DEPT",
      "SCORE": 30
    },
    {
      "ADDR": "119 WHITE HORSE RD",
      "CITY": "WHITE HORSE BCH",
      "STATE": "MA",
      "ZIP": 2381,
      "ZIP4": "[Null]",
      "CONAME": "US POST OFFICE",
      "SCORE": 11
    },
    {
      "ADDR": "597 WASHINGTON ST",
      "CITY": "WHITMAN",
      "STATE": "MA",
      "ZIP": 2382,
      "ZIP4": "1337",
      "CONAME": "BEAVER BROOK CRAFTS",
      "SCORE": 85
    },
    {
      "ADDR": "20 WILSON RD",
      "CITY": "LEXINGTON",
      "STATE": "MA",
      "ZIP": 2421,
      "ZIP4": "7427",
      "CONAME": "S & T SPORTS MANAGEMENT INC",
      "SCORE": 47
    },
    {
      "ADDR": "1 BROOKLINE PL # 602",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2445,
      "ZIP4": "7277",
      "CONAME": "BOSTON IVF",
      "SCORE": 32
    },
    {
      "ADDR": "1908 BEACON ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2445,
      "ZIP4": "1901",
      "CONAME": "CLEVELAND CIRCLE DENTAL",
      "SCORE": 3
    },
    {
      "ADDR": "382 WASHINGTON ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2445,
      "ZIP4": "6852",
      "CONAME": "JEFFREY JAMPEL",
      "SCORE": 75
    },
    {
      "ADDR": "96 BOYLSTON ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2445,
      "ZIP4": "7601",
      "CONAME": "LAURIE M BRANT",
      "SCORE": 43
    },
    {
      "ADDR": "112 SUMNER RD",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2445,
      "ZIP4": "6112",
      "CONAME": "WAINHOUSE RESEARCH & CNSLTNG",
      "SCORE": 98
    },
    {
      "ADDR": "2 SUMMIT AVE",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "2365",
      "CONAME": "AFFILIATED INSURANCE AGENTS",
      "SCORE": 14
    },
    {
      "ADDR": "17 LITTELL RD",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "6504",
      "CONAME": "BED & BAGEL",
      "SCORE": 51
    },
    {
      "ADDR": "75 FRANCIS ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "6638",
      "CONAME": "BRIGHAM & WOMENS HOSP",
      "SCORE": 92
    },
    {
      "ADDR": "20 CHAPEL ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "7458",
      "CONAME": "CENTRAL PARKING AT LONGWOOD",
      "SCORE": 55
    },
    {
      "ADDR": "1093 BEACON ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "5695",
      "CONAME": "CHIPPA MARTIN & ASSOC",
      "SCORE": 43
    },
    {
      "ADDR": "209 HARVARD ST # 402",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "5005",
      "CONAME": "GARY R LOGIN DDS",
      "SCORE": 76
    },
    {
      "ADDR": "229 HARVARD ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "5004",
      "CONAME": "HEAVEY HOULIHAN KRAFT CARDINAL",
      "SCORE": 61
    },
    {
      "ADDR": "83 IVY ST # 14",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "4071",
      "CONAME": "HORACE T ALLEN",
      "SCORE": 22
    },
    {
      "ADDR": "269 HARVARD ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "2908",
      "CONAME": "IRINA FIGO",
      "SCORE": 69
    },
    {
      "ADDR": "233 HARVARD ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "5069",
      "CONAME": "JUDITH ARONS",
      "SCORE": 92
    },
    {
      "ADDR": "300 HARVARD ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "2917",
      "CONAME": "K-B TOYS",
      "SCORE": 10
    },
    {
      "ADDR": "1368 BEACON ST # 105",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "2800",
      "CONAME": "LEE DENTAL ASSOC",
      "SCORE": 10
    },
    {
      "ADDR": "496 HARVARD ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "2434",
      "CONAME": "LOIS H ARTHUR & ASSOC",
      "SCORE": 16
    },
    {
      "ADDR": "1223 BEACON ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "5302",
      "CONAME": "LONGWOOD OTOLARYNGOLOGY",
      "SCORE": 69
    },
    {
      "ADDR": "415 HARVARD ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "2903",
      "CONAME": "OZZIE'S PIZZA & CAFE",
      "SCORE": 88
    },
    {
      "ADDR": "1294 BEACON ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "3796",
      "CONAME": "PELHAM DRUG CORP",
      "SCORE": 37
    },
    {
      "ADDR": "124 HARVARD ST",
      "CITY": "BROOKLINE",
      "STATE": "MA",
      "ZIP": 2446,
      "ZIP4": "6454",
      "CONAME": "THODA KUPFERBER",
      "SCORE": 52
    },
    {
      "ADDR": "950 WINTER ST # 4600",
      "CITY": "WALTHAM",
      "STATE": "MA",
      "ZIP": 2451,
      "ZIP4": "1409",
      "CONAME": "NORTH BRIDGE VENTURE PARTNERS",
      "SCORE": 34
    },
    {
      "ADDR": "278 CRESCENT ST",
      "CITY": "WALTHAM",
      "STATE": "MA",
      "ZIP": 2453,
      "ZIP4": "3417",
      "CONAME": "ADCO PLUMBING & HEATING",
      "SCORE": 86
    },
    {
      "ADDR": "232 CALIFORNIA ST",
      "CITY": "NEWTON",
      "STATE": "MA",
      "ZIP": 2458,
      "ZIP4": "1009",
      "CONAME": "PROFESSIONAL BOOKS",
      "SCORE": 96
    },
    {
      "ADDR": "71 UNION ST",
      "CITY": "NEWTON",
      "STATE": "MA",
      "ZIP": 2459,
      "ZIP4": "2224",
      "CONAME": "INDIA PARADISE",
      "SCORE": 0
    },
    {
      "ADDR": "31 CLYDE ST",
      "CITY": "NEWTON",
      "STATE": "MA",
      "ZIP": 2460,
      "ZIP4": "2208",
      "CONAME": "SECKLER LEGAL RECRUITING",
      "SCORE": 45
    },
    {
      "ADDR": "88 NEEDHAM ST",
      "CITY": "NEWTON",
      "STATE": "MA",
      "ZIP": 2461,
      "ZIP4": "1616",
      "CONAME": "FOR EYES OPTICAL CO",
      "SCORE": 100
    },
    {
      "ADDR": "1587 CENTRE ST",
      "CITY": "NEWTON",
      "STATE": "MA",
      "ZIP": 2461,
      "ZIP4": "1256",
      "CONAME": "RITA STULIN ASSOCS",
      "SCORE": 21
    },
    {
      "ADDR": "293 ELLIOT ST",
      "CITY": "NEWTON",
      "STATE": "MA",
      "ZIP": 2464,
      "ZIP4": "1201",
      "CONAME": "RICHMOND GLASS WORKS",
      "SCORE": 9
    },
    {
      "ADDR": "156 MOUNT VERNON ST",
      "CITY": "NEWTON",
      "STATE": "MA",
      "ZIP": 2465,
      "ZIP4": "2517",
      "CONAME": "QUAN RESEARCH INC",
      "SCORE": 68
    },
    {
      "ADDR": "1293 WASHINGTON ST",
      "CITY": "WEST NEWTON",
      "STATE": "MA",
      "ZIP": 2465,
      "ZIP4": "2011",
      "CONAME": "RESTAURANT ARTS INC",
      "SCORE": 5
    },
    {
      "ADDR": "66 FAIRWAY DR",
      "CITY": "NEWTON",
      "STATE": "MA",
      "ZIP": 2465,
      "ZIP4": "1715",
      "CONAME": "SPECTRAL ENGINEERING",
      "SCORE": 45
    },
    {
      "ADDR": "22 WINONA ST",
      "CITY": "AUBURNDALE",
      "STATE": "MA",
      "ZIP": 2466,
      "ZIP4": "1418",
      "CONAME": "SYNNOTT ARCHITECTS INC",
      "SCORE": 53
    },
    {
      "ADDR": "372 APPLETON ST",
      "CITY": "ARLINGTON",
      "STATE": "MA",
      "ZIP": 2476,
      "ZIP4": "7048",
      "CONAME": "TECH APPLICATIONS & SOLUTIONS",
      "SCORE": 69
    },
    {
      "ADDR": "49 HILL RD # 4",
      "CITY": "BELMONT",
      "STATE": "MA",
      "ZIP": 2478,
      "ZIP4": "4325",
      "CONAME": "DANIEL ASSOCIATES",
      "SCORE": 81
    },
    {
      "ADDR": "153 WATSON RD",
      "CITY": "BELMONT",
      "STATE": "MA",
      "ZIP": 2478,
      "ZIP4": "3961",
      "CONAME": "SIGMA PARTNERS",
      "SCORE": 48
    },
    {
      "ADDR": "70 WALNUT ST",
      "CITY": "WELLESLEY",
      "STATE": "MA",
      "ZIP": 2481,
      "ZIP4": "2102",
      "CONAME": "AON CONSULTING",
      "SCORE": 63
    },
    {
      "ADDR": "167 WORCESTER ST # 209",
      "CITY": "WELLESLEY HILLS",
      "STATE": "MA",
      "ZIP": 2481,
      "ZIP4": "3613",
      "CONAME": "FINN WARNKE & GAYTON",
      "SCORE": 76
    },
    {
      "ADDR": "40 WASHINGTON ST # 201",
      "CITY": "WELLESLEY",
      "STATE": "MA",
      "ZIP": 2481,
      "ZIP4": "1082",
      "CONAME": "MASSACHUSETTS PSYCHIATRIC SOC",
      "SCORE": 8
    },
    {
      "ADDR": "20 WILLIAM ST # 160",
      "CITY": "WELLESLEY",
      "STATE": "MA",
      "ZIP": 2481,
      "ZIP4": "4125",
      "CONAME": "WILMARK GROUP",
      "SCORE": 12
    },
    {
      "ADDR": "554 WASHINGTON ST # 12",
      "CITY": "WELLESLEY",
      "STATE": "MA",
      "ZIP": 2482,
      "ZIP4": "6421",
      "CONAME": "FOCUS",
      "SCORE": 3
    },
    {
      "ADDR": "1410 HIGHLAND AVE # 204",
      "CITY": "NEEDHAM",
      "STATE": "MA",
      "ZIP": 2492,
      "ZIP4": "2617",
      "CONAME": "PERMINDER DHILLON MD",
      "SCORE": 74
    },
    {
      "ADDR": "1471 HIGHLAND AVE",
      "CITY": "NEEDHAM",
      "STATE": "MA",
      "ZIP": 2492,
      "ZIP4": "2605",
      "CONAME": "SAMOSET HOUSE-DELTA PROJECTS",
      "SCORE": 26
    },
    {
      "ADDR": "14 OAK ST",
      "CITY": "NEEDHAM",
      "STATE": "MA",
      "ZIP": 2492,
      "ZIP4": "2402",
      "CONAME": "SB INC",
      "SCORE": 29
    },
    {
      "ADDR": "475 HILLSIDE AVE",
      "CITY": "NEEDHAM",
      "STATE": "MA",
      "ZIP": 2494,
      "ZIP4": "1278",
      "CONAME": "ATLANTIC MODULAR HOMES",
      "SCORE": 65
    },
    {
      "ADDR": "200 RESERVOIR ST # 202",
      "CITY": "NEEDHAM",
      "STATE": "MA",
      "ZIP": 2494,
      "ZIP4": "3146",
      "CONAME": "U S MILLS INC",
      "SCORE": 11
    },
    {
      "ADDR": "BEETLE BUNG COR",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "[Null]",
      "CONAME": "AAA PAINTING",
      "SCORE": 97
    },
    {
      "ADDR": "65 STATE RD",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1871",
      "CONAME": "AQUINNAH GENERAL INFORMATION",
      "SCORE": 82
    },
    {
      "ADDR": "65 STATE RD",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1871",
      "CONAME": "AQUINNAH TOWN ACCOUNTANT",
      "SCORE": 1
    },
    {
      "ADDR": "3 CHURCH ST",
      "CITY": "AQUINNAH",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1521",
      "CONAME": "BOOK-A-BOAT",
      "SCORE": 85
    },
    {
      "ADDR": "MOSHUP TRL",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "[Null]",
      "CONAME": "CROSSWATER LANDSCAPE CO",
      "SCORE": 90
    },
    {
      "ADDR": "65 STATE RD",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1871",
      "CONAME": "GAY HEAD ASSESSORS",
      "SCORE": 42
    },
    {
      "ADDR": "24 STATE RD",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1872",
      "CONAME": "GAY HEAD DUMP",
      "SCORE": 22
    },
    {
      "ADDR": "67 STATE RD",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1871",
      "CONAME": "GAY HEAD POLICE DEPT",
      "SCORE": 48
    },
    {
      "ADDR": "31 BASIN RD",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1839",
      "CONAME": "HARBOR CRAFT SHOP",
      "SCORE": 55
    },
    {
      "ADDR": "[Null]",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "[Null]",
      "CONAME": "KITCHEN PORCH",
      "SCORE": 18
    },
    {
      "ADDR": "20 EDYS ISLAND WAY",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1836",
      "CONAME": "MENEMSHA POLICE SUB STATION",
      "SCORE": 64
    },
    {
      "ADDR": "2 NORTH RD",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "2847",
      "CONAME": "MORGAN STONE & LANDSCAPE SVC",
      "SCORE": 36
    },
    {
      "ADDR": "[Null]",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "[Null]",
      "CONAME": "NORTH SHORE PAINTING",
      "SCORE": 26
    },
    {
      "ADDR": "[Null]",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "[Null]",
      "CONAME": "SORTIE CHARTERS",
      "SCORE": 4
    },
    {
      "ADDR": "18 WEQUOBSQUE RD",
      "CITY": "CHILMARK",
      "STATE": "MA",
      "ZIP": 2535,
      "ZIP4": "1716",
      "CONAME": "WILD ISLAND SCULPTURE & VIDEO",
      "SCORE": 85
    },
    {
      "ADDR": "51 TEATICKET HWY",
      "CITY": "TEATICKET",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "5617",
      "CONAME": "ADMIRALTY INN",
      "SCORE": 64
    },
    {
      "ADDR": "125 FALMOUTH WOODS RD",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "7918",
      "CONAME": "BALLYMEADE RESTAURANT",
      "SCORE": 33
    },
    {
      "ADDR": "44 GRACE CT",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "5109",
      "CONAME": "CREATIVE MASONRY & LANDSCAPE",
      "SCORE": 90
    },
    {
      "ADDR": "11 DEXTER MILL DR",
      "CITY": "TEATICKET",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "5830",
      "CONAME": "D R SULLIVAN BUILDERS",
      "SCORE": 68
    },
    {
      "ADDR": "509 CURRIER RD",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "4208",
      "CONAME": "DAVID A LINDH ELECTRICIAN",
      "SCORE": 14
    },
    {
      "ADDR": "44 CANDACE WAY",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "5137",
      "CONAME": "DELICIOUS DESERTS",
      "SCORE": 79
    },
    {
      "ADDR": "401 CARRIAGE SHOP RD",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "5415",
      "CONAME": "FERREIRA'S EXCAVATION",
      "SCORE": 72
    },
    {
      "ADDR": "165 HERITAGE CIR",
      "CITY": "TEATICKET",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "5722",
      "CONAME": "MC CABE FENCE & CONSTRUCTION",
      "SCORE": 84
    },
    {
      "ADDR": "28 SEASHELL LN",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "6952",
      "CONAME": "MC CARTHY BROTHERS FURNITURE",
      "SCORE": 32
    },
    {
      "ADDR": "435 E FALMOUTH HWY # A",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "6166",
      "CONAME": "OCEAN VILLAGE BOOKS-BOOKS-BOOK",
      "SCORE": 56
    },
    {
      "ADDR": "4 WHISTLERS WAY",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "5541",
      "CONAME": "RIPOSO ASSET MANAGEMENT",
      "SCORE": 8
    },
    {
      "ADDR": "81 RED BROOK RD",
      "CITY": "WAQUOIT",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "7737",
      "CONAME": "STECO ENGINEERING CO",
      "SCORE": 85
    },
    {
      "ADDR": "134 MENAUHANT RD",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "7583",
      "CONAME": "SURFSIDE RESORT",
      "SCORE": 2
    },
    {
      "ADDR": "33 PRINCE HENRY DR",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "5320",
      "CONAME": "T & T PLUMBING",
      "SCORE": 87
    },
    {
      "ADDR": "439 E FALMOUTH HWY",
      "CITY": "EAST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2536,
      "ZIP4": "6166",
      "CONAME": "TEDESCHI FOOD SHOP INC",
      "SCORE": 2
    },
    {
      "ADDR": "3203 CRANBERRY HWY",
      "CITY": "EAST WAREHAM",
      "STATE": "MA",
      "ZIP": 2538,
      "ZIP4": "4707",
      "CONAME": "A J MARKS CO INC",
      "SCORE": 77
    },
    {
      "ADDR": "2991 CRANBERRY HWY",
      "CITY": "EAST WAREHAM",
      "STATE": "MA",
      "ZIP": 2538,
      "ZIP4": "1354",
      "CONAME": "PAYLESS SHOE SOURCE",
      "SCORE": 85
    },
    {
      "ADDR": "PO BOX 875",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "875",
      "CONAME": "A HIGHER KNEAD",
      "SCORE": 66
    },
    {
      "ADDR": "29 S WATER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "ACORN FOUNDATION INC",
      "SCORE": 75
    },
    {
      "ADDR": "21 N WATER ST # A",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "AMERICAN REAL ESTATE",
      "SCORE": 84
    },
    {
      "ADDR": "51 16TH ST S",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "AQUAMARINE",
      "SCORE": 0
    },
    {
      "ADDR": "17 N WATER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "ATLANTIC TRADERS INC",
      "SCORE": 78
    },
    {
      "ADDR": "LOUIS FIELD RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "BACKLASH CHARTERS",
      "SCORE": 90
    },
    {
      "ADDR": "[Null]",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "CHARLES A DAY PLUMBING & HTG",
      "SCORE": 18
    },
    {
      "ADDR": "147 W TISBURY RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "COOP'S BAIT & TACKLE",
      "SCORE": 52
    },
    {
      "ADDR": "140 COOKE ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "D L CORP",
      "SCORE": 24
    },
    {
      "ADDR": "11 N WATER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "DAVID RYAN'S RESTAURANT & CAFE",
      "SCORE": 33
    },
    {
      "ADDR": "10 N LINE RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "DIPPIN DONUTS KITCHEN",
      "SCORE": 97
    },
    {
      "ADDR": "81 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "DISTRICT COURT CLERK",
      "SCORE": 4
    },
    {
      "ADDR": "149 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "DUKES COUNTY DRUG INFO BUREAU",
      "SCORE": 49
    },
    {
      "ADDR": "81 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "DUKES COUNTY REGISTRY OF DEEDS",
      "SCORE": 70
    },
    {
      "ADDR": "MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "DUKES LAW LIBRARY",
      "SCORE": 73
    },
    {
      "ADDR": "KNOLL DR",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "E S SMITH FORM CO",
      "SCORE": 0
    },
    {
      "ADDR": "COOKE",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "EDGARTOWN CEMETERY",
      "SCORE": 89
    },
    {
      "ADDR": "48 CHAPPAQUIDDICK RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "EDGARTOWN FIRE DEPT",
      "SCORE": 42
    },
    {
      "ADDR": "58 N WATER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "EDGARTOWN FREE PUBLIC LIBRARY",
      "SCORE": 49
    },
    {
      "ADDR": "301 MEETING HOUSE WAY",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "EDGARTOWN HIGHWAY DEPT",
      "SCORE": 65
    },
    {
      "ADDR": "138 COOKE ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "EDGARTOWN SEAFOOD MARKET",
      "SCORE": 89
    },
    {
      "ADDR": "38 N WATER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "ESSENSE OF MARTHA'S VINEYARD",
      "SCORE": 71
    },
    {
      "ADDR": "24 BEETLE SWAMP RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "EXECUTIVE SECURITY TRANSPORT",
      "SCORE": 83
    },
    {
      "ADDR": "5 EAGLES NEST RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "FINISH LAB INC",
      "SCORE": 26
    },
    {
      "ADDR": "27 N WATER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "GARDNER COLBY GALLERY",
      "SCORE": 46
    },
    {
      "ADDR": "31 WATCHA PATH",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "HARRINGTON & ASSOC PRINT MGMT",
      "SCORE": 39
    },
    {
      "ADDR": "1 THAMES CT",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "HENLEY'S",
      "SCORE": 80
    },
    {
      "ADDR": "12 HERRING CREEK RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "HERRING CREEK MARINE",
      "SCORE": 95
    },
    {
      "ADDR": "31 N SUMMER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "JOHN STOBART GALLERY",
      "SCORE": 74
    },
    {
      "ADDR": "19 CHURCH ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "LATTANZI'S RESTAURANT",
      "SCORE": 67
    },
    {
      "ADDR": "201 UPPER MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "5927",
      "CONAME": "MARTHA'S VINEYARD INTERNET ADV",
      "SCORE": 17
    },
    {
      "ADDR": "22 EDGARTOWN MEADOWS RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "MARTHAS VINEYARD IRRIGATION",
      "SCORE": 65
    },
    {
      "ADDR": "46 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "MC CARRON & MC CARRON",
      "SCORE": 59
    },
    {
      "ADDR": "AIRPORT INDUSTRIAL PARK",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "MILLENNIUM GLASS",
      "SCORE": 38
    },
    {
      "ADDR": "37 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "PAST & PRESENTS",
      "SCORE": 77
    },
    {
      "ADDR": "9 AIRPORT RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "RESOURCE INC",
      "SCORE": 68
    },
    {
      "ADDR": "106 COOKE ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "REYNOLDS RAPPAPORT & KAPLAN",
      "SCORE": 64
    },
    {
      "ADDR": "282 VINEYARD HAVEN RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "ROSEMARIE HAIGAZIAN LAW OFFICE",
      "SCORE": 53
    },
    {
      "ADDR": "9 WINTER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "SHANE ASSOC LTD",
      "SCORE": 10
    },
    {
      "ADDR": "56 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "SHIRT-TALES",
      "SCORE": 3
    },
    {
      "ADDR": "5 PEASE POINT WAY",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "SHIVERICK INN",
      "SCORE": 72
    },
    {
      "ADDR": "9 MOCKINGBIRD DR",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "SINGULAR SPACES",
      "SCORE": 51
    },
    {
      "ADDR": "RR 1 BOX 328",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "9725",
      "CONAME": "SOARING ADVENTURES INC",
      "SCORE": 43
    },
    {
      "ADDR": "11 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "SOFT AS A GRAPE",
      "SCORE": 76
    },
    {
      "ADDR": "34 N SUMMER ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "ST ANDREWS EPISCOPAL CHURCH",
      "SCORE": 6
    },
    {
      "ADDR": "26 DOCK",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "STEPHEN HUNECK GALLERY",
      "SCORE": 3
    },
    {
      "ADDR": "36 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "8237",
      "CONAME": "SUMMER SHADES",
      "SCORE": 22
    },
    {
      "ADDR": "122 MAIN ST",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "TOMASSIAN & TOMASSIAN",
      "SCORE": 36
    },
    {
      "ADDR": "4 E VINEYARD HAVEN RD # D",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "TRIANGLE FITNESS",
      "SCORE": 55
    },
    {
      "ADDR": "HYE RD",
      "CITY": "EDGARTOWN",
      "STATE": "MA",
      "ZIP": 2539,
      "ZIP4": "[Null]",
      "CONAME": "VINEYARD NUTRITION",
      "SCORE": 37
    },
    {
      "ADDR": "39 HUDSON ST",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3609",
      "CONAME": "AUTO SHIPPERS EXPRESS INC",
      "SCORE": 66
    },
    {
      "ADDR": "683 MAIN ST",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3215",
      "CONAME": "CAPESTYLE BUILDERS",
      "SCORE": 98
    },
    {
      "ADDR": "257 PALMER AVE",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "2883",
      "CONAME": "CARL F CAVOSSA JR EXCAVATION",
      "SCORE": 92
    },
    {
      "ADDR": "14 NYE RD",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3202",
      "CONAME": "COMMERCIAL REALTY SVC",
      "SCORE": 97
    },
    {
      "ADDR": "100 TER HEUN DR",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "2503",
      "CONAME": "COMPANION PERSONAL EMERGENCY",
      "SCORE": 35
    },
    {
      "ADDR": "20 DAVIS STRAITS",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3906",
      "CONAME": "FALMOUTH CO-OPERATIVE BANK",
      "SCORE": 90
    },
    {
      "ADDR": "25 DEPOT AVE",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "2301",
      "CONAME": "GARY TABOR",
      "SCORE": 63
    },
    {
      "ADDR": "54 SOUTH RD",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "2681",
      "CONAME": "HATCHVILLE FARM",
      "SCORE": 10
    },
    {
      "ADDR": "44 SCRANTON AVE",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3540",
      "CONAME": "HAVEY STUDIO OF PHOTOGRAPHY",
      "SCORE": 12
    },
    {
      "ADDR": "874 MAIN ST",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3656",
      "CONAME": "HEARTH 'N KETTLE RESTAURANT",
      "SCORE": 13
    },
    {
      "ADDR": "81 BRAESIDE RD",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3007",
      "CONAME": "INTERNATIONAL BUSN ENVIRONMENT",
      "SCORE": 48
    },
    {
      "ADDR": "121 LOCUST ST",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "2668",
      "CONAME": "LOCUST STREET SIGN CO",
      "SCORE": 90
    },
    {
      "ADDR": "141 FALMOUTH HEIGHTS RD",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3595",
      "CONAME": "MARINE RESEARCH",
      "SCORE": 13
    },
    {
      "ADDR": "70 DAVIS STRAITS",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "3910",
      "CONAME": "MC MENAMY'S FRIED SEAFOODS",
      "SCORE": 74
    },
    {
      "ADDR": "314 GIFFORD ST",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "2945",
      "CONAME": "NANCY SOWELL",
      "SCORE": 80
    },
    {
      "ADDR": "164 MAIN ST",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "2765",
      "CONAME": "QUARTERDECK RESTAURANT",
      "SCORE": 7
    },
    {
      "ADDR": "176 MAIN ST",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2540,
      "ZIP4": "2765",
      "CONAME": "SPINNAKER RECORDS",
      "SCORE": 40
    },
    {
      "ADDR": "PO BOX 504",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2541,
      "ZIP4": "504",
      "CONAME": "RE SI JO DESIGNS",
      "SCORE": 88
    },
    {
      "ADDR": "PO BOX 716",
      "CITY": "FALMOUTH",
      "STATE": "MA",
      "ZIP": 2541,
      "ZIP4": "716",
      "CONAME": "SUEJAN & CO",
      "SCORE": 1
    },
    {
      "ADDR": "OTIS BLDG 5205",
      "CITY": "BUZZARDS BAY",
      "STATE": "MA",
      "ZIP": 2542,
      "ZIP4": "[Null]",
      "CONAME": "US COAST GUARD BASE LIBRARY",
      "SCORE": 37
    },
    {
      "ADDR": "5 NORTH ST",
      "CITY": "WOODS HOLE",
      "STATE": "MA",
      "ZIP": 2543,
      "ZIP4": "1019",
      "CONAME": "SODEXHO",
      "SCORE": 77
    },
    {
      "ADDR": "360 WOODS HOLE RD",
      "CITY": "WOODS HOLE",
      "STATE": "MA",
      "ZIP": 2543,
      "ZIP4": "1536",
      "CONAME": "WOODS HOLE OCEANOGRAPHIC LIBR",
      "SCORE": 41
    },
    {
      "ADDR": "15 TROTTERS LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4190",
      "CONAME": "A-1 TAXI",
      "SCORE": 4
    },
    {
      "ADDR": "[Null]",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "[Null]",
      "CONAME": "AABACUS BOOKKEEPING SVC",
      "SCORE": 48
    },
    {
      "ADDR": "[Null]",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "[Null]",
      "CONAME": "ACK CO",
      "SCORE": 6
    },
    {
      "ADDR": "6 S BEACH ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3550",
      "CONAME": "AFFORDABLE RENTALS",
      "SCORE": 9
    },
    {
      "ADDR": "14 NANCY ANN LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2876",
      "CONAME": "ALL DECKED OUT CUSTOM BUILDERS",
      "SCORE": 76
    },
    {
      "ADDR": "17 N BEACH ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2214",
      "CONAME": "ALTAR ROCK ALARM",
      "SCORE": 32
    },
    {
      "ADDR": "15 COMMERCIAL WHARF",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3808",
      "CONAME": "ALTEST VENTURES INC",
      "SCORE": 57
    },
    {
      "ADDR": "66 CENTER ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3605",
      "CONAME": "ANCHOR INN",
      "SCORE": 16
    },
    {
      "ADDR": "2 UNION ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3845",
      "CONAME": "ART CABINET NANTUCKET",
      "SCORE": 48
    },
    {
      "ADDR": "19 WASHINGTON ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3848",
      "CONAME": "ARTIST'S ASSOC GALLERY",
      "SCORE": 55
    },
    {
      "ADDR": "27 EASY ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3566",
      "CONAME": "ARTIST'S HOUSE GALLERY",
      "SCORE": 85
    },
    {
      "ADDR": "15 S WATER ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3588",
      "CONAME": "ATLANTIC CAFE",
      "SCORE": 12
    },
    {
      "ADDR": "3 TROTTERS LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4174",
      "CONAME": "B & M DISTRIBUTORS INC",
      "SCORE": 73
    },
    {
      "ADDR": "29 MAIN ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3540",
      "CONAME": "BALLOONS ON NANTUCKET",
      "SCORE": 18
    },
    {
      "ADDR": "159 ORANGE ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4024",
      "CONAME": "BAMBER REAL ESTATE",
      "SCORE": 49
    },
    {
      "ADDR": "11 FAIR ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3739",
      "CONAME": "BARNACLE INN",
      "SCORE": 36
    },
    {
      "ADDR": "HARBOR SQ",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "[Null]",
      "CONAME": "BARRY THURSTON'S",
      "SCORE": 3
    },
    {
      "ADDR": "30 N BEACH ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2215",
      "CONAME": "BEACHSIDE RESORT AT NANTUCKET",
      "SCORE": 74
    },
    {
      "ADDR": "29 CENTER ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3657",
      "CONAME": "BEAN",
      "SCORE": 35
    },
    {
      "ADDR": "66 OLD SOUTH RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6092",
      "CONAME": "BERGER & FULLER",
      "SCORE": 51
    },
    {
      "ADDR": "95 OLD SOUTH RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2821",
      "CONAME": "BROTHERS BUILDING-NANTUCKET",
      "SCORE": 49
    },
    {
      "ADDR": "13 OLD SOUTH RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6065",
      "CONAME": "BUSH GKS ANTIQUES",
      "SCORE": 70
    },
    {
      "ADDR": "4 E CHESTNUT ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3510",
      "CONAME": "CABBAGE ROSE INTERIORS",
      "SCORE": 28
    },
    {
      "ADDR": "PO BOX 1328",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "1328",
      "CONAME": "CANVAS WORKS",
      "SCORE": 62
    },
    {
      "ADDR": "[Null]",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "[Null]",
      "CONAME": "CENTER FOR INTEGRATIVE",
      "SCORE": 95
    },
    {
      "ADDR": "4 S WATER ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3530",
      "CONAME": "CHERYL FUDGE DESIGNS",
      "SCORE": 32
    },
    {
      "ADDR": "3 W CREEK RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4031",
      "CONAME": "CINDY HESS DDS",
      "SCORE": 60
    },
    {
      "ADDR": "1 COURTYARD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6106",
      "CONAME": "COLD NOSES",
      "SCORE": 69
    },
    {
      "ADDR": "2 GREGLEN AVE",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2830",
      "CONAME": "COMPUTER ASSISTANCE SVC",
      "SCORE": 61
    },
    {
      "ADDR": "85 SOMERSET RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2762",
      "CONAME": "CONNOR ELECTRIC",
      "SCORE": 30
    },
    {
      "ADDR": "6 S BEACH ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3550",
      "CONAME": "COOK'S SIDEWALK CAFE",
      "SCORE": 17
    },
    {
      "ADDR": "7 EASY ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3565",
      "CONAME": "CROMARTIE STUDIO & GALLERY",
      "SCORE": 19
    },
    {
      "ADDR": "1 CHASE LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4241",
      "CONAME": "DARRENS FOREIGN AUTO REPAIR",
      "SCORE": 28
    },
    {
      "ADDR": "9 AMELIA DR",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6063",
      "CONAME": "DENNIS & ASSOC",
      "SCORE": 3
    },
    {
      "ADDR": "56 MAIN ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3711",
      "CONAME": "DIANA KIM ENGLAND",
      "SCORE": 90
    },
    {
      "ADDR": "57 PROSPECT ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2799",
      "CONAME": "DIANE R PEARL MD",
      "SCORE": 6
    },
    {
      "ADDR": "8 SEIKINNOW PL",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6073",
      "CONAME": "DIANE WITT EDUCATIONAL",
      "SCORE": 78
    },
    {
      "ADDR": "24 POLPIS RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2318",
      "CONAME": "DON ALLEN AUTO SVC INC",
      "SCORE": 60
    },
    {
      "ADDR": "40 MAIN ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3531",
      "CONAME": "ESPRESSO TO GO",
      "SCORE": 96
    },
    {
      "ADDR": "73 ORANGE ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3936",
      "CONAME": "FISHERS FIDDLE CATERING",
      "SCORE": 5
    },
    {
      "ADDR": "6 RACEWAY DR",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4366",
      "CONAME": "FLYING FISH INC",
      "SCORE": 48
    },
    {
      "ADDR": "15 YORK ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3909",
      "CONAME": "GEORGE ALLEN TV",
      "SCORE": 43
    },
    {
      "ADDR": "37 CENTER ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3659",
      "CONAME": "GLIDDEN & GLIDDEN",
      "SCORE": 36
    },
    {
      "ADDR": "9 SALEM ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3835",
      "CONAME": "GRAND UNION CO",
      "SCORE": 56
    },
    {
      "ADDR": "49 HUMMOCK POND RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2634",
      "CONAME": "HARRY'S TOWING & ROAD SVC",
      "SCORE": 7
    },
    {
      "ADDR": "40 MACYS LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2831",
      "CONAME": "HUTCH'S",
      "SCORE": 16
    },
    {
      "ADDR": "7 SUN ISLAND RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3111",
      "CONAME": "ICE MAN OF NANTUCKET",
      "SCORE": 8
    },
    {
      "ADDR": "BUNKER RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "[Null]",
      "CONAME": "ISLAND BARGE INC",
      "SCORE": 23
    },
    {
      "ADDR": "13 BAYBERRY LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2800",
      "CONAME": "ISLAND CONCRETE FORM CO",
      "SCORE": 93
    },
    {
      "ADDR": "29 BROAD ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6116",
      "CONAME": "JARED COFFIN HOUSE",
      "SCORE": 64
    },
    {
      "ADDR": "40 ESSEX RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4390",
      "CONAME": "JOSEPH COMEAU",
      "SCORE": 69
    },
    {
      "ADDR": "5 SOMERSET RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2731",
      "CONAME": "JUDY'S TAXI",
      "SCORE": 92
    },
    {
      "ADDR": "6 AMELIA DR",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6064",
      "CONAME": "KASHKULI ORIENTAL RUGS",
      "SCORE": 24
    },
    {
      "ADDR": "5 TOOMBS CT",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2872",
      "CONAME": "KATHLEEN'S BEAUTY STUDIO",
      "SCORE": 27
    },
    {
      "ADDR": "3 ARROWHEAD DR",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3105",
      "CONAME": "KENNETH C COFFIN INC",
      "SCORE": 13
    },
    {
      "ADDR": "41 NOBADEER FARM RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3101",
      "CONAME": "KENNETH L NORTON",
      "SCORE": 90
    },
    {
      "ADDR": "1 PHEASANT DR",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2779",
      "CONAME": "KERRY HALLAM",
      "SCORE": 54
    },
    {
      "ADDR": "24 BROAD ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3562",
      "CONAME": "LE LANGUEDOC INN & RESTAURANT",
      "SCORE": 38
    },
    {
      "ADDR": "9 OLD SOUTH RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2836",
      "CONAME": "LINDSAY INC CUSTOM BUILDERS",
      "SCORE": 16
    },
    {
      "ADDR": "57 PROSPECT ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2799",
      "CONAME": "M JOHN PAUTIENIS DDS",
      "SCORE": 98
    },
    {
      "ADDR": "134 ORANGE ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4025",
      "CONAME": "MARINE HOME CTR",
      "SCORE": 3
    },
    {
      "ADDR": "149 HUMMOCK POND RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2660",
      "CONAME": "MICHAEL LAMB INC",
      "SCORE": 37
    },
    {
      "ADDR": "5 SPARKS AVE",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3952",
      "CONAME": "MILESTONE ELECTRONICS",
      "SCORE": 16
    },
    {
      "ADDR": "62 MAIN ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3711",
      "CONAME": "MURRAY'S TOGGERY SHOP",
      "SCORE": 73
    },
    {
      "ADDR": "30 MACY LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2899",
      "CONAME": "NANTUCKET AIRLINES",
      "SCORE": 18
    },
    {
      "ADDR": "134 ORANGE ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4018",
      "CONAME": "NANTUCKET BUILDERS ASSOC",
      "SCORE": 16
    },
    {
      "ADDR": "45 SPARKS AVE",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3951",
      "CONAME": "NANTUCKET CHOWDER CO",
      "SCORE": 81
    },
    {
      "ADDR": "3 WASHINGTON AVE",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "1944",
      "CONAME": "NANTUCKET CIGAR CONSULTING",
      "SCORE": 7
    },
    {
      "ADDR": "3 W CREEK RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4031",
      "CONAME": "NANTUCKET DENTAL ASSOC",
      "SCORE": 0
    },
    {
      "ADDR": "64 OLD SOUTH RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6094",
      "CONAME": "NANTUCKET EYE CTR",
      "SCORE": 74
    },
    {
      "ADDR": "4 BARTLETT RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4381",
      "CONAME": "NANTUCKET FAMILY CHIROPRACTIC",
      "SCORE": 25
    },
    {
      "ADDR": "4 INDIA ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3520",
      "CONAME": "NANTUCKET GOURMET",
      "SCORE": 31
    },
    {
      "ADDR": "2 WHALERS LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3560",
      "CONAME": "NANTUCKET HISTORICAL ASSN",
      "SCORE": 95
    },
    {
      "ADDR": "2 S BEACH ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3528",
      "CONAME": "NANTUCKET HOUSE ANTIQUES",
      "SCORE": 19
    },
    {
      "ADDR": "85 BARTLETT RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2707",
      "CONAME": "NANTUCKET MOORINGS",
      "SCORE": 44
    },
    {
      "ADDR": "12 ORANGE ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3755",
      "CONAME": "NANTUCKET PESERVATION TRUST",
      "SCORE": 32
    },
    {
      "ADDR": "71 MILESTONE RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6030",
      "CONAME": "NANTUCKET SAIL REPAIR & CANVAS",
      "SCORE": 73
    },
    {
      "ADDR": "9 NOBSKA WAY",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2723",
      "CONAME": "NANTUCKET WINDOWS",
      "SCORE": 58
    },
    {
      "ADDR": "48 CENTER ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3683",
      "CONAME": "NINA HELLMAN MARINE ANTIQUES",
      "SCORE": 93
    },
    {
      "ADDR": "118 ORANGE ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4018",
      "CONAME": "OLD SPOUTER GALLERY",
      "SCORE": 10
    },
    {
      "ADDR": "61 MAIN ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3727",
      "CONAME": "PACIFIC NATIONAL BANK",
      "SCORE": 68
    },
    {
      "ADDR": "110 WASHINGTON ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3849",
      "CONAME": "PANCOAST LIMITED",
      "SCORE": 3
    },
    {
      "ADDR": "9 S BEACH ST # A",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3525",
      "CONAME": "PARHAM'S GEMS OF THE SEA",
      "SCORE": 84
    },
    {
      "ADDR": "20 HELENS DR",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2764",
      "CONAME": "PLACESETTERS INC",
      "SCORE": 70
    },
    {
      "ADDR": "5 S WATER ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "6108",
      "CONAME": "POLLACKS",
      "SCORE": 9
    },
    {
      "ADDR": "30 APPLETON RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2775",
      "CONAME": "R J KALMAN & SONS INC",
      "SCORE": 91
    },
    {
      "ADDR": "[Null]",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "[Null]",
      "CONAME": "ROBERT S ROSE & ASSOC",
      "SCORE": 7
    },
    {
      "ADDR": "6 SHEEP COMMONS LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2908",
      "CONAME": "ROBERT WILSON GALLERIES",
      "SCORE": 98
    },
    {
      "ADDR": "46 JEFFERSON AVE",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "2272",
      "CONAME": "SANDCASTLE CONSTRUCTION INC",
      "SCORE": 8
    },
    {
      "ADDR": "[Null]",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "[Null]",
      "CONAME": "SANFORD BOAT CO",
      "SCORE": 92
    },
    {
      "ADDR": "50 CLIFF RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3644",
      "CONAME": "SOMETHING NATURAL",
      "SCORE": 39
    },
    {
      "ADDR": "20 FAIR ST",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3705",
      "CONAME": "ST PAUL'S NURSERY SCHOOL",
      "SCORE": 87
    },
    {
      "ADDR": "15 OLD SOUTH WHARF",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3834",
      "CONAME": "STEPHEN HUNECK GALLERY",
      "SCORE": 75
    },
    {
      "ADDR": "11 WAYDALE RD",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4151",
      "CONAME": "STRUCTURE SOLUTIONS",
      "SCORE": 77
    },
    {
      "ADDR": "16 OLD SOUTH WHARF",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3834",
      "CONAME": "TOBIAS GALLERY",
      "SCORE": 32
    },
    {
      "ADDR": "11 RUDDER LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4322",
      "CONAME": "TONY BARONE PLUMBING & HEATING",
      "SCORE": 9
    },
    {
      "ADDR": "6 ASH LN",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "3536",
      "CONAME": "TUCKERNUCK LAND TRUST",
      "SCORE": 17
    },
    {
      "ADDR": "3 VALLEY VIEW DR",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4375",
      "CONAME": "TWIG PERKINS INC",
      "SCORE": 73
    },
    {
      "ADDR": "[Null]",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "[Null]",
      "CONAME": "VICTOR BRANDON CORP",
      "SCORE": 15
    },
    {
      "ADDR": "3 FREEDOM SQ",
      "CITY": "NANTUCKET",
      "STATE": "MA",
      "ZIP": 2554,
      "ZIP4": "4040",
      "CONAME": "WAYNE F HOLMES",
      "SCORE": 27
    },
    {
      "ADDR": "210 NATHAN S ELLIS HWY",
      "CITY": "NORTH FALMOUTH",
      "STATE": "MA",
      "ZIP": 2556,
      "ZIP4": "[Null]",
      "CONAME": "CAPE COD FABRICATIONS INC",
      "SCORE": 71
    },
    {
      "ADDR": "412 ROUTE 28A",
      "CITY": "NORTH FALMOUTH",
      "STATE": "MA",
      "ZIP": 2556,
      "ZIP4": "2802",
      "CONAME": "SILVER LOUNGE RESTAURANT",
      "SCORE": 31
    },
    {
      "ADDR": "PO BOX 535",
      "CITY": "OAK BLUFFS",
      "STATE": "MA",
      "ZIP": 2557,
      "ZIP4": "535",
      "CONAME": "AQUA THERAPY SVC",
      "SCORE": 91
    },
    {
      "ADDR": "PO BOX 3322",
      "CITY": "OAK BLUFFS",
      "STATE": "MA",
      "ZIP": 2557,
      "ZIP4": "3322",
      "CONAME": "HOME & DECK FLOOR SANDING",
      "SCORE": 18
    },
    {
      "ADDR": "2 LAURAS WAY",
      "CITY": "OAK BLUFFS",
      "STATE": "MA",
      "ZIP": 2557,
      "ZIP4": "[Null]",
      "CONAME": "ISLAND HOUSE & YARD INC",
      "SCORE": 26
    },
    {
      "ADDR": "40 SYRACUSE AVE",
      "CITY": "OAK BLUFFS",
      "STATE": "MA",
      "ZIP": 2557,
      "ZIP4": "[Null]",
      "CONAME": "L B FORM CO",
      "SCORE": 68
    },
    {
      "ADDR": "1 MEADOW VIEW RD",
      "CITY": "OAK BLUFFS",
      "STATE": "MA",
      "ZIP": 2557,
      "ZIP4": "[Null]",
      "CONAME": "MARK CROSSLAND LANDSCAPE SVC",
      "SCORE": 72
    },
    {
      "ADDR": "[Null]",
      "CITY": "OAK BLUFFS",
      "STATE": "MA",
      "ZIP": 2557,
      "ZIP4": "[Null]",
      "CONAME": "MEDIA ISLAND GROUP",
      "SCORE": 65
    },
    {
      "ADDR": "466 COUNTY RD",
      "CITY": "OAK BLUFFS",
      "STATE": "MA",
      "ZIP": 2557,
      "ZIP4": "[Null]",
      "CONAME": "PAUL BERGERON PLUMBING & HTG",
      "SCORE": 70
    },
    {
      "ADDR": "15 SAND POND RD",
      "CITY": "ONSET",
      "STATE": "MA",
      "ZIP": 2558,
      "ZIP4": "[Null]",
      "CONAME": "ONSET WATER DEPT",
      "SCORE": 55
    },
    {
      "ADDR": "[Null]",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "[Null]",
      "CONAME": "ALL ISLAND PAINTING",
      "SCORE": 4
    },
    {
      "ADDR": "91 MAIN ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5402",
      "CONAME": "BTL",
      "SCORE": 64
    },
    {
      "ADDR": "7 MERCHANTS CT",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "6321",
      "CONAME": "CHURCH OF JESUS CHRIST OF LDS",
      "SCORE": 18
    },
    {
      "ADDR": "110 OTIS BASSETT RD",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "7512",
      "CONAME": "COASTAL REFUSE SVC",
      "SCORE": 100
    },
    {
      "ADDR": "126 MAIN ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5414",
      "CONAME": "CRICKET GALLERY",
      "SCORE": 90
    },
    {
      "ADDR": "101 HERRING CREEK RD",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "6447",
      "CONAME": "DOWN HARBOR CONSTRUCTION",
      "SCORE": 92
    },
    {
      "ADDR": "[Null]",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "[Null]",
      "CONAME": "DUKES COUNTY EMERGENCY MGMT",
      "SCORE": 89
    },
    {
      "ADDR": "65 MAIN ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5402",
      "CONAME": "DUKES COUNTY SAVINGS BANK",
      "SCORE": 4
    },
    {
      "ADDR": "19 MAIN ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5400",
      "CONAME": "ETHERINGTON FINE ART",
      "SCORE": 31
    },
    {
      "ADDR": "100 SKIFF AVE",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5555",
      "CONAME": "FINE FINISHES",
      "SCORE": 79
    },
    {
      "ADDR": "38 CIRCUIT AVE # A",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5830",
      "CONAME": "GUYS & DOLLS CREATIVE NAIL",
      "SCORE": 1
    },
    {
      "ADDR": "13 UNION ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5470",
      "CONAME": "HOLLYWOOD NAILS",
      "SCORE": 76
    },
    {
      "ADDR": "6 CIRCUIT AVE",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5830",
      "CONAME": "HOLLYWOOD NAILS",
      "SCORE": 9
    },
    {
      "ADDR": "[Null]",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "[Null]",
      "CONAME": "J & C PAINTING & POWERWASHING",
      "SCORE": 10
    },
    {
      "ADDR": "4 STATE RD",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5535",
      "CONAME": "MANSION HOUSE",
      "SCORE": 96
    },
    {
      "ADDR": "9 MAIN ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5400",
      "CONAME": "NARCISSUS",
      "SCORE": 17
    },
    {
      "ADDR": "9 MAIN ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5400",
      "CONAME": "NOCHI",
      "SCORE": 100
    },
    {
      "ADDR": "45 BEACH RD",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "[Null]",
      "CONAME": "PATRICK FLOORING",
      "SCORE": 6
    },
    {
      "ADDR": "42 CIRCUIT AVE",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5830",
      "CONAME": "SANCTUARY",
      "SCORE": 78
    },
    {
      "ADDR": "CHURCHES PIER",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "[Null]",
      "CONAME": "SAXXYCAT FISHING CHARTERS",
      "SCORE": 37
    },
    {
      "ADDR": "[Null]",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "[Null]",
      "CONAME": "TERMINIX",
      "SCORE": 42
    },
    {
      "ADDR": "51 SPRING ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5501",
      "CONAME": "TISBURY EXECUTIVE SECRETARY",
      "SCORE": 86
    },
    {
      "ADDR": "9 BEACH RD",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "[Null]",
      "CONAME": "TISBURY SHELL",
      "SCORE": 85
    },
    {
      "ADDR": "51 SPRING ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5501",
      "CONAME": "TISBURY TOWN ACCOUNTANT",
      "SCORE": 92
    },
    {
      "ADDR": "51 SPRING ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5501",
      "CONAME": "TISBURY TOWN HALL",
      "SCORE": 17
    },
    {
      "ADDR": "200 MAIN ST",
      "CITY": "VINEYARD HAVEN",
      "STATE": "MA",
      "ZIP": 2568,
      "ZIP4": "5415",
      "CONAME": "VINEYARD HAVEN PUBLIC LIBRARY",
      "SCORE": 31
    },
    {
      "ADDR": "564 W FALMOUTH HWY",
      "CITY": "WEST FALMOUTH",
      "STATE": "MA",
      "ZIP": 2574,
      "ZIP4": "[Null]",
      "CONAME": "EMERSON HOUSE",
      "SCORE": 22
    },
    {
      "ADDR": "22 BRIARWOOD LN",
      "CITY": "WEST TISBURY",
      "STATE": "MA",
      "ZIP": 2575,
      "ZIP4": "[Null]",
      "CONAME": "AS YOU LIKE IT-ALL ORGANIC",
      "SCORE": 4
    },
    {
      "ADDR": "11 TIAHS COVE RD",
      "CITY": "WEST TISBURY",
      "STATE": "MA",
      "ZIP": 2575,
      "ZIP4": "[Null]",
      "CONAME": "ISLAND MONTESSORI SCHOOL",
      "SCORE": 5
    },
    {
      "ADDR": "[Null]",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "[Null]",
      "CONAME": "A & A LANDSCAPING",
      "SCORE": 86
    },
    {
      "ADDR": "124 RIDGEWOOD AVE",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "3097",
      "CONAME": "ACME LAUNDRY CO",
      "SCORE": 30
    },
    {
      "ADDR": "67 SCHOOL ST",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "3117",
      "CONAME": "BUTKUS & JESSON",
      "SCORE": 43
    },
    {
      "ADDR": "27 PARK ST",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "5203",
      "CONAME": "CAPE COD HOSPITAL",
      "SCORE": 75
    },
    {
      "ADDR": "349 SEA ST",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "4508",
      "CONAME": "CAPE WINDS REST HOME",
      "SCORE": 80
    },
    {
      "ADDR": "490 OCEAN ST",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "4743",
      "CONAME": "CAPTAIN'S TABLE",
      "SCORE": 44
    },
    {
      "ADDR": "707 IYANNOUGH RD",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "1931",
      "CONAME": "COURTYARD-CAPE COD HYANNIS",
      "SCORE": 14
    },
    {
      "ADDR": "1040 IYANNOUGH RD",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "1896",
      "CONAME": "EVERETT H CORSON CADILLAC OLDS",
      "SCORE": 21
    },
    {
      "ADDR": "1020 IYANNOUGH RD",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "1887",
      "CONAME": "HYANNIS TOYOTA",
      "SCORE": 1
    },
    {
      "ADDR": "662 MAIN ST",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "5413",
      "CONAME": "INTERNATIONAL INN",
      "SCORE": 78
    },
    {
      "ADDR": "[Null]",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "[Null]",
      "CONAME": "KIRBY REMODELING",
      "SCORE": 8
    },
    {
      "ADDR": "100 INDEPENDENCE DR",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "1898",
      "CONAME": "PEDIATRIC ASSOCIATES",
      "SCORE": 47
    },
    {
      "ADDR": "110 ROSARY LN # A",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "2076",
      "CONAME": "POOLS BY VIOLA",
      "SCORE": 53
    },
    {
      "ADDR": "90 HIGH SCHOOL ROAD EXT",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "3820",
      "CONAME": "PURITAN PONTIAC ISUZU & GMC",
      "SCORE": 6
    },
    {
      "ADDR": "442 MAIN ST",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "3916",
      "CONAME": "ROCKLAND TRUST CAPE COD",
      "SCORE": 85
    },
    {
      "ADDR": "199 BARNSTABLE RD",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "2929",
      "CONAME": "SPRINKLE HOME IMPROVEMENT INC",
      "SCORE": 76
    },
    {
      "ADDR": "876 FALMOUTH RD",
      "CITY": "HYANNIS",
      "STATE": "MA",
      "ZIP": 2601,
      "ZIP4": "2394",
      "CONAME": "WHITEHALL PAVILION NSG HOME",
      "SCORE": 15
    },
    {
      "ADDR": "215 PALOMINO DR",
      "CITY": "BARNSTABLE",
      "STATE": "MA",
      "ZIP": 2630,
      "ZIP4": "1549",
      "CONAME": "B & C BAIT CO INC",
      "SCORE": 0
    },
    {
      "ADDR": "PO BOX 427",
      "CITY": "BARNSTABLE",
      "STATE": "MA",
      "ZIP": 2630,
      "ZIP4": "427",
      "CONAME": "BARNSTABLE LAW LIBRARY",
      "SCORE": 72
    },
    {
      "ADDR": "869 MAIN ST",
      "CITY": "BREWSTER",
      "STATE": "MA",
      "ZIP": 2631,
      "ZIP4": "1032",
      "CONAME": "CLARENCE L HAY LIBRARY",
      "SCORE": 97
    },
    {
      "ADDR": "4018 MAIN ST",
      "CITY": "BREWSTER",
      "STATE": "MA",
      "ZIP": 2631,
      "ZIP4": "1511",
      "CONAME": "FOR THE LOVE OF THE BREED",
      "SCORE": 33
    },
    {
      "ADDR": "1439 MAIN ST",
      "CITY": "BREWSTER",
      "STATE": "MA",
      "ZIP": 2631,
      "ZIP4": "1722",
      "CONAME": "NEW ENGLAND FIRE & HISTORY",
      "SCORE": 51
    },
    {
      "ADDR": "183 STONY BROOK RD",
      "CITY": "BREWSTER",
      "STATE": "MA",
      "ZIP": 2631,
      "ZIP4": "1027",
      "CONAME": "WORLD CHILD NEW ENGLAND",
      "SCORE": 35
    },
    {
      "ADDR": "100 CRESCENT LN",
      "CITY": "BREWSTER",
      "STATE": "MA",
      "ZIP": 2631,
      "ZIP4": "2918",
      "CONAME": "WORLD OF MEETINGS",
      "SCORE": 2
    },
    {
      "ADDR": "505 MAIN ST",
      "CITY": "CHATHAM",
      "STATE": "MA",
      "ZIP": 2633,
      "ZIP4": "2216",
      "CONAME": "BLUE WATER FISH RUBBINGS",
      "SCORE": 99
    },
    {
      "ADDR": "1191 ORLEANS RD",
      "CITY": "CHATHAM",
      "STATE": "MA",
      "ZIP": 2633,
      "ZIP4": "[Null]",
      "CONAME": "PLEASANT BAY VILLAGE MOTEL",
      "SCORE": 22
    },
    {
      "ADDR": "[Null]",
      "CITY": "DENNIS",
      "STATE": "MA",
      "ZIP": 2638,
      "ZIP4": "[Null]",
      "CONAME": "JAC OF ALL TRADES",
      "SCORE": 33
    },
    {
      "ADDR": "1123 MAIN ST",
      "CITY": "DENNIS",
      "STATE": "MA",
      "ZIP": 2638,
      "ZIP4": "2015",
      "CONAME": "ROCKLAND TRUST",
      "SCORE": 5
    },
    {
      "ADDR": "491 CAMPGROUND RD",
      "CITY": "EASTHAM",
      "STATE": "MA",
      "ZIP": 2642,
      "ZIP4": "1915",
      "CONAME": "EASTHAM LANDING",
      "SCORE": 74
    },
    {
      "ADDR": "3800 STATE HWY",
      "CITY": "EASTHAM",
      "STATE": "MA",
      "ZIP": 2642,
      "ZIP4": "2163",
      "CONAME": "FOUR POINTS BY SHERATON",
      "SCORE": 62
    },
    {
      "ADDR": "PO BOX 742",
      "CITY": "FORESTDALE",
      "STATE": "MA",
      "ZIP": 2644,
      "ZIP4": "703",
      "CONAME": "MILLSTONE CONSTRUCTION CO INC",
      "SCORE": 63
    },
    {
      "ADDR": "37 ROBINS WAY",
      "CITY": "HARWICH",
      "STATE": "MA",
      "ZIP": 2645,
      "ZIP4": "2513",
      "CONAME": "ANDREASSON SCOTT D & KERRY E",
      "SCORE": 62
    },
    {
      "ADDR": "705 MAIN ST",
      "CITY": "HARWICH",
      "STATE": "MA",
      "ZIP": 2645,
      "ZIP4": "2751",
      "CONAME": "BRAX LANDING RESTAURANT",
      "SCORE": 54
    },
    {
      "ADDR": "1421 ORLEANS RD",
      "CITY": "HARWICH",
      "STATE": "MA",
      "ZIP": 2645,
      "ZIP4": "2148",
      "CONAME": "UPS STORE",
      "SCORE": 97
    },
    {
      "ADDR": "PO BOX 507",
      "CITY": "HARWICH PORT",
      "STATE": "MA",
      "ZIP": 2646,
      "ZIP4": "507",
      "CONAME": "EAST CAPE INDUSTRIES INC",
      "SCORE": 70
    },
    {
      "ADDR": "39 NATHAN ELLIS HWY",
      "CITY": "MASHPEE",
      "STATE": "MA",
      "ZIP": 2649,
      "ZIP4": "3267",
      "CONAME": "KORNERSTONE KITCHENS",
      "SCORE": 21
    },
    {
      "ADDR": "5 SHELLBACK WAY",
      "CITY": "MASHPEE",
      "STATE": "MA",
      "ZIP": 2649,
      "ZIP4": "3302",
      "CONAME": "ROCKLAND TRUST",
      "SCORE": 37
    },
    {
      "ADDR": "38 NATHAN ELLIS HWY",
      "CITY": "MASHPEE",
      "STATE": "MA",
      "ZIP": 2649,
      "ZIP4": "9998",
      "CONAME": "STEPHEN C DALONZO CPA",
      "SCORE": 93
    },
    {
      "ADDR": "57 MAIN ST",
      "CITY": "ORLEANS",
      "STATE": "MA",
      "ZIP": 2653,
      "ZIP4": "2413",
      "CONAME": "FRIEND'S MARKETPLACE",
      "SCORE": 60
    },
    {
      "ADDR": "180 ROUTE 6A",
      "CITY": "ORLEANS",
      "STATE": "MA",
      "ZIP": 2653,
      "ZIP4": "[Null]",
      "CONAME": "ORLEANS PAINT & WALLPAPER",
      "SCORE": 30
    },
    {
      "ADDR": "PO BOX 96",
      "CITY": "OSTERVILLE",
      "STATE": "MA",
      "ZIP": 2655,
      "ZIP4": "96",
      "CONAME": "CANDID CREATIONS",
      "SCORE": 68
    },
    {
      "ADDR": "23 W BAY RD",
      "CITY": "OSTERVILLE",
      "STATE": "MA",
      "ZIP": 2655,
      "ZIP4": "2430",
      "CONAME": "CLAIRE MURRAY OFFICE",
      "SCORE": 74
    },
    {
      "ADDR": "122 BRIDGE ST",
      "CITY": "OSTERVILLE",
      "STATE": "MA",
      "ZIP": 2655,
      "ZIP4": "2303",
      "CONAME": "OYSTER HARBORS MARINE INC",
      "SCORE": 98
    },
    {
      "ADDR": "22 WIANNO AVE",
      "CITY": "OSTERVILLE",
      "STATE": "MA",
      "ZIP": 2655,
      "ZIP4": "2027",
      "CONAME": "ROCKLAND TRUST",
      "SCORE": 43
    },
    {
      "ADDR": "752 MAIN ST",
      "CITY": "OSTERVILLE",
      "STATE": "MA",
      "ZIP": 2655,
      "ZIP4": "1904",
      "CONAME": "WIMPY'S SEAFOOD CAFE",
      "SCORE": 10
    },
    {
      "ADDR": "1 COMMERCIAL ST",
      "CITY": "PROVINCETOWN",
      "STATE": "MA",
      "ZIP": 2657,
      "ZIP4": "1909",
      "CONAME": "PROVINCETOWN INN",
      "SCORE": 90
    },
    {
      "ADDR": "5 BROWN ST # B",
      "CITY": "PROVINCETOWN",
      "STATE": "MA",
      "ZIP": 2657,
      "ZIP4": "1302",
      "CONAME": "TRAFALGAR REAL ESTATE DEV",
      "SCORE": 57
    },
    {
      "ADDR": "2960 MAIN ST",
      "CITY": "SOUTH CHATHAM",
      "STATE": "MA",
      "ZIP": 2659,
      "ZIP4": "[Null]",
      "CONAME": "SOUTH CHATHAM PUBLIC LIBRARY",
      "SCORE": 4
    },
    {
      "ADDR": "17 NAUTICAL WAY",
      "CITY": "SOUTH DENNIS",
      "STATE": "MA",
      "ZIP": 2660,
      "ZIP4": "3781",
      "CONAME": "ALL CAPE WEED CONTROL",
      "SCORE": 42
    },
    {
      "ADDR": "436 MAIN ST",
      "CITY": "SOUTH DENNIS",
      "STATE": "MA",
      "ZIP": 2660,
      "ZIP4": "3647",
      "CONAME": "BFB TITLES INC",
      "SCORE": 89
    },
    {
      "ADDR": "38 ROUTE 134",
      "CITY": "SOUTH DENNIS",
      "STATE": "MA",
      "ZIP": 2660,
      "ZIP4": "3700",
      "CONAME": "NETWORK CHIROPRACTIC",
      "SCORE": 4
    },
    {
      "ADDR": "241 STATION AVE",
      "CITY": "SOUTH YARMOUTH",
      "STATE": "MA",
      "ZIP": 2664,
      "ZIP4": "1863",
      "CONAME": "FITZGERALD THEOHARIDIS",
      "SCORE": 30
    },
    {
      "ADDR": "1326 ROUTE 28",
      "CITY": "SOUTH YARMOUTH",
      "STATE": "MA",
      "ZIP": 2664,
      "ZIP4": "4458",
      "CONAME": "FLEET BANK",
      "SCORE": 42
    },
    {
      "ADDR": "428 STATION AVE",
      "CITY": "SOUTH YARMOUTH",
      "STATE": "MA",
      "ZIP": 2664,
      "ZIP4": "1208",
      "CONAME": "ROCKLAND TRUST",
      "SCORE": 12
    },
    {
      "ADDR": "5 COMMERCIAL ST",
      "CITY": "WELLFLEET",
      "STATE": "MA",
      "ZIP": 2667,
      "ZIP4": "7447",
      "CONAME": "ANDRE POTTERY STUDIO",
      "SCORE": 66
    },
    {
      "ADDR": "345 MAIN ST",
      "CITY": "WELLFLEET",
      "STATE": "MA",
      "ZIP": 2667,
      "ZIP4": "7432",
      "CONAME": "CAPE COD FIVE CENTS SVNGS BNK",
      "SCORE": 13
    },
    {
      "ADDR": "2240 IYANNOUGH RD",
      "CITY": "WEST BARNSTABLE",
      "STATE": "MA",
      "ZIP": 2668,
      "ZIP4": "1532",
      "CONAME": "LIBRARY-LEARNING RSRC CTR",
      "SCORE": 77
    },
    {
      "ADDR": "2040 MAIN ST",
      "CITY": "WEST BARNSTABLE",
      "STATE": "MA",
      "ZIP": 2668,
      "ZIP4": "1147",
      "CONAME": "MORSE & CO",
      "SCORE": 99
    },
    {
      "ADDR": "932 MAIN ST",
      "CITY": "WEST DENNIS",
      "STATE": "MA",
      "ZIP": 2670,
      "ZIP4": "2868",
      "CONAME": "ROCKLAND TRUST",
      "SCORE": 86
    },
    {
      "ADDR": "775 MAIN ST",
      "CITY": "WEST DENNIS",
      "STATE": "MA",
      "ZIP": 2670,
      "ZIP4": "2700",
      "CONAME": "WILLIAM DIXON",
      "SCORE": 42
    },
    {
      "ADDR": "120 MAIN ST",
      "CITY": "WEST HARWICH",
      "STATE": "MA",
      "ZIP": 2671,
      "ZIP4": "1220",
      "CONAME": "VINEYARD PEST CONTROL",
      "SCORE": 36
    },
    {
      "ADDR": "42 UNION ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "2911",
      "CONAME": "ATTLEBORO COMMUNITY THEATRE",
      "SCORE": 17
    },
    {
      "ADDR": "77 PARK ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "2353",
      "CONAME": "ATTLEBORO MAYOR",
      "SCORE": 43
    },
    {
      "ADDR": "5 STANLEY ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "5149",
      "CONAME": "CAMPIONS CARPET CLEANING",
      "SCORE": 96
    },
    {
      "ADDR": "88 BRANCH AVE",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "4821",
      "CONAME": "D C DOOR & WINDOW CO",
      "SCORE": 56
    },
    {
      "ADDR": "190 PIKE AVE",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "2520",
      "CONAME": "DEV LAN CORP",
      "SCORE": 56
    },
    {
      "ADDR": "260 LOCUST ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "6502",
      "CONAME": "EARTH MOVER BOBCAT SVC",
      "SCORE": 45
    },
    {
      "ADDR": "HAYWARD",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "[Null]",
      "CONAME": "ENVIRONMENTAL MANAGEMENT",
      "SCORE": 9
    },
    {
      "ADDR": "228 COUNTY ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "3534",
      "CONAME": "MARY C MOORE",
      "SCORE": 75
    },
    {
      "ADDR": "80 PINE ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "3907",
      "CONAME": "NATIONAL VAN SALES",
      "SCORE": 3
    },
    {
      "ADDR": "PO BOX 1022",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "18",
      "CONAME": "PRING PLUMBING INC",
      "SCORE": 47
    },
    {
      "ADDR": "1 PARK ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "2301",
      "CONAME": "REPRESENTATIVE JAMES MC GOVERN",
      "SCORE": 64
    },
    {
      "ADDR": "16 SCOTT ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "7914",
      "CONAME": "STERRY STREET AUTO SALES INC",
      "SCORE": 95
    },
    {
      "ADDR": "95 FLORA RD",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "1303",
      "CONAME": "T MORESHEAD LANDSCAPING",
      "SCORE": 85
    },
    {
      "ADDR": "106 ROBERT ST",
      "CITY": "ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2703,
      "ZIP4": "3711",
      "CONAME": "TRIBORO YOUTH THEATRE",
      "SCORE": 63
    },
    {
      "ADDR": "PO BOX 9998",
      "CITY": "CUTTYHUNK",
      "STATE": "MA",
      "ZIP": 2713,
      "ZIP4": "9998",
      "CONAME": "US POST OFFICE",
      "SCORE": 87
    },
    {
      "ADDR": "2040 COUNTY ST",
      "CITY": "DIGHTON",
      "STATE": "MA",
      "ZIP": 2715,
      "ZIP4": "1211",
      "CONAME": "DIGHTON SAW MILL",
      "SCORE": 16
    },
    {
      "ADDR": "1901 COUNTY ST",
      "CITY": "DIGHTON",
      "STATE": "MA",
      "ZIP": 2715,
      "ZIP4": "1212",
      "CONAME": "HOYE & HOYE",
      "SCORE": 79
    },
    {
      "ADDR": "7 LAUREL ST # A",
      "CITY": "FAIRHAVEN",
      "STATE": "MA",
      "ZIP": 2719,
      "ZIP4": "2738",
      "CONAME": "CHESTER T BARON DC",
      "SCORE": 7
    },
    {
      "ADDR": "373 N MAIN ST",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2720,
      "ZIP4": "2405",
      "CONAME": "D'AMBROSIO & CO",
      "SCORE": 84
    },
    {
      "ADDR": "1567 N MAIN ST",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2720,
      "ZIP4": "2917",
      "CONAME": "TRANSITIONAL ASSISTANCE DEPT",
      "SCORE": 15
    },
    {
      "ADDR": "101 PRESIDENT AVE",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2720,
      "ZIP4": "2644",
      "CONAME": "US ARMY RECRUITING",
      "SCORE": 26
    },
    {
      "ADDR": "1701 PRESIDENT AVE",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2720,
      "ZIP4": "7110",
      "CONAME": "US POST OFFICE",
      "SCORE": 6
    },
    {
      "ADDR": "685 PLEASANT ST",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2721,
      "ZIP4": "4305",
      "CONAME": "FALL RIVER FIRE ALARM DIV",
      "SCORE": 99
    },
    {
      "ADDR": "1 GOVERNMENT CTR",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2722,
      "ZIP4": "7700",
      "CONAME": "FALL RIVER CITY GOVERNMENT",
      "SCORE": 50
    },
    {
      "ADDR": "1 GOVERNMENT CTR",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2722,
      "ZIP4": "7700",
      "CONAME": "FALL RIVER DATA PROCESSING",
      "SCORE": 96
    },
    {
      "ADDR": "1 GOVERNMENT CTR",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2722,
      "ZIP4": "7700",
      "CONAME": "FALL RIVER GROUP INSURANCE",
      "SCORE": 51
    },
    {
      "ADDR": "1 GOVERNMENT CTR",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2722,
      "ZIP4": "7700",
      "CONAME": "FALL RIVER LICENSING BOARD",
      "SCORE": 90
    },
    {
      "ADDR": "1 GOVERNMENT CTR",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2722,
      "ZIP4": "7700",
      "CONAME": "FALL RIVER PLUMBING INSPECTORS",
      "SCORE": 13
    },
    {
      "ADDR": "397 BAY ST",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2724,
      "ZIP4": "1513",
      "CONAME": "EAST GATE CHRISTIAN ACADEMY",
      "SCORE": 88
    },
    {
      "ADDR": "1089 DWELLY ST",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2724,
      "ZIP4": "3119",
      "CONAME": "NATIONAL GUARD RETENTION SPPRT",
      "SCORE": 15
    },
    {
      "ADDR": "45 BAYVIEW ST",
      "CITY": "FALL RIVER",
      "STATE": "MA",
      "ZIP": 2724,
      "ZIP4": "1819",
      "CONAME": "RAINBOW BEARS PRESCHOOL",
      "SCORE": 3
    },
    {
      "ADDR": "874 KEMPTON ST",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2740,
      "ZIP4": "2549",
      "CONAME": "DEL'S LEMONADE",
      "SCORE": 24
    },
    {
      "ADDR": "113 MACARTHUR DR",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2740,
      "ZIP4": "7217",
      "CONAME": "EDIE & MARIA BOAT SETTLEMENTS",
      "SCORE": 72
    },
    {
      "ADDR": "33 WRIGHT ST",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2740,
      "ZIP4": "7250",
      "CONAME": "L J FISHERIES INC",
      "SCORE": 1
    },
    {
      "ADDR": "175 WILLIAM ST",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2740,
      "ZIP4": "6021",
      "CONAME": "LIDER & FOGARTY",
      "SCORE": 38
    },
    {
      "ADDR": "908 PURCHASE ST",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2740,
      "ZIP4": "6234",
      "CONAME": "MENTAL RETARDATION DEPT",
      "SCORE": 96
    },
    {
      "ADDR": "84 GIFFORD ST",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2744,
      "ZIP4": "2615",
      "CONAME": "BARNSTABLE RIDING",
      "SCORE": 81
    },
    {
      "ADDR": "260 DUCHAINE BLVD",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2745,
      "ZIP4": "1222",
      "CONAME": "AMERICA CABLE SYSTEMS",
      "SCORE": 9
    },
    {
      "ADDR": "982 FAIRFIELD ST",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2745,
      "ZIP4": "3321",
      "CONAME": "DOUGLAS SLAVIN INC",
      "SCORE": 79
    },
    {
      "ADDR": "1249 ASHLEY BLVD",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2745,
      "ZIP4": "1529",
      "CONAME": "GERALD N PEPIN LAW OFFICES",
      "SCORE": 9
    },
    {
      "ADDR": "2834 ACUSHNET AVE",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2745,
      "ZIP4": "3412",
      "CONAME": "GREATER NEW BEDFORD PHYSICAL",
      "SCORE": 66
    },
    {
      "ADDR": "900 SURREY LN",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2745,
      "ZIP4": "3020",
      "CONAME": "MICHELLE S CARRIER-TRIAL",
      "SCORE": 16
    },
    {
      "ADDR": "263 BROOK ST",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2745,
      "ZIP4": "5275",
      "CONAME": "SENSING SYSTEMS CORP",
      "SCORE": 83
    },
    {
      "ADDR": "272 DUCHAINE BLVD",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2745,
      "ZIP4": "1222",
      "CONAME": "TKN INC",
      "SCORE": 5
    },
    {
      "ADDR": "140 NAUSET ST",
      "CITY": "NEW BEDFORD",
      "STATE": "MA",
      "ZIP": 2746,
      "ZIP4": "1501",
      "CONAME": "TRU-MED WALK-IN CLINIC",
      "SCORE": 95
    },
    {
      "ADDR": "171 CHASE RD",
      "CITY": "NORTH DARTMOUTH",
      "STATE": "MA",
      "ZIP": 2747,
      "ZIP4": "1089",
      "CONAME": "CHECK'N BALANCE",
      "SCORE": 65
    },
    {
      "ADDR": "42 HATHAWAY RD",
      "CITY": "NORTH DARTMOUTH",
      "STATE": "MA",
      "ZIP": 2747,
      "ZIP4": "2712",
      "CONAME": "EATING OPTIONS",
      "SCORE": 30
    },
    {
      "ADDR": "300 FAUNCE CORNER RD # A200",
      "CITY": "NORTH DARTMOUTH",
      "STATE": "MA",
      "ZIP": 2747,
      "ZIP4": "1257",
      "CONAME": "JOHN A FURREY MD",
      "SCORE": 55
    },
    {
      "ADDR": "86 FAUNCE CORNER RD",
      "CITY": "NORTH DARTMOUTH",
      "STATE": "MA",
      "ZIP": 2747,
      "ZIP4": "1260",
      "CONAME": "TIMOTHY D HORTON",
      "SCORE": 65
    },
    {
      "ADDR": "23 TRIPP ST",
      "CITY": "SOUTH DARTMOUTH",
      "STATE": "MA",
      "ZIP": 2748,
      "ZIP4": "2724",
      "CONAME": "LIFESTREAM INC",
      "SCORE": 62
    },
    {
      "ADDR": "PO BOX 496",
      "CITY": "NORTH ATTLEBORO",
      "STATE": "MA",
      "ZIP": 2761,
      "ZIP4": "496",
      "CONAME": "BAY STATE LAWN CO",
      "SCORE": 51
    },
    {
      "ADDR": "300 SOUTH ST",
      "CITY": "PLAINVILLE",
      "STATE": "MA",
      "ZIP": 2762,
      "ZIP4": "1529",
      "CONAME": "ELECTRO-FIX INC",
      "SCORE": 51
    },
    {
      "ADDR": "15 MESSENGER ST",
      "CITY": "PLAINVILLE",
      "STATE": "MA",
      "ZIP": 2762,
      "ZIP4": "5012",
      "CONAME": "MASSAGE WORKS",
      "SCORE": 78
    },
    {
      "ADDR": "168 E BACON ST",
      "CITY": "PLAINVILLE",
      "STATE": "MA",
      "ZIP": 2762,
      "ZIP4": "2107",
      "CONAME": "MINI-SYSTEMS INC",
      "SCORE": 48
    },
    {
      "ADDR": "299 SOUTH ST",
      "CITY": "PLAINVILLE",
      "STATE": "MA",
      "ZIP": 2762,
      "ZIP4": "1509",
      "CONAME": "TAMMY'S JOB SHOP INC",
      "SCORE": 76
    },
    {
      "ADDR": "200 SOUTH ST",
      "CITY": "PLAINVILLE",
      "STATE": "MA",
      "ZIP": 2762,
      "ZIP4": "1528",
      "CONAME": "WOOD ELEMENTARY SCHOOL",
      "SCORE": 58
    },
    {
      "ADDR": "494 SCHOOL ST",
      "CITY": "NORTH DIGHTON",
      "STATE": "MA",
      "ZIP": 2764,
      "ZIP4": "1325",
      "CONAME": "RIVARD TRUCKING",
      "SCORE": 9
    },
    {
      "ADDR": "75 1/2 E MAIN ST",
      "CITY": "NORTON",
      "STATE": "MA",
      "ZIP": 2766,
      "ZIP4": "2307",
      "CONAME": "MENTAL RETARDATION DEPT",
      "SCORE": 95
    },
    {
      "ADDR": "253 MANSFIELD AVE",
      "CITY": "NORTON",
      "STATE": "MA",
      "ZIP": 2766,
      "ZIP4": "1375",
      "CONAME": "NORLEY CO",
      "SCORE": 79
    },
    {
      "ADDR": "325 ROUTE 44",
      "CITY": "RAYNHAM",
      "STATE": "MA",
      "ZIP": 2767,
      "ZIP4": "1468",
      "CONAME": "KNAPP VIDEO",
      "SCORE": 45
    },
    {
      "ADDR": "688 ORCHARD ST",
      "CITY": "RAYNHAM",
      "STATE": "MA",
      "ZIP": 2767,
      "ZIP4": "1342",
      "CONAME": "MICHAEL J SCANLON DDS",
      "SCORE": 66
    },
    {
      "ADDR": "275 WINTHROP ST",
      "CITY": "REHOBOTH",
      "STATE": "MA",
      "ZIP": 2769,
      "ZIP4": "1819",
      "CONAME": "ALAN MERCHANTHOUSE DDS",
      "SCORE": 17
    },
    {
      "ADDR": "147 PLAIN ST",
      "CITY": "REHOBOTH",
      "STATE": "MA",
      "ZIP": 2769,
      "ZIP4": "2540",
      "CONAME": "J & J VENDING INC",
      "SCORE": 25
    },
    {
      "ADDR": "29 BAKER ST",
      "CITY": "REHOBOTH",
      "STATE": "MA",
      "ZIP": 2769,
      "ZIP4": "2413",
      "CONAME": "JESSE JAMES TRANSPORTATION INC",
      "SCORE": 92
    },
    {
      "ADDR": "26 RANDALL RD",
      "CITY": "ROCHESTER",
      "STATE": "MA",
      "ZIP": 2770,
      "ZIP4": "1209",
      "CONAME": "D M SILVA INC",
      "SCORE": 10
    },
    {
      "ADDR": "ROUNSEVILLE RD",
      "CITY": "ROCHESTER",
      "STATE": "MA",
      "ZIP": 2770,
      "ZIP4": "[Null]",
      "CONAME": "ROCHESTER SELECTMEN",
      "SCORE": 99
    },
    {
      "ADDR": "ROUNSEVILLE RD",
      "CITY": "ROCHESTER",
      "STATE": "MA",
      "ZIP": 2770,
      "ZIP4": "[Null]",
      "CONAME": "ROCHESTER TOWN HALL OFFICES",
      "SCORE": 23
    },
    {
      "ADDR": "20 COMMERCE WAY",
      "CITY": "SEEKONK",
      "STATE": "MA",
      "ZIP": 2771,
      "ZIP4": "5823",
      "CONAME": "ASPEN DENTAL",
      "SCORE": 1
    },
    {
      "ADDR": "1 FIRST FED PARK",
      "CITY": "SWANSEA",
      "STATE": "MA",
      "ZIP": 2777,
      "ZIP4": "[Null]",
      "CONAME": "FAB FUNDING CORP",
      "SCORE": 78
    },
    {
      "ADDR": "PO BOX 433",
      "CITY": "SWANSEA",
      "STATE": "MA",
      "ZIP": 2777,
      "ZIP4": "433",
      "CONAME": "HENRY HOLMES ADVERTISING",
      "SCORE": 53
    },
    {
      "ADDR": "7 S MAIN ST",
      "CITY": "BERKLEY",
      "STATE": "MA",
      "ZIP": 2779,
      "ZIP4": "1303",
      "CONAME": "DAVID D ATWOOD CARPENTRY INC",
      "SCORE": 47
    },
    {
      "ADDR": "181 FREMONT ST",
      "CITY": "TAUNTON",
      "STATE": "MA",
      "ZIP": 2780,
      "ZIP4": "1214",
      "CONAME": "ADVANCE 24 HOUR RD SVC",
      "SCORE": 61
    },
    {
      "ADDR": "23 TRESCOTT ST",
      "CITY": "TAUNTON",
      "STATE": "MA",
      "ZIP": 2780,
      "ZIP4": "3265",
      "CONAME": "BRUCE G RICH",
      "SCORE": 58
    },
    {
      "ADDR": "30 TAUNTON GRN # 3",
      "CITY": "TAUNTON",
      "STATE": "MA",
      "ZIP": 2780,
      "ZIP4": "3243",
      "CONAME": "EPSTEIN LIPSEY & CLIFFORD",
      "SCORE": 65
    },
    {
      "ADDR": "200 MYLES STANDISH BLVD",
      "CITY": "TAUNTON",
      "STATE": "MA",
      "ZIP": 2780,
      "ZIP4": "7371",
      "CONAME": "HYNES SALES CO",
      "SCORE": 73
    },
    {
      "ADDR": "645 COUNTY ST # 3",
      "CITY": "TAUNTON",
      "STATE": "MA",
      "ZIP": 2780,
      "ZIP4": "3623",
      "CONAME": "J JOHN MC MANUS JR",
      "SCORE": 50
    },
    {
      "ADDR": "43 TAUNTON GRN",
      "CITY": "TAUNTON",
      "STATE": "MA",
      "ZIP": 2780,
      "ZIP4": "3256",
      "CONAME": "MELLO CONSTRUCTION INC",
      "SCORE": 66
    },
    {
      "ADDR": "72 WASHINGTON ST # 2400",
      "CITY": "TAUNTON",
      "STATE": "MA",
      "ZIP": 2780,
      "ZIP4": "2497",
      "CONAME": "SAPERIA ORTHOPEDICS",
      "SCORE": 69
    },
    {
      "ADDR": "4 COURT ST",
      "CITY": "TAUNTON",
      "STATE": "MA",
      "ZIP": 2780,
      "ZIP4": "3218",
      "CONAME": "WILLIAM D ROUNDS",
      "SCORE": 40
    },
    {
      "ADDR": "1151 MAIN RD # A",
      "CITY": "WESTPORT",
      "STATE": "MA",
      "ZIP": 2790,
      "ZIP4": "4412",
      "CONAME": "DANIEL GEORGE",
      "SCORE": 82
    },
    {
      "ADDR": "767 MAIN RD",
      "CITY": "WESTPORT",
      "STATE": "MA",
      "ZIP": 2790,
      "ZIP4": "4398",
      "CONAME": "DAVID J AHEARN DDS",
      "SCORE": 4
    },
    {
      "ADDR": "1180 AMERICAN LEGION HWY",
      "CITY": "WESTPORT",
      "STATE": "MA",
      "ZIP": 2790,
      "ZIP4": "1194",
      "CONAME": "MONTESSORI SCHOOL OF ANGELS",
      "SCORE": 86
    },
    {
      "ADDR": "GENERAL DELIVERY",
      "CITY": "ALBION",
      "STATE": "RI",
      "ZIP": 2802,
      "ZIP4": "9999",
      "CONAME": "ST AMBROSE CATHOLIC CHURCH",
      "SCORE": 29
    },
    {
      "ADDR": "24 LAUREL ST",
      "CITY": "ASHAWAY",
      "STATE": "RI",
      "ZIP": 2804,
      "ZIP4": "1515",
      "CONAME": "ASHAWAY LINE & TWINE MFG",
      "SCORE": 48
    },
    {
      "ADDR": "206 MAIN ST",
      "CITY": "ASHAWAY",
      "STATE": "RI",
      "ZIP": 2804,
      "ZIP4": "2008",
      "CONAME": "J J MORRONE SUNOCO",
      "SCORE": 68
    },
    {
      "ADDR": "169B MAIN ST",
      "CITY": "ASHAWAY",
      "STATE": "RI",
      "ZIP": 2804,
      "ZIP4": "2243",
      "CONAME": "OUR LADY OF VICTORY CHURCH",
      "SCORE": 63
    },
    {
      "ADDR": "64 HIGH ST",
      "CITY": "ASHAWAY",
      "STATE": "RI",
      "ZIP": 2804,
      "ZIP4": "1502",
      "CONAME": "THAMES RIVER TUBE CO",
      "SCORE": 8
    },
    {
      "ADDR": "509 COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "1623",
      "CONAME": "A GOOD TIMES LIMOUSINE SVC",
      "SCORE": 69
    },
    {
      "ADDR": "310 MAPLE AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3430",
      "CONAME": "A TOUCH OF HEALTH MASSAGE CO",
      "SCORE": 68
    },
    {
      "ADDR": "189 WASHINGTON RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "1842",
      "CONAME": "ARTISTIC DESIGN",
      "SCORE": 42
    },
    {
      "ADDR": "239 NEW MEADOW RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3748",
      "CONAME": "BAY MARINE INC",
      "SCORE": 51
    },
    {
      "ADDR": "70 WEST ST",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3508",
      "CONAME": "BAYSIDE FAMILY YMCA",
      "SCORE": 76
    },
    {
      "ADDR": "230 WASECA AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3522",
      "CONAME": "CASUAL CATERING & DELI",
      "SCORE": 97
    },
    {
      "ADDR": "7 OLD COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "1601",
      "CONAME": "CHARIS COUNSELING CTR",
      "SCORE": 15
    },
    {
      "ADDR": "184 COUNTY RD # G",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "4529",
      "CONAME": "CITIZENS BANK",
      "SCORE": 87
    },
    {
      "ADDR": "12 BARTON AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "4420",
      "CONAME": "DECISION CLASS",
      "SCORE": 74
    },
    {
      "ADDR": "[Null]",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "[Null]",
      "CONAME": "DI ORIO PLUMBING & HEATING",
      "SCORE": 52
    },
    {
      "ADDR": "226 COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "4514",
      "CONAME": "GOLDEN BOWL",
      "SCORE": 7
    },
    {
      "ADDR": "84 UPLAND WAY",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "2323",
      "CONAME": "HIGHWAY DEPT-PUBLIC WORKS",
      "SCORE": 51
    },
    {
      "ADDR": "406 MAPLE AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3424",
      "CONAME": "HOUSE OF LITTLE PEOPLE",
      "SCORE": 67
    },
    {
      "ADDR": "264 NAYATT RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3309",
      "CONAME": "JSTOR",
      "SCORE": 5
    },
    {
      "ADDR": "4 TALLWOOD DR",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "2814",
      "CONAME": "LORENZO J I LUCAS",
      "SCORE": 93
    },
    {
      "ADDR": "286 MAPLE AVE # A",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3400",
      "CONAME": "MAPLE MART",
      "SCORE": 82
    },
    {
      "ADDR": "95 COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "4516",
      "CONAME": "POLICE DEPT-ANIMAL CONTROL",
      "SCORE": 80
    },
    {
      "ADDR": "328 COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "2410",
      "CONAME": "PRINCE'S HILL DELI",
      "SCORE": 83
    },
    {
      "ADDR": "150 NAYATT RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3335",
      "CONAME": "R I COUNTRY CLUB",
      "SCORE": 39
    },
    {
      "ADDR": "259 COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "2406",
      "CONAME": "RESIDENTIAL PROPERTIES LTD",
      "SCORE": 27
    },
    {
      "ADDR": "9 ROSEDALE AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "1516",
      "CONAME": "RIPICO BUILDERS",
      "SCORE": 22
    },
    {
      "ADDR": "11 GEORGE ST",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "1719",
      "CONAME": "ROBERT J DOHERTY",
      "SCORE": 81
    },
    {
      "ADDR": "[Null]",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "[Null]",
      "CONAME": "ROBERT M HAYDEN",
      "SCORE": 50
    },
    {
      "ADDR": "12 CROWN AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "1402",
      "CONAME": "ROOFING DOCTOR",
      "SCORE": 23
    },
    {
      "ADDR": "17 BARTON AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "4409",
      "CONAME": "STANLEY'S BOAT YARD INC",
      "SCORE": 79
    },
    {
      "ADDR": "35 KIRBY ST",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3404",
      "CONAME": "STARLIGHT LIMOUSINE SVC",
      "SCORE": 38
    },
    {
      "ADDR": "146 ANOKA AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3428",
      "CONAME": "TAKEOFF SYSTEMS",
      "SCORE": 67
    },
    {
      "ADDR": "33 KENT ST # B",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3800",
      "CONAME": "TASTE-CURIOSITY CAFE & CTRNG",
      "SCORE": 35
    },
    {
      "ADDR": "21 WEST ST",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3525",
      "CONAME": "TIFFANY'S SALON & DAY SPA",
      "SCORE": 98
    },
    {
      "ADDR": "283 COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "2406",
      "CONAME": "TOWN CLERK",
      "SCORE": 55
    },
    {
      "ADDR": "283 COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "2406",
      "CONAME": "TOWN MANAGER",
      "SCORE": 20
    },
    {
      "ADDR": "283 COUNTY RD",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "2406",
      "CONAME": "TOWN TREASURER",
      "SCORE": 39
    },
    {
      "ADDR": "PO BOX 3",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3",
      "CONAME": "VALUATION CONCEPTS INC",
      "SCORE": 91
    },
    {
      "ADDR": "110 MAPLE AVE",
      "CITY": "BARRINGTON",
      "STATE": "RI",
      "ZIP": 2806,
      "ZIP4": "3520",
      "CONAME": "VIENNA BAKERY",
      "SCORE": 85
    },
    {
      "ADDR": "212 WATER ST",
      "CITY": "BLOCK ISLAND",
      "STATE": "RI",
      "ZIP": 2807,
      "ZIP4": "[Null]",
      "CONAME": "COTTAGE DWELLING",
      "SCORE": 75
    },
    {
      "ADDR": "460 BRADFORD RD",
      "CITY": "BRADFORD",
      "STATE": "RI",
      "ZIP": 2808,
      "ZIP4": "1417",
      "CONAME": "BRADFORD DYEING ASSN INC",
      "SCORE": 83
    },
    {
      "ADDR": "17 BOWLING LN",
      "CITY": "BRADFORD",
      "STATE": "RI",
      "ZIP": 2808,
      "ZIP4": "1101",
      "CONAME": "NIANTIC BAPTIST CHURCH",
      "SCORE": 18
    },
    {
      "ADDR": "703 METACOM AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "5132",
      "CONAME": "A BLAST INC",
      "SCORE": 41
    },
    {
      "ADDR": "535 METACOM AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "5165",
      "CONAME": "ANTHONY A NUNES INC",
      "SCORE": 45
    },
    {
      "ADDR": "58 GOODING AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2604",
      "CONAME": "ARAMARK",
      "SCORE": 20
    },
    {
      "ADDR": "15 WALL ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "3614",
      "CONAME": "ATLANTIC ALLOYS INC",
      "SCORE": 59
    },
    {
      "ADDR": "100 BROADCOMMON RD",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2700",
      "CONAME": "BRISTOL & WARREN GAS CO",
      "SCORE": 97
    },
    {
      "ADDR": "49 BRADFORD ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "1950",
      "CONAME": "BRISTOL COUNTY WATER AUTHORITY",
      "SCORE": 45
    },
    {
      "ADDR": "48 COURT ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2208",
      "CONAME": "BRISTOL HISTORICAL & PRSRVTN",
      "SCORE": 7
    },
    {
      "ADDR": "1 BRADFORD ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "1939",
      "CONAME": "BRISTOL PHOENIX",
      "SCORE": 49
    },
    {
      "ADDR": "9 COURT ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2207",
      "CONAME": "BRISTOL SEWER DEPT",
      "SCORE": 87
    },
    {
      "ADDR": "240 HIGH ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2211",
      "CONAME": "BRISTOL STATE HOUSE FOUNDATION",
      "SCORE": 36
    },
    {
      "ADDR": "57 WAPPING DR",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "4906",
      "CONAME": "CED-A",
      "SCORE": 35
    },
    {
      "ADDR": "12 HIGHVIEW DR",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "5153",
      "CONAME": "CODONICS INC",
      "SCORE": 14
    },
    {
      "ADDR": "COLT STATE PARK",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "[Null]",
      "CONAME": "COLT STATE PARK",
      "SCORE": 44
    },
    {
      "ADDR": "MINTURN FARM RD",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "[Null]",
      "CONAME": "COMPOSTING FACILITY",
      "SCORE": 41
    },
    {
      "ADDR": "206 GOODING AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2604",
      "CONAME": "COOK'S OVERHEAD DOORS",
      "SCORE": 97
    },
    {
      "ADDR": "125 BROADCOMMON RD # E",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2740",
      "CONAME": "CURTIS VENDING",
      "SCORE": 37
    },
    {
      "ADDR": "400 FRANKLIN ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "3899",
      "CONAME": "DENNIS MACHINE CO",
      "SCORE": 74
    },
    {
      "ADDR": "205 GOODING AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2605",
      "CONAME": "DIVINE CREATIONS HAIR STUDIO",
      "SCORE": 29
    },
    {
      "ADDR": "580 METACOM AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "5182",
      "CONAME": "EAST SIDE CLINICAL LABORATORY",
      "SCORE": 97
    },
    {
      "ADDR": "490 METACOM AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "5167",
      "CONAME": "EXTENSIONS SCHOOL OF BALLET",
      "SCORE": 57
    },
    {
      "ADDR": "PO BOX 775",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "999",
      "CONAME": "FIRE CHIEFS OFFICE",
      "SCORE": 7
    },
    {
      "ADDR": "15 GOODING AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2600",
      "CONAME": "GREG'S CANTEEN LTD",
      "SCORE": 48
    },
    {
      "ADDR": "366 HOPE ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2000",
      "CONAME": "HARPER RAMOS & SHERIDAN RL EST",
      "SCORE": 24
    },
    {
      "ADDR": "68 BUTTONWOOD ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "3626",
      "CONAME": "HUESTIS MACHINE CORP",
      "SCORE": 85
    },
    {
      "ADDR": "577 HOPE ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "1914",
      "CONAME": "KATERINA'S",
      "SCORE": 76
    },
    {
      "ADDR": "30 BURNSIDE ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2051",
      "CONAME": "KINDER INDUSTRIES INC",
      "SCORE": 34
    },
    {
      "ADDR": "444 THAMES ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "1932",
      "CONAME": "REDLEFSEN'S ROTISSERIE & GRILL",
      "SCORE": 32
    },
    {
      "ADDR": "278 HOPE ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2029",
      "CONAME": "ROBIN JENKINS ANTIQUES",
      "SCORE": 61
    },
    {
      "ADDR": "1 OLD FERRY RD",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2921",
      "CONAME": "ROGER WILLIAMS UNIVERSITY LIBR",
      "SCORE": 17
    },
    {
      "ADDR": "386 METACOM AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "5152",
      "CONAME": "SAINT-GOBAIN PERFORMANCE PLSTC",
      "SCORE": 29
    },
    {
      "ADDR": "19 VERNDALE CIR",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "1118",
      "CONAME": "SEA SIDE NURSERY & KNDRGRTN",
      "SCORE": 11
    },
    {
      "ADDR": "7 CREEK LN",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2499",
      "CONAME": "SILVER CREEK MANOR INC",
      "SCORE": 91
    },
    {
      "ADDR": "775 HOPE ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "1106",
      "CONAME": "SIP-N-DIP",
      "SCORE": 97
    },
    {
      "ADDR": "500 WOOD ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2342",
      "CONAME": "ST ANGELO HARDWOODS",
      "SCORE": 33
    },
    {
      "ADDR": "500 WOOD ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2342",
      "CONAME": "STEEL MAINTENANCE CORP",
      "SCORE": 53
    },
    {
      "ADDR": "374 METACOM AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "5192",
      "CONAME": "SUNSHINE OIL CO",
      "SCORE": 22
    },
    {
      "ADDR": "112 TUPELO ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2810",
      "CONAME": "THURSTON/QUANTUM SAILS INC",
      "SCORE": 41
    },
    {
      "ADDR": "10 COURT ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2230",
      "CONAME": "TOWN ENGINEER",
      "SCORE": 21
    },
    {
      "ADDR": "66 TUPELO ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2827",
      "CONAME": "TRI MACK PLASTICS MFG CORP",
      "SCORE": 95
    },
    {
      "ADDR": "1180 HOPE ST",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "1126",
      "CONAME": "UNIVERSITY GASTROENTEROLOGY",
      "SCORE": 80
    },
    {
      "ADDR": "12 GOODING AVE",
      "CITY": "BRISTOL",
      "STATE": "RI",
      "ZIP": 2809,
      "ZIP4": "2610",
      "CONAME": "VIDEOZONE",
      "SCORE": 80
    }
   ].map((name, index) => createKey(name, index));
  
  export { games, candies, planeswalkers, addresses };
  