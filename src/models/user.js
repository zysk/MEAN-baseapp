const mongoose = require('mongoose');
const _validator = require('validator');
const _timeStamps = require('../plugins/_timestamp');

const _userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => _validator.isEmail(value),
  }
}).plugin(_timeStamps);

/**
 * Define custom properties
 */
/* Full username */
_userSchema.virtual('fullName', () => `${ this.firstName ?? this.firstName }${ this.lastName ?? this.lastName }`);

/**
 * Define custom methods and relations
 */
/* User's initials */
_userSchema.method('getInitials', () => `${ this.firstName ?? this.firstName[ 0 ] } ${ this.lastName ?? this.lastName[ 0 ] }`);

module.exports = mongoose.model('User', _userSchema);
