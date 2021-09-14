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

function add_user_name_P() {

    username=document.getElementById("inputPusername").value;
    firebase.database().ref("/").child(username).update({

        purpose : "adding username"

    });

}