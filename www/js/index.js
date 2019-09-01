/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        navigator.notification.alert('Native alert test message');

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();




$(document).ready(  function() {

    register();
});





function getDataInConsole() {

    var database = firebase.database();
    var ref = database.ref('users');

    ref.on("value", gotData, errData);

}


function Delete() {


    var adaRef = firebase.database().ref('users/-Lc91h8iMNhnudVCzmG7');
    adaRef.remove()
        .then(function() {
            console.log("Remove succeeded.")
        })
        .catch(function(error) {
            console.log("Remove failed: " + error.message)
        });
}


function gotData(data) {
    var users = data.val();
    // Grab the keys to iterate over the object
    var keys = Object.keys(users);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // Look at each user object!
        var name = users[key].name;
        var email = users[key].email;
        var phone = users[key].phone;
        var message = users[key].message;
        var location = users[key].location;
        var add = users[key].address;
    }
}
function errData(data) {
    console.log(err);
}




function register() {

    var Name = document.getElementById("full_name");
    var Email = document.getElementById("email_address");
    var Phone = document.getElementById("phone_number");
    var Location = document.getElementById("present_address");
    var Paddress = document.getElementById("permanent_address");
    var date = document.getElementById("datepicker");
    var Message = document.getElementById("message");


    var usersRef = firebase.database().ref("users");
    //counts the total users
    usersRef.child;
    var uid = 0;
    usersRef.on('value', function(snap){


        uid++;
        snap.forEach(function(){
            uid ++;
        });

    });


    if(uid>0){
        usersRef.child(uid).set({
            name : Name.value,
            email : Email.value,
            phone : Phone.value,
            location : Location.value,
            address : Paddress.value,
            date : date.value,
            message : Message.value,
            status : "Null",
            id : uid,
            complete : false
        });
        var devicePlatform = device.platform;
        navigator.notification.alert('Pushed into database from a ' + devicePlatform + " Device Successfully" );

       // alert("Pushed Data into database Successfully");
    }



}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
