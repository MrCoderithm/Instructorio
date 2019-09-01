firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if(user != null){

            var email_id = user.email;
            var email_verified = user.emailVerified;


            if(email_verified){
                document.getElementById("verify_btn").style.display = "none";
                window.location = 'registration.html';
            }
            else

                document.getElementById("user_para").innerHTML = "Welcome User : " + email_id +
                    "<br/> Email Verified : " + email_verified;

        }
    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});

function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}
function createaccount(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}

function logout(){
    firebase.auth().signOut();
}



function sendVerification(){
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        // Email sent.
        alert("Email Verification Sent")
    }).catch(function(error) {
        alert("Error Not Sent")
        // An error happened.
    });
}


function postData() {
    firebase.database().ref("instructors").on('value', function(snap){
        snap.forEach(function(childNodes){
            //This loop iterates over children of instructors
            //childNodes.key is key of the children of instructors
            var email = childNodes.val().email;
            var user = firebase.auth().currentUser;
            var email_id = user.email;
            if(email == email_id){
                return true;
            }
        });
        return false;
    });
}


function registerInstructor() {
    firebase.auth().onAuthStateChanged(function(user) {



        var fullname = document.getElementById("full_name");
        // var email = document.getElementById("email_address");
        var email_id = user.email;
        var phone = document.getElementById("phone_number");
        var location = document.getElementById("work_address");
        var paddress = document.getElementById("permanent_address");
        var todaydate = new Date().toISOString().slice(0, 10);


        var database = firebase.database();
        var ref = database.ref('instructors');

        var data = {
            name : fullname.value,
            email : email_id,
            phone : phone.value,
            location : location.value,
            address : paddress.value,
            date : todaydate
        };
        ref.push(data);


    });}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
