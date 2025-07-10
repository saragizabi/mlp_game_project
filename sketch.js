// variables holding all game components necessary
    // music 
    let musicMain;

    // fonts
        let font1; // font from: https://www.fontspace.com/transmaidens-font-f18145
        let font2; // font from: https://www.fontspace.com/old-school-adventures-font-f26494

    // map stuff
    let mapState = 0;
    
    // quest counter
    let quest = 0;  // when 3 game complete

    // user pic options 
        let pinkU;
        let pgP;
        let pwP;
        let bP;
        let brU;
        let wEP;
        let ypEP;
        let yrEP;
        let roU;

    // user vars
        let user;
        let userPic;

    // npc vars
        let aj;
        let ts;
        let fs;
        let rd;
        let pp;
        let ra;

    // npc variables /////////
    // pony pictures credit: ©2017 - 2023 ZEkA10000
        let appleJack;
        let ajPic;
        let flutterShy;
        let fsPic;
        let twilightSparkle;
        let tsPic;
        let rainbowDash;
        let rdPic;
        let rarity;
    
    // state variables 
    // state 0 --> start screen
    // state 1 --> game playing 
    // diff mini games = diff states
        let state = 0 // character chooses character appearance

    // sprite stuff
        let sprite1;

    // backgrounds 
        let bg;
        let cover;
        let levelHitMap;
        let bg2;
        let levelHitMap2;

    // applejack game /////////////////////
        let stateApple = 0; 
        let stateAJ = 0;
        let trees;
        let apple;
        let bloom;
        let appleCollect;
        let trees2;
        let apples = 0;
        let app;
        let appleUser;
        let enemy;     
        let appleChecker = false;
        let appleTimer = 0;
        let ajEnd;
        let appleTalk = false;

    // twilight game /////////////////////
        let stateTwilight = 0;
        let stateTS = 0;
        let twilightChecker = false;
        let tiles = [];
        let numRows = 3;
        let numColumns = 4;
        let backCard;
        let frontCard;
        let cardDeck = [];
        let flipped = [];
        let delayFlip = 0;
        let numTries = 0;
        let img1, img2, img3, img4, img5, img6, cutieTwi, star;
        let twilightTimer = 0;
        let tsEnd;
        let twinkle;
        let match;
        let twiTalk = false;
        
    // fluttershy game /////////////////////
        let stateFlutter = 0;
        let stateFS = 0;
        let flutterChecker = false;
        let animals = [];
        let fsBg;
        let fsEnd;
        let fsBucket;
        let fsCountDown = 30; 
        let fsTimer = null; 
        let fsScore = 0;
        let a1;
        let a2;
        let a3;
        let a4;  
        let a1Left;
        let a2Left;
        let a3Left;
        let a4Left;
        let animalArray;
        let fsSound;
        let flutterTalk = false;

    // cutie mark assignment //////////////
        let cutieBg;
        let userCutie;
        let cutiePoints = 0;
        let crystalCutie;
        let magicCutie;
        let horseshoeCutie;
        let cutieSound;

    // rainbow dash game //////////////////
        let stateRainbow = 0; 
        let rainbowChecker = false;
        let jumpMode = false;
        let jumpPower = 0;
        let rdFly;
        let sky;
        let bolt;
        let cloud;
        let cloudSize;
        let cloudSpeed;
        let rdUser;
        let cloudObstacle;
        let boltCollect;
        let collection = [];
        let layerSpeed = 2;
        let layer1x1 = 0;
        let layer1x2 = 685;
        let stateRD = 0; 
        let cloudHits = 0;
        let bolts = 0;
        let boltNoise;
        let cloudPoof;
        let rbNoise;
        let rainbowCollect;
        let rb;
        let rainbowCount = 0;
        let rainbowTimer = 0;
        let stateRainbowStart = 0;
        let rdEnd;
        let rainTalk = false;

    // pinkie pie game /////////////////////
        // keep track of pinkie game state
        let statePinkie = 0;
        let statePP = 0;
        // arrays for correct sequences 
        let fruitTart = ['g', 'y', 'h', 'j'];
        let cookie = ['h', 'j', 'y', 'g'];
        let cherryPie = ['j', 'y', 'g', 'h'];
        // pinkie pie game bg
        let pinkieEnd;
        let pinkieStart;
        let pinkieBg;
        let pinkieTable;
        let tartPic;
        let piePic;
        let cookiePic;
        let tartPage;
        let cookiePage;
        let piePage;
        // pinkie pie game bg music
        let pinkieBgMusic;
        let pinkieWinSound;
        let pinkieButtonClick;
        let pinkieWrongSound;
        let partyCanon;
        // customers array 
        let customers = []; 
        // keep track of score
        let pinkieMissed = 0;
        let pinkieCorrect = 0;
        // keep track of answered questions
        let pinkieAnswered = 0;
        // keep track of user's key presses 
        let correctSequence;
        let userSequence = [];
        let currentLetter = 0;
        let pinkieChecker = false;
        let pinkieTalk = false;

    // pinkie pie game /////////////////////
        // keep track of rarity game state
        let rarityChecker = false;
        let stateRarity = 0;
        let stateRA = 0;
        // rarity bg
        let rbg01;
        let rbg02;
        let rbg03;
        let rbg101;
        let rbg102;
        let rbg103;
        let rbg1;
        let rbg2;
        let rbg3;
        let rbg4;
        let rbg5;
        let rarityStart;
        let rarityEnd;
        // variables to display rarity galloping 
        let raritySprite = [];
        let rarityIndex = 0;
        let rarityX = 50;
        let rarityY = 430;
        // keep track of floor as well
        let floorY = 430;
        // variables to keep track of jump mechanics
        let rarityJumpMode = false;
        let rarityJumpPower = 0;
        const rarityGrav = 0.5;
        // variables for collection
        let rarityCollected = 0;
        let rarityHit = 0;
        // variables for crystal class
        let crystal1;
        let crystal2;
        let crystalPic1;
        let crystalPic2;
        let raritySpeed = -5;
        // variables for heart class
        let heart1;
        let heart2;
        let heartSprite = [];
        let heartIndex = 0;
        // bg music
        let rarityBgMusic;
        let crystalBump;
        let diamondCollect;
        // bg speed and layer positions
        let rbg1Speed = 0.05
        let rbg2Speed = 0.1;
        let rbg3Speed = 0.15;
        let rbg101x1 = 0;
        let rbg101x2 = 800;
        let rbg102x1 = 0;
        let rbg102x2 = 800;
        let rbg103x1 = 0;
        let rbg103x2 = 800;
        let rbg1x1 = 0;
        let rbg1x2 = 800;
        let rbg2x1 = 0;
        let rbg2x2 = 800;
        let rbg3x1 = 0;
        let rbg3x2 = 800;
        let rbg4x1 = 0;
        let rbg4x2 = 800;
        // chat
        let rarityTalk = false;

    // userDiscussion
        let appleConvo;
        let flutterConvo;
        let twiConvo;
        let pinkieConvo;
        let rainbowConvo;
        let rarityConvo;

