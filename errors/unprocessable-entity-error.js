'use strict'

const BaseError = require('./base-error')

class UnprocessableEntityError extends BaseError {
  constructor (message) {
    super(message)
  }

  * handler (ctx, log) {
    log.warn('Unprocessable: ' + this.message)
    ctx.status = 422
    ctx.body = {
      id: this.name,
      message: this.message
    }
  }
}

module.exports = UnprocessableEntityError
