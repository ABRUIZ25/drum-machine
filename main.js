// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hatSound = new Audio('sounds/hi-hat.mp3');
const KickSound = new Audio('sounds/kick-drum.mp3');
const SnareSound = new Audio('sounds/snare-drum.mp3');

const Hi = document.querySelector ('#HiHat')
const KickDrum = document.querySelector ('#Kick')
const Snare = document.querySelector ('#Snare')
const met = document.querySelector ('#Met')

const HiRadioOne = document.querySelector ('#hi1')
const HiRadioTwo = document.querySelector ('#hi2')
const HiRadioThree = document.querySelector ('#hi3')
const HiRadioFour = document.querySelector ('#hi4')

const KickRadioOne = document.querySelector ('#kick1')
const KickRadioTwo = document.querySelector ('#kick2')
const KickRadioThree = document.querySelector ('#kick3')
const KickRadioFour = document.querySelector ('#kick4')

const SnareRadioOne = document.querySelector ('#snare1')
const SnareRadioTwo = document.querySelector ('#snare2')
const SnareRadioThree = document.querySelector ('#snare3')
const SnareRadioFour = document.querySelector ('#snare4')



//this will keep track of the ticks that happen
let AmmountOfTicks = 0



// This function is called every 600ms
function update() {
  AmmountOfTicks ++
    // Play the 'tick' sound
    if (met.checked){
         //console.log('ticks are', AmmountOfTicks)
        // console.log(0)
    tick.play();
    if (AmmountOfTicks % 4){
        tock.play()
    }
    }
    //this section will be for the check boxes
    if (Hi.checked){
        hatSound.play()
        console.log('1')
    }

     if (KickDrum.checked){
         KickSound.play()
         console.log('2')

     }

    if (Snare.checked){
        SnareSound.play()
        console.log('3')

    }
    
    if (AmmountOfTicks >= 5){
        AmmountOfTicks = 1
    }

    //for the hi hat timing
    if (HiRadioOne.checked && AmmountOfTicks === 1){
        hatSound.play()
        console.log (AmmountOfTicks)
        console.log (HiRadioOne.checked)
    }
    if (HiRadioTwo.checked && AmmountOfTicks === 2){
        hatSound.play()
        console.log (AmmountOfTicks)
        console.log (HiRadioTwo.checked)
    }
    if (HiRadioThree.checked && AmmountOfTicks === 3){
        hatSound.play()
        console.log (AmmountOfTicks)
        console.log (HiRadioThree.checked)
    }
    console.log (HiRadioFour)
    console.log(AmmountOfTicks)
    if (HiRadioFour.checked && AmmountOfTicks === 4){
        hatSound.play()
        console.log (AmmountOfTicks)
        console.log (HiRadioFour.checked)
    }

     //for the  Snare drum timing
     if (SnareRadioOne.checked && AmmountOfTicks === 1){
        SnareSound.play()
        console.log (AmmountOfTicks)
        console.log (SnareRadioOne.checked)
    }
    if (SnareRadioTwo.checked && AmmountOfTicks === 2){
        SnareSound.play()
        console.log (AmmountOfTicks)
        console.log (SnareRadioTwo.checked)
    }
    if (SnareRadioThree.checked && AmmountOfTicks === 3){
        SnareSound.play()
        console.log (AmmountOfTicks)
        console.log (SnareRadioThree.checked)
    }
    if (SnareRadioFour.checked && AmmountOfTicks === 4){
        SnareSound.play()
        console.log (AmmountOfTicks)
        console.log (SnareRadioFour.checked)
    }

     //for the Kick drum timing
     if (KickRadioOne.checked && AmmountOfTicks === 1){
       KickSound.play()
        console.log (AmmountOfTicks)
        console.log (KickRadioOne.checked)
    }
    if (KickRadioTwo.checked && AmmountOfTicks === 2){
       KickSound.play()
        console.log (AmmountOfTicks)
        console.log (KickRadioTwo.checked)
    }
    if (KickRadioThree.checked && AmmountOfTicks === 3){
       KickSound.play()
        console.log (AmmountOfTicks)
        console.log (KickRadioThree.checked)
    }
    if (KickRadioFour.checked && AmmountOfTicks === 4){
       KickSound.play()
        console.log (AmmountOfTicks)
        console.log (KickRadioFour.checked)
    }
   
    
    
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
