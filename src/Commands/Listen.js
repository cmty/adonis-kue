'user strict'

const { Command } = require('@adonisjs/ace')

class Listen extends Command {
  static get inject () {
    return ['Adonis/Addons/Kue']
  }

  constructor (Kue) {
    super()
    this.Kue = Kue
  }

  static get signature () {
    return 'kue:listen { --dashboard: Setup dashboard }'
  }

  static get description () {
    return 'Start the kue listener.'
  }

  handle (args, flags) {
    console.log(flags)
    this.Kue.listen()
  }
}

module.exports = Listen