// preload all images
function preload() {
    // load fonts
    font1 = loadFont('fonts/transmaidens-font/TransmaidensItalic-OKdd.ttf');
    font2 = loadFont('fonts/old-school-adventures-font/OldSchoolAdventures-42j9.ttf');

    // pony images
    pinkU = loadImage("images/userPonies/pU.png");
    pgP = loadImage("images/userPonies/pgP.png");
    pwP = loadImage("images/userPonies/pwP.png");
    bP = loadImage("images/userPonies/bP.png");
    brU = loadImage("images/userPonies/brU.png");
    wEP = loadImage("images/userPonies/wEP.png");
    ypEP = loadImage("images/userPonies/ypEP.png");
    yrEP = loadImage("images/userPonies/yrEP.png");
    roU = loadImage("images/userPonies/roU.png");
    bg = loadImage("images/bg/bg1.png");
    cover = loadImage("images/bg/cover.png");
    levelHitMap = loadImage("images/bg/hitmap3.png");
    bg2 = loadImage("images/bg/bg2.png");
    levelHitMap2 = loadImage("images/bg/hitmap2.png");
    
    // npc ------------------------------------------------
    appleJack = loadImage("images/npcPonies/aj.png");
    twilightSparkle = loadImage("images/npcPonies/twi.png");
    flutterShy = loadImage("images/npcPonies/fs.png");
    rainbowDash = loadImage("images/npcPonies/rd2.png");
    pinkiePie = loadImage("images/npcPonies/pp.png");
    rarity = loadImage("images/npcPonies/ra.png");

    // instructions ----------------------------------------
    ajPic = loadImage("images/instructions/ajStart.png");
    fsPic = loadImage("images/instructions/fsStart.png");
    tsPic = loadImage("images/instructions/tsStart.png");
    rdPic = loadImage("images/rainbowGame/rdStart.png");
    pinkieStart = loadImage("images/pinkieGame/pinkieStart.png");
    
    //applejack game --------------------------------------
    apple = loadImage("images/appleGame/PixelApple.png");
    bloom = loadImage("images/appleGame/bloom.png");
    trees2 = loadImage("images/appleGame/trees.jpg");
    ajEnd = loadImage("images/bg/ajEnd.png");
    appleCollect = loadSound("sounds/appleGame/appleCollect.mp3");
    
    //twilight game ---------------------------------------
    img1 = loadImage("images/twilightGame/potion1.png");
    img2 = loadImage("images/twilightGame/potion2.png");
    img3 = loadImage("images/twilightGame/potion3.png");
    img4 = loadImage("images/twilightGame/potion4.png");
    img5 = loadImage("images/twilightGame/potion5.png");
    img6 = loadImage("images/twilightGame/potion6.png");
    cutieTwi = loadImage("images/twilightGame/cutie.png");
    star = loadImage("images/twilightGame/mlp.jpeg");
    tsEnd = loadImage("images/bg/tsEnd.png");
    twinkle = loadSound("sounds/twiGame/sparkle.mp3");
    match = loadSound("sounds/twiGame/match.mp3");

    // fluttershy game -------------------------------------
    fsBg = loadImage("images/bg/fsBg.jpeg");
    fsBucket = loadImage("images/fluttershyGame/bucket.png");
    fsEnd = loadImage("images/bg/fsEnd.png");
    a1 = loadImage("images/fluttershyGame/a1.png");
    a2 = loadImage("images/fluttershyGame/a2.png");
    a3 = loadImage("images/fluttershyGame/a3.png");
    a4 = loadImage("images/fluttershyGame/a4.png");
    a1Left = loadImage("images/fluttershyGame/a1Left.png");
    a2Left = loadImage("images/fluttershyGame/a2Left.png");
    a3Left = loadImage("images/fluttershyGame/a3Left.png");
    a4Left = loadImage("images/fluttershyGame/a4Left.png");
    fsSound = loadSound("sounds/flutterGame/fsSound.mp3");

    // rainbowdash game -----------------------------------
    bolt = loadImage("images/rainbowGame/bolt.png");
    rdFly = loadImage("images/rainbowGame/rd.png");
    sky = loadImage("images/rainbowGame/sky.jpeg");
    cloud = loadImage("images/rainbowGame/cloud.webp");
    rb = loadImage("images/rainbowGame/rainbow.png");
    rdEnd = loadImage("images/rainbowGame/rdEnd.png");
    boltNoise = loadSound("sounds/rainbowGame/light.mp3");
    cloudPoof = loadSound("sounds/rainbowGame/poof2.mp3");
    rbNoise = loadSound("sounds/rainbowGame/bell.mp3");

    // pinkiepie game -------------------------------------
    pinkieEnd = loadImage("images/pinkieGame/pinkieEnd.png");
    pinkieBg = loadImage("images/pinkieGame/pinkieBg.png");
    pinkieTable = loadImage("images/pinkieGame/pinkietable.png");
    tartPic = loadImage("images/pinkieGame/tart.png");
    piePic = loadImage("images/pinkieGame/pie.png");
    cookiePic = loadImage("images/pinkieGame/cookie.png");
    tartPage = loadImage("images/pinkieGame/tartPage.png");
    cookiePage = loadImage("images/pinkieGame/cookiePage.png");
    piePage = loadImage("images/pinkieGame/piePage.png");
    // load customer ponies dynamically using a loop
    for (let i = 1; i < 11; i++) {
        let ponyImage = loadImage(`images/pinkieGame/pony${i}.png`);
        customers.push(ponyImage);
    }
    // load pinkie game music
    pinkieBgMusic = loadSound("sounds/pinkieGame/Mellow-Mind_Looping.mp3");
    pinkieWinSound = loadSound("sounds/pinkieGame/win.mp3");
    pinkieButtonClick = loadSound("sounds/pinkieGame/button.mp3");
    pinkieWrongSound = loadSound("sounds/pinkieGame/wrong.mp3");
    partyCanon = loadSound("sounds/pinkieGame/party.mp3");

    // rarity game -----------------------------------
    // load in rarity bg elements
    rbg01 = loadImage("images/rarityGame/011_background.png");
    rbg02 = loadImage("images/rarityGame/010_background.png");
    rbg03 = loadImage("images/rarityGame/009_background.png");
    rbg101 = loadImage("images/rarityGame/003_ceiling.png");
    rbg102 = loadImage("images/rarityGame/002_ceiling.png");
    rbg103 = loadImage("images/rarityGame/001_ceiling.png");
    rbg1 = loadImage("images/rarityGame/008_background.png");
    rbg2 = loadImage("images/rarityGame/007_background.png");
    rbg3 = loadImage("images/rarityGame/001_ground.png");
    rbg4 = loadImage("images/rarityGame/003_ground.png");
    // load in rarity sprite sheet
    raritySprite.push(loadImage("images/rarityGame/rarity1.png"));
    raritySprite.push(loadImage("images/rarityGame/rarity2.png"));
    raritySprite.push(loadImage("images/rarityGame/rarity3.png"));
    // load in rarity end & start
    rarityEnd = loadImage("images/rarityGame/rarityEnd.png");
    rarityStart = loadImage("images/rarityGame/rarityStart.png");
    crystalPic1 = loadImage("images/rarityGame/003_crystal_004.png");
    crystalPic2 = loadImage("images/rarityGame/002_crystal_002.png");
    // load in heart sprite
    heartSprite.push(loadImage("images/rarityGame/heart1.png"));
    heartSprite.push(loadImage("images/rarityGame/heart2.png"));
    heartSprite.push(loadImage("images/rarityGame/heart3.png"));
    // bg music
    rarityBgMusic = loadSound("sounds/rarityGame/Frosty-Nights.mp3")
    crystalBump = loadSound("sounds/rarityGame/crystal.mp3");
    diamondCollect = loadSound("sounds/rarityGame/diamond.mp3");

    // music ----------------------------------------------
    musicMain = loadSound("sounds/music.mp3");

    // cutie mark assignment ------------------------------
    cutieBg = loadImage("images/bg/cutieAssignment.png");
    crystalCutie = loadImage("images/cutieMarks/crystalHeart.png");
    magicCutie = loadImage("images/cutieMarks/magicBook.png");
    horseshoeCutie = loadImage("images/cutieMarks/horseshoe.png");
    cutieSound = loadSound("sounds/cutieScreen/cutie.mp3");

    // user Discussion --> start screens (images)
    appleConvo = loadImage("images/talk/AppleTalk2.png");
    twiConvo = loadImage("images/talk/TwilightTalk2.png");
    flutterConvo = loadImage("images/talk/FlutterTalk.png");
    pinkieConvo = loadImage("images/talk/PinkieTalk2.png");
    rainbowConvo = loadImage("images/talk/RainbowTalk.png");
    rarityConvo = loadImage("images/talk/RarityTalk.png");

}

function setup() {
    // create canvas and have variable c hold it
    let c = createCanvas(800,600);
    // append canvas to canvas div in HTML
    c.parent("#canvasDiv");
    // set generic background for now 
    background(0);

    //musicMain.play();
    musicMain.loop();

    // userPony
    user = new User(userPic);
    // npc setup
    // on first map
    aj = new NPC(200, 200, appleJack, "AppleJack");                 // CK: set up all NPCs to know their own name
    ts = new NPC(400, 310, twilightSparkle, "TwilightSparkle");
    fs = new NPC(500, 85, flutterShy, "FlutterShy");
    // on second map 
    rd = new NPC(270, 150, rainbowDash, "RainbowDash");
    pp = new NPC(480, 430, pinkiePie, "PinkiePie");
    ra = new NPC(460, 135, rarity, "Rarity");

    // applejack game ////////////////////////////
    app = new Apple();
    enemy = new Bloom();

    // twilight game /////////////////////////////
    frontCard = [img1, img2, img3, img4, img5, img6];
    // push the images into an array 
    for (let i = 0; i < frontCard.length; i++) {
        cardDeck.push(frontCard[i]);
        cardDeck.push(frontCard[i]);
    }
    // randomize each time
    cardDeck.sort(function() {
        return 0.5 - random();
    })
    // create tiles 
    for (let i = 0; i < numColumns; i++) {
        for (let j = 0; j < numRows; j++) {
            tiles.push(new Tile(i * width/5, j * width/5, cardDeck.pop()));
        }
    }

    // fluttershy game
    animalArray = [a1, a2, a3, a4];

    // rainbowdash game 
    rdUser = new RainbowDash(300,300, rdFly);
    //cloudObstacle = new Cloud();
    for(let i=0; i <7; i++){
        let cloudObstacle = new Cloud(random(width+80, width+400), random(60, height-60));
        collection.push( cloudObstacle );
    }
    boltCollect = new Bolt();
    rainbowCollect = new Rainbow();

    // pinkiepie game
    // initialize the customer to customer 0
    cPinkie = new Customer(0);

    // rarity game
    // intialize crystals and hearts
    crystal1 = new Crystal(crystalPic1);
    crystal2 = new Crystal(crystalPic2);
    heart1 = new Heart();
    heart2 = new Heart();

    // set all local storage variables
    localStorage.setItem("state", state);
    localStorage.setItem("cutiePoints", cutiePoints);
    localStorage.setItem("quest", quest);
}

