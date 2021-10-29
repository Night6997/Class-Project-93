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

Username = localStorage.getItem("username");
Roomname = localStorage.getItem("inputRoom");

function send(){

      message = document.getElementById("inputSend").value;
      firebase.database().ref(Roomname).push({

            name:Username,
            msg:message,
            like:0

      });

      document.getElementById("inputSend").value="";

}

function getData() { firebase.database().ref("/"+Roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         msg=message_data['msg'];
         name=message_data['name'];
         like=message_data['like'];
         name_with_tag="<h4>" +name+ "<img class='tick_mark' src='tick.png'> </h4>";
         message_with_tag="<h4 class='h4_message'>"+msg+ "</h4>";
         like_with_tag="<button id="+firebase_message_id+" class='btn btn-warning' value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like, "+like+"</span> </button> <hr>";

         row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
         document.getElementById("output").innerHTML +=row;
      } });  }); }
getData();

function updateLike(message_id){

      console.log("clicked on like button"+message_id);
      button_id=message_id;
      updatedLikes= documen.getElementById(button_id).value;
      IncreasedLikes = Number(updatedLikes)+1;
      console.log(IncreasedLikes);
      firebase.database().ref(Roomname).child(message_id).update({

            like:IncreasedLikes
      
      });

}

function logout(){

      localStorage.removeItem("username");
      localStorage.removeItem("inputRoom");
      window.location="index.html";

}

