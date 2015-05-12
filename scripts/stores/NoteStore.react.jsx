var ReactNotesAppDispatcher = require('../dispatcher/ReactNotesAppDispatcher.js');
var ReactNotesConstants = require('../constants/ReactNotesConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = ReactNotesConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _notes = [];
var _errors = [];
var _note = { title: "", body: "", user: { username: "" } };

var NoteStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllNotes: function() {
    return _notes;
  },

  getNote: function() {
    return _note;
  },

  getErrors: function() {
    return _errors;
  }

});

NoteStore.dispatchToken = ReactNotesAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    
    case ActionTypes.RECEIVE_Notes:
      _notes = action.json.notes;
      NoteStore.emitChange();
      break;

    case ActionTypes.RECEIVE_CREATED_STORY:
      if (action.json) {
        _notes.unshift(action.json.note);
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      NoteStore.emitChange();
      break;
    
    case ActionTypes.RECEIVE_STORY:
      if (action.json) {
        _note = action.json.note;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      NoteStore.emitChange();
      break;
  }

  return true;
});

module.exports = NoteStore;

