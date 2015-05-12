var ReactNotesAppDispatcher = require('../dispatcher/ReactNotesAppDispatcher.js');
var ReactNotesConstants = require('../constants/ReactNotesConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = ReactNotesConstants.ActionTypes;

module.exports = {

  loadNotes: function() {
    ReactNotesAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_Notes
    });
    WebAPIUtils.loadNotes();
  },
  
  loadNote: function(noteId) {
    ReactNotesAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_STORY,
      noteId: noteId
    });
    WebAPIUtils.loadNote(noteId);
  },

  createNote: function(title, body) {
    ReactNotesAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_STORY,
      title: title,
      body: body
    });
    WebAPIUtils.createNote(title, body);
  }

};

