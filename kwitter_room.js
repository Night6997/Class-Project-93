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

var user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome "+ user_name+"!";
function addRoom(){

      var room_name = document.getElementById("inputRoom").value;
      firebase.database().ref("/").child(room_name).update({

            roomkey: "purpose addin room"

      });
      
      localStorage.setItem("inputRoom", room_name);

      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      console.log("Room name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}

getData();

function redirectToRoomName(name){

     console.log(name);
     localStorage.setItem("inputRoom", name);
     window.location="kwitter_page.html";

}