// handle all game states here
function draw() {
    // set state to state saved in localstorage 
    state = parseInt(localStorage.getItem("state"), 10);
    // set quest to quest saved in localstorage
    quest = parseInt(localStorage.getItem("quest"), 10);
    // set cutie points to cutie points saved in localstorage
    cutiePoints = parseInt(localStorage.getItem("cutiePoints"), 10);
    
    if (state == 0) {
        // start game
        start();
    }
    if (state == 1) {
        // set localstorage state 
        localStorage.setItem("state", state);
        // play game
        gamePlay();
    }
    if (stateApple == 1) {
        // play game
        applePicking();
        // set start screen
        //image(ajStart, width/2, height/2, 800, 600);
    }
    if (stateApple == 2) {
        // set end screen
        image(ajEnd, width/2, height/2, 800, 600);
        // print the score 
        fill(255);
        textFont(font2);
        textSize(20);
        noStroke();
        text(appleTimer, 480, 270);
        textFont(font1);
        if(keyIsDown(13)) {
            stateApple = 0;
            state = 1;
        }
    }
    if (stateTwilight == 1) {
        // play game
        memoryGame();
        // set start screen
        //image(tsStart, width/2, height/2, 800, 600);
    }
    if (stateTwilight == 2) {
        // set end screen
        image(tsEnd, width/2, height/2, 800, 600);
        // print the score
        fill(255);
        textFont(font2);
        textSize(20);
        noStroke();
        text(twilightTimer, 300, 285);
        textFont(font1);
        if(keyIsDown(13)) {
            stateTwilight = 0;
            state = 1;
        }
    }

    if (stateFlutter == 1) {
        // play game
        animalRoundup();
        // set start screen
        //image(fsStart, width/2, height/2, 800, 600);
    }
    if (stateFlutter == 2) {
        // set end screen
        image(fsEnd, width/2, height/2, 800, 600);
        // put the score 
        fill(255, 204, 232,);
        text(fsScore, width/2 - 80, height/2 + 15);
        // if user presses enter, take them back to the main screen
        if (keyIsDown(13)) {
            // reset score 
            fsScore = 0;
            stateFlutter = 0;
            state = 1;
        }
    }

    if (stateRainbow == 1) {
        // play game 
        raceGame();
    }
    if (stateRainbow == 2) {
        // set end screen
        image(rdEnd, width/2, height/2, 800, 600);
        // put the score 
        fill(255);
        textFont(font2);
        textSize(20);
        noStroke();
        //text(rainbowCount, width/2 - 80, height/2 + 15);
        text(rainbowCount, 500, 280);
        textFont(font1);
        // if user presses enter, take them back to the main screen
        if (keyIsDown(13)) {
            // reset score 
            rainbowCount = 0;
            stateRainbow = 0;
            state = 1;
        }
    }

    if (statePinkie == 1) {
        // play game
        pinkieGame();
    }
    if (statePinkie == 2) {
        // stop bg music 
        pinkieBgMusic.stop();
        imageMode(CENTER);
        // set end screen
        image(pinkieEnd, width/2, height/2, 800, 600);
        // put the score 
        textFont(font2);
        textSize(25);
        fill(255);
        text(pinkieCorrect, width/2 - 122.5, height/2 - 20);
        // if user presses enter, take them back to the main screen
        if (keyIsDown(13)) {
            textFont(font1);
            pinkieCorrect = 0;
            pinkieMissed = 0;
            statePinkie = 0;
            state = 1;
        }
    }

    if (stateRarity == 1) {
        // play game
        rarityGame();
    }
    if (stateRarity == 2) {
        imageMode(CENTER);
        // set end screen
        image(rarityEnd, width/2, height/2, 800, 600);
        // put the score 
        textFont(font2);
        textSize(25);
        fill(255);
        text(rarityCollected, width/2 + 110, height/2 + 15);
        // if user presses enter, take them back to the main screen
        if (keyIsDown(13)) {
            textFont(font1);
            rarityCollected = 0;
            rarityHit = 0;
            stateRarity = 0;
            state = 1;
        }
    }

    // if user has completed all the quests ALL STATES MUST BE 0 !!!!
    if (quest == 6 && stateFlutter == 0 && (stateTwilight == 0 && stateApple == 0 && stateRainbow == 0 && statePinkie == 0 && stateRarity == 0)) {
        // play sound 
        musicMain.stop();
        //cutieSound.play();

        // new state for cutie mark assignment
        state = 2;
        // save this state
        localStorage.setItem("state", state);
        // logic for cutie mark assignments
        // 0-65: book, 65-100: horseshoe, 100+: crystal heart
        if (cutiePoints <= 65) {
            userCutie = magicCutie;
        } else if (cutiePoints >= 65 && cutiePoints <= 100) {
            userCutie = horseshoeCutie;
        } else if (cutiePoints > 100) {
            userCutie = crystalCutie;
        }
        // display cutiemark assignment image
        image(cutieBg, width/2, height/2, 800, 600);
        // display cutie mark
        image(userCutie, width/2, height/2 - 150, 100, 100);
        // save cutie mark in local storage 
        localStorage.setItem("userCutie", userCutie);
        //cutieSound.stop();
    }
}

/////////////////////////////////////////////////////////////
// start screen
function start() {
    background(0);
    image(cover, width/2, height/2, 1064, 798);
    // text info
        noStroke();
        textFont(font1);
        textSize(30);
        textAlign(CENTER);
        fill(255);
        rect(0,265,800,50);
        fill(243,186,217);
        text("Choose your character!", width/2 + 1, height/2); 
        fill(243,186,217);
        text("Choose your character!", width/2 + 3, height/2); 
        fill(241,134,192);
        text("Choose your character!", width/2 + 5, height/2); 
        fill(255,204,232,);
        text("Choose your character!", width/2, height/2); 
    // let user pick character
        imageMode(CENTER);
        // reads input from select element
        var selectP = document.getElementById("selectP");
        // shows user which pony they're selecting
        if (selectP.value == "1") {
            image(pinkU, width/2 + 115, height/2 + 200, 350, 350, pinkU.width - 45, pinkU.height - 145);
            localStorage.setItem('userPony', pinkU);
            user.userPony = pinkU;
        } else if (selectP.value == "2") {
            image(pgP, width/2 + 115, height/2 + 200, 350, 350, pgP.width - 45, pgP.height - 145);
            localStorage.setItem('userPony', pgP);
            user.userPony = pgP;
        } else if (selectP.value == "3") {
            image(pwP, width/2 + 115, height/2 + 200, 350, 350, pwP.width - 45, pwP.height - 145);
            localStorage.setItem('userPony', pwP);
            user.userPony = pwP;
        } else if (selectP.value == "4") {
            image(bP, width/2 + 115, height/2 + 200, 350, 350, bP.width - 45, bP.height - 145);
            localStorage.setItem('userPony', bP);
            user.userPony = bP;
        } else if (selectP.value == "5") {
            image(brU, width/2 + 115, height/2 + 200, 350, 350, brU.width - 45, brU.height - 145);
            localStorage.setItem('userPony', brU);
            user.userPony = brU;
        } else if (selectP.value == "6") {
            image(ypEP, width/2 + 115, height/2 + 200, 350, 350, ypEP.width - 45, ypEP.height - 145);
            localStorage.setItem('userPony', ypEP);
            user.userPony = ypEP;
        } else if (selectP.value == "7") {
            image(roU, width/2 + 115, height/2 + 200, 350, 350, roU.width - 45, roU.height - 145);
            localStorage.setItem('userPony', roU);
            user.userPony = roU;
        } else if (selectP.value == "8") {
            image(yrEP, width/2 + 115, height/2 + 200, 350, 350, yrEP.width - 45, yrEP.height - 145);
            localStorage.setItem('userPony', yrEP);
            user.userPony = yrEP;
        } else {
            image(wEP, width/2 + 115, height/2 + 200, 350, 350, wEP.width - 45, wEP.height - 145);
            localStorage.setItem('userPony', wEP);
            user.userPony = wEP;
        }
}
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
// function for when user clicks button to start game
function startGame() {
    // set state
        state = 1;
    // save state in local storage
        localStorage.setItem("state", state);
    // remove HTML dropdown & button display 
    let div = document.getElementById("characterChoose");
    div.style.display = "none";
}
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// main story game 
function gamePlay() {
    // background

    if (mapState == 0){

        imageMode(CORNER);
        background(128);
        image(bg, 0, 0);
        fill(255);
        textSize(20);
        text("Quests: " + quest, 55, 30);
        imageMode(CENTER);

        // move User
        user.display();
        user.move();
        // diplay aj
        if(appleTalk == false && flutterTalk == false && twiTalk == false){
            
            // display aj
            aj.display();
            // take to game
            aj.userInteraction(user.x, user.y);
            aj.userDiscussion(user.x, user.y);
            //if(appleTalk == true){
                //text
                //text("HOWDY ", width/2, height/2);
                //appleDialogue();
            //}

            // display ts
            ts.display();
            // take to game
            ts.userInteraction(user.x, user.y);
            ts.userDiscussion(user.x, user.y);
            //if(twiTalk == true){
                //text
            //    text("HI THERE", width/2, height/2);
            //}

            // display fs
            fs.display();
            // take to game
            fs.userInteraction(user.x, user.y);
            fs.userDiscussion(user.x, user.y);

        }

        // have different sprite sheets/images --> user clicks a button/mouse press
        // to read the dialouge --> when user hits enter (or some key) takes you back to main game
        else if (appleTalk == true){
                        
            imageMode(CORNER);
            background(128);
            image(appleConvo, 0, 0, 800, 600);
            //cursor(CROSS);
            //if(appleTalkCounter == 1){
                //text("HI THERE", width/2, height/2);
                //text("PRESS ENTER TO RETURN", width/2, 400);
            //}

            if(keyIsDown(13)) {
                appleTalk = false;
                aj.dialogMode = false;
            }
        }

        else if (flutterTalk == true){
            imageMode(CORNER);
            background(128);
            image(flutterConvo, 0, 0, 800, 600);
            //cursor(CROSS);
            //if(appleTalkCounter == 1){
                //text("HI THERE", width/2, height/2);
                //text("PRESS ENTER TO RETURN", width/2, 400);
            //}

            if(keyIsDown(13)) {
                flutterTalk = false;
                fs.dialogMode = false;
            }
        }

        else if (twiTalk == true){
                        
            imageMode(CORNER);
            background(128);
            image(twiConvo, 0, 0, 800, 600);
            //cursor(CROSS);
            //if(appleTalkCounter == 1){
                //text("HI THERE", width/2, height/2);
                //text("PRESS ENTER TO RETURN", width/2, 400);
            //}

            if(keyIsDown(13)) {
                twiTalk = false;
                ts.dialogMode = false;
            }
        }

        //if(user.x >)
    }


    if (mapState == 1){
        imageMode(CORNER);
        background(128);
        //image(levelHitMap, 0, 0);
        image(bg2, 0, 0);
        fill(255);
        textSize(20);
        text("Quests: " + quest, 55, 30);
        imageMode(CENTER);
        
        user.display();
        user.move();
        

        // if rainTalk, ppTalk, and rarityTalk FALSE (&&)
        if(rainTalk == false && pinkieTalk == false && rarityTalk == false){
            // display rd
            rd.display();
            // take to game
            rd.userInteraction(user.x, user.y);
            rd.userDiscussion(user.x, user.y);

            // display pp
            pp.display();
            // take to game
            pp.userInteraction(user.x, user.y);
            pp.userDiscussion(user.x, user.y);

            // display ra
            ra.display();
            // take to game
            ra.userInteraction(user.x, user.y);
            ra.userDiscussion(user.x, user.y);

        }

        else if(rainTalk == true){

            imageMode(CORNER);
            background(128);
            //image(pinkieConvo, 0, 0, 800, 600);
            image(rainbowConvo, 0, 0, 800, 600);

            //cursor(CROSS);
            //if(appleTalkCounter == 1){
                //text("HI THERE", width/2, height/2);
                //text("PRESS ENTER TO RETURN", width/2, 400);
            //}

            if(keyIsDown(13)) {
                rainTalk = false;
                rd.dialogMode = false;
            }
            
        }

        else if (pinkieTalk == true){

            imageMode(CORNER);
            background(128);
            image(pinkieConvo, 0, 0, 800, 600);
            //cursor(CROSS);
            //if(appleTalkCounter == 1){
                //text("HI THERE", width/2, height/2);
                //text("PRESS ENTER TO RETURN", width/2, 400);
            //}

            if(keyIsDown(13)) {
                pinkieTalk = false;
                pp.dialogMode = false;
            }

        }

        else if (rarityTalk == true){

            imageMode(CORNER);
            background(128);
            image(rarityConvo, 0, 0, 800, 600);
            //cursor(CROSS);
            //if(appleTalkCounter == 1){
                //text("HI THERE", width/2, height/2);
                //text("PRESS ENTER TO RETURN", width/2, 400);
            //}

            if(keyIsDown(13)) {
                rarityTalk = false;
                ra.dialogMode = false;
            }

        }

        // else if ()

        
    }

    
}
/////////////////////////////////////////////////////////////

