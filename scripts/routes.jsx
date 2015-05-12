var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var ReactNotesApp = require('./components/ReactNotesApp.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var NotesPage = require('./components/notes/NotesPage.react.jsx');
var NotePage = require('./components/notes/NotePage.react.jsx');
var NoteNew = require('./components/notes/NoteNew.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={ReactNotesApp}>
    <DefaultRoute handler={NotesPage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="notes" path="/notes" handler={NotesPage}/>
    <Route name="note" path="/notes/:noteId" handler={NotePage} />
    <Route name="new-note" path="/note/new" handler={NoteNew}/>
  </Route>
);

