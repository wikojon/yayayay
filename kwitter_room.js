
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAFIebeEXtg8VoatepATbfwkKUxmcPhlzI",
      authDomain: "kwitter-5f31f.firebaseapp.com",
      databaseURL: "https://kwitter-5f31f-default-rtdb.firebaseio.com",
      projectId: "kwitter-5f31f",
      storageBucket: "kwitter-5f31f.appspot.com",
      messagingSenderId: "609402790243",
      appId: "1:609402790243:web:8706c528867fe6efe3f356"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "addRoom"
          });
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>;"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) { 
      console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; }
        function logout() { localStorage.removeItem("user_name");
         localStorage.removeItem("room_name"); 
         window.location = "kwitter.html"; }