// user class 
class User {
    // constructor 
    // give user a graphic 
    // set position for user
    // give user a speed
    constructor(userPony) {
        // store user's pony graphic 
        // userPony is image
        this.userPony = pinkU; //localStorage.getItem('userPony'); // this variable is null for those who haven't been to your application yet

        this.x = width/2 - 50;
        this.y = height - 100;
        this.speed = 2;
        
        // sprite variables
        this.picX = 0;
        this.picY = 0;
        this.w = 47;
        this.h = 48;
        this.totalFrames = int(this.userPony.width / this.w);

        // keep track of which frame / cell we are going to render
        this.currentFrame = 0;

        // a pause counter to slow down the animation (optional)
        this.pauseCounter = 0;
        this.pauseCounterMax = 3;

        this.row = 48*3;

        //hitmap
        this.color = color(0,255,0);
        this.size = 55;

    }
    
    // display user
    display() {        
        if(stateApple == 1){
            image(this.userPony, this.x, this.y, 65, 65,      this.currentFrame * this.w, this.row, this.w, this.h);
        }
        else {
            image(this.userPony, this.x, this.y, 55, 55,      this.currentFrame * this.w, this.row, this.w, this.h);
        }
    }

    // used for hitmaps
    computeSensors() {
        this.middleX = this.x;
        this.middleY = this.y + this.size/3;
        this.left = this.x - 8;
        this.right = this.x + 8;
        this.up = this.y - this.size/2 + 8;
        this.down = this.y + this.size/2 - 8; 
    }

    // move user + INCLUDES SPRITE MOVEMENT  
    move() {
        this.computeSensors();
        this.color = color(0,255,0);

        // other map stuff
        if(mapState == 0 && this.y > 650){
            mapState = 1;
            this.x = 380;
            this.y = 60;
        }

        if(mapState == 1 && this.y < 50){
            mapState = 0;
            this.x = width/2 - 50;
            this.y = height - 100;
        }

        // MOVE UP
        if(stateApple == 1){
            if(keyIsDown(87)){
                this.row = 48*3;
                if(this.y > 300) {
                    this.y -= 1.5;
                }

                if(frameCount % 15 ==0){
                    this.currentFrame += 1;
                }
                
                if(this.currentFrame >= 3){
                    this.currentFrame = 0;
                }
            }
            // MOVE DOWN
            else if(keyIsDown(83)){
                this.row = 0;
                if(this.y < 550) {
                    this.y += 1.5;
                }

                if(frameCount % 15 ==0){
                    this.currentFrame += 1;
                }
                
                if(this.currentFrame >= 3){
                    this.currentFrame = 0;
                }
            }
            // MOVE LEFT
            else if(keyIsDown(65)){
                this.row = 48;
                if(this.x > -15) {
                    this.x -= 1.5;
                }

                if(frameCount % 15 ==0){
                    this.currentFrame += 1;
                }
                
                if(this.currentFrame >= 3){
                    this.currentFrame = 0;
                }
            }
            // MOVE RIGHT
            else if(keyIsDown(68)){
                this.row = 48*2;
                if(this.x < 770) {
                    this.x += 1.5;
                }

                if(frameCount % 15 ==0){
                    this.currentFrame += 1;
                }
                
                if(this.currentFrame >= 3){
                    this.currentFrame = 0;
                }
            }
        }
        // chara movement through the main game 
        else {
            if(mapState == 0){

                // MOVE UP
                if(keyIsDown(87)){
                    // hit map 
                    let p = red( levelHitMap.get(this.middleX, this.up) );
                    // if area is not black --> chara movement
                    if (p > 200) {
                        this.row = 48*3;
                        this.y -= this.speed;
                        if(frameCount % 15 ==0){
                            this.currentFrame += 1;
                        }
                        if(this.currentFrame >= 3){
                            this.currentFrame = 0;
                        }
                    }

                    // other map stuff
                    else {
                        if(this.y>500){
                            this.y -= this.speed;
                        }
                    }
                        
                }
                // MOVE DOWN
                else if(keyIsDown(83)){
                    let p = red( levelHitMap.get(this.middleX, this.down) );
                    /*
                    if(this.y > 500){
                        this.y += this.speed;
                    }
                    */
                    if (p > 200) {
                        this.row = 0;
                        this.y += this.speed;
                        if(frameCount % 15 ==0){
                            this.currentFrame += 1;
                        }
                        if(this.currentFrame >= 3){
                            this.currentFrame = 0;
                        }
                    }
                    // other map stuff
                    else {
                        if(this.y>500){
                            this.y += this.speed;
                        }
                    }
                }
                // MOVE LEFT
                else if(keyIsDown(65)){
                    let p = red( levelHitMap.get(this.left, this.middleY) );
                    if (p > 200) {
                        this.row = 48;
                        this.x -= this.speed;
                        if(frameCount % 15 ==0){
                            this.currentFrame += 1;
                        }
                        if(this.currentFrame >= 3){
                            this.currentFrame = 0;
                        }
                    }
                    // other map stuff
                    else {
                        if(this.y>500){
                            this.x -= this.speed;
                        }
                    }
                }
                // MOVE RIGHT
                else if(keyIsDown(68)){
                    let p = red( levelHitMap.get(this.right, this.middleY) );
                    if (p > 200) {
                        this.row = 48*2;
                        this.x += this.speed;
                        if(frameCount % 15 ==0){
                            this.currentFrame += 1;
                        }
                        if(this.currentFrame >= 3){
                            this.currentFrame = 0;
                        }
                    }
                    // other map stuff
                    else {
                        if(this.y>500){
                            this.x += this.speed;
                        }
                    }     
                }

            }

            // second map (RD, R, PP ponies)
            if (mapState == 1){

                // MOVE UP
                if(keyIsDown(87)){
                    // hit map 
                    let p = red( levelHitMap2.get(this.middleX, this.up) );
                    // if area is not black --> chara movement
                    if (p > 200) {
                        this.row = 48*3;
                        this.y -= this.speed;
                        if(frameCount % 15 ==0){
                            this.currentFrame += 1;
                        }
                        if(this.currentFrame >= 3){
                            this.currentFrame = 0;
                        }
                    }

                    // other map stuff
                    
                    else {
                        if(this.y>500){
                            this.y -= this.speed;
                        }
                    }
                    
                        
                }
                // MOVE DOWN
                else if(keyIsDown(83)){
                    let p = red( levelHitMap2.get(this.middleX, this.down) );
                    
                    if(this.y > 500){
                        this.y += this.speed;
                    }
                    
                    if (p > 200) {
                        this.row = 0;
                        this.y += this.speed;
                        if(frameCount % 15 ==0){
                            this.currentFrame += 1;
                        }
                        if(this.currentFrame >= 3){
                            this.currentFrame = 0;
                        }
                    }
                    // other map stuff
                    
                    else {
                        if(this.y>500){
                            this.y += this.speed;
                        }
                    }
                    
                }
                // MOVE LEFT
                else if(keyIsDown(65)){
                    let p = red( levelHitMap2.get(this.left, this.middleY) );
                    if (p > 200) {
                        this.row = 48;
                        this.x -= this.speed;
                        if(frameCount % 15 ==0){
                            this.currentFrame += 1;
                        }
                        if(this.currentFrame >= 3){
                            this.currentFrame = 0;
                        }
                    }
                    // other map stuff
                    
                    else {
                        if(this.y>500){
                            this.x -= this.speed;
                        }
                    }
                    
                }
                // MOVE RIGHT
                else if(keyIsDown(68)){
                    let p = red( levelHitMap2.get(this.right, this.middleY) );
                    if (p > 200) {
                        this.row = 48*2;
                        this.x += this.speed;
                        if(frameCount % 15 ==0){
                            this.currentFrame += 1;
                        }
                        if(this.currentFrame >= 3){
                            this.currentFrame = 0;
                        }
                    }
                    // other map stuff
                    
                    else {
                        if(this.y>500){
                            this.x += this.speed;
                        }
                    }     
                    
                }

            }
        // end of move 
        }
    }
}

