import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB0aN2atFnJepMs0aPn5omTjmydtbEIlpI",
    authDomain: "ju-todoapp.firebaseapp.com",
    databaseURL: "https://ju-todoapp.firebaseio.com",
    projectId: "ju-todoapp",
    storageBucket: "ju-todoapp.appspot.com",
    messagingSenderId: "579141741740"
  };
  firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning:true,
  user:{
    name:'Andrew',
    age:25
  },
  todos: {
    '123bacds': {
      text:'File some vids'
    }
  }
});

var notesRef =firebaseRef.child('notes');

var newNoteRef = notesRef.push({
  text: 'walk the dog!'
});
