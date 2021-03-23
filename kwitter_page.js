//YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("user-name")
    room_name = localStorage.getItem("room_name")

    function send()
    {
          msg = document.getElementById("msg").value;
          console.log(user_name);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          })
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id) ;
console.log(message_data);
 
name = message_data['name'];
message = message_data['message']
like = message_data['like']

part1 = "<h4>"+name+"<img src='tick.png' class='user_tick'> </h4>"
part2 = "<h4 class='message_h4'>"+message+"</h4>"
part3 = "<button class='btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
part4 = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = part1 + part2 + part3 + part4
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_Likes = Number(likes) +1;
      firebase.database().ref(room_name).child(message_id).update({
            like : update_Likes
      })
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
