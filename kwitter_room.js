var firebaseConfig = {
      apiKey: "AIzaSyDNfwDHJzBxebHdKfNEjTOEJqEIoE1UX9U",
  authDomain: "kwitterroom-303ce.firebaseapp.com",
  databaseURL: "https://kwitterroom-303ce-default-rtdb.firebaseio.com",
  projectId: "kwitterroom-303ce",
  storageBucket: "kwitterroom-303ce.appspot.com",
  messagingSenderId: "298528107729",
  appId: "1:298528107729:web:4037b725f19d1a111a29f0"
};

firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
