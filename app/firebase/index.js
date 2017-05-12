import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyB0aN2atFnJepMs0aPn5omTjmydtbEIlpI",
      authDomain: "ju-todoapp.firebaseapp.com",
      databaseURL: "https://ju-todoapp.firebaseio.com",
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
