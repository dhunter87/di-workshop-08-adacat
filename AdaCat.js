// class created an object type of AdaCat
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
  }
  //stetHunger method stopps the hunger variable from going above 10 or below 0
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

      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.',
      sleepLine
    ]


    return lines.join('\n')
  }

  //feed method increases and decreases the hunger variable 
  feed() {

    var hunger = this.hunger - 1
    var tiredness = this tiredness

    if (hunger < 3) {
      this.size = this.size + 1
    }

    this.setHunger(hunger)
  }

  // nap method changes the state of the isSleeping variable
  nap() {
    this.isSleeping = true
  }

  // wakeUp method changes the state of the isSleeping variable
  wakeUp() {
    this.isSleeping = false
  }

  // play method changes the state of the hunger and size variables.
  play() {
    var hunger = this.hunger + 3
    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger)
  }

  // getHealth ethod changes the state of the health variable based on calculations 
  getHealth() {
    //! the ideal weight for cats is 30
    //! this futher they are from this, the less
    //! healthy they are

    // variable stores the difference between optimum size and current size
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    //! sizeScore starts at thirty, and gets
    //! smaller as the cat's size gets further
    //! from the ideal weight 
    // size Score is optimum size minus the difference from ideal size variable
    var sizeScore = 30 - sizeDifferenceFromIdeal

    //! health score gets lower as the cat gets
    //! more hungry
    //health score is equal to sizeScore minus hunger
    var healthScore = sizeScore - this.hunger

    //! max returns the biggest value, so health
    //! will never go below 0
    // if statement stops healthscore from going brlow 0
    if (healthScore < 0) {
      healthScore = 0
    }

    // returns new health score
    return healthScore
  }
}


//exports the contents of the AdaCat class to external files
module.exports = AdaCat
