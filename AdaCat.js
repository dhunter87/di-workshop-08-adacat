//! class created an object type of AdaCat
class AdaCat {
  // constructor method allows creation of an AdaCat object
  // takes two perameters from the user in the console
  constructor(name, owner) {
    this.name = name // initialises cats name
    this.owner = owner // initialises cats owners name
    this.tiredness = 0 // initailises the tiredness level
    this.hunger = 5// initial hunger level = 5
    this.isSleeping = false//initail state of cat = awake
    this.size = 30//initial cat size = 30
    this.message // will display the cats status as a message to the console
  }
  // setHunger method stops the hunger variable from going above 10 or below 0
  setHunger(newHunger) {
    // if new hunger is less than 0 - set newHunger to 0
    if (newHunger < 0) {
      newHunger = 0
    }
    // if new hunger is more than 10 - set newHunger to 10
    if (newHunger > 10) {
      newHunger = 10
    }

    // set hunger to newHunger
    this.hunger = newHunger
  }

  setTiredness(newTiredness){
    if(newTiredness < 0){
      newTiredness = 0
    }
    if(newTiredness > 15){
      newTiredness = 15
    }
    this.tiredness = newTiredness

  }

  // get iscription function describes the current satae of the cat object. 
  getDescription() {
    // sleepLine variable changes the state of the description printed to screen
    var sleepLine
    if (this.isSleeping) {
      // is sleeping, print -
      sleepLine = 'Shh! ' + this.name + ' is sleeping.'
    } else {
      // if cat is awake, print - 
      sleepLine = this.name + ' is awake.'
    }
    // var lines does not currently change depending on the cats status.
    var lines = [
      // displays the cats name, current owners name, hunger level, weight level, health level and sleep line (depending on current status of the cat)
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',
      'their tiredness level is ' + this.tiredness + '.',
      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.',
      'cat status : ' + this.message,
      sleepLine
    ]
    return lines.join('\n')
  }

  //feed method increases and decreases the hunger variable 
  feed() {

    var message = 'unable to feed cat while sleeping'

    if(this.isSleeping == false){
      var hunger = this.hunger - 1
      var tiredness = this.tiredness + 1
      message = 'cat feeding!'
  
      if (hunger < 3) {
        this.size = this.size + 1
      }
  
      this.setTiredness(tiredness)
      this.setHunger(hunger)
      this.message = message
    }
    else {
      this.message = message 
    }

  }

  // nap method changes the state of the isSleeping variable
  nap() {
    var message  = 'cat napping!'
    this.isSleeping = true
    this.message = message
  }

  // wakeUp method changes the state of the isSleeping variable
  wakeUp() {
    var message = 'cat is awake!'
    this.isSleeping = false
    this.tiredness = 0
    this.message = message
  }

  // play method changes the state of the hunger and size variables.
  play() {
    var message = 'cat playing!'
    var hunger = this.hunger + 3
    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger)
    this.message = message
  }

  // getHealth ethod changes the state of the health variable based on calculations 
  getHealth() {

    var message = 'Please take cat to the vet - health low!'
    // variable stores the difference between optimum size and current size
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // size Score is optimum size minus the difference from ideal size variable
    var sizeScore = 30 - sizeDifferenceFromIdeal

    //health score is equal to sizeScore minus hunger
    var healthScore = sizeScore - this.hunger

    // if statement stops healthscore from going brlow 0
    if (healthScore < 0) {
      healthScore = 0
    }
    else if(healthScore > 0 && healthScore < 5){
      this.message = message

    }

    // returns new health score
    return healthScore
  }
}


//exports the contents of the AdaCat class to external files
module.exports = AdaCat