// NPC class ///////////////////////////////////////////////////////////////////
class NPC {
    // constructor
    // give each npc a certain location
    // give npc certain look/design (maybe)
    constructor(x, y, graphic, npcName) {
        this.x = x;
        this.y =y;
        this.graphic = graphic;
        this.userX = user.x;
        this.userY = user.y;

        // CK: ensure that each NPC knows its own name
        this.npcName = npcName;

        // CK: also set up each NPC to know whether their own game has been completed or not
        this.myGameCompleted = false;

        // CK: also set up a state variable to keep track of whether we are in "dialog" mode with this NPC
        this.dialogMode = false;
    }

    // display NPC 
    display() {
        image(this.graphic, this.x, this.y, 55, 55);
    }

    // interact with user 
    userInteraction(x, y) { //coded as "collision" with chara --> would toggle start screen for game
        // provide user x and y coords --> see if near NPC
        if (dist(x, y, this.x, this.y) < 50) {
            if (this.graphic == appleJack && appleChecker == false){
                this.userX = user.x;
                this.userY = user.y;
                stateApple = 1;
            }
            else if (this.graphic == twilightSparkle && twilightChecker == false && stateApple != 1){
                // twilight game
                stateTwilight = 1;
            } else if (this.graphic == flutterShy && stateFlutter != 1 && flutterChecker == false) {
                // apple jack game
                stateFlutter = 1;
            }
            else if (this.graphic == rainbowDash && rainbowChecker == false){
                // rainbow dash game
                stateRainbow = 1;
            } else if (this.graphic == pinkiePie && statePinkie != 1 && pinkieChecker == false) {
                // pinkie pie game
                statePinkie = 1;
            } else if (this.graphic == rarity && stateRarity != 1 && rarityChecker == false) {
                // rarity game
                stateRarity = 1;
            }
        }
    }


    // FOR NPC TALKING - figure out logistics
    userDiscussion(x,y){
        // if you have completed specific NPC quest AND are near them --> text will pop up 
        
        if (dist(x, y, this.x, this.y) < 50) {

            // CK: see if this NPC's game has been completed
            if (this.myGameCompleted == true) {
                
                // CK: are we in "dialogMode"?
                if (this.dialogMode == false) {
                    
                    // CK: check to see if the user has clicked the ENTER key
                    if (keyIsDown(88)) {
                       //text("HOWDY!!", width/2, height/2);
                        // when enter is clicked --> switch the npc to a new state 
                        // pony is no longer displayed instead it is some other screen
                        this.dialogMode = true;

                        if(this.npcName == "AppleJack"){
                            appleTalk = true;
                        }
                        if(this.npcName == "FlutterShy"){
                            flutterTalk = true;
                        }
                        //this.dialogMode = true;
                        if(this.npcName == "TwilightSparkle"){
                            twiTalk = true;
                        }
                        //this.dialogMode = true;
                        if(this.npcName == "RainbowDash"){
                            rainTalk = true;
                        }

                        if(this.npcName == "PinkiePie"){
                            pinkieTalk = true;
                        }

                        if(this.npcName = "Rarity"){
                            rarityTalk = true;
                        }
                        //appleTalk = 1;

                        //if(this.dialogMode == true){
                        //    appleDialogue();
                        //}
                    }
                    
                    else {
                        textSize(9);
                        textFont(font2);
                        if(this.npcName == "AppleJack"){
                            
                            rect(117, 146, 208, 20, 10);
                            fill(0);
                            text(`press X to talk with ${this.npcName}!`, 220, 160);
                            
                        } 
                        else if (this.npcName == "FlutterShy"){
                            textSize(8);
                            rect(400, 30, 208, 20, 10);
                            fill(0);
                            text(`press X to talk with ${this.npcName}!`, 505, 44);
                        }
                        else if (this.npcName == "TwilightSparkle"){
                            textSize(8);
                            rect(300, 250, 220, 20, 10);
                            fill(0);
                            text(`press X to talk with ${this.npcName}!`, 407, 263);
                        }
                        else if (this.npcName == "Rarity"){
                            textSize(9);
                            rect(355, 80, 190, 20, 10);
                            fill(0);
                            text(`press X to talk with ${this.npcName}!`, 448, 93);
                        }
                        else if (this.npcName == "PinkiePie"){
                            textSize(9);
                            rect(375, 375, 200, 20, 10);
                            fill(0);
                            text(`press X to talk with ${this.npcName}!`, 473, 390);
                        }
                        else if (this.npcName == "RainbowDash"){
                            textSize(8);
                            rect(175, 85, 210, 20, 10);
                            fill(0);
                            text(`press X to talk with ${this.npcName}!`, 275, 99);
                        }
            

                        fill(255);
                        textSize(20);
                        textFont(font1);
                    }

                }

            }
        }
        /*
            //applejack
            if(appleChecker == true) {
                //if(appleTalk == false){

                    fill(255);
                    textSize(20);
                    text("press ENTER to talk with AppleJack!", width/2, height/2);
                    // press enter key
                    // if you press a specific button --> character-specific text will pop up (+ voiceline maybe??)
                    if (keyIsDown(13)) {
                        //give state
                        //text("HOWDY!!", width/2, height/2);
                        appleTalk = true;
                    }

                //}
            }
            //twilight 
            if(twilightChecker == true) {
                //if(twiTalk == false){

                    fill(255);
                    textSize(20);
                    text("press ENTER to talk with Twilight!", width/2, height/2);
                    // press enter key
                    // if you press a specific button --> character-specific text will pop up (+ voiceline maybe??)
                    if (keyIsDown(13)) {
                        //give state
                        //text("HOWDY!!", width/2, height/2);
                        twiTalk = true;
                    }

                //}
                
            } 
        }

        // if exit the general area of pony --> get rid of msg
        else {
            //make ALL pony talk states false
            appleTalk = false;
            twiTalk = false;
        }
        */
    }
    
}

/*
// DIALOGUE STUFF --> FUNCTIONS ETC ETC 
function appleDialogue() {
    imageMode(CORNER);
    background(0);
    fill(255);
    textSize(20);
    text("HOWDY!!! ", width/2, height/2);

    // if user clicks button or some key --> dialouge mode becomes false 
    if (keyIsDown(13)) {
        //give state
        //text("HOWDY!!", width/2, height/2);
        aj.dialogMode = false;
        appleTalk = false;
    }

}
*/

// rainbow dash game //////////////////////////////////////////////////////////

function raceGame() {
    imageMode(CORNER);

    if(stateRD == 0){
        // start screen
        background(rdPic);
        fill(255);
        textSize(20);
        //text("CLICK TO START ", width/2, height/2);
    }

    else if(stateRD == 1){
        skyGame();
    }
/*
    else if (stateRD == 2){
        background(0);
        fill(255);
        textSize(20);
        text("GAME OVER ", width/2, height/2);
    }
*/
}


function skyGame() {
    imageMode(CORNER);
    background(sky);
    image(sky, layer1x1, 0, width, height);
    image(sky, layer1x2, 0, width, height);

    textSize(20);
    text("HITS: " + cloudHits, 50, 25);
    text("BOLTS: " + bolts, 55, 55);
    text("RAINBOWS: " + rainbowCount, 70, 85);

    text("Timer: " + rainbowTimer, 725, 30);

    layer1x1 -= layerSpeed;
    layer1x2 -= layerSpeed;

    if (layer1x1 <= -width) {
        // teleport it so that it now appears on the right side of the other copy
        layer1x1 = layer1x2 + width;
    }
    
    if (layer1x2 <= -width) {
        // teleport it so that it now appears on the right side of the other copy
        layer1x2 = layer1x1 + width;
    }

    rdUser.display();
    rdUser.move();

    if (stateRainbowStart == 1){

        for (i = 0; i < collection.length; i++){
            collection[i].display(cloud);
            collection[i].detectHit(rdUser.x, rdUser.y);
        }

        boltCollect.display(bolt);
        boltCollect.detectHit(rdUser.x, rdUser.y);

        rainbowCollect.display(rb);
        rainbowCollect.detectHit(rdUser.x, rdUser.y);

        // count framecount while game is running   
        if (frameCount % 60 == 0 && stateRainbow == 1) {  
            rainbowTimer ++;
        }

    }
    

    if (cloudHits >= 3 ){
        stateRD = 2;
        quest += 1;
        localStorage.setItem("quest", quest);
        cutiePoints += rainbowCount;
        localStorage.setItem("cutiePoints", cutiePoints);

        // CK: tell this NPC that their game has been completed 
        rd.myGameCompleted = true;

        rainbowChecker = true;
        //user.x = aj.userX;
        //user.y = aj.userY;
        // take game to end screen
        stateRainbow = 2;
    }

    if (bolts >= 3){
        if(cloudHits>= 1){
            cloudHits --;
            bolts -= 3;
        }
    }

}


