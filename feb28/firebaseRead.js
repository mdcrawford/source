let firebase = require("firebase");

// NOTE: the following info is sensitive and normally should NOT
// be uploaded to GitHub.  use a .gitignore to keep this info private
// or look into environmental variables to assign them at the command
// line
let config = {
  apiKey: "AIzaSyBQNlxZibchXtI-7PgZ2DHifu7j9jGoVXA",
  authDomain: "source-demo.firebaseapp.com",
  databaseURL: "https://source-demo.firebaseio.com",
  projectId: "source-demo",
  storageBucket: "",
  messagingSenderId: "696927505141"
};
firebase.initializeApp(config);

function readUsers() {
  firebase
    .database()
    .ref("/users")
    .once("value")
    .then(snapshot => {
      console.log(snapshot.val());
    })
    .catch(error => {
      console.log(error);
    });
}

readUsers();
