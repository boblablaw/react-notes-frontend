var ReactNotesAppDispatcher = require('../dispatcher/ReactNotesAppDispatcher.js');
var ReactNotesConstants = require('../constants/ReactNotesConstants.js');

var ActionTypes = ReactNotesConstants.ActionTypes;

module.exports = {

  redirect: function(route) {
    ReactNotesAppDispatcher.handleViewAction({
      type: ActionTypes.REDIRECT,
      route: route
    });
  }

};