class RainbowDash {
    constructor(x, y, img) {
      this.x = x;
      this.y = y;
      //this.originalX = x;
      //this.originalY = y;
      this.graphic = rdFly;
      this.speed = 3;

      this.jumpPower = 0;
        
      // sprite variables 
        this.picX = 0;
        this.picY = 0;
        this.w = 30;
        this.h = 16;
        this.img = img;

        this.totalFrames = int(this.img.width / this.w);
        
        this.currentFrame = 0;

        this.pauseCounter = 0;
        this.pauseCounterMax = 3;
    }
  
    display() {
      //image(this.graphic, this.x, this.y, 65, 65);
      image(this.img, this.x, this.y, 65, 65,  this.currentFrame * this.w, 0, 32, 32);
        
        if(frameCount % 15 == 0){
            this.currentFrame += 1;
        }
        if(this.currentFrame >= 2){
            this.currentFrame = 0;
        }
    
    }
  
    move() {
        if (keyIsDown(UP_ARROW)){
            stateRainbowStart = 1;
            //if(this.y < 600) {
                //this.y -= this.speed;
                //this.graphic = redUp;
                jumpMode = true;
                this.jumpPower = -5;
        }

        if (jumpMode == true) {
            this.y += this.jumpPower;
            this.jumpPower += 0.2;
            if (this.y >= 530 ) {
                jumpMode = false;
                //this.y = 300;
            }
        }
    }

}

// perlin noise the clouds !!!
class Cloud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //this.x = random(width+70, width+100);
        //this.y = random(60,height-60);
        this.noiseLocation = random(0, 1000);
        //cloudSize = random(65, 90);
        cloudSize = 80;
        cloudSpeed = random(3, 4.5);
    }
    
    display(graphic) {
        image(graphic, this.x, this.y, cloudSize, cloudSize);
        
        let noiseValue = noise( this.noiseLocation );
        // know map fxn - 5 args
        let movementValue = map( noiseValue, 0, 1, -1.5, 1.5 );
        this.y += movementValue;
        // advance on the curve --> to get a random related number
        this.noiseLocation += 0.01;
        
        this.x -= cloudSpeed;
        if (this.x < -20){
            this.x = random(width+25, width+55);
            this.y = random(40, height-40);
            cloudSpeed = random(3, 4.5);
            //cloudSize = random(65, 90);
        }
    }

    // detect a hit with another entity
    detectHit(x, y) {
        if (dist(x, y, this.x, this.y) < 50) {
            cloudPoof.play();
            cloudHits ++;
            // move the key
            //points --;
            this.x = random(width+25, width+55);
            this.y = random(20,height-20);
            cloudSpeed = random(3, 4.5);
            //cloudSize = random(65, 90);

            return true;
        }
        return false;
    }
}

class Bolt {
    constructor() {
        //this.x = x;
        //this.y = y;
        this.x = width + 25;
        this.y = random(60, height-60);
    }
    
    display(graphic) {
        image(graphic, this.x, this.y, 100, 100);
        this.x -= 2;
        if (this.x < -20){
            this.x = width+25;
            this.y = random(20, height-20);
        }
    }

    // detect a hit with another entity
    detectHit(x, y) {
        if (dist(x, y, this.x, this.y) < 40) {
            boltNoise.play();
            bolts ++;
            // move the key
            //points ++;
            this.x = width+25;
            this.y = random(20,height-20);

            return true;
        }
        return false;
    }

}

class Rainbow {
    constructor() {
        //this.x = x;
        //this.y = y;
        this.x = width + 25;
        this.y = random(60, height-60);
    }
    
    display(graphic) {
        image(graphic, this.x, this.y, 100, 100);
        this.x -= 2;
        if (this.x < -20){
            this.x = width+25;
            this.y = random(20, height-20);
        }
    }

    // detect a hit with another entity
    detectHit(x, y) {
        if (dist(x, y, this.x, this.y) < 40) {
            rbNoise.play();
            rainbowCount ++;
            // move the key
            //points ++;
            this.x = width+25;
            this.y = random(20,height-20);

            return true;
        }
        return false;
    }

}


// apple jack game //////////////////////////////////////////////////////////
function applePicking() {

    imageMode(CORNER);

    if(stateAJ == 0){
        // start screen
        background(ajPic);
        fill(255);
        textSize(20);
        //text("CLICK TO START ", width/2, height/2);
    }

    else if(stateAJ == 1){
        appleOrchard();
    }

/*
    else if (stateAJ == 2){
        background(0);
        fill(255);
        textSize(20);
        text("GAME OVER ", width/2, height/2);
    }
*/
}

function appleOrchard() {
    imageMode(CORNER);
    background(trees2); // pixel version of bg
    fill(255);
    textSize(20);
    text("Apples: " + apples, 50, 60);
    text("Timer: " + appleTimer, 50, 30);

    app.display(apple);
    user.display();
    user.move();

    app.detectHit(user.x, user.y);

    enemy.display();
    enemy.detectHit(user.x, user.y);

    // when user finishes the game
    if(apples >= 15){
        quest += 1;
        localStorage.setItem("quest", quest);
        cutiePoints += appleTimer;
        localStorage.setItem("cutiePoints", cutiePoints);

        // CK: tell this NPC that their game has been completed 
        aj.myGameCompleted = true;

        appleChecker = true;
        user.x = aj.userX;
        user.y = aj.userY;
        // take game to end screen
        stateApple = 2;
    }
    // count framecount while game is running   
    if (frameCount % 60 == 0 && stateApple == 1) {  
        appleTimer ++;
    }
}

class Apple {
    constructor(x,y) {
        this.originalX = random(20, width-20);
        this.originalY = random(30,70);
        // perlin noise
        this.noiseLocation = random(0, 1000);
    }

    display(graphic) {
        image(graphic, this.originalX, this.originalY, 30, 30);
        // perlin noise --> make candy sway 
        // select a specific spot on the curve
        let noiseValue = noise( this.noiseLocation );
        // know map fxn - 5 args
        let movementValue = map( noiseValue, 0, 1, -2, 2 );

        this.originalX += movementValue;
        // advance on the curve --> to get a random related number
        this.noiseLocation += 0.01;

        this.originalY += 2;
        if (this.originalY > height || this.originalX < -30 || this.originalX > width + 30){
            this.originalY = 50;
            this.originalX = random(20, width-20);
        }

    }

    // detect a hit with another entity
    detectHit(x, y) {
        if (dist(x, y, this.originalX, this.originalY) < 40) {
            // move the key
            apples ++;
            this.originalX = random(30,570);
            this.originalY = random(30,70);
            appleCollect.play();
        }
    }
}
   
class Bloom {
    constructor(){
        this.originalX = width+50;
        this.originalY = random(280, height-50);
        this.speed = random(5,8);
    }

    display() {
        image(bloom, this.originalX, this.originalY, 50, 50);
        this.originalX -= this.speed;
        if(this.originalX < -50){
            this.originalX = width+50;
            this.originalY = random(280, height-50);
        }
    }

    // detect a hit with another entity
    detectHit(x, y) {
        
        if (dist(x, y, this.originalX, this.originalY) < 30) {
            // move the key
            apples --;
            if(apples <= 0){
                apples = 0;
            }
            this.originalX -= 25;
            return true;
        }
        return false;
    }
}

// twilight game ///////////////////////////////////////////////////////////
function memoryGame() {

    imageMode(CORNER);

    if(stateTS == 0){
        // start screen
        background(tsPic);
        fill(255);
        textSize(20);
        //text("CLICK TO START ", width/2, height/2);
    }

    else if(stateTS == 1){
        memoryCards();
    }
}

function memoryCards(){

    imageMode(CORNER);
    background(star);
    fill(255);
    textSize(25);
    text("Timer: " + twilightTimer, 60, 30);

    updateGame();

    for (let i = 0; i < tiles.length; i++) {
      tiles[i].create();
    }
    // check when completed
    let complete = true;
    for (let i = 0; i < tiles.length; i++) {
        complete = complete && tiles[i].isMatch;
    }
    // FINISH GAME --> go back to main game 
    if (complete) {
        quest += 1;
        localStorage.setItem("quest", quest);
        cutiePoints += twilightTimer;
        localStorage.setItem("cutiePoints", cutiePoints);

        // CK: let this NPC know that their game has been completed 
        ts.myGameCompleted = true;

        twilightChecker = true;
        // take user to end screen
        stateTwilight = 2;
    }

    // count framecount while game is running   
    if (frameCount % 60 == 0) { 
        twilightTimer ++;
    }
}

// MOUSE CLICKED //////////////////////////////////////////////
function mouseClicked() {
    // go through array 
    if (stateRainbow == 1){
        stateRD = 1;
    }
    if (stateApple == 1){
        stateAJ = 1;
    }
    if (stateTwilight == 1) {
        if(stateTS == 0){
            stateTS = 1;
        }

        else {

            if (stateTS == 1){

                for (let i = 0; i < tiles.length; i++) {
                    // if mouse is over (hovering) the card 
                    if (tiles[i].hover(mouseX, mouseY)) {
                        twinkle.play();
                        if (flipped.length < 2 && !tiles[i].isFaceUp) {
                            tiles[i].isFaceUp = true;
                            flipped.push(tiles[i]);
                            if (flipped.length === 2) {
                                numTries++;
                                if (flipped[0].faceUpImage === flipped[1].faceUpImage) {
                                    flipped[0].isMatch = true;
                                    flipped[1].isMatch = true;
                                    match.play();
                                }
                                delayFlip = frameCount;
                            }
                        }
                    }
                }

            }

        }
        
    }

    if (stateFlutter == 1){
        stateFS = 1;
    }   

    if (statePinkie == 1) {
        musicMain.stop();
        // play bg music
        pinkieBgMusic.loop();
        statePP = 1;
    }

    if (stateRarity == 1) {
        musicMain.stop();
        // play bg music
        rarityBgMusic.loop();
        stateRA = 1;
    }
}

