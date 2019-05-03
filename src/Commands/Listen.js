'user strict'

const { Command } = require('@adonisjs/ace')

const Logger = use('Logger')

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
    this.Kue.listen()
    // Catch error from ioredis/redis
    this.Kue._instance.on('error', (error) => {
      Logger.info('redis connection error: ', error)
    })

    if (flags.dashboard) {
      this.Kue.dashboard()
    }
  }
}

module.exports = Listen
