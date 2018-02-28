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

function updateUser(user) {
  // make an object storing the user's name and an isVerified field
  let userObject = {
    name: user,
    isVerified: true
  };

  // go to the path "/users/[username]" and update it with the user object
  firebase
    .database()
    .ref("/users/" + user)
    .set(userObject)
    .then(() => {
      console.log("Updated successfully! User " + user + " was added.");
    })
    .catch(error => {
      console.log("ERROR: " + error);
    });
}

updateUser("Taylor");
