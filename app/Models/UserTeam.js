'use strict'

const Model = use('Model')

class UserTeam extends Model {
  user () {
    this.belongsTo('App/Models/User')
  }
}

module.exports = UserTeam
