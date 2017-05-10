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

firebase.database().ref().set({
  appName: 'Todo App'
});
