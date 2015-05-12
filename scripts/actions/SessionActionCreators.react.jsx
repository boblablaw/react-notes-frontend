var ReactNotesAppDispatcher = require('../dispatcher/ReactNotesAppDispatcher.js');
var ReactNotesConstants = require('../constants/ReactNotesConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = ReactNotesConstants.ActionTypes;

module.exports = {

  signup: function(email, username, password, passwordConfirmation) {
    ReactNotesAppDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation
    });
    WebAPIUtils.signup(email, username, password, passwordConfirmation);
  },

  login: function(email, password) {
    ReactNotesAppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },

  logout: function() {
    ReactNotesAppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }
  
};

