// class created an object type of AdaCat
class AdaCat {
  // constructor method allows creation of an AdaCat object
  // takes two perameters from the user in the console
  constructor(name, owner) {
    this.name = name
    this.owner = owner
    
    this.hunger = 5// initial hunger level = 5
    this.isSleeping = false//initail state of cat = awake
    this.size = 30//initial cat size = 30
  }
  //stetHunger method
  setHunger(newHunger) {
    if (newHunger < 0) {
      newHunger = 0
    }
    if (newHunger > 10) {
      newHunger = 10
    }
    this.hunger = newHunger
  }

  getDescription() {
    var sleepLine
    if (this.isSleeping) {
      sleepLine = 'Shh! ' + this.name + ' is sleeping.'
    } else {
      sleepLine = this.name + ' is awake.'
    }
    var lines = [
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',

      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.',
      sleepLine
    ]

    return lines.join('\n')
  }

  feed() {
    var hunger = this.hunger - 1

    if (hunger < 3) {
      this.size = this.size + 1
    }

    this.setHunger(hunger)
  }

  nap() {
    this.isSleeping = true
  }

  wakeUp() {
    this.isSleeping = false
  }

  play() {
    var hunger = this.hunger + 3
    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger)
  }

  getHealth() {
    // the ideal weight for cats is 30
    // this futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal

    // health score gets lower as the cat gets
    // more hungry
    var healthScore = sizeScore - this.hunger

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0
    }

    return healthScore
  }
}

module.exports = AdaCat
