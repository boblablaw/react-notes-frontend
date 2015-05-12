var ReactNotesAppDispatcher = require('../dispatcher/ReactNotesAppDispatcher.js');
var ReactNotesConstants = require('../constants/ReactNotesConstants.js');

var ActionTypes = ReactNotesConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    ReactNotesAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveNotes: function(json) {
    ReactNotesAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_Notes,
      json: json
    });
  },

  receiveNote: function(json) {
    ReactNotesAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_STORY,
      json: json
    });
  },
  
  receiveCreatedNote: function(json, errors) {
    ReactNotesAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_STORY,
      json: json,
      errors: errors
    });
  }
  
};