// create the tiles for game
class Tile {
    constructor(x, y, faceUpImage) {
        this.x = x;
        this.y = y;
        this.width = width/6;
        this.backCard = cutieTwi;
        this.faceUpImage = faceUpImage;
        this.isFaceUp = false;
    }  
    create() {
        fill(146, 109, 181);
        stroke(41, 35, 84);
        strokeWeight(3);
        rect(this.x+90, this.y+70, this.width, this.width, 10);
        // face image
        if (this.isFaceUp === true) {
            image(this.faceUpImage, this.x+100, this.y+85, this.width-25, this.width-25);
        } 
        // back image
        else {
            image(this.backCard, this.x + 105, this.y + 85, 100, 100);
        }
    }
    hover(x, y) {
        if (x >= this.x+110 && x <= this.x+110 + this.width-20  && y >= this.y+85 && y <= this.y+85 + this.width-20) {
            return true;
        }
    }
}

function updateGame() {
    if (delayFlip && (frameCount - delayFlip) > 30) {
        for (let i = 0; i < tiles.length; i++) {
            if (!tiles[i].isMatch && tiles[i].isFaceUp) {
                tiles[i].isFaceUp = false;
            }
        }
        // restart
        flipped = [];
        delayFlip = 0;
    }
}
/////////////////////////////////////////////////////////////

// fluttershy game /////////////////////////////////////////
function animalRoundup() {

    imageMode(CORNER);

    if(stateFS == 0){
        // start screen
        background(fsPic);
        fill(255);
        textSize(20);
        //text("CLICK TO START ", width/2, height/2);
    }

    else if(stateFS == 1){
        animalCollect();
    }
}

function animalCollect() {
    imageMode(CENTER);

    background(0);
    // display background and bucket 
    image(fsBg, width/2, height/2);
    image(fsBucket, width/2, height/2, 90, 90);
    // display all animals and move them 
    for (let i = 0; i < 5; i++) {
        animals.push(new Animal());
        let caught = animals[i].moveNDisplay();
        // see if animal was put in center
        if (caught) {
            animals.splice(i, 1);
            fsSound.play();
            fsScore += 1;
        }
    }

    // start a new countdown if it's not already running
    if (fsTimer === null && stateFlutter == 1) {
        // reset the countdown to 30
        fsCountDown = 30; 
        fsTimer = setInterval(function () {
            fsCountDown -= 1; 
        }, 1000);
    }

    // display the seconds counter
    textSize(32);
    fill(121, 15, 125);
    text("TIME: " + fsCountDown, 65, 40);
    text("SCORE: " + fsScore, 70, 70);

    if (fsCountDown == 0) {
        quest += 1;
        localStorage.setItem("quest", quest);
        cutiePoints += fsScore;
        localStorage.setItem("cutiePoints", cutiePoints);
        clearInterval(fsTimer);
        // reset the timer when it reaches 0
        fsTimer = null;

        // CK: let this NPC know that their game has been completed 
        fs.myGameCompleted = true;

        // reset flutterChecker
        flutterChecker = true;
        
        // game over when the countdown reaches 0
        stateFlutter = 2; 

    }

}

// animal class for fluttershy game
class Animal {
    // construct animal object w/ x, y, random animal type, & speed
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.xSpeed = random(-2,2);
        this.ySpeed = random(-2,2);
        this.frameCount = 0;
        this.framesMax = random(300);
        this.index = Math.floor(Math.random() * animalArray.length);
        this.animalType = animalArray[this.index];
    }
    
    // move and display animal
    moveNDisplay() {
        // change graphic based on movement of animal
        if (this.xSpeed < 0) {
            if (this.animalType == a1) {
                this.animalType = a1Left;
            } else if (this.animalType == a2) {
                this.animalType = a2Left;
            } else if (this.animalType == a3) {
                this.animalType = a3Left;
            } else if (this.animalType == a4) {
                this.animalType = a4Left;
            }
        } else if (this.xSpeed >= 0) {
            if (this.animalType == a1Left || this.animalType == a1) {
                this.animalType = a1;
            } else if (this.animalType == a2Left || this.animalType == a2) {
                this.animalType = a2;
            } else if (this.animalType == a3Left || this.animalType == a3) {
                this.animalType = a3;
            } else if (this.animalType == a4Left || this.animalType == a4) {
                this.animalType = a4;
            }
        }

        // display image of animal
        image(this.animalType, this.x, this.y, 75, 75);

        // calculate the distance to the user's mouse
        let d = dist(mouseX, mouseY, this.x, this.y);

        // update frame count continously
        this.frameCount++;

        // if user's mouse is far enough, let animals move in random directions 
        if (d > 50) {
            // Add a condition to avoid the center of the canvas
            let distanceToCenter = dist(width / 2, height / 2, this.x, this.y);
            if (distanceToCenter >= 100) {
                // increment x and y position's with 
                this.x += this.xSpeed;
                this.y += this.ySpeed;
                if (this.frameCount >= this.framesMax) {
                    // reset everything
                    this.xSpeed = random(-2,2);
                    this.ySpeed = random(-2,2);
                    this.frameCount = 0;
                    this.framesMax = random(300);
                }
            } else if (distanceToCenter < 100 && distanceToCenter >= 70) { // if too close to center, they run away 
                // reset everything
                this.xSpeed *= -1;
                this.ySpeed *= -1;
                this.frameCount = 0;
                this.framesMax = random(300);
                // increment x and y position's with 
                this.x += this.xSpeed;
                this.y += this.ySpeed;
            } else if (distanceToCenter < 70) {
                this.x += 5;
                this.y += 5;
            }            
        } else if (d < 50) { // too close, animal must run away 
            // move animal away
            if (mouseX > this.x) {
                this.x -= 2.5;
            } else {
                this.x += 2.5;
            }
            if (mouseY > this.y) {
                this.y -= 2.5;
            } else {
                this.y += 2.5;
            }
        } 

        // ensure animals stay within canvas bounds
        this.x = constrain(this.x, 100, width - 100);
        this.y = constrain(this.y, 100, height - 100);

        // calculate if animal has been collected
        let d1 = dist(width/2, height/2, this.x, this.y);
        if (d1 < 50) {
            return true;
        } else {
            return false;
        }
    }
}
/////////////////////////////////////////////////////////////

// pinkie pie game /////////////////////////////////////////

function pinkieGame() {
    imageMode(CORNER);
    if (statePP == 0 && statePinkie == 1) {
        // start screen
        background(pinkieStart);
        fill(255);
        textSize(20);
        //text("CLICK TO START ", width/2, height/2);
    }
    // when mouse is clicked, we start the game
    else if (statePP == 1 && statePinkie == 1) {
        // set generic background for now 
        background(255);
        // set background for pinkie game
        tint(255, 127);
        image(pinkieBg, 0, 0);
        noTint();

        // if customer has reached over 10, restart to 1
        if (cPinkie.customer >= 9) {
            cPinkie.customer = 0;
        }

        // display customer
        cPinkie.display();

        // decide correct sequence by check customer's order
        if (cPinkie.order == 0) {
            correctSequence = cookie;
        } else if (cPinkie.order == 1) {
            correctSequence = cherryPie;
        } else {
            correctSequence = fruitTart;
        }
        // game is handled in keyPressed function 

        // show missed and correct
        fill(255);
        textSize(25);
        text("CORRECT: " + pinkieCorrect, width/2 + 220, height/2 - 50);
        text("MISSED: " + pinkieMissed, width/2 + 220, height/2 - 25);

        // end game
        if (pinkieMissed == 3) {
            quest += 1;
            localStorage.setItem("quest", quest);
            pinkieCorrect += rainbowCount;
            localStorage.setItem("cutiePoints", cutiePoints);
            // CK: tell this NPC that their game has been completed 
            pp.myGameCompleted = true;

            // change pinkie checker
            pinkieChecker = true;
            // game over, change game state to 2 
            statePP = 0;
            statePinkie = 2;
        }
    }
}

// key pressed function to handle pinkie game 
function keyPressed() {
    if (statePinkie == 1 && statePP == 1) {
        // check if the pressed key is part of the correct sequence
        if (key.toLowerCase() === correctSequence[currentLetter] ) {
            pinkieButtonClick.play();
            // add letter to user sequence
            userSequence.push(key);
            // increment index of array to check 
            currentLetter++;
            // check if the user has completed the sequence
            if (userSequence.length === correctSequence.length) {
                // play win sound
                pinkieWinSound.play();
                // move to the next question
                pinkieCorrect++;
                // reset for the next question
                userSequence = [];
                // increment user and change order
                cPinkie.order = Math.floor(Math.random() * 3);
                cPinkie.customer += 1;
                // reset currentLetter
                currentLetter = 0;
            }
        } else {
            // play wrong sound
            pinkieWrongSound.play();
            // wrong key pressed, increment misses and reset the sequence
            pinkieMissed++;
            // reset for the next question
            userSequence = [];
            // increment user and change order
            cPinkie.order = Math.floor(Math.random() * 3);
            cPinkie.customer += 1;
            // reset currentLetter
            currentLetter = 0;

            // Check if the user has reached the maximum allowed misses
            if (pinkieMissed == 3) {
                // stop cafe music 
                pinkieBgMusic.stop();
                // play party canon noise 
                partyCanon.play();
                // start main music again
                musicMain.loop();
            }
        }
    }
}

