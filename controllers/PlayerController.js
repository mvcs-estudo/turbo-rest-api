const Player = require('../models/Player')
const Team = require('../models/Team')

module.exports = {
  get: (params) => {
    return new Promise((resolve, reject) => {
      Player.find(params)
        .populate('teams')
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      Player.findById(id)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(new Error('Player ' + id + ' not found'))
        })
    })
  },
  post: (params) => {
    if (params.team == "" ||
      params.team == null) {
      return new Promise((resolve, reject) => {
        reject(new Error('Team ID must be defined'))
      })
    }
    return new Promise((resolve, reject) => {
      Player.create(params)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  put: (id, params) => {
    if (params.team == "") {
      return new Promise((resolve, reject) => {
        reject(new Error('Team ID must be defined'))
      })
    }
    if (params.team != "") {
      return new Promise((resolve, reject) => {
        Player.findByIdAndUpdate(id, params, {
            new: true
          })
          .populate()
          .then(data => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  delete: (id) => {
    return new Promise((resolve, reject) => {
      Player.findByIdAndRemove(id, {
          new: true
        })
        .then(() => {
          resolve({
            id: id
          })
        })
        .catch(err => {
          reject(err)
        })
    })
  }


}
