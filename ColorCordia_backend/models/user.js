const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: { type: String },
  password: { type: String },
  likedPosts: [String]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v
  }
})

module.exports = mongoose.model('User', userSchema)