// class Customer for pinkie pie game
class Customer {
    constructor(customer) {
        this.order = Math.floor(Math.random() * 3);
        this.customer = customer;
    }

    display() {
        // display customer image depending on parameter
        if (this.customer == 0) {
            image(customers[0], 200, 120, 430, 430);
        } else if (this.customer == 1) {
            image(customers[1], 200, 150, 350, 400);
        } else if (this.customer == 2) {
            image(customers[2], 200, 150, 350, 350);
        } else if (this.customer == 3) {
            image(customers[3], 150, 150, 400, 400);
        } else if (this.customer == 4) {
            image(customers[4], 200, 150, 350, 350);
        } else if (this.customer == 5) {
            image(customers[5], 250, 150, 350, 350);
        } else if (this.customer == 6) {
            image(customers[6], 200, 150, 400, 400);
        } else if (this.customer == 7) {
            image(customers[7], 100, 150, 350, 350);
        } else if (this.customer == 8) {
            image(customers[8], 200, 170, 300, 350);
        } else if (this.customer == 9) {
            image(customers[9], 200, 150, 300, 350);
        }
        //display table 
        image(pinkieTable, 0, 0);

        // display order & recipe 
        if (this.order == 0) {
            image(cookiePage, 0, 0);
        } else if (this.order == 1) {
            image(piePage, 0, 0);
        } else if (this.order == 2) {
            image(tartPage, 0, 0);
        }
    }
}

/////////////////////////////////////////////////////////////

// rarity game /////////////////////////////////////////////

function rarityGame() {
    imageMode(CORNER);
    if (stateRA == 0 && stateRarity == 1) {
        // start screen
        background(rarityStart);
        fill(255);
        textSize(20);
        //text("CLICK TO START ", width/2, height/2);
    }
    // when mouse is clicked, we start the game
    else if (stateRA == 1 && stateRarity == 1) {
        // rarity's parallax background 
        background(188, 174, 232);
        // first layers dont move
        imageMode(CENTER);
        image(rbg01, width/2, height/2);
        image(rbg02, width/2, height/2);
        image(rbg03, width/2, height/2);

        imageMode(CORNER);
        // layer 1
        image(rbg1, rbg1x1, 0, width, height);
        image(rbg1, rbg1x2, 0, width, height);
        rbg1x1 -= rbg1Speed;
        rbg1x2 -= rbg1Speed;
        if (rbg1x1 <= -width) {
            rbg1x1 = rbg1x2 + width;
        }
        if (rbg1x2 <= -width) {
            rbg1x2 = rbg1x1 + width;
        }

        // layer 2
        image(rbg2, rbg2x1, 0, width, height);
        image(rbg2, rbg2x2, 0, width, height);
        rbg2x1 -= rbg2Speed;
        rbg2x2 -= rbg2Speed;
        if (rbg2x1 <= -width) {
            rbg2x1 = rbg2x2 + width;
        }
        if (rbg2x2 <= -width) {
            rbg2x2 = rbg2x1 + width;
        }

        // layer 3.5 / 4
        image(rbg4, rbg4x1, 520, 800);
        image(rbg4, rbg4x2, 520, 800);
        rbg4x1 += raritySpeed + 0.3;
        rbg4x2 += raritySpeed + 0.3;
        if (rbg4x1 <= -width) {
            rbg4x1 = rbg4x2 + width;
        }
        if (rbg4x2 <= -width) {
            rbg4x2 = rbg4x1 + width;
        }

        // layer 3
        image(rbg3, rbg3x1, 570, 800);
        image(rbg3, rbg3x2, 570, 800);
        //rbg3x1 -= rbg3Speed;
        //rbg3x2 -= rbg3Speed;
        rbg3x1 += raritySpeed;
        rbg3x2 += raritySpeed;
        if (rbg3x1 <= -width) {
            rbg3x1 = rbg3x2 + width;
        }
        if (rbg3x2 <= -width) {
            rbg3x2 = rbg3x1 + width;
        }

        // ceiling layer 1
        image(rbg101, rbg101x1, 0, 800, 175);
        image(rbg101, rbg101x2, 0, 800, 175);
        rbg101x1 -= rbg1Speed;
        rbg101x2 -= rbg1Speed;
        if (rbg101x1 <= -width) {
            rbg101x1 = rbg101x2 + width;
        }
        if (rbg101x2 <= -width) {
            rbg101x2 = rbg101x1 + width;
        }

        // ceiling layer 2
        image(rbg102, rbg102x1, 0, 800, 125);
        image(rbg102, rbg102x2, 0, 800, 125);
        rbg102x1 -= rbg2Speed;
        rbg102x2 -= rbg2Speed;
        if (rbg102x1 <= -width) {
            rbg102x1 = rbg102x2 + width;
        }
        if (rbg102x2 <= -width) {
            rbg102x2 = rbg102x1 + width;
        }

        // ceiling layer 3
        image(rbg103, rbg103x1, 0, 800, 150);
        image(rbg103, rbg103x2, 0, 800, 150);
        rbg103x1 -= rbg3Speed;
        rbg103x2 -= rbg3Speed;
        if (rbg103x1 <= -width) {
            rbg103x1 = rbg103x2 + width;
        }
        if (rbg103x2 <= -width) {
            rbg103x2 = rbg103x1 + width;
        }

        // put rarity into the game 
        image(raritySprite[rarityIndex], rarityX, rarityY);
        if (frameCount % 10 == 0) {
            rarityIndex += 1;
            if (rarityIndex >= raritySprite.length) {
            rarityIndex = 0;
            } 
        }
        // move and display crystal 
        crystal1.moveNDisplay();
        crystal2.moveNDisplay();

        // keep decrementing whole game speed 
        raritySpeed += -0.5;

        // move and display diamond hearts 
        heart1.displayNAnimate();
        heart2.displayNAnimate();

        // jump mechanics -- if space bar is pressed, rarity jumps
        if (keyIsDown(16) && rarityJumpMode === false) {
            rarityJumpMode = true;
            rarityJumpPower = -12;
        }

        // handle jumping
        if (rarityJumpMode) {
            // make rarity's sprite index 1
            rarityIndex = 1;

            // adjust y position of rarity by jump power 
            rarityY += rarityJumpPower;

            // slowly go down using gravity 
            rarityJumpPower += rarityGrav;

            // makes sure rarity does not go below floor 
            if (rarityY >= floorY) {
                rarityJumpMode = false;
                rarityJumpPower = 0;
                rarityY = floorY;
            }
        }

        // constrain speed 
        raritySpeed = constrain(raritySpeed, -10, 6);

        // display collected and missed
        textFont(font1);
        textSize(30);
        fill(255);
        text("COLLECTED: " + rarityCollected, 100, 50);
        text("HIT: " + rarityHit, 50, 100);

        // handle if rarity hits 5 crystals
        if (rarityHit >= 5) {
            // stop bg music
            rarityBgMusic.stop();

            quest += 1;
            localStorage.setItem("quest", quest);
            rarityCollected += rainbowCount;
            localStorage.setItem("cutiePoints", cutiePoints);

            ra.myGameCompleted = true;

            // make rarity checker true
            rarityChecker = true;
            // change both states so game is unplayable 
            stateRarity = 2;
            stateRA = 0;
        }
    }
}

// class for crystal objects
class Crystal {
    constructor(pic) {
        this.x = random(800, 1600);
        this.y = 505;
        this.size = 75;
        this.pic = pic;
    }
    // move and display crystals 
    moveNDisplay() {
        this.x += raritySpeed;
        image(this.pic, this.x, this.y, this.size, this.size);
        // if crystal goes off screen 
        if (this.x < -this.pic.width - 25) {
            this.x = random(800, 1600);
        }
        // if crystal hits rarity, we slow down, detect a hit, and then change our position 
        if (dist(this.x, this.y, rarityX, rarityY) < 95) {
            crystalBump.play();
            rarityHit += 1;
            // slow down game
            raritySpeed = 6;
            this.x = random(800, 1600);
        }
    }
}

// collectable diamond heart class
class Heart {
    constructor() {
        this.x = random(800, 1600);
        this.y = random(280, 310);
        this.size = random(75, 95);
    }

    // animate heart while it moves 
    displayNAnimate() {
        // heart moves with game speed
        this.x += raritySpeed;
        // heart animation
        image(heartSprite[heartIndex], this.x, this.y, this.size, this.size);
        if (frameCount % 5 == 0) {
            heartIndex += 1;
            if (heartIndex >= heartSprite.length) {
                heartIndex = 0;
            } 
        }
        // if heart goes off screen 
        if (this.x < -this.size) {
            // reset x and y
            this.x = random(800, 1600);
            this.y = random(280, 300);
        }
        // if rarity collides with heart we get a point, etc
        if (dist(this.x, this.y, rarityX, rarityY) < 70) {
            diamondCollect.play();
            // collect heart and increase speed a little 
            rarityCollected += 1;
            console.log(rarityCollected);
            // make game faster 
            raritySpeed -= 0.15 ;
            // reset x and y 
            this.x = random(800, 1600);
            this.y = random(280, 300);
        }
    }
}

/////////////////////////////////////////////////////////////